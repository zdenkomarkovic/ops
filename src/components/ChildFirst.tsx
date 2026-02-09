import { content } from "@/constants/content";

const ChildFirst = () => {
  return (
    <section
      id="child-first"
      className="section-padding bg-gradient-to-b from-secondary-50 to-white"
    >
      <div className="container-custom max-w-5xl">
        {/* Title */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-2">
            {content.childFirst.title}
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-gray-700">
            {content.childFirst.subtitle}
          </p>
        </div>

        {/* Checklist Items */}
        <div className="bg-white p-4 md:p-12 rounded-2xl shadow-xl mb-6 md:mb-12">
          <ul className="space-y-1 md:space-y-6">
            {content.childFirst.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 text-xl md:text-2xl mr-4 font-bold flex-shrink-0">
                  ✔
                </span>
                <span className="text-lg md:text-2xl text-gray-700 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Messages */}
        <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
          <div className="bg-primary-500 text-white p-4 md:p-8 rounded-xl shadow-lg text-center">
            <p className="text-xl md:text-3xl font-bold italic">
              {content.childFirst.keyMessage}
            </p>
          </div>

          <div className="bg-beige-500 text-white p-4 md:p-8 rounded-xl shadow-lg text-center">
            <p className="text-xl md:text-2xl font-semibold">
              {content.childFirst.secondaryMessage}
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gray-50 border-l-4 border-primary-500 p-4 md:p-8 rounded-lg">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic">
            {content.childFirst.closing}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChildFirst;
