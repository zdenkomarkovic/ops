import type { Metadata } from "next";
import Hero from "@/components/Hero";
import MissionIntro from "@/components/MissionIntro";
import ChildFirst from "@/components/ChildFirst";
import Approach from "@/components/Approach";
import Values from "@/components/Values";
import President from "@/components/President";
import MembershipForm from "@/components/MembershipForm";
import Gallery from "@/components/Gallery";
import Education from "@/components/Education";
import EdukacijeWrapper from "@/components/EdukacijeWrapper";

export const metadata: Metadata = {
  title: "OPS – Od prvog pokreta do prvog skoka | Rani razvoj i edukacija",
  description:
    "Udruženje OPS pruža podršku ranom razvoju deteta i organizuje edukacije za fizioterapeute. Bavimo se motornim razvojem, tortikolisom, hipertonusom i hipotonusom – sa poštovanjem deteta i saradnjom sa roditeljima.",
  keywords: [
    "rani razvoj",
    "rani razvoj deteta",
    "motorni razvoj",
    "edukacija za fizioterapeuta",
    "tortikolis",
    "hipertonus",
    "hipotonus",
    "fizioterapija za bebe",
    "Bobath terapija",
    "senzorna integracija",
  ],
  alternates: {
    canonical: "https://udruzenjeops.rs",
  },
  openGraph: {
    url: "https://udruzenjeops.rs",
    title: "OPS – Od prvog pokreta do prvog skoka | Rani razvoj i edukacija",
    description:
      "Udruženje OPS pruža podršku ranom razvoju deteta i organizuje edukacije za fizioterapeute. Bavimo se motornim razvojem, tortikolisom, hipertonusom i hipotonusom.",
  },
};

export const revalidate = 60;

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
      <MembershipForm />
      <EdukacijeWrapper />
      <Gallery />
    </>
  );
}
