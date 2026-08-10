import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Expertise } from "@/components/sections/expertise";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { Principles } from "@/components/sections/principles";
import { SelectedWork } from "@/components/sections/selected-work";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <SelectedWork />
      <Experience />
      <Expertise />
      <Principles />
      <About />
      <Contact />
    </>
  );
}
