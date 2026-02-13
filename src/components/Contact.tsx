import { content } from "@/constants/content";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-white to-secondary-50"
    >
      <div className="container-custom max-w-6xl pt-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          {content.contact.title}
        </h2>

        <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
          {content.contact.description}
        </p>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <FaEnvelope className="text-primary-500 mx-auto mb-4" size={40} />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <a
              href={`mailto:${content.contact.email}`}
              className="text-primary-500 hover:text-primary-700 hover:underline break-all"
            >
              {content.contact.email}
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <FaPhone className="text-primary-500 mx-auto mb-4" size={40} />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Telefon</h3>
            <a
              href={`tel:${content.contact.phone}`}
              className="text-primary-500 hover:text-primary-700 hover:underline"
            >
              {content.contact.phone}
            </a>
          </div>

          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
            <FaMapMarkerAlt
              className="text-primary-500 mx-auto mb-4"
              size={40}
            />
            <h3 className="text-lg font-bold text-gray-900 mb-2">Lokacija</h3>
            <p className="text-gray-700">{content.contact.address}</p>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href={content.contact.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gradient-to-br from-purple-600 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <FaInstagram size={24} />
            <span className="font-semibold">Instagram</span>
          </a>
          <a
            href={content.contact.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <FaYoutube size={24} />
            <span className="font-semibold">YouTube</span>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
