"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { Calendar, User } from "lucide-react";
import { posts } from "@/data/posts";

export default function BlogIndexPage() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const t = {
    fr: {
      title: "Blog",
      subtitle: "Articles et actualités",
      readMore: "Lire la suite",
    },
    en: {
      title: "Blog",
      subtitle: "Articles and news",
      readMore: "Read more",
    },
  }[language];

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="min-h-screen pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--france-bleu)]">{t.title}</h1>
            <p className="text-gray-700 mt-2">{t.subtitle}</p>
          </header>

          <div className="space-y-4">
            {posts.map((p) => (
              <article key={p.slug} className="bg-white border border-gray-200 rounded-lg p-5">
                <header className="mb-2">
                  <Link href={`/blog/${p.slug}`} className="text-xl md:text-2xl font-bold text-[var(--france-bleu)] hover:underline">
                    {p.title[language]}
                  </Link>
                </header>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="inline-flex items-center gap-1"><Calendar size={16} />{p.date}</span>
                  <span className="inline-flex items-center gap-1"><User size={16} />{p.author}</span>
                </div>
                <p className="text-gray-800 mb-3">{p.excerpt[language]}</p>
                <Link href={`/blog/${p.slug}`} className="text-[var(--france-bleu)] hover:text-[var(--or-default)] font-semibold text-sm">
                  {t.readMore} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
