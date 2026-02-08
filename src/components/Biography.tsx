import Image from "next/image";
import { content } from "@/constants/content";

const Biography = () => {
  return (
    <section id="biography" className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <div className="container-custom max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-700 mb-12">
          {content.biography.title}
        </h2>

        {/* Main Grid - Image and Content */}
        <div className="grid md:grid-cols-[35%_65%] gap-8 md:gap-12 mb-12">
          {/* Left - Image */}
          <div className="flex flex-col items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-4 w-full">
              <Image
                src="/images/president.webp"
                alt="Biografija"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-lg text-gray-600 text-center font-semibold">
              {content.biography.birthInfo}
            </p>
          </div>

          {/* Right - Education Content */}
          <div className="space-y-8">
            {/* Formal Education */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">
                {content.biography.formalEducation.title}
              </h3>
              <div className="space-y-6">
                {content.biography.formalEducation.items.map((item, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <p className="text-sm text-gray-500 font-semibold mb-1">
                      {item.period}
                    </p>
                    <p className="text-lg font-semibold text-gray-800 mb-1">
                      {item.institution}
                    </p>
                    <p className="text-base text-primary-600 font-medium mb-1">
                      Stečeno zvanje: {item.degree}
                    </p>
                    {item.thesis && (
                      <p className="text-sm text-gray-600 italic">
                        Diplomski rad: {item.thesis}
                      </p>
                    )}
                    {item.grade && (
                      <p className="text-sm text-gray-600">{item.grade}</p>
                    )}
                    {item.note && (
                      <p className="text-sm text-gray-600">{item.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Informal Education - Full Width */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">
            {content.biography.informalEducation.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {content.biography.informalEducation.items.map((item, index) => (
              <div key={index} className="flex items-start">
                <span className="text-primary-500 mr-3 mt-1 flex-shrink-0">•</span>
                <p className="text-sm md:text-base text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="bg-beige-50 p-6 md:p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-beige-700 mb-6">
            Stručni radovi
          </h3>
          <div className="space-y-3">
            {content.biography.publications.map((pub, index) => (
              <div key={index} className="flex items-start">
                <span className="text-beige-600 mr-3 mt-1 flex-shrink-0 text-xl">📄</span>
                <p className="text-base md:text-lg text-gray-700">{pub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
