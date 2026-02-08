import { content } from '@/constants/content';
import { FaCheckCircle } from 'react-icons/fa';

const WhyDifferent = () => {
  return (
    <section id="why-different" className="section-padding text-gray-900">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12">
          {content.whyDifferent.title}
        </h2>

        {/* Items List */}
        <div className="max-w-4xl mx-auto mb-12">
          <ul className="space-y-4">
            {content.whyDifferent.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <FaCheckCircle className="mt-1 mr-3 flex-shrink-0 text-beige-200" size={20} />
                <span className="text-lg leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Focus Statement */}
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg max-w-3xl mx-auto text-center">
          <p className="text-2xl font-semibold whitespace-pre-line">
            {content.whyDifferent.focus}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
