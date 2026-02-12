import { defineField, defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "kurs",
  title: "Kurs",
  type: "document",
  fields: [
    defineField({
      name: "naziv",
      title: "Naziv kursa",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "naziv", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slika",
      title: "Slika kursa",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "kratakOpis",
      title: "Kratak opis",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "opis",
      title: "Detaljan opis",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "termini",
      title: "Termini",
      description: "Dodajte jedan ili više termina kursa (datum i mesto).",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "termin",
          title: "Termin",
          fields: [
            defineField({
              name: "datumOd",
              title: "Datum od",
              type: "date",
              options: { dateFormat: "DD.MM.YYYY" },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "datumDo",
              title: "Datum do",
              type: "date",
              options: { dateFormat: "DD.MM.YYYY" },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "mesto",
              title: "Mesto održavanja",
              type: "string",
              placeholder: "npr. Beograd, Online...",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { datumOd: "datumOd", datumDo: "datumDo", mesto: "mesto" },
            prepare({ datumOd, datumDo, mesto }) {
              const fmt = (d: string) =>
                new Date(d).toLocaleDateString("sr-RS", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                });
              const period =
                datumOd && datumDo
                  ? `${fmt(datumOd)} – ${fmt(datumDo)}`
                  : datumOd
                    ? fmt(datumOd)
                    : "Bez datuma";
              return {
                title: mesto || "Bez mesta",
                subtitle: period,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "cena",
      title: "Cena (RSD)",
      type: "number",
    }),
    defineField({
      name: "trajanje",
      title: "Trajanje",
      type: "string",
      placeholder: "npr. 2 dana, 8 sati",
    }),
    defineField({
      name: "maxPolaznika",
      title: "Maksimalan broj polaznika",
      type: "number",
    }),
    defineField({
      name: "predavac",
      title: "Predavač",
      type: "string",
    }),
    defineField({
      name: "aktivan",
      title: "Prikazati na sajtu",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "naziv",
      media: "slika",
      datum0: "termini.0.datumOd",
    },
    prepare({ title, media, datum0 }) {
      return {
        title,
        media,
        subtitle: datum0
          ? new Date(datum0).toLocaleDateString("sr-RS", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
          : "Bez termina",
      };
    },
  },
});
