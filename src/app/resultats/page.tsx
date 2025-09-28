"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type ResultEntry = {
  first: string;
  second: string;
  third?: string;
};

type ResultsData = {
  [eventId: string]: {
    [category: string]: ResultEntry;
  };
};

const resultsData: ResultsData = {
  "formes-traditionnel": {
    "homme": { first: "Richard Gordon", second: "Alexandre Herrou", third: "Roddophe Temple" },
    "junior": { first: "Andre Alexandre", second: "-" },
    "female": { first: "Diana Fauner", second: "Gretchen Ivey" },
  },
  "formes-creatif": {
    "homme": { first: "Mickael Schauperl", second: "Richard Gordon", third: "Alexandre Herrou" },
    "female": { first: "Diana Fauner", second: "Gretchen Ivey" },
    "junior": { first: "Andre Alexandre", second: "-" },
  },
  "padded-simple": {
    "female": { first: "Blandine Pascal", second: "Gretchen Ivey", third: "Marie Potier" },
    "junior": { first: "Sammy Hubble", second: "Andre Alexander" },
    "cadet": { first: "Coby BLACKSTOCK", second: "Kyllian Carmona" },
    "lightweight": { first: "Arthur Djikpo", second: "Lamine Bensalem", third: "Liv Lam" },
    "mediumweight": { first: "Christophe Pic", second: "Richard Gordon", third: "Christoph Kesberger" },
    "heavyweight-under40": { first: "Christophe Diaz Otero", second: "Maxence BEROUJON", third: "Damien L-M" },
    "heavyweight": { first: "Maxime Gaudet Trafit", second: "Roddophe Temple", third: "Leigh Mitchell" },
  },
  "padded-double": {
    "female": { first: "Blandine Pascal", second: "Gretchen Ivey", third: "Marie Potier" },
    "junior": { first: "Andre Alexander", second: "Sammy Hubble" },
    "cadet": { first: "Coby BLACKSTOCK", second: "Kyllian Carmona" },
    "lightweight": { first: "Arthur Djikpo", second: "Lamine Bensalem", third: "Liv Lam" },
    "mediumweight": { first: "Musab Hadimli", second: "Richard Gordon", third: "Christophe Pic" },
    "heavyweight-under40": { first: "Maxence BEROUJON", second: "Damien L-M" },
    "heavyweight": { first: "Leigh Mitchell", second: "Alexandre Herrou", third: "Stéphane Vazeille" },
  },
  "padded-couteaux": {
    "female": { first: "Blandine Pascal", second: "Gretchen Ivey" },
    "lightweight": { first: "Arthur Djikpo", second: "Lamine Bensalem", third: "Liv Lam" },
    "mediumweight": { first: "Christophe Pic", second: "Musab Hadimli", third: "Richard Gordon" },
    "heavyweight-under40": { first: "Damien L-M", second: "Maxence BEROUJON" },
    "heavyweight": { first: "Maxime Gaudet Trafit", second: "Leigh Mitchell", third: "Stéphane Vazeille" },
  },
};

