'use server'

import { sql } from "@vercel/postgres";
import { User, Project } from "./definitions";

export async function fetchUsers() {
  try { 
    const result = await sql<User>`SELECT * FROM users`;
    return result.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch projects.");
  }
}


export async function fetchProjects() {
  try {
    const result = await sql<Project>`SELECT * FROM projects;`;
    return result.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch projects.");
  }
}

export async function fetchProjectById(id: string) {
  try {
    const result = await sql<Project>`SELECT * FROM projects WHERE id = ${id};`;
    return result.rows[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch project.");
  }
}
// export async function fetchTechnos() {
//   const client = await db.connect();
//   try {
//     const result = await client.sql`SELECT * FROM technos;`;
//     return result.rows;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("Failed to fetch technos.");
//   }
// }
