'use client';

import Header from "@/app/ui/portfolio/Header";
import Hero from "@/app/ui/portfolio/Hero";
import Status from "@/app/ui/portfolio/Status";
import Technologies from "@/app/ui/portfolio/Technologies";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero/>
      <Technologies/>
      <h2 className="my-20 text-center text-4xl m-auto">Projets</h2>
      <Status/>
    </main>
  );
}
