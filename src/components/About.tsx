import Image from "next/image";
import { content } from "@/constants/content";

const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-br from-primary-50 to-white"
    >
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          {content.about.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {content.about.content}
            </p>
          </div>

          {/* Images Grid */}
        </div>
      </div>
    </section>
  );
};

export default About;
