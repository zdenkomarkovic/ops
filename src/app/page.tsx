import Hero from "@/components/Hero";
import MissionIntro from "@/components/MissionIntro";
import ChildFirst from "@/components/ChildFirst";
import Approach from "@/components/Approach";
import Values from "@/components/Values";
import President from "@/components/President";
import Gallery from "@/components/Gallery";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionIntro />
      <ChildFirst />

      <Approach />

      <Education />
      <Values />
      <President />
      <Gallery />
      <Contact />
    </>
  );
}
