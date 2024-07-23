import Image from "next/image";
import Section from "@/app/ui/portfolio/section";
import profilePic from "../../../public/assets/profilepic26.jpg";

export default function Hero() {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary">Alexandre Moro</h2>
        <h3 className="font-caption text-3xl text-primary">
          Développeur Web & Web Mobile
        </h3>
        <p>
          Après une carrière dans la restauration d’une dizaine d’années, je me
          dirige avec passion vers le secteur du développement web. Fort d&rsquo;une
          motivation et d&rsquo;une soif d&rsquo;apprendre, je suis à la recherche d&rsquo;une
          alternance de 15 mois à partir du 29 Juillet 2024 pour acquérir des
          compétences en Java et Angular. Mon objectif est de maîtriser ce
          puissant framework front-end et d&rsquo;apprendre Java, afin de devenir un
          développeur full-stack compétent et polyvalent.
        </p>
      </div>
      <div className="flex-[2] max-lg:m-auto ml-auto">
        <Image
          src={profilePic}
          alt="Photo Alexandre Moro"
          width={200}
          height={300}
          className="rounded-full"
        />
      </div>
    </Section>
  );
}
