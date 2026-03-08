import { content } from "@/constants/content";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary-500/5">
      <div className="container-custom max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-secondary-500 mb-10 md:mb-16">
          {content.testimonials.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.testimonials.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 border-t-4 border-secondary-500"
            >
              <FaQuoteLeft className="text-secondary-500 opacity-30" size={32} />
              <p className="text-gray-700 leading-relaxed italic flex-1">
                "{item.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{item.author}</p>
                <p className="text-sm text-secondary-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
