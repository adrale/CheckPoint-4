import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchProjects } from "@/app/lib/data";
import { Project, SideProjectProps } from "@/app/lib/definitions";
import Section from "@/app/ui/portfolio/section";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import wcs from "../../../public/assets/lwcs.svg";
import { MdArrowOutward } from "react-icons/md";
import { CiMail, CiLinkedin } from "react-icons/ci";;

export default function Status() {
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

  return (
    <Section className=" flex max-lg:flex-col items-start gap-4 pb-24">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2 ">
          <p className="text-lg text-muted-foreground">
            Mes projets avec les copains{" "}
          </p>
          <div className="flex flex-col gap-4">
            {projects?.map((project) => (
              <SideProject
                key={project.id}
                image_url={project.image_url}
                title={project.title}
                description={project.description}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] gap-4 flex flex-col w-full">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Formation</p>
          <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <Image
              src={wcs}
              className="rounded-full"
              width={28}
              height={28}
              alt="Logo Wild Code School"
            />
            <div>
              <p className="text-md font-semibold">Wild Code School</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground ">
                Titre professionnel (en cours): Développeur Web & Web Mobile
                RNCP niveau 5
              </p>
            </div>
          </div>
        </Card>
        <Card className="p-3 bg-accent/10 flex items-center gap-4">
          <p className="text-lg text-muted-foreground">Me contacter</p>
          <div className="m-auto">
            <p className="text-md font-semibold px-4">Mail</p>
            <div className="flex justify-around">
              <CiMail size={20}/>
              <Link href="mailto:alexandre.moro.24@gmail.com">
                <MdArrowOutward size={16} />
              </Link>
            </div>
          </div>
          <div className="m-auto">
            <p className="text-md font-semibold">Linkedin</p>
            <div className="flex justify-around">
            <CiLinkedin size={20} />
              <Link href="https://www.linkedin.com/in/alexandre-moro-adrale/">
                <MdArrowOutward size={16} />
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}

const SideProject = (props: SideProjectProps) => {
  return (
    <div className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <Image
        src={props.image_url}
        className="rounded-full"
        width={28}
        height={28}
        alt={`${props.title}'s project picture`}
      />
      <div>
        <p className=" w-[90px] text-lg font-semibold">{props.title}</p>
      </div>
      <div>
        <p className="text-sm text-muted-foreground ">{props.description}</p>
      </div>
    </div>
  );
};
