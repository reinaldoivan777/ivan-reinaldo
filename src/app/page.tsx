import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Metrics } from "@/components/sections/metrics";
import { SelectedWork } from "@/components/sections/selected-work";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <SelectedWork />
      <Experience />
    </>
  );
}
