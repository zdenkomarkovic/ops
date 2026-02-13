import Link from "next/link";
import { content } from "@/constants/content";
import { FaCheckCircle } from "react-icons/fa";

const Values = () => {
  return (
    <section id="values" className="section-padding">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary-500 mb-6 md:mb-12">
          {content.values.title}
        </h2>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Values List */}
          <div className="p-4 md:p-12">
            <ul className="grid md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-8">
              {content.values.items.map((value, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle
                    className="text-secondary-500 mt-1 mr-4 flex-shrink-0"
                    size={24}
                  />
                  <span className="text-lg md:text-xl text-gray-800 font-semibold">
                    {value}
                  </span>
                </li>
              ))}
            </ul>

            {/* Message Section */}
            <div className="bg-secondary-500 text-white p-4 md:p-8 rounded-xl shadow-lg mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-center">
                {content.values.messageTitle}
              </h3>
              <p className="text-xl md:text-2xl italic text-center">
                {content.values.message}
              </p>
            </div>

            {/* Brand Statement */}
            <div className="bg-white/70 p-4 md:p-8 rounded-lg border-l-4 border-secondary-500">
              <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed text-center">
                {content.values.brandStatement}
              </p>
            </div>

            <div className="text-center mt-8">
              <Link href="/kontakt">
                <button className="bg-secondary-500 hover:bg-secondary-500/80 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                  Roditelji imate pitanje? Pišite nam
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
