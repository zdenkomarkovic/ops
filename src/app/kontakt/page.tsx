import Contact from "@/components/Contact";

export const metadata = {
  title: "Kontakt – OPS | Rani razvoj i edukacija za fizioterapeute",
  description:
    "Kontaktirajte udruženje OPS za informacije o edukacijama za fizioterapeute, kursevima iz ranog razvoja, motornog razvoja i tretmanu tortikolisa, hipertonusa i hipotonusa.",
  keywords: [
    "kontakt",
    "rani razvoj",
    "edukacija za fizioterapeuta",
    "tortikolis",
    "hipertonus",
    "hipotonus",
    "motorni razvoj",
  ],
  alternates: {
    canonical: "https://udruzenjeops.rs/kontakt",
  },
  openGraph: {
    url: "https://udruzenjeops.rs/kontakt",
    title: "Kontakt – OPS | Rani razvoj i edukacija za fizioterapeute",
    description:
      "Kontaktirajte udruženje OPS za informacije o edukacijama za fizioterapeute i kursevima iz ranog razvoja.",
  },
};

export default function KontaktPage() {
  return (
    <>
      <Contact />
    </>
  );
}
