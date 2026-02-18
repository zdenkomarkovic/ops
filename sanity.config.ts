import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";

export default defineConfig({
  name: "ops-studio",
  title: "OPS - Upravljanje sadržajem",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Sadržaj")
          .items([
            S.listItem()
              .title("Kursevi")
              .child(S.documentTypeList("kurs").title("Kursevi")),
            S.listItem()
              .title("Blog")
              .child(S.documentTypeList("blogPost").title("Blog")),
            S.listItem()
              .title("Momenti sa edukacija")
              .child(S.documentTypeList("edukacijaMoment").title("Momenti sa edukacija")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
