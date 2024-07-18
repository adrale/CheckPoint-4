"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

import { createProject } from '@/app/lib/action';

import { Button } from "@/app/ui/button";

export default function Form() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formattedImageUrl = imageUrl.startsWith('/projects/') ? imageUrl : `/projects/${imageUrl}`
    if (!formattedImageUrl.endsWith('.svg')) {
      formattedImageUrl += '.svg';
    }


    try {
      const id = await createProject({ title, description, image_url: formattedImageUrl });
      router.push(`/dashboard/`);
    } catch (error) {
      console.error("Erreur lors de la création du projet :", error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Project Name */}
        <div className="mb-4">
          <label htmlFor="projectName" className="mb-2 block text-sm font-medium">
            Nom de projet
          </label>
          <input
            type="text"
            id="projectName"
            value={title}
            onChange={handleTitleChange}
            className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Entrez le nom du projet"
          />
        </div>
      </div>

      {/* Project Description */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="descriptionProject" className="mb-2 block text-sm font-medium">
            Description de projet
          </label>
          <input
            type="text"
            id="descriptionProject"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            placeholder="Entrez la description du projet"
          />
        </div>
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
          onChange={handleImageUrlChange}
          required
          className="w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          placeholder="Entrez la description du projet"
        />
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Annuler
        </Link>
        <Button type="submit">Créer le projet</Button>
      </div>
    </form>
  );
}
