import { client } from "@/sanity/client";
import { edukacijeMomentiQuery } from "@/sanity/queries";
import Edukacije from "@/components/Edukacije";

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string };

type SanityEdukacija = {
  _id: string;
  title: string;
  datum: string;
  coverImage?: string;
  media: MediaItem[];
};

export default async function EdukacijeWrapper() {
  let sanityEdukacije: SanityEdukacija[] = [];

  try {
    if (client) {
      sanityEdukacije = await client.fetch(edukacijeMomentiQuery);
    }
  } catch {
    // Sanity nije konfigurisan
  }

  const mapped = sanityEdukacije.map((edu) => ({
    title: edu.title,
    date: edu.datum,
    coverImage: edu.coverImage,
    media: (edu.media ?? []).filter((m) => m.src),
  }));

  return <Edukacije sanityEdukacije={mapped} />;
}
