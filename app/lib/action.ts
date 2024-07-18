"use server";

import { sql } from "@vercel/postgres";
import { NewProject, Project } from "./definitions";

export async function createProject(project: NewProject) {
  try {
    const image_url = ''
    const result = await sql`
      INSERT INTO projects (title, description, image_url)
      VALUES (${project.title}, ${project.description}, ${project.image_url})
      RETURNING id
    `;

    const id = result.rows[0].id;
    return id;
  } catch (error) {
    console.error("Erreur lors de la création du projet :", error);
    throw new Error("Échec de la création du projet.");
  }
}

export async function updateProject(id: string, project: Project) {
  try {
    const result = await sql`
      UPDATE projects
      SET title = ${project.title}, description = ${project.description}, image_url = ${project.image_url}
      WHERE id = ${id}
      RETURNING id
    `;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du projet :", error);
    throw new Error("Échec de la mise à jour du projet.");
  }
}

export async function deleteProject(id: string) {
  try {
    const result = await sql`
      DELETE FROM projects
      WHERE id = ${id}
      RETURNING id
    `;
  } catch (error) {
    console.error("Erreur lors de la suppression du projet :", error);
    throw new Error("Échec de la suppression du projet.");
  }
}