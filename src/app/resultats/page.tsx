"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function ResultatsPage() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const t = {
    fr: {
      title: "Résultats",
      intro: "Les résultats seront publiés pendant et après l'événement.",
      navIntro: "Accès rapide aux épreuves",
      comingSoon: "Résultats à venir",
      podium: "Podium",
      tableTitle: "Classement détaillé (exemple)",
      rank: "Rang",
      athlete: "Athlète",
      first: "1er",
      second: "2e",
      third: "3e",
      tabs: { seniors: "Seniors", veterans: "Vétérans", women: "Femmes", children: "Enfants" },
      weightNoteSV: "Catégories de poids: Seniors & Vétérans uniquement.",
      weightNoteWC: "Pas de catégories de poids pour Femmes et Enfants.",
    },
    en: {
      title: "Results",
      intro: "Results will be published during and after the event.",
      navIntro: "Quick access to events",
      comingSoon: "Results coming soon",
      podium: "Podium",
      tableTitle: "Detailed ranking (example)",
      rank: "Rank",
      athlete: "Athlete",
      first: "1st",
      second: "2nd",
      third: "3rd",
      tabs: { seniors: "Seniors", veterans: "Veterans", women: "Women", children: "Children" },
      weightNoteSV: "Weight categories: Seniors & Veterans only.",
      weightNoteWC: "No weight categories for Women and Children.",
    },
  }[language];

  const categories = [
    { id: "formes-traditionnel", fr: "Formes - Traditionnel", en: "Forms - Traditional" },
    { id: "formes-creatif", fr: "Formes - Créatif", en: "Forms - Creative" },
    { id: "simple-baton", fr: "Simple bâton", en: "Single stick" },
    { id: "double-baton", fr: "Double bâton", en: "Double stick" },
    { id: "padded-simple", fr: "Padded Simple", en: "Padded Single" },
    { id: "padded-double", fr: "Padded Double", en: "Padded Double" },
    { id: "padded-couteaux", fr: "Padded Couteaux", en: "Padded Knives" },
    { id: "equipe", fr: "Équipe", en: "Team" },
  ];

  // Sub-component for each event, with its own local tab state and URL hash sync
  function EpreuveBlock({ sectionId }: { sectionId: string }) {
    const validTabs = ['seniors','veterans','women','children'] as const;
    const [tab, setTab] = useState<'seniors' | 'veterans' | 'women' | 'children'>('seniors');
    const labels = t.tabs;
    const isWeighted = tab === 'seniors' || tab === 'veterans';

    // Initialize from URL hash and listen to hash changes
    useEffect(() => {
      const applyFromHash = () => {
        const raw = window.location.hash.replace('#','');
        const [id, tabRaw] = raw.split(':');
        if (id === sectionId && validTabs.includes(tabRaw as any)) {
          setTab(tabRaw as typeof validTabs[number]);
        }
      };
      applyFromHash();
      window.addEventListener('hashchange', applyFromHash);
      return () => window.removeEventListener('hashchange', applyFromHash);
    }, [sectionId]);

    const onSelectTab = (k: typeof validTabs[number]) => {
      setTab(k);
      // Persist in hash without jumping
      const newHash = `#${sectionId}:${k}`;
      window.history.replaceState(null, '', newHash);
    };

    return (
      <div>
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {validTabs.map((k) => (
            <button
              key={k}
              onClick={() => onSelectTab(k)}
              className={`${tab === k ? 'bg-[var(--france-bleu)] text-white border-[var(--france-bleu)]' : 'bg-white text-gray-800 border-gray-400'} border px-3 py-1.5 rounded-full text-sm transition-colors`}
              type="button"
            >
              {labels[k]}
            </button>
          ))}
        </div>

        {/* Podium */}
        <h3 className="text-base md:text-lg font-semibold text-[var(--or-default)] mb-3">{t.podium}</h3>
        <div className="grid grid-cols-3 gap-3 md:gap-4 items-end">
          {/* Silver */}
          <div className="rounded-lg border border-gray-300 p-3 text-center bg-gray-100">
            <div className="text-sm font-bold text-gray-700 mb-1">{t.second}</div>
            <div className="text-sm">XXX</div>
          </div>
          {/* Gold (larger, centered) */}
          <div className="rounded-lg border border-amber-300 p-4 md:p-5 text-center bg-amber-50 shadow-md -mt-1 md:-mt-2 scale-[1.03]">
            <div className="text-sm font-bold text-amber-700 mb-1">{t.first}</div>
            <div className="text-base md:text-lg font-semibold">XXX</div>
          </div>
          {/* Bronze */}
          <div className="rounded-lg border border-gray-300 p-3 text-center bg-gray-100">
            <div className="text-sm font-bold text-orange-700 mb-1">{t.third}</div>
            <div className="text-sm">XXX</div>
          </div>
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
                <td className="px-3 py-2 border-b border-gray-200 font-semibold">1</td>
                <td className="px-3 py-2 border-b border-gray-200">XXX</td>
              </tr>
              <tr className="bg-gray-100/60">
                <td className="px-3 py-2 border-b border-gray-200 font-semibold">2</td>
                <td className="px-3 py-2 border-b border-gray-200">XXX</td>
              </tr>
              <tr>
                <td className="px-3 py-2 border-b border-gray-200 font-semibold">3</td>
                <td className="px-3 py-2 border-b border-gray-200">XXX</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Weight note */}
        <div className="mt-4 text-xs md:text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-md p-3">
          {isWeighted ? t.weightNoteSV : t.weightNoteWC}
        </div>
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
