import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { blogDetailQuery, blogListQuery } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import { FaCalendarAlt, FaUser, FaArrowLeft } from "react-icons/fa";

export const revalidate = 60;

type BlogPost = {
  _id: string;
  naslov: string;
  slug: { current: string };
  kratakOpis?: string;
  sadrzaj?: unknown[];
  autor?: string;
  datumObjave?: string;
  slika?: string;
};

export async function generateStaticParams() {
  if (!client) return [];
  const postovi: BlogPost[] = await client.fetch(blogListQuery);
  return postovi.map((p) => ({ slug: p.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!client) return { title: "Blog | OPS Udruženje" };
  const post: BlogPost | null = await client.fetch(blogDetailQuery, { slug: params.slug });
  if (!post) return { title: "Blog | OPS Udruženje" };
  const canonical = `https://udruzenjeops.rs/blog/${post.slug.current}`;
  return {
    title: post.naslov,
    description: post.kratakOpis,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title: post.naslov,
      description: post.kratakOpis,
      type: 'article',
      ...(post.slika ? { images: [{ url: post.slika, alt: post.naslov }] } : {}),
    },
  };
}

function formatDate(iso?: string) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("sr-RS", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  if (!client) notFound();

  const post: BlogPost | null = await client.fetch(blogDetailQuery, { slug: params.slug });
  if (!post) notFound();

  return (
    <main className="pt-24 pb-16">
      <div className="container-custom px-4 max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors text-sm font-medium mb-8"
        >
          <FaArrowLeft size={12} />
          Svi tekstovi
        </Link>

        {post.slika && (
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img
              src={post.slika}
              alt={post.naslov}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        )}

        <div className="flex items-center gap-5 text-sm text-gray-400 mb-4">
          {post.datumObjave && (
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt size={12} />
              {formatDate(post.datumObjave)}
            </span>
          )}
          {post.autor && (
            <span className="flex items-center gap-1.5">
              <FaUser size={12} />
              {post.autor}
            </span>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {post.naslov}
        </h1>

        {post.kratakOpis && (
          <p className="text-lg text-gray-500 leading-relaxed mb-8 border-l-4 border-primary-300 pl-4">
            {post.kratakOpis}
          </p>
        )}

        {post.sadrzaj && (post.sadrzaj as unknown[]).length > 0 && (
          <div className="prose prose-gray prose-lg max-w-none text-gray-700 leading-relaxed">
            <PortableText
              value={post.sadrzaj as Parameters<typeof PortableText>[0]["value"]}
              components={{
                types: {
                  image: ({ value }) =>
                    value?.asset?.url ? (
                      <img
                        src={value.asset.url}
                        alt={value.alt ?? ""}
                        className="rounded-xl shadow-md my-6 w-full"
                      />
                    ) : null,
                },
              }}
            />
          </div>
        )}
      </div>
    </main>
  );
}
