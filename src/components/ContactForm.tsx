"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Greška prilikom slanja poruke. Molimo pokušajte ponovo.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-xl shadow-xl">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
        Pošaljite nam poruku
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Ime i prezime <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Vaše ime i prezime"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="vasa@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="+381 60 123 4567"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Poruka <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            placeholder="Vaša poruka..."
          />
        </div>

        {/* Status Message */}
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? "Šalje se..." : "Pošalji poruku"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
