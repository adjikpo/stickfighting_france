"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Users, Trophy, ChevronRight, ExternalLink, Instagram } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  
  const content = {
    fr: {
      hero: {
        subtitle: "Délégation française des arts martiaux philippins",
        button: "Résultats WSA 2025",
        buttonMobile: "Résultats WSA"
      },
      wsa: {
        title: "WSA European Championship",
        subtitle: "World Sport Arnis",
        dates: "27-28 Septembre 2025",
        location1: "Centre Sportif - Rue Jean Rigaud",
        location2: "Écully 69130",
        days: "2 Jours",
        daysDesc: "Compétition internationale",
        countries: "Pays de l'UE",
        countriesDesc: "Junior & Senior",
        title2: "Titre Européen",
        titleDesc: "Médailles officielles",
        registrationOpen: "Inscriptions Ouvertes",
        registrationText: "Rejoignez cet événement exceptionnel et représentez votre pays",
        registerButton: "S'inscrire maintenant",
        rulesButton: "Règles officielles WSA",
        rulesInfo: "Consultez le règlement complet de la compétition",
        noticeTitle: "Saison 2025 terminée",
        noticeText: "La saison européenne 2025 est terminée. 2026 sera une saison mondiale."
      },
      about: {
        title: "Qui sommes-nous",
        subtitle: "Délégation française dédiée au Kali, Eskrima & Arnis",
        description: "Nous représentons fièrement la France dans les compétitions nationales et internationales, tout en formant la nouvelle génération de champions.",
        competitions: "Compétitions",
        competitionsDesc: "",
        community: "Communauté",
        communityDesc: "",
        training: "Stages & Formations",
        trainingDesc: "",
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
      },
      articles: {
        title: "Articles",
        subtitle: "Dernières actualités",
        card1Title: "Résultats officiels",
        card1Desc: "Consultez les classements et podiums du WSA European Open 2025.",
        card1Link: "/resultats",
        card2Title: "Tous nos articles",
        card2Desc: "Retrouvez nos annonces, comptes rendus et informations.",
        card2Link: "/blog",
        card3Title: "Photos & Stories",
        card3Desc: "Suivez-nous sur Instagram pour voir les moments forts.",
        card3Link: "https://instagram.com/francestickfighting"
      }
    },
    en: {
      hero: {
        subtitle: "French delegation of Philippine martial arts",
        button: "WSA Results 2025",
        buttonMobile: "WSA Results"
      },
      wsa: {
        title: "WSA European Championship",
        subtitle: "World Sport Arnis",
        dates: "September 27-28, 2025",
        location1: "Sports Center - Rue Jean Rigaud",
        location2: "Écully 69130",
        days: "2 Days",
        daysDesc: "International competition",
        countries: "EU Countries",
        countriesDesc: "Junior & Senior",
        title2: "European Title",
        titleDesc: "Official medals",
        registrationOpen: "Registration Open",
        registrationText: "Join this exceptional event and represent your country",
        registerButton: "Register now",
        rulesButton: "Official WSA Rules",
        rulesInfo: "View the complete competition regulations",
        noticeTitle: "2025 season completed",
        noticeText: "The 2025 European season is finished. 2026 will be a world season."
      },
      about: {
        title: "About us",
        subtitle: "French delegation dedicated to Kali, Eskrima & Arnis",
        description: "We proudly represent France in national and international competitions, while training the next generation of champions.",
        competitions: "Competitions",
        competitionsDesc: "",
        community: "Community",
        communityDesc: "",
        training: "Training",
        trainingDesc: "",
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
        },
        articles: {
          title: "Articles",
          subtitle: "Latest updates",
          card1Title: "Official results",
          card1Desc: "Check the rankings and podiums from WSA European Open 2025.",
          card1Link: "/resultats",
          card2Title: "All posts",
          card2Desc: "Find our announcements, recaps and information.",
          card2Link: "/blog",
          card3Title: "Photos & Stories",
          card3Desc: "Follow us on Instagram to see highlights.",
          card3Link: "https://instagram.com/francestickfighting"
        }
      },
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
              href="/resultats"
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
              <div className="text-center mb-4">
<h2 className="text-4xl md:text-5xl font-black mb-6">
                  {language === 'fr' ? 'Événements' : 'Events'}
                </h2>
<div className="mx-auto max-w-2xl bg-amber-100/10 border border-amber-300/40 text-amber-100 rounded-md p-5 md:p-6">
<p className="text-lg md:text-xl font-extrabold mb-1">{t.wsa.noticeTitle}</p>
<p className="text-base md:text-lg">{t.wsa.noticeText}</p>
                </div>
              </div>

              
            </div>
          </div>
        </section>

        {/* Articles Section - ajoutée avant Qui sommes-nous */}
        <section id="articles" className="py-32 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="bg-white rounded-lg shadow-sm p-12">
<h2 className="text-4xl md:text-5xl font-black text-center mb-6 text-[var(--france-bleu)]">
                {t.articles.title}
              </h2>
<p className="text-center text-gray-700 text-lg md:text-xl mb-12">{t.articles.subtitle}</p>
              <div className="grid md:grid-cols-3 gap-6">
                <a href={t.articles.card1Link} className="group block border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-gray-50/60">
<h3 className="text-xl font-extrabold mb-2 text-gray-900 group-hover:text-[var(--or-default)]">{t.articles.card1Title}</h3>
<p className="text-base text-gray-700 mb-3">{t.articles.card1Desc}</p>
<span className="inline-flex items-center text-base font-semibold text-[var(--france-bleu)]">En savoir plus<ChevronRight size={16} className="ml-1" /></span>
                </a>
                <a href={t.articles.card2Link} className="group block border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-gray-50/60">
<h3 className="text-xl font-extrabold mb-2 text-gray-900 group-hover:text-[var(--or-default)]">{t.articles.card2Title}</h3>
<p className="text-base text-gray-700 mb-3">{t.articles.card2Desc}</p>
<span className="inline-flex items-center text-base font-semibold text-[var(--france-bleu)]">Voir<ChevronRight size={16} className="ml-1" /></span>
                </a>
                <a href={t.articles.card3Link} target="_blank" rel="noopener noreferrer" className="group block border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-gray-50/60">
<h3 className="text-xl font-extrabold mb-2 text-gray-900 group-hover:text-[var(--or-default)]">{t.articles.card3Title}</h3>
<p className="text-base text-gray-700 mb-3">{t.articles.card3Desc}</p>
<span className="inline-flex items-center text-base font-semibold text-[var(--france-bleu)]">Ouvrir<ExternalLink size={16} className="ml-1" /></span>
                </a>
</div>

              {/* Réseaux sociaux */}
              <div className="mt-12 text-center">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--france-bleu)] mb-4">
                  {language === 'fr' ? 'Nos réseaux' : 'Our social networks'}
                </h3>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                  <a
                    href="https://instagram.com/francestickfighting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-full bg-gray-50 hover:bg-white hover:shadow transition"
                  >
                    <Instagram size={20} className="mr-2 text-[var(--or-default)]" />
                    <span className="text-base md:text-lg font-semibold">@francestickfighting</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@francestickfighting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-full bg-gray-50 hover:bg-white hover:shadow transition"
                  >
                    <ExternalLink size={18} className="mr-2 text-[var(--or-default)]" />
                    <span className="text-base md:text-lg font-semibold">TikTok @francestickfighting</span>
                  </a>
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
<h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-[var(--france-bleu)]">
                {t.about.title}
              </h2>
              
              {/* Contenu principal */}
              <div className="text-center mb-12">
<p className="text-xl md:text-2xl text-gray-700 font-bold mb-5">
                  {t.about.subtitle}
                </p>
<p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                  {t.about.description}
                </p>
              </div>
              
              {/* Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Trophy className="text-[var(--or-default)] mx-auto mb-4" size={32} />
<h4 className="text-xl font-extrabold text-gray-900">{t.about.competitions}</h4>
<p className="text-base text-gray-700 mt-2">{t.about.competitionsDesc}</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Users className="text-[var(--or-default)] mx-auto mb-4" size={32} />
<h4 className="text-xl font-extrabold text-gray-900">{t.about.community}</h4>
<p className="text-base text-gray-700 mt-2">{t.about.communityDesc}</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                  <Calendar className="text-[var(--or-default)] mx-auto mb-4" size={32} />
<h4 className="text-xl font-extrabold text-gray-900">{t.about.training}</h4>
<p className="text-base text-gray-700 mt-2">{t.about.trainingDesc}</p>
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
