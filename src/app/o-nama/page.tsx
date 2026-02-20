import type { Metadata } from "next";
import About from "@/components/About";
import AboutImages from "@/components/AboutImages";
import Mission from "@/components/Mission";
import Biography from "@/components/Biography";
import HippocraticOath from "@/components/HippocraticOath";
import EtickiKodeks from "@/components/EtickiKodeks";

export const metadata: Metadata = {
  title: "O nama – OPS | Udruženje za rani razvoj deteta",
  description:
    "Saznajte više o udruženju OPS – timu stručnjaka posvećenih ranom razvoju dece, edukaciji fizioterapeuta i tretmanu tortikolisa, hipertonusa i hipotonusa. Emocionalno siguran pristup svakom detetu.",
  keywords: [
    "o nama",
    "rani razvoj",
    "edukacija za fizioterapeuta",
    "tortikolis",
    "hipertonus",
    "hipotonus",
    "motorni razvoj",
    "Bobath terapija",
    "fizioterapeut za bebe",
  ],
  alternates: {
    canonical: "https://udruzenjeops.rs/o-nama",
  },
  openGraph: {
    url: "https://udruzenjeops.rs/o-nama",
    title: "O nama – OPS | Udruženje za rani razvoj deteta",
    description:
      "Saznajte više o udruženju OPS – timu stručnjaka posvećenih ranom razvoju dece, edukaciji fizioterapeuta i tretmanu tortikolisa, hipertonusa i hipotonusa.",
  },
};

export default function ONamaPage() {
  return (
    <>
      <About />;
      <Mission />
      <Biography />
      <HippocraticOath />
      <EtickiKodeks />
      <AboutImages />
    </>
  );
}
