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

export const blogListQuery = groq`
  *[_type == "blogPost" && prikazati == true] | order(datumObjave desc) {
    _id,
    naslov,
    slug,
    kratakOpis,
    autor,
    datumObjave,
    "slika": slika.asset->url,
  }
`;

export const blogDetailQuery = groq`
  *[_type == "blogPost" && slug.current == $slug && prikazati == true][0] {
    _id,
    naslov,
    slug,
    kratakOpis,
    sadrzaj,
    autor,
    datumObjave,
    "slika": slika.asset->url,
  }
`;

export const edukacijeMomentiQuery = groq`
  *[_type == "edukacijaMoment"] | order(redosled desc, _createdAt desc) {
    _id,
    title,
    datum,
    "coverImage": coverImage.asset->url,
    "media": mediji[] {
      "type": select(_type == "medijaSlika" => "image", _type == "medijaVideo" => "video"),
      "src": select(
        _type == "medijaSlika" => slika.asset->url,
        _type == "medijaVideo" => video.asset->url
      ),
      "alt": select(_type == "medijaSlika" => alt, "")
    }
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
