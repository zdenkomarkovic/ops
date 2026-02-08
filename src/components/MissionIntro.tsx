import { content } from "@/constants/content";

const MissionIntro = () => {
  return (
    <section id="mission-intro" className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="container-custom max-w-5xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-700 mb-8">
          {content.missionIntro.title}
        </h2>

        {/* Intro */}
        <p className="text-lg md:text-xl text-gray-700 text-center mb-12 leading-relaxed">
          {content.missionIntro.intro}
        </p>

        {/* Key Message - Highlighted */}
        <div className="bg-primary-500 text-white p-8 md:p-12 rounded-2xl shadow-2xl mb-12 text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 italic">
            "{content.missionIntro.keyMessage}"
          </p>
        </div>

        {/* Philosophy */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg mb-8">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            {content.missionIntro.philosophy}
          </p>

          {/* Approach */}
          <h3 className="text-2xl md:text-3xl font-semibold text-primary-700 mb-6">
            {content.missionIntro.approachTitle}
          </h3>
          <ul className="space-y-4">
            {content.missionIntro.approachItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary-500 text-2xl mr-4 font-bold">•</span>
                <span className="text-lg md:text-xl text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionIntro;
