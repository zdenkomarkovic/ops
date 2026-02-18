import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "edukacijaMoment",
  title: "Momenti sa edukacija",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Naslov kartice",
      type: "string",
      initialValue: "Edukacija",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "datum",
      title: "Datum (npr. Oktobar 2025)",
      type: "string",
      description: "Unesite mesec i godinu, npr. 'Oktobar 2025'.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Naslovna slika (cover)",
      type: "image",
      options: { hotspot: true },
      description: "Opciono. Ako se ne postavi, kartica će prikazati ikonu za video.",
    }),
    defineField({
      name: "mediji",
      title: "Mediji (slike i video snimci)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "medijaSlika",
          title: "Slika",
          fields: [
            defineField({
              name: "slika",
              title: "Slika",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "alt",
              title: "Opis slike (alt tekst)",
              type: "string",
            }),
          ],
          preview: {
            select: { title: "alt", media: "slika" },
          },
        }),
        defineArrayMember({
          type: "object",
          name: "medijaVideo",
          title: "Video",
          fields: [
            defineField({
              name: "video",
              title: "Video fajl",
              type: "file",
              options: { accept: "video/*" },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {},
            prepare() {
              return { title: "Video snimak" };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "redosled",
      title: "Redosled prikaza",
      type: "number",
      description: "Veći broj = prikazuje se pre. Npr. 100 za najnovije, 1 za najstarije.",
    }),
  ],
  preview: {
    select: {
      title: "datum",
      subtitle: "title",
      media: "coverImage",
    },
  },
});
