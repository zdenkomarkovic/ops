"use client";

import { useState } from "react";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Ime i prezime je obavezno";
    if (!formData.email.trim()) {
      newErrors.email = "Email je obavezan";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Unesite validnu email adresu";
    }
    if (!formData.phone.trim()) newErrors.phone = "Telefon je obavezan";
    if (!formData.profession.trim()) newErrors.profession = "Zanimanje je obavezno";
    if (!formData.consent) newErrors.consent = "Saglasnost je obavezna";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/uclanjenje", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({
          name: "",
          email: "",
          phone: "",
          profession: "",
          consent: false,
        });
        setErrors({});
      } else {
        setStatus({ type: "error", message: data.error });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Greška prilikom slanja zahteva. Molimo pokušajte ponovo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls = (field: string) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-300"
    }`;

  return (
    <section id="uclanjenje" className="section-padding bg-beige-100">
      <div className="container-custom max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Učlani se u udruženje
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Pridruži se zajednici stručnjaka posvećenih ranom motornom razvoju
            dece. Popuni formu i naš tim će te kontaktirati sa svim detaljima o
            članstvu.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Ime i prezime */}
            <div>
              <label
                htmlFor="m-name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Ime i prezime <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="m-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputCls("name")}
                placeholder="Vaše ime i prezime"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="m-email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="m-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputCls("email")}
                placeholder="vasa@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Telefon */}
            <div>
              <label
                htmlFor="m-phone"
                className="block text-gray-700 font-semibold mb-2"
              >
                Telefon <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="m-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputCls("phone")}
                placeholder="+381 60 123 4567"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Zanimanje */}
            <div>
              <label
                htmlFor="m-profession"
                className="block text-gray-700 font-semibold mb-2"
              >
                Zanimanje / Struka <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="m-profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className={inputCls("profession")}
                placeholder="npr. Fizioterapeut, Defektolog, Pedijatar..."
              />
              {errors.profession && (
                <p className="text-red-500 text-sm mt-1">{errors.profession}</p>
              )}
            </div>

            {/* Saglasnost */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 accent-primary-500 flex-shrink-0"
                />
                <span className="text-gray-700 text-sm leading-relaxed">
                  Saglasan/na sam sa obradom mojih ličnih podataka u svrhu
                  obrade zahteva za članstvo u udruženju OPS, u skladu sa
                  zakonom o zaštiti podataka o ličnosti.{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.consent && (
                <p className="text-red-500 text-sm mt-1">{errors.consent}</p>
              )}
            </div>

            {/* Status */}
            {status.message && (
              <div
                className={`p-4 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}
              >
                {status.message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Šalje se..." : "Pošalji zahtev za članstvo"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MembershipForm;
