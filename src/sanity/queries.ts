import { groq } from "next-sanity";

export const kursListQuery = groq`
  *[_type == "kurs" && aktivan == true] | order(termini[0].datum asc) {
    _id,
    naziv,
    slug,
    kratakOpis,
    termini,
    cena,
    trajanje,
    maxPolaznika,
    predavac,
    "slika": slika.asset->url,
  }
`;

export const kursDetailQuery = groq`
  *[_type == "kurs" && slug.current == $slug][0] {
    _id,
    naziv,
    slug,
    kratakOpis,
    opis,
    termini,
    cena,
    trajanje,
    maxPolaznika,
    predavac,
    "slika": slika.asset->url,
  }
`;
