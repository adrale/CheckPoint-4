import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import { users } from "../lib/placeholder-data";

async function seedUsers() {
  const client = await db.connect();
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        name text NOT NULL,
        email text NOT NULL,
        password text NOT NULL,
        created_at timestamptz NOT NULL DEFAULT now()
      );
    `;

    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
          INSERT INTO users (id, name, email, password)
          VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    return insertedUsers;
  } finally {
    client.release();
  }
}

export async function GET() {
  try {
    await seedUsers();
    return new Response("Users seeded successfully", { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
