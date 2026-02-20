import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/sanity/client";
import { kursListQuery } from "@/sanity/queries";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaChalkboardTeacher,
  FaArrowRight,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Kursevi – OPS | Edukacija za fizioterapeute",
  description:
    "Kursevi i edukacije iz oblasti ranog razvoja, motornog razvoja, tortikolisa, hipertonusa i hipotonusa. Stručno usavršavanje za fizioterapeute, radne terapeute i ostale profesionalce.",
  keywords: [
    "edukacija za fizioterapeuta",
    "kursevi fizioterapija",
    "rani razvoj",
    "motorni razvoj",
    "tortikolis",
    "hipertonus",
    "hipotonus",
    "Bobath terapeut",
    "senzorna integracija kurs",
  ],
  alternates: {
    canonical: "https://udruzenjeops.rs/kursevi",
  },
  openGraph: {
    url: "https://udruzenjeops.rs/kursevi",
    title: "Kursevi – OPS | Edukacija za fizioterapeute",
    description:
      "Kursevi i edukacije iz oblasti ranog razvoja, motornog razvoja, tortikolisa, hipertonusa i hipotonusa.",
  },
};

export const revalidate = 60;

type Termin = { datumOd?: string; datumDo?: string; mesto?: string };

type Kurs = {
  _id: string;
  naziv: string;
  slug: { current: string };
  kratakOpis?: string;
  termini?: Termin[];
  cena?: number;
  trajanje?: string;
  maxPolaznika?: number;
  predavac?: string;
  slika?: string;
};

function formatDate(iso?: string) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("sr-RS", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatPeriod(t: Termin) {
  if (t.datumOd && t.datumDo) return `${formatDate(t.datumOd)} – ${formatDate(t.datumDo)}`;
  if (t.datumOd) return formatDate(t.datumOd);
  return null;
}

export default async function KurseviPage() {
  let kursevi: Kurs[] = [];

  try {
    if (client) {
      kursevi = await client.fetch(kursListQuery);
    }
  } catch {
    // Project ID not configured yet
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container-custom px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kursevi i edukacije
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Nadolazeći kursevi iz oblasti ranog razvoja, fizioterapije i
            psihomotornog razvoja.
          </p>
        </div>

        {kursevi.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl">Trenutno nema dostupnih kurseva.</p>
            <p className="text-sm mt-2">Pratite nas za najave novih termina.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kursevi.map((kurs) => (
              <Link
                key={kurs._id}
                href={`/kursevi/${kurs.slug.current}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
              >
                {/* Cover image */}
                {kurs.slika ? (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={kurs.slika}
                      alt={kurs.naziv}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center">
                    <FaChalkboardTeacher className="text-white/50" size={48} />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {kurs.naziv}
                  </h2>

                  {kurs.kratakOpis && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {kurs.kratakOpis}
                    </p>
                  )}

                  {/* Termini – show first two */}
                  {kurs.termini && kurs.termini.length > 0 && (
                    <ul className="space-y-1.5 text-sm text-gray-600 mb-4">
                      {kurs.termini.slice(0, 2).map((t, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <FaCalendarAlt
                            className="text-primary-500 flex-shrink-0 mt-0.5"
                            size={12}
                          />
                          <span>
                            {formatPeriod(t)}
                            {t.mesto && (
                              <span className="text-gray-400"> · {t.mesto}</span>
                            )}
                          </span>
                        </li>
                      ))}
                      {kurs.termini.length > 2 && (
                        <li className="text-primary-500 text-xs font-medium pl-5">
                          + još {kurs.termini.length - 2} termina
                        </li>
                      )}
                    </ul>
                  )}

                  {/* Other details */}
                  <ul className="space-y-1.5 text-sm text-gray-600 mb-4 flex-1">
                    {kurs.trajanje && (
                      <li className="flex items-center gap-2">
                        <FaClock className="text-primary-500 flex-shrink-0" size={12} />
                        <span>{kurs.trajanje}</span>
                      </li>
                    )}
                    {kurs.maxPolaznika && (
                      <li className="flex items-center gap-2">
                        <FaUsers className="text-primary-500 flex-shrink-0" size={12} />
                        <span>Max. {kurs.maxPolaznika} polaznika</span>
                      </li>
                    )}
                    {kurs.predavac && (
                      <li className="flex items-center gap-2">
                        <FaChalkboardTeacher className="text-primary-500 flex-shrink-0" size={12} />
                        <span>{kurs.predavac}</span>
                      </li>
                    )}
                  </ul>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    {kurs.cena ? (
                      <span className="text-lg font-bold text-primary-700">
                        {kurs.cena.toLocaleString("sr-RS")} RSD
                      </span>
                    ) : (
                      <span className="text-sm text-gray-400">Cena na upit</span>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-primary-600 text-sm font-semibold group-hover:gap-2.5 transition-all">
                      Više info
                      <FaArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