export default function ResultatsPage() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const t = {
    fr: {
      title: "Résultats WSA European Open 2025",
      intro: "Résultats officiels du championnat",
      navIntro: "Accès rapide aux épreuves",
      comingSoon: "Résultats à venir",
      podium: "Podium",
      tableTitle: "Classement détaillé",
      rank: "Rang",
      athlete: "Athlète",
      first: "1er",
      second: "2e",
      third: "3e",
      tabs: { seniors: "Seniors", veterans: "Vétérans", women: "Femmes", children: "Enfants" },
      weightCategories: {
        lightweight: "Poids léger",
        mediumweight: "Poids moyen",
        heavyweight: "Poids lourd",
        "heavyweight-under40": "Poids lourd -40 ans",
        homme: "Homme",
        female: "Femme",
        junior: "Junior",
        cadet: "Cadet"
      },
      weightNoteSV: "Catégories de poids: Seniors & Vétérans uniquement.",
      weightNoteWC: "Pas de catégories de poids pour Femmes et Enfants.",
      noResults: "Pas de résultats pour cette catégorie"
    },
    en: {
      title: "WSA European Open 2025 Results",
      intro: "Official championship results",
      navIntro: "Quick access to events",
      comingSoon: "Results coming soon",
      podium: "Podium",
      tableTitle: "Detailed ranking",
      rank: "Rank",
      athlete: "Athlete",
      first: "1st",
      second: "2nd",
      third: "3rd",
      tabs: { seniors: "Seniors", veterans: "Veterans", women: "Women", children: "Children" },
      weightCategories: {
        lightweight: "Lightweight",
        mediumweight: "Mediumweight",
        heavyweight: "Heavyweight",
        "heavyweight-under40": "Heavyweight Under 40",
        homme: "Men",
        female: "Women",
        junior: "Junior",
        cadet: "Cadet"
      },
      weightNoteSV: "Weight categories: Seniors & Veterans only.",
      weightNoteWC: "No weight categories for Women and Children.",
      noResults: "No results for this category"
    },
  }[language];

  const categories = [
    { id: "formes-traditionnel", fr: "Formes - Traditionnel", en: "Forms - Traditional" },
    { id: "formes-creatif", fr: "Formes - Créatif (Open Form)", en: "Forms - Creative (Open Form)" },
    { id: "simple-baton", fr: "Simple bâton", en: "Single stick" },
    { id: "double-baton", fr: "Double bâton", en: "Double stick" },
    { id: "padded-simple", fr: "Padded Simple", en: "Padded Single" },
    { id: "padded-double", fr: "Padded Double", en: "Padded Double" },
    { id: "padded-couteaux", fr: "Padded Couteaux", en: "Padded Knives" },
    { id: "equipe", fr: "Équipe", en: "Team" },
  ];

  // Sub-component for each event with tabs for categories
  function EpreuveBlock({ sectionId }: { sectionId: string }) {
    const eventResults = resultsData[sectionId];
    
    // Determine which tabs to show based on available results
    const availableCategories = eventResults ? Object.keys(eventResults) : [];
    
    // Créer les tabs en fonction des catégories disponibles
    const tabs: string[] = [];
    const tabLabels: { [key: string]: string } = {};
    
    // Ajouter les catégories dans l'ordre : général, âge, poids
    ['homme', 'female', 'junior', 'cadet', 'lightweight', 'mediumweight', 'heavyweight-under40', 'heavyweight'].forEach(cat => {
      if (availableCategories.includes(cat)) {
        tabs.push(cat);
        tabLabels[cat] = (t.weightCategories as any)[cat] || cat;
      }
    });
    
    const [activeTab, setActiveTab] = useState<string>(tabs[0] || 'homme');
    
    // Si pas de résultats du tout pour cette épreuve
    if (!eventResults || tabs.length === 0) {
      return (
        <div className="text-center text-gray-500 py-8">
          {t.comingSoon}
        </div>
      );
    }
    
    const currentResult = eventResults[activeTab];
    const hasThird = currentResult?.third && currentResult.third !== '-';

    return (
      <div>
        {/* Tabs si plus d'une catégorie */}
        {tabs.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab 
                    ? 'bg-[var(--france-bleu)] text-white border-[var(--france-bleu)]' 
                    : 'bg-white text-gray-800 border-gray-400'
                } border px-3 py-1.5 rounded-full text-sm transition-colors`}
                type="button"
              >
                {tabLabels[tab]}
              </button>
            ))}
          </div>
        )}
        
        {/* Afficher la catégorie si une seule */}
        {tabs.length === 1 && (
          <h3 className="text-lg font-semibold text-[var(--france-bleu)] mb-3">
            {tabLabels[tabs[0]]}
          </h3>
        )}

        {currentResult && (
          <>
            {/* Podium */}
            <h3 className="text-base md:text-lg font-semibold text-[var(--or-default)] mb-3">{t.podium}</h3>
            <div className="grid grid-cols-3 gap-3 md:gap-4 items-end">
              {/* Silver */}
              <div className="rounded-lg border border-gray-300 p-3 text-center bg-gray-100">
                <div className="text-sm font-bold text-gray-700 mb-1">{t.second}</div>
                <div className="text-sm font-medium">{currentResult.second}</div>
              </div>
              {/* Gold (larger, centered) */}
              <div className="rounded-lg border border-amber-300 p-4 md:p-5 text-center bg-amber-50 shadow-md -mt-1 md:-mt-2 scale-[1.03]">
                <div className="text-sm font-bold text-amber-700 mb-1">{t.first}</div>
                <div className="text-base md:text-lg font-semibold">{currentResult.first}</div>
              </div>
              {/* Bronze */}
              {hasThird ? (
                <div className="rounded-lg border border-orange-300 p-3 text-center bg-orange-50">
                  <div className="text-sm font-bold text-orange-700 mb-1">{t.third}</div>
                  <div className="text-sm font-medium">{currentResult.third}</div>
                </div>
              ) : (
                <div className="rounded-lg border border-gray-200 p-3 text-center bg-gray-50">
                  <div className="text-sm text-gray-400">-</div>
                </div>
              )}
            </div>

            {/* Table */}
            <h3 className="text-base md:text-lg font-semibold text-[var(--france-bleu)] mt-6 mb-3">{t.tableTitle}</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left px-3 py-2 border-b border-gray-300 w-16">{t.rank}</th>
                    <th className="text-left px-3 py-2 border-b border-gray-300">{t.athlete}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 border-b border-gray-200 font-semibold text-amber-600">1</td>
                    <td className="px-3 py-2 border-b border-gray-200 font-medium">{currentResult.first}</td>
                  </tr>
                  <tr className="bg-gray-100/60">
                    <td className="px-3 py-2 border-b border-gray-200 font-semibold text-gray-600">2</td>
                    <td className="px-3 py-2 border-b border-gray-200">{currentResult.second}</td>
                  </tr>
                  {hasThird && (
                    <tr>
                      <td className="px-3 py-2 border-b border-gray-200 font-semibold text-orange-600">3</td>
                      <td className="px-3 py-2 border-b border-gray-200">{currentResult.third}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Note sur les catégories de poids si applicable */}
            {(activeTab.includes('weight') || activeTab.includes('heavyweight')) && (
              <div className="mt-4 text-xs md:text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md p-3">
                {language === 'fr' ? 'Catégorie de poids' : 'Weight category'}
              </div>
            )}
          </>
        )}
      </div>
    );
  }

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setMobileNavOpen(false);
    window.addEventListener('scroll', onScroll, { passive: true } as any);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="min-h-screen pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[var(--france-bleu)]">
            {t.title}
          </h1>
          <p className="text-center text-gray-700 mb-8">{t.intro}</p>

          {/* Navigation rapide des épreuves (sticky) */}
          <div className="sticky top-24 z-10 bg-gray-100/95 backdrop-blur-sm border border-gray-300 rounded-lg p-2 md:p-4 mb-10 shadow-sm">
            <p className="text-sm text-gray-700 text-center mb-2 md:mb-3">{t.navIntro}</p>

            {/* Desktop: wrap */}
            <nav className="hidden md:flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="px-3 py-1.5 text-sm bg-white border border-gray-300 rounded-full hover:border-[var(--or-default)] hover:text-[var(--or-default)] transition-colors"
                >
                  {language === 'fr' ? c.fr : c.en}
                </a>
              ))}
            </nav>

            {/* Mobile: collapsible menu */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileNavOpen((v) => !v)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium"
                aria-expanded={mobileNavOpen}
                aria-controls="mobile-quick-access"
              >
                <span>{t.navIntro}</span>
                <ChevronDown size={16} className={`transition-transform ${mobileNavOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileNavOpen && (
                <div id="mobile-quick-access" className="mt-2 bg-white border border-gray-300 rounded-md p-2">
                  <nav className="grid grid-cols-1 gap-2">
                    {categories.map((c) => (
                      <a
                        key={c.id}
                        href={`#${c.id}`}
                        className="px-3 py-2 text-sm bg-white border border-gray-200 rounded-md hover:border-[var(--or-default)] hover:text-[var(--or-default)] transition-colors"
                        onClick={() => setMobileNavOpen(false)}
                      >
                        {language === 'fr' ? c.fr : c.en}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>

          {/* Sections épreuves */}
          <div className="space-y-6">
            {categories.map((c) => (
              <section key={c.id} id={c.id} className="bg-white border border-gray-200 rounded-lg p-5 scroll-mt-28 md:scroll-mt-32">
                <h2 className="text-xl md:text-2xl font-bold text-[var(--france-bleu)] mb-3">
                  {language === 'fr' ? c.fr : c.en}
                </h2>
                <EpreuveBlock sectionId={c.id} />
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
