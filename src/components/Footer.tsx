'use client';

import Image from 'next/image';
import Link from 'next/link';
import { content } from '@/constants/content';
import { FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.webp"
                alt="OPS Logo"
                width={80}
                height={80}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed text-sm">
              Od prvog pokreta do prvog skoka - Udruženje za podršku ranom razvoju deteta
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Brzi linkovi</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Početna
                </Link>
              </li>
              <li>
                <Link
                  href="/o-nama"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <FaEnvelope className="mt-1 mr-2 flex-shrink-0 text-primary-400" />
                <a href={`mailto:${content.contact.email}`} className="hover:text-primary-400 transition-colors break-all">
                  {content.contact.email}
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 flex-shrink-0 text-primary-400" />
                <a href={`tel:${content.contact.phone}`} className="hover:text-primary-400 transition-colors">
                  {content.contact.phone}
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0 text-primary-400" />
                <span>{content.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4">Pratite nas</h4>
            <div className="flex space-x-4">
              <a
                href={content.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-lg hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href={content.contact.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 p-3 rounded-lg hover:scale-110 transition-transform"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} OPS - Od prvog pokreta do prvog skoka. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
