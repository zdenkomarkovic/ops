import { content } from "@/constants/content";

const Mission = () => {
  return (
    <section id="mission" className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-primary-50 p-8 md:p-10 rounded-lg shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">
              {content.mission.title}
            </h2>
            <div className="space-y-4">
              {content.mission.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="bg-beige-50 p-8 md:p-10 rounded-lg shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold text-beige-700 mb-6">
              {content.vision.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              {content.vision.intro}
            </p>
            <div className="space-y-3">
              {content.vision.items.map((item, index) => (
                <p key={index} className="text-gray-700 leading-relaxed text-base">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
