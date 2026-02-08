import Image from "next/image";
import Link from "next/link";
import { content } from "@/constants/content";

const President = () => {
  const publications = [
    'Koautor stručnog rada: "Primena krioterapije kod fraktura"',
    'Koautor stručnog rada: "Psihomotorni razvoj deteta - uloga lekara i fizioterapeuta u primarnoj zdravstvenoj zaštiti"',
    'Autor rada: "Uloga fizioterapeuta u psihofizičkoj pripremi trudnica"',
    'AUTOR KURSA stimulacija motornog razvoja u prvoj godini života, akreditovan od zdravstvenog saveta Srbije'
  ];

  return (
    <section id="president" className="section-padding">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Predsednica udruženja
        </h2>

        <div className="bg-gradient-to-br from-beige-50 to-primary-50 rounded-lg shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="md:flex items-center p-8 md:p-12">
            {/* Photo */}
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <Image
                src="/images/president.webp"
                alt="Jelena Despotović"
                width={280}
                height={280}
                className="rounded-full object-cover mx-auto shadow-xl"
              />
            </div>

            {/* Intro */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {content.president.name}
              </h3>
              <p className="text-xl text-primary-700 mb-4 font-semibold">
                {content.president.title}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {content.president.intro}
              </p>
            </div>
          </div>

          {/* Publications Section */}
          <div className="px-8 md:px-12 pb-8">
            <div className="bg-white/70 p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Odabrani stručni radovi
              </h4>
              <ul className="space-y-3">
                {publications.map((pub, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1 flex-shrink-0 text-xl">📄</span>
                    <span className="text-gray-700 text-base md:text-lg">{pub}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Biography Button */}
            <div className="text-center">
              <Link href="/o-nama#biography">
                <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                  Pogledaj detaljnu biografiju
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default President;
