import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "naslov",
      title: "Naslov",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "naslov", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slika",
      title: "Naslovna slika",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "kratakOpis",
      title: "Kratak opis",
      description: "Prikazuje se na listi blog postova.",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "sadrzaj",
      title: "Sadržaj",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt tekst",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "autor",
      title: "Autor",
      type: "string",
    }),
    defineField({
      name: "datumObjave",
      title: "Datum objave",
      type: "date",
      options: { dateFormat: "DD.MM.YYYY" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "prikazati",
      title: "Prikazati na sajtu",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "naslov",
      media: "slika",
      datum: "datumObjave",
    },
    prepare({ title, media, datum }) {
      return {
        title,
        media,
        subtitle: datum
          ? new Date(datum).toLocaleDateString("sr-RS", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          : "Bez datuma",
      };
    },
  },
});
