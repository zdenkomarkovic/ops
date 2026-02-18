import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/client";
import { blogListQuery } from "@/sanity/queries";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Blog - OPS",
  description: "Stručni tekstovi i saveti iz oblasti ranog razvoja deteta.",
};

export const revalidate = 60;

type BlogPost = {
  _id: string;
  naslov: string;
  slug: { current: string };
  kratakOpis?: string;
  autor?: string;
  datumObjave?: string;
  slika?: string;
};

function formatDate(iso?: string) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("sr-RS", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  let postovi: BlogPost[] = [];

  try {
    if (client) {
      postovi = await client.fetch(blogListQuery);
    }
  } catch {
    // Sanity nije konfigurisan
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container-custom px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Stručni tekstovi, saveti i iskustva iz oblasti ranog razvoja deteta.
          </p>
        </div>

        {postovi.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl">Još uvek nema objavljenih tekstova.</p>
            <p className="text-sm mt-2">Pratite nas uskoro.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postovi.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
              >
                {post.slika ? (
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.slika}
                      alt={post.naslov}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                ) : (
                  <div className="h-52 bg-gradient-to-br from-primary-600 to-primary-400" />
                )}

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    {post.datumObjave && (
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt size={11} />
                        {formatDate(post.datumObjave)}
                      </span>
                    )}
                    {post.autor && (
                      <span className="flex items-center gap-1.5">
                        <FaUser size={11} />
                        {post.autor}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                    {post.naslov}
                  </h2>

                  {post.kratakOpis && (
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
                      {post.kratakOpis}
                    </p>
                  )}

                  <span className="inline-flex items-center gap-1.5 text-primary-600 text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all">
                    Pročitaj više
                    <FaArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
