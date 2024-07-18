import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FaGithub, } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import Section from "@/app/ui/portfolio/section";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">Alexandre Moro</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href="https://github.com/adrale"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
            href="https://www.linkedin.com/in/alexandre-moro-adrale/"
          >
            <CiLinkedin size={20} />
          </Link>
        </ul>
      </Section>
    </header>
  );
}
