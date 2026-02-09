import Image from "next/image";
import { content } from "@/constants/content";
import { FaCheckCircle } from "react-icons/fa";

const Approach = () => {
  return (
    <section id="approach" className="section-padding">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary-500 mb-6 md:mb-12">
          {content.approach.title}
        </h2>

        {/* Intro */}
        <div className="max-w-5xl mx-auto mb-6 md:mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            {content.approach.intro}
          </p>
        </div>

        {/* Approach Section */}
        <div className="bg-white p-4 md:p-10 rounded-lg shadow-lg max-w-5xl mx-auto mb-6 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-500 mb-4 md:mb-6">
            {content.approach.approachTitle}
          </h3>
          <ul className="space-y-2 md:space-y-4">
            {content.approach.approachItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle
                  className="text-secondary-500 mt-1 mr-3 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 text-base md:text-xl leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice Section */}
        <div className="bg-white p-4 md:p-10 rounded-lg shadow-lg max-w-5xl mx-auto mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary-500 mb-4">
            {content.approach.practiceTitle}
          </h3>
          <p className="text-lg text-gray-600 mb-4 md:mb-6 italic">
            {content.approach.practiceIntro}
          </p>
          <ul className="space-y-2 md:space-y-4">
            {content.approach.practiceItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle
                  className="text-secondary-500 mt-1 mr-3 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 text-base md:text-xl leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/2.webp"
            alt="Terapijski pristup"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Approach;
