"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

interface NavbarProps {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    fr: [
      { href: "#evenement", label: "WSA Championship" },
    ],
    en: [
      { href: "#evenement", label: "WSA Championship" },
    ],
  };

  return (
    <nav className="fixed top-0 w-full z-50 shadow-md">
      {/* Desktop version - fond noir */}
      <div className="hidden md:block relative h-20 bg-black">
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-center">
          {/* Titre et coq centré */}
          <Link href="/" className="flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/coq.jpeg"
              alt="Coq France"
              width={50}
              height={50}
              className="object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-white text-center">
                France Stick Fighting
              </h1>
              <p className="text-sm text-[var(--or-default)] text-center">
                Kali • Eskrima • Arnis
              </p>
            </div>
          </Link>

          {/* Navigation à droite */}
          <div className="flex items-center ml-auto">
            <a
              href="#evenement"
              className="text-white hover:text-[var(--or-default)] transition-colors font-semibold text-lg mx-4"
            >
              {navItems[language][0].label}
            </a>
            
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="flex items-center space-x-1 text-white hover:text-[var(--or-default)] transition-colors ml-6"
            >
              <Globe size={20} />
              <span className="font-semibold text-lg">{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile version - fond noir */}
      <div className="md:hidden bg-black">
        <div className="flex justify-between items-center h-20 px-4">
          {/* Titre et coq centré */}
          <Link href="/" className="flex-1 flex justify-center items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/coq.jpeg"
                alt="Coq France"
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-white">
                  France Stick Fighting
                </h1>
                <p className="text-xs text-[var(--or-default)] text-center">
                  Kali • Eskrima • Arnis
                </p>
              </div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems[language].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setLanguage(language === "fr" ? "en" : "fr");
                setIsMenuOpen(false);
              }}
              className="flex items-center space-x-2 w-full px-3 py-2 text-white hover:bg-gray-800 rounded-md"
            >
              <Globe size={18} />
              <span>{language === "fr" ? "English" : "Français"}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
