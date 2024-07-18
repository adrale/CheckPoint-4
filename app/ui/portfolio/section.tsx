'use client';

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{ className?: string }>;

export default function Section(props: SectionProps) {
  return (
    <section className={cn("max-w-2xl px-4 mx-auto", props.className)}>
      {props.children}
    </section>
  );
}
