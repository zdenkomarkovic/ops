import Image from "next/image";

const Gallery = () => {
  const images = [
    { src: "/images/6.webp", alt: "Rad sa bebama" },
    { src: "/images/8.webp", alt: "Podrška razvoju" },
  ];

  return (
    <section id="gallery" className="section-padding ">
      <div className="container-custom">
        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-8  mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
