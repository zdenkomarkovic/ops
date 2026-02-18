"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: "Početna", href: "/" },
    { name: "O udruženju", href: "/o-nama" },
    { name: "Kursevi", href: "/kursevi" },
    { name: "Blog", href: "/blog" },
    { name: "Statut", href: "/statut" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleUclanjenje = () => {
    setIsOpen(false);
    if (pathname === "/") {
      const element = document.querySelector("#uclanjenje");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/#uclanjenje");
    }
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 py-1 md:py-2">
      <div className="container-custom px-4  ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo.webp"
                alt="OPS Logo"
                width={60}
                height={60}
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) =>
              item.href.startsWith("#") ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
            <button
              onClick={handleUclanjenje}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition-all duration-200 hover:scale-105"
            >
              Učlani se
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) =>
                item.href.startsWith("#") ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-left px-4 py-2 hover:bg-primary-50 rounded"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-primary-600 transition-colors font-medium text-left px-4 py-2 hover:bg-primary-50 rounded block"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <button
                onClick={handleUclanjenje}
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-4 py-3 rounded-lg shadow transition-all duration-200 text-left"
              >
                Učlani se
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
