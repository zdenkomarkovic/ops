"use client";

import Image from "next/image";
import { content } from "@/constants/content";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="h-screen flex items-center bg-gradient-to-b from-secondary-500 via-secondary-500/30 to-transparent pt-20"
    >
      <div className="container-custom w-full">
        <div className=" mx-auto">
          {/* Hero Grid - Image and Content */}
          <div className="grid md:grid-cols-[42%_58%] items-center mb-4 md:mb-8 gap-6 md:gap-8">
            {/* Left - Content */}
            <div className="text-center md:text-left">
              {/* Main Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-6">
                {content.hero.title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-2xl text-gray-700 mb-3 md:mb-6 leading-tight font-semibold">
                {content.hero.subtitle}
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
                {content.hero.description}
              </p>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Kontaktirajte nas
              </button>
            </div>

            {/* Right - Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl max-h-64 md:max-h-none">
              <Image
                src="/images/7.webp"
                alt="Rani razvoj deteta"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
