const lines = [
  "U času kada stupam među članove lekarske profesije svečano obećavam da ću svoj život staviti u službu humanosti.",
  "Prema svojim učiteljima sačuvaću dužnu zahvalnost i poštovanje.",
  "Svoj poziv ću obavljati savesno i dostojanstveno.",
  "Najveća briga će mi biti zdravlje mog bolesnika.",
  "Poštovaću tajne onoga ko mi se poveri.",
  "Održavaću svim svojim silama čast i plemenite tradicije lekarskog zvanja.",
  "Moje kolege će biti moja braća i sestre.",
  "U vršenju dužnosti prema bolesniku neće na mene uticati nikakvi obziri, etničko poreklo, rod, vera, nacionalnost, rasa, seksualna orijentacija, politička ili klasna pripadnost.",
  "Apsolutno ću poštovati ljudski život od samog početka.",
  "I pod pretnjom neću popustiti da se iskoriste moja medicinska znanja, suprotna zakonima humanosti.",
  "Ovo obećavam svečano, slobodno pozivajući se na svoju čast.",
];

const HippocraticOath = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hipokratova zakletva
          </h2>
        </div>

        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Decorative top bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400" />

          <div className="p-8 md:p-12">
            {/* Large decorative quote mark */}
            <div
              className="text-primary-200 font-serif leading-none select-none mb-4"
              style={{ fontSize: "6rem", lineHeight: 1 }}
              aria-hidden="true"
            >
              &ldquo;
            </div>

            <ol className="space-y-4">
              {lines.map((line, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed text-base md:text-lg italic">
                    {line}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Decorative bottom bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400" />
        </div>
      </div>
    </section>
  );
};

export default HippocraticOath;
