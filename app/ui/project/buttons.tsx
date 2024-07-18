import Link from "next/link";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { deleteProject } from "@/app/lib/action";

export function CreateProject() {
  return (
    <Link
      href="/dashboard/projects/create"
      className="flex h-10 items-center rounded-lg bg-secondary-foreground px-4 text-sm font-medium text-secondary transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Créer Projet</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateProject({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/projects/${id}/edit`}
      className="flex h-10 items-center rounded-lg bg-secondary-foreground px-4 text-sm font-medium text-secondary transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Modifier Projet</span>{" "}
      <PencilIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function DeleteProject( { id }: { id: string }) {
  const deleteProjectWithId = deleteProject.bind(null, id)
  return (
    <form action={deleteProjectWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Supprimer projet</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
