import bcrypt from "bcrypt";
import { db } from "@vercel/postgres";
import { users, projects, technos } from "../lib/placeholder-data";

const client = await db.connect();

async function seedUsers() {
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

async function seedProjects() {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS projects (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    const insertedProjects = await Promise.all(
      projects.map((project) => client.sql`
        INSERT INTO projects (id, title, description, image_url)
        VALUES (${project.id}, ${project.title}, ${project.description}, ${project.image_url})
        ON CONFLICT (id) DO NOTHING;
      `)
    );

    return insertedProjects;
  } finally {
    client.release();
  }
}

async function seedTechnos() {

  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS technos (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    const insertedTechnos = await Promise.all(
      technos.map((techno) => client.sql`
        INSERT INTO technos (id, name, image_url)
        VALUES (${techno.id}, ${techno.name}, ${techno.image_url})
        ON CONFLICT (id) DO NOTHING;
      `)
    );

    return insertedTechnos;
  } finally {
    client.release();
  }
}
