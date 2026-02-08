import Image from 'next/image';

const Gallery = () => {
  const images = [
    { src: '/images/6.webp', alt: 'Rad sa bebama' },
    { src: '/images/8.webp', alt: 'Podrška razvoju' },
  ];

  return (
    <section id="gallery" className="section-padding ">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Galerija
        </h2>

        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Pogledajte kako radimo sa bebama i malom decom kroz emocionalno orijentisan pristup.
        </p>

        {/* Images Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
