import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { kursDetailQuery, kursListQuery } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaChalkboardTeacher,
  FaArrowLeft,
  FaEnvelope,
} from "react-icons/fa";
import PrijavaForm from "@/components/PrijavaForm";

export const revalidate = 60;

type Termin = { datumOd?: string; datumDo?: string; mesto?: string };

type Kurs = {
  _id: string;
  naziv: string;
  slug: { current: string };
  kratakOpis?: string;
  opis?: unknown[];
  termini?: Termin[];
  cena?: number;
  trajanje?: string;
  maxPolaznika?: number;
  predavac?: string;
  slika?: string;
};

export async function generateStaticParams() {
  if (!client) return [];
  const kursevi: Kurs[] = await client.fetch(kursListQuery);
  return kursevi.map((k) => ({ slug: k.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!client) return { title: "Kurs - OPS" };
  const kurs: Kurs | null = await client.fetch(kursDetailQuery, {
    slug: params.slug,
  });
  if (!kurs) return { title: "Kurs - OPS" };
  return {
    title: `${kurs.naziv} - OPS`,
    description: kurs.kratakOpis,
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

function formatPeriod(t: Termin) {
  if (t.datumOd && t.datumDo)
    return `${formatDate(t.datumOd)} – ${formatDate(t.datumDo)}`;
  if (t.datumOd) return formatDate(t.datumOd);
  return "Datum TBD";
}

export default async function KursPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!client) notFound();

  const kurs: Kurs | null = await client.fetch(kursDetailQuery, {
    slug: params.slug,
  });

  if (!kurs) notFound();

  const contactEmail = "vezbezabebe@gmail.com";

  return (
    <main className="pt-24 pb-16">
      <div className="container-custom px-4 max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/kursevi"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 transition-colors text-sm font-medium mb-8"
        >
          <FaArrowLeft size={12} />
          Svi kursevi
        </Link>

        {/* Hero image */}
        {kurs.slika && (
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img
              src={kurs.slika}
              alt={kurs.naziv}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {kurs.naziv}
            </h1>

            {kurs.kratakOpis && (
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {kurs.kratakOpis}
              </p>
            )}

            {kurs.opis && (kurs.opis as unknown[]).length > 0 && (
              <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
                <PortableText
                  value={
                    kurs.opis as Parameters<typeof PortableText>[0]["value"]
                  }
                />
              </div>
            )}

            {/* Termini – full list in main content */}
            {kurs.termini && kurs.termini.length > 0 && (
              <div className="mt-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Termini
                </h2>
                <ul className="space-y-3">
                  {kurs.termini.map((t, i) => (
                    <li
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 bg-primary-50 rounded-xl px-5 py-4"
                    >
                      <span className="flex items-center gap-2 text-gray-800 font-medium">
                        <FaCalendarAlt
                          className="text-primary-500 flex-shrink-0"
                          size={14}
                        />
                        {formatPeriod(t)}
                      </span>
                      {t.mesto && (
                        <span className="flex items-center gap-2 text-gray-600 text-sm">
                          <FaMapMarkerAlt
                            className="text-primary-400 flex-shrink-0"
                            size={13}
                          />
                          {t.mesto}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sticky top-28">
              {/* Price */}
              {kurs.cena ? (
                <div className="text-center mb-6 pb-6 border-b border-gray-100">
                  <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">
                    Cena
                  </p>
                  <p className="text-3xl font-bold text-primary-700">
                    {kurs.cena.toLocaleString("sr-RS")}
                    <span className="text-base font-normal text-gray-500 ml-1">
                      RSD
                    </span>
                  </p>
                </div>
              ) : null}

              {/* Quick info */}
              <ul className="space-y-3 text-sm text-gray-600 mb-6">
                {kurs.termini && kurs.termini.length > 0 && (
                  <li className="flex items-start gap-3">
                    <FaCalendarAlt
                      className="text-primary-500 mt-0.5 flex-shrink-0"
                      size={14}
                    />
                    <span>
                      {kurs.termini.length === 1
                        ? "1 termin"
                        : `${kurs.termini.length} termina`}
                    </span>
                  </li>
                )}
                {kurs.trajanje && (
                  <li className="flex items-center gap-3">
                    <FaClock
                      className="text-primary-500 flex-shrink-0"
                      size={14}
                    />
                    <span>{kurs.trajanje}</span>
                  </li>
                )}
                {kurs.maxPolaznika && (
                  <li className="flex items-center gap-3">
                    <FaUsers
                      className="text-primary-500 flex-shrink-0"
                      size={14}
                    />
                    <span>Max. {kurs.maxPolaznika} polaznika</span>
                  </li>
                )}
                {kurs.predavac && (
                  <li className="flex items-center gap-3">
                    <FaChalkboardTeacher
                      className="text-primary-500 flex-shrink-0"
                      size={14}
                    />
                    <span>{kurs.predavac}</span>
                  </li>
                )}
              </ul>
            </div>
          </aside>
        </div>

        {/* Prijava forma */}
        <div className="mt-12">
          <PrijavaForm nazivKursa={kurs.naziv} termini={kurs.termini} />
        </div>
      </div>
    </main>
  );
}
