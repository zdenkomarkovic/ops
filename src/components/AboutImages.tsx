import React from "react";
import Image from "../../node_modules/next/image";

const AboutImages = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-xl overflow-hidden shadow-xl">
        <Image
          src="/images/3.webp"
          alt="Rad sa decom"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="rounded-xl overflow-hidden shadow-xl">
        <Image
          src="/images/4.webp"
          alt="Podrška porodicama"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutImages;
