import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[var(--france-bleu)] via-white to-[var(--france-rouge)] text-center">
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo et titre centrés */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-[var(--or-light)] mb-4">
            France Stick Fighting
          </h3>
          <p className="text-xl text-white mb-2">
            Délégation française de Kali Eskrima Arnis
          </p>
          <p className="text-gray-200">
            Promouvoir et développer les arts martiaux philippins en France
          </p>
        </div>

        {/* Contact centré */}
        <div className="mb-12">
          <div className="flex justify-center items-center mb-6">
            <Mail className="text-[var(--or-light)] mr-2" size={20} />
            <a href="mailto:fabricefousse29@orange.fr" className="text-white hover:text-[var(--or-light)] text-lg">
              fabricefousse29@orange.fr
            </a>
          </div>
          
          {/* Instagram uniquement */}
          <div className="flex justify-center items-center">
            <a 
              href="https://instagram.com/francestickfighting" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-[var(--or-light)] transition-colors"
            >
              <Instagram size={28} className="mr-2" />
              <span className="text-lg">@francestickfighting</span>
            </a>
          </div>
        </div>

        {/* Partenaire centré avec logo */}
        <div className="mb-8 pb-8 border-b border-white/30">
          <h4 className="text-xl font-bold text-[var(--or-light)] mb-4">
            Partenaire officiel
          </h4>
          <a 
            href="https://prohibe-knives.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/prohibe-logo.png"
              alt="Prohibe Knives"
              width={200}
              height={100}
              className="object-contain bg-white rounded-lg px-4 py-2 mb-2"
            />
            <span className="text-white hover:text-[var(--or-light)] transition-colors flex items-center">
              <Globe size={16} className="mr-2" />
              prohibe-knives.com
            </span>
          </a>
        </div>

        {/* Copyright centré */}
        <div className="text-gray-200">
          <p>© 2025 France Stick Fighting. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
