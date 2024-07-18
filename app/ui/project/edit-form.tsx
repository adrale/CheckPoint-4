"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Project } from "@/app/lib/definitions";
import { updateProject } from "@/app/lib/action";
import { Button } from "@/app/ui/button";

type FormProps = {
  project: Project;
};

export default function Form({ project }: FormProps) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formattedImageUrl = imageUrl.startsWith('/projects/') ? imageUrl : `/projects/${imageUrl}`
    if (!formattedImageUrl.endsWith('.svg')) {
      formattedImageUrl += '.svg';
    }

    try {
      const updatedProject: Project = {
        ...project,
        title,
        description,
        image_url: formattedImageUrl,
      };

      await updateProject(project.id, updatedProject);
      router.push("/dashboard");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du projet :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Project Name */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6 mb-6">
        <label htmlFor="title" className="mb-2 block text-sm font-medium">
          Nom de projet
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          placeholder="Entrez le nom du projet"
        />
      </div>

      {/* Project Description */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6 mb-6">
        <label htmlFor="description" className="mb-2 block text-sm font-medium">
          Description de projet
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          placeholder="Entrez la description du projet"
        />
      </div>

      {/* Project picture */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6 mb-6">
        <label htmlFor="imageUrl" className="mb-2 block text-sm font-medium">
          Logo du projet
        </label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          placeholder="Entrez la description du projet"
        />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Annuler
        </Link>
        <Button type="submit">Mettre à jour le projet</Button>
      </div>
    </form>
  );
}
