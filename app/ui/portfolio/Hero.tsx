import Image from "next/image";
import Section from "@/app/ui/portfolio/section";
import profilePic from "../../../public/assets/am.jpg";

export default function Hero() {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary">Alexandre Moro</h2>
        <h3 className="font-caption text-3xl text-primary">Fullstack Developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          hic dolor dolore doloremque maxime quae, fuga molestiae ex quod
          numquam inventore odio molestias consequatur fugit? Perferendis velit
          architecto cum expedita. Debitis consectetur, ea voluptatem soluta
          vitae nemo nostrum quidem nisi optio veniam sequi hic sapiente eaque
          quod, earum ducimus. Odio a accusamus repellendus atque explicabo,
          maxime alias iste perferendis omnis.
        </p>
      </div>
      <div className="flex-[2] max-lg:m-auto ml-auto">
      <Image src={profilePic} alt="Photo Alexandre Moro" width={200} height={300} className="max-w-sm rounded-full max-md:w-56"  />
      </div>
    </Section>
  );
}
