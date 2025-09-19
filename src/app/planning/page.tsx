"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function PlanningPage() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const t = {
    fr: {
      title: "Planning",
      intro: "Programme prévisionnel (sous réserve d'ajustements) :",
      days: [
        { label: "Vendredi soir", items: ["Formes - Traditionnel", "Formes - Créatif"] },
        { label: "Samedi", items: ["Padded Simple", "Padded Double", "Padded Couteaux"] },
        { label: "Dimanche", items: ["Simple bâton", "Double bâton", "Équipe"] },
      ],
      note: "Les horaires détaillés seront publiés prochainement.",
      tip: "Astuce: Ajoutez cette page à vos favoris pour suivre les mises à jour en temps réel le jour J.",
    },
    en: {
      title: "Schedule",
      intro: "Provisional schedule (subject to changes):",
      days: [
        { label: "Friday evening", items: ["Forms - Traditional", "Forms - Creative"] },
        { label: "Saturday", items: ["Padded Single", "Padded Double", "Padded Knives"] },
        { label: "Sunday", items: ["Single stick", "Double stick", "Team"] },
      ],
      note: "Detailed times will be published soon.",
      tip: "Tip: Bookmark this page to follow updates in real-time on the day.",
    },
  }[language];

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="min-h-screen pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[var(--france-bleu)]">
            {t.title}
          </h1>
          <p className="text-center text-gray-700 mb-6">{t.intro}</p>

          <div className="space-y-5 mb-8">
            {t.days.map((d: {label: string; items: string[]}) => (
              <section key={d.label} className="bg-white border border-gray-200 rounded-lg p-5">
                <h2 className="text-xl md:text-2xl font-bold text-[var(--france-bleu)] mb-2">{d.label}</h2>
                <ul className="list-disc list-inside text-gray-800">
                  {d.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 mb-8">{t.note}</p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-sm text-gray-600">
              {t.tip}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
