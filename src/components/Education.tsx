import Image from "next/image";
import { content } from "@/constants/content";
import { FaCheckCircle } from "react-icons/fa";

const Education = () => {
  return (
    <section
      id="education"
      className="section-padding bg-gradient-to-b from-secondary-50 to-white"
    >
      <div className="container-custom max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary-500 mb-6 md:mb-12">
          {content.education.title}
        </h2>

        {/* Intro Paragraphs */}
        <div className="max-w-4xl mx-auto mb-6 md:mb-12 space-y-3 md:space-y-6">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            {content.education.intro1}
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
            {content.education.intro2}
          </p>
        </div>

        {/* Practice Items */}
        <div className="bg-white p-4 md:p-10 rounded-xl shadow-lg mb-6 md:mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-500 mb-4 md:mb-8 text-center">
            {content.education.practiceTitle}
          </h3>
          <ul className="space-y-2 md:space-y-6 max-w-3xl mx-auto">
            {content.education.practiceItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle
                  className="text-primary-500 mt-1 mr-4 flex-shrink-0"
                  size={24}
                />
                <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/5.webp"
            alt="Edukacija i razvoj"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
