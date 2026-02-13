import Link from "next/link";
import { content } from "@/constants/content";

const MissionIntro = () => {
  return (
    <section
      id="mission-intro"
      className="section-padding bg-gradient-to-b from-white to-secondary-50"
    >
      <div className="container-custom max-w-5xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary-500 mb-8">
          {content.missionIntro.title}
        </h2>

        {/* Intro */}
        <p className="text-lg md:text-xl text-gray-700 text-center mb-6 md:mb-12 leading-tight md:leading-relaxed">
          {content.missionIntro.intro}
        </p>

        {/* Key Message - Highlighted */}
        <div className="bg-secondary-500 text-white p-4 md:p-12 rounded-2xl shadow-2xl mb-6 md:mb-12 text-center">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold md:mb-2 italic">
            "{content.missionIntro.keyMessage}"
          </p>
        </div>

        {/* Philosophy */}
        <div className="bg-white p-4 md:p-10 rounded-xl shadow-lg md:mb-8">
          <p className="text-lg md:text-xl text-gray-700  leading-tight md:leading-relaxed mb-4 md:mb-8">
            {content.missionIntro.philosophy}
          </p>

          {/* Approach */}
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4 md:mb-6">
            {content.missionIntro.approachTitle}
          </h3>
          <ul className="space-y-2 md:space-y-4">
            {content.missionIntro.approachItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-secondary-500 text-2xl mr-4 font-bold">
                  •
                </span>
                <span className="text-lg md:text-xl text-gray-700  leading-tight md:leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="text-center mt-8">
            <Link href="/kontakt">
              <button className="bg-secondary-500 hover:bg-secondary-500/80 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Roditelji imate pitanje? Pišite nam
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionIntro;
