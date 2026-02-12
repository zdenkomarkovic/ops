import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";

const EtickiKodeks = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <div className="bg-gradient-to-br from-primary-50 to-white border border-primary-100 rounded-2xl shadow-md p-8 md:p-10 flex flex-col sm:flex-row items-center gap-6">
          {/* Icon */}
          <div className="flex-shrink-0 bg-primary-100 text-primary-700 rounded-2xl p-5">
            <FaFilePdf size={40} />
          </div>

          {/* Text */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs uppercase tracking-widest text-primary-500 font-semibold mb-1">
              Dokument
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Etički kodeks
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Komore medicinskih sestara i zdravstvenih tehničara Srbije
            </p>
          </div>

          {/* Button */}
          <a
            href="/images/etickikodeks.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
          >
            Otvori PDF
            <FaExternalLinkAlt size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EtickiKodeks;
