"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Početna", href: "/" },
    { name: "O udruženju", href: "/o-nama" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image
              src="/images/logo.webp"
              alt="OPS Logo"
              width={60}
              height={60}
              className="h-16 w-auto"
            />
            <div className="hidden lg:block">
              <div className="text-gray-900 font-bold text-lg leading-tight">
                OPS
              </div>
              <div className="text-gray-600 text-xs">
                Od prvog pokreta do prvog skoka
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors relative py-2 ${
                  isActive(item.href)
                    ? "text-primary-600"
                    : "text-gray-700 hover:text-primary-600"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-1 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium px-4 py-3 rounded transition-colors ${
                    isActive(item.href)
                      ? "bg-primary-50 text-primary-600"
                      : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
