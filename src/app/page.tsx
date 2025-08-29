"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users, Trophy, ChevronRight, Download, Mail, Instagram } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  
  const content = {
    fr: {
      hero: {
        subtitle: "Délégation française des arts martiaux philippins",
        button: "WSA European Championship 2025",
        buttonMobile: "Championship 2025"
      },
      wsa: {
        title: "WSA European Championship",
        subtitle: "World Sport Arnis",
        dates: "26-28 Septembre 2025",
        location1: "Centre Sportif - Rue Jean Rigaud",
        location2: "Écully 69130",
        days: "3 Jours",
        daysDesc: "Compétition internationale",
        countries: "Pays de l'UE",
        countriesDesc: "Junior & Senior",
        title2: "Titre Européen",
        titleDesc: "Médailles officielles",
        registrationOpen: "Inscriptions Ouvertes",
        registrationText: "Rejoignez cet événement exceptionnel et représentez votre pays",
        registerButton: "S'inscrire maintenant"
      },
      about: {
        title: "Qui sommes-nous",
        subtitle: "Délégation française dédiée au Kali, Eskrima & Arnis",
        description: "Nous représentons fièrement la France dans les compétitions nationales et internationales, tout en formant la nouvelle génération de champions.",
        competitions: "Compétitions",
        competitionsDesc: "Présence internationale et championnats européens",
        community: "Communauté",
        communityDesc: "Réseau national avec 5 clubs affiliés",
        training: "Formation",
        trainingDesc: "Stages mensuels et séminaires experts",
        disciplines: "DISCIPLINES",
        practitioners: "PRATIQUANTS",
        yearsExp: "ANNÉES D'EXPERTISE"
      },
      contact: {
        title: "Contact",
        subtitle: "Pour toute information sur l'événement 2025 ou pour nous rejoindre",
        ourDetails: "Nos coordonnées",
        registration: "Inscription Compétition - À renvoyer par email à fabricefousse29@orange.fr",
        registrationText: "Téléchargez le formulaire d'inscription pour participer au championnat européen 2025",
        downloadButton: "Télécharger le formulaire PDF",
        socialText: "Suivez-nous sur les réseaux sociaux pour rester informé",
        emailInfo: "Pour toute information, contactez-nous :",
        formSubmitInfo: "Le formulaire d'inscription complété doit être envoyé à :",
        emailContact: "Email : fabricefousse29@orange.fr",
        instagramContact: "Instagram : @francestickfighting",
        pdfFile: "WSA-European-Championship-2025-Inscription-FR.pdf"
      }
    },
    en: {
      hero: {
        subtitle: "French delegation of Philippine martial arts",
        button: "WSA European Championship 2025",
        buttonMobile: "Championship 2025"
      },
      wsa: {
        title: "WSA European Championship",
        subtitle: "World Sport Arnis",
        dates: "September 26-28, 2025",
        location1: "Sports Center - Rue Jean Rigaud",
        location2: "Écully 69130",
        days: "3 Days",
        daysDesc: "International competition",
        countries: "EU Countries",
        countriesDesc: "Junior & Senior",
        title2: "European Title",
        titleDesc: "Official medals",
        registrationOpen: "Registration Open",
        registrationText: "Join this exceptional event and represent your country",
        registerButton: "Register now"
      },
      about: {
        title: "About us",
        subtitle: "French delegation dedicated to Kali, Eskrima & Arnis",
        description: "We proudly represent France in national and international competitions, while training the next generation of champions.",
        competitions: "Competitions",
        competitionsDesc: "International presence and European championships",
        community: "Community",
        communityDesc: "National network with 5 affiliated clubs",
        training: "Training",
        trainingDesc: "Monthly workshops and expert seminars",
        disciplines: "DISCIPLINES",
        practitioners: "PRACTITIONERS",
        yearsExp: "YEARS OF EXPERTISE"
      },
      contact: {
        title: "Contact",
        subtitle: "For any information about the 2025 event or to join us",
        ourDetails: "Our details",
        registration: "Competition Registration - To be sent by email to fabricefousse29@orange.fr",
        registrationText: "Download the registration form to participate in the 2025 European Championship",
        downloadButton: "Download PDF form",
        socialText: "Follow us on social media to stay informed",
        emailInfo: "For any information, contact us:",
        formSubmitInfo: "The completed registration form must be sent to:",
        emailContact: "Email: fabricefousse29@orange.fr",
        instagramContact: "Instagram: @francestickfighting",
        pdfFile: "WSA-European-Championship-2025-Inscription-EN.pdf"
      }
    }
  };
  
  const t = content[language];
  
  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Fond avec gradient tricolore */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--france-bleu)] via-white to-[var(--france-rouge)]" />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 text-center px-4 max-w-7xl mx-auto flex flex-col items-center">
            <div className="mb-4 flex justify-center relative">
              {/* Gradient overlay lumineux autour du logo */}
              <div className="absolute -inset-20 bg-gradient-to-r from-[var(--france-bleu)] via-white to-[var(--france-rouge)] opacity-70 blur-3xl animate-pulse" />
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="France Stick Fighting"
                  width={500}
                  height={500}
                  className="drop-shadow-2xl relative z-10 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px]"
                  priority
                />
              </div>
            </div>
            
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-6xl font-black mb-4 tracking-tight">
                <span className="text-white">KALI</span>
                <span className="text-[var(--or-light)] mx-1 sm:mx-2 md:mx-3">•</span>
                <span className="text-white">ESKRIMA</span>
                <span className="text-[var(--or-light)] mx-1 sm:mx-2 md:mx-3">•</span>
                <span className="text-white">ARNIS</span>
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-2xl text-white mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            <a
              href="#evenement"
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 overflow-hidden rounded-full bg-white text-[var(--france-bleu)] font-bold text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[var(--france-bleu)] via-white to-[var(--france-rouge)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              <span className="relative flex items-center">
                <span className="hidden sm:inline">{t.hero.button}</span>
                <span className="sm:hidden">{t.hero.buttonMobile}</span>
                <ChevronRight className="ml-2 sm:ml-3 transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </span>
            </a>
          </div>
        </section>

        {/* WSA Championship Section - Déplacé avant Qui sommes-nous */}
        <section id="evenement" className="py-32 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            {/* Box principale avec fond coloré */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-sm p-12 text-white">
              {/* Titre */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t.wsa.title}
                </h2>
                <p className="text-base text-gray-300 mb-6">{t.wsa.subtitle}</p>
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <p className="text-xl font-bold text-[var(--or-light)]">{t.wsa.dates}</p>
                  <p className="text-sm text-gray-300 mt-1">{t.wsa.location1}</p>
                  <p className="text-sm text-gray-300">{t.wsa.location2}</p>
                </div>
              </div>
              
              {/* Cartes info */}
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Calendar className="text-[var(--or-light)] mx-auto mb-3" size={28} />
                  <h3 className="text-base font-bold mb-1">{t.wsa.days}</h3>
                  <p className="text-xs text-gray-300">{t.wsa.daysDesc}</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Users className="text-[var(--or-light)] mx-auto mb-3" size={28} />
                  <h3 className="text-base font-bold mb-1">{t.wsa.countries}</h3>
                  <p className="text-xs text-gray-300">{t.wsa.countriesDesc}</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <Trophy className="text-[var(--or-light)] mx-auto mb-3" size={28} />
                  <h3 className="text-base font-bold mb-1">{t.wsa.title2}</h3>
                  <p className="text-xs text-gray-300">{t.wsa.titleDesc}</p>
                </div>
              </div>
              
              {/* Formulaire d'inscription */}
              <div className="border-t border-white/20 pt-8">
                <div className="text-center mb-8">
                  <p className="text-lg font-bold mb-4">{t.wsa.registrationOpen}</p>
                  <p className="text-sm text-gray-300 mb-6 max-w-2xl mx-auto">
                    {t.wsa.registrationText}
                  </p>
                </div>
                
                {/* Zone de téléchargement du formulaire */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-bold text-[var(--or-light)] mb-4">
                    {t.contact.registration}
                  </h3>
                  <p className="text-sm text-gray-300 mb-6">
                    {t.contact.registrationText}
                  </p>
                  <a 
                    href={`/${t.contact.pdfFile}`} 
                    download={t.contact.pdfFile}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-[var(--or-light)] hover:bg-[var(--or-default)] text-gray-900 font-semibold text-sm rounded transition-all"
                  >
                    <Download className="mr-2" size={16} />
                    {t.contact.downloadButton}
                  </a>
                </div>
                
                {/* Informations de contact */}
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-4">
                    {t.contact.emailInfo}
                  </p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6">
                    <div className="flex items-center gap-2">
                      <Mail className="text-[var(--or-light)]" size={20} />
                      <p className="text-sm md:text-base font-semibold text-[var(--or-light)]">
                        fabricefousse29@orange.fr
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Instagram className="text-[var(--or-light)]" size={20} />
                      <p className="text-sm md:text-base font-semibold text-[var(--or-light)]">
                        @francestickfighting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qui sommes-nous Section - Déplacé après WSA */}
        <section id="qui-sommes-nous" className="py-32 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            {/* Box principale */}
            <div className="bg-white rounded-lg shadow-sm p-12">
              {/* Titre */}
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--france-bleu)]">
                {t.about.title}
              </h2>
              
              {/* Contenu principal */}
              <div className="text-center mb-12">
                <p className="text-lg text-gray-700 font-semibold mb-4">
                  {t.about.subtitle}
                </p>
                <p className="text-base text-gray-600 max-w-3xl mx-auto">
                  {t.about.description}
                </p>
              </div>
              
              {/* Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Trophy className="text-[var(--or-default)] mx-auto mb-4" size={32} />
                  <h4 className="text-lg font-bold text-gray-800">{t.about.competitions}</h4>
                  <p className="text-sm text-gray-600 mt-2">{t.about.competitionsDesc}</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Users className="text-[var(--or-default)] mx-auto mb-4" size={32} />
                  <h4 className="text-lg font-bold text-gray-800">{t.about.community}</h4>
                  <p className="text-sm text-gray-600 mt-2">{t.about.communityDesc}</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Calendar className="text-[var(--or-default)] mx-auto mb-4" size={32} />
                  <h4 className="text-lg font-bold text-gray-800">{t.about.training}</h4>
                  <p className="text-sm text-gray-600 mt-2">{t.about.trainingDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
}
