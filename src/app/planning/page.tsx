"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Sun, Sunset, Clock } from "lucide-react";

export default function PlanningPage() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const t = {
    fr: {
      title: "Planning",
      intro: "Programme prévisionnel (sous réserve d'ajustements) :",
      lunch: "Pause déjeuner (12:00–14:00)",
      days: [
        {
          id: "samedi-27-septembre",
          label: "Samedi 27 Septembre",
          sessions: [
            { time: "08:30", label: "Arrivée des combattants" },
            { time: "Matin (09:00–12:00)", items: ["Formes - Traditionnel", "Formes - Créatif", "Padded Couteaux"] },
            { time: "Après-midi (14:00–18:00)", items: ["Padded Simple", "Padded Double"] },
          ],
        },
        {
          id: "dimanche-28-septembre",
          label: "Dimanche 28 Septembre",
          sessions: [
            { time: "08:30", label: "Arrivée des combattants" },
            { time: "Matin (09:00–12:00)", items: ["Simple bâton"] },
            { time: "Après-midi (14:00–18:00)", items: ["Double bâton", "Équipe"] },
          ],
        },
      ],
      note: "Les horaires détaillés seront publiés prochainement.",
      tip: "Astuce: Ajoutez cette page à vos favoris pour suivre les mises à jour en temps réel le jour J.",
    },
    en: {
      title: "Schedule",
      intro: "Provisional schedule (subject to changes):",
      lunch: "Lunch break (12:00 PM–2:00 PM)",
      days: [
        {
          id: "saturday-27-september",
          label: "Saturday 27 September",
          sessions: [
            { time: "08:30", label: "Fighters arrival" },
            { time: "Morning (9:00 AM–12:00 PM)", items: ["Forms - Traditional", "Forms - Creative", "Padded Knives"] },
            { time: "Afternoon (2:00 PM–6:00 PM)", items: ["Padded Single", "Padded Double"] },
          ],
        },
        {
          id: "sunday-28-september",
          label: "Sunday 28 September",
          sessions: [
            { time: "08:30", label: "Fighters arrival" },
            { time: "Morning (9:00 AM–12:00 PM)", items: ["Single stick"] },
            { time: "Afternoon (2:00 PM–6:00 PM)", items: ["Double stick", "Team"] },
          ],
        },
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
            {t.days.map((d: any) => (
              <section key={d.id} id={d.id} className="bg-white border border-gray-200 rounded-lg p-5">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--france-bleu)] mb-4">{d.label}</h2>

                {/* Arrivée */}
                {d.sessions.filter((s: any) => s.label && !s.items).map((s: any, idx: number) => (
                  <div key={`arrivee-${idx}`} className="mb-4">
                    <div className="bg-white border border-gray-200 rounded-md p-3 h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-[var(--or-default)]" />
                        <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-gray-100 border border-gray-200 text-[var(--france-bleu)] font-semibold text-sm md:text-base">
                          {s.time}
                        </span>
                      </div>
                      <div className="text-base md:text-lg text-gray-900">
                        {s.label}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Sessions (Matin / Après-midi) en 2 colonnes */}
                <div className="grid md:grid-cols-2 gap-4 items-stretch">
                  {d.sessions.filter((s: any) => s.items).map((s: any, idx: number) => {
                    const timeStr = typeof s.time === 'string' ? s.time.toLowerCase() : '';
                    const isMorning = timeStr.includes('matin') || timeStr.includes('morning');
                    const isAfternoon = timeStr.includes('après-midi') || timeStr.includes('apres-midi') || timeStr.includes('afternoon');
                    return (
                      <div key={`sess-${idx}`} className="bg-white border border-gray-200 rounded-md p-3 h-full flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          {isMorning && <Sun size={18} className="text-[var(--or-default)]" />}
                          {isAfternoon && <Sunset size={18} className="text-[var(--or-default)]" />}
                          <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-gray-100 border border-gray-200 text-[var(--france-bleu)] font-semibold text-sm md:text-base">
                            {s.time}
                          </span>
                        </div>
                        <div className="mt-1">
                          <div className="flex flex-wrap gap-2">
                            {s.items.map((it: string) => (
                              <span key={it} className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-900 text-sm md:text-base">
                                {it}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex-1" />
                      </div>
                    );
                  })}
                </div>

                {/* Pause déjeuner */}
                <div className="mt-4 w-full text-center text-sm md:text-base text-gray-700 bg-gray-100 border border-gray-200 rounded-md py-2">
                  {t.lunch}
                </div>
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
