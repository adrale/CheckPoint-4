"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchProjects } from "@/app/lib/data";
import { Project } from "@/app/lib/definitions";
import { UpdateProject, DeleteProject } from "./buttons";

export default function Table() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getProjects() {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData);
      } catch (error) {
        setError("Erreur lors de la récupération des projets.");
      }
    }

    getProjects();
  }, []);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="min-w-full text-gray-900">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Projets
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {projects?.map((project) => (
                <tr
                  key={project.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace py-3 pl-2 pr-3">
                    <div className="flex items-center gap-2">
                      <Image
                        src={project.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${project.title}'s project picture`}
                      />
                      <p>{project.title}</p>
                    </div>
                  </td>
                  <td className="whitespace px-3 py-3">
                    {project.description}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-2 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateProject id={project.id} />
                      <DeleteProject id={project.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
