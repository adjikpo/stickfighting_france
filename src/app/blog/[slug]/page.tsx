"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Calendar, User, ArrowLeft, ExternalLink } from "lucide-react";
import { posts } from "@/data/posts";

export default function BlogPostPage() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const params = useParams();
  const slug = Array.isArray(params?.slug) ? params?.slug[0] : (params?.slug as string);
  const post = posts.find((p) => p.slug === slug);

  const t = {
    fr: {
      back: "Retour au blog",
      notFound: "Article introuvable",
    },
    en: {
      back: "Back to blog",
      notFound: "Article not found",
    },
  }[language];

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <main className="min-h-screen pt-24 pb-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-6">
            <Link href="/blog" className="inline-flex items-center gap-1 text-[var(--france-bleu)] hover:text-[var(--or-default)] text-sm font-semibold">
              <ArrowLeft size={16} /> {t.back}
            </Link>
          </div>

          {!post ? (
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center text-gray-800">
              {t.notFound}
            </div>
          ) : post.externalUrl ? (
            <article className="bg-white border border-gray-200 rounded-lg p-6">
              <header className="mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--france-bleu)] mb-2">
                  {post.title[language]}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1"><Calendar size={16} />{post.date}</span>
                  <span className="inline-flex items-center gap-1"><User size={16} />{post.author}</span>
                </div>
              </header>

              {post.summary && (
                <p className="text-gray-800 mb-4">{post.summary[language]}</p>
              )}

              <div className="text-center">
                <a
                  href={post.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-block w-full"
                >
                  <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={post.image || '/logo.jpg'}
                      alt={post.title[language]}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-2 right-2 bg-white/90 text-[var(--france-bleu)] border border-gray-200 rounded px-2 py-1 text-xs font-semibold inline-flex items-center gap-1">
                      <ExternalLink size={14} /> {language === 'fr' ? "Lire l'article" : 'Read article'}
                    </div>
                  </div>
                </a>
              </div>
            </article>
          ) : (
            <article className="bg-white border border-gray-200 rounded-lg p-6">
              <header className="mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--france-bleu)] mb-2">
                  {post.title[language]}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="inline-flex items-center gap-1"><Calendar size={16} />{post.date}</span>
                  <span className="inline-flex items-center gap-1"><User size={16} />{post.author}</span>
                </div>
              </header>

              <div className="prose prose-sm sm:prose base:text-gray-900 max-w-none">
                {post.content[language]
                  .split("\n\n")
                  .map((para, idx) => (
                    <p key={idx} className="mb-4 leading-relaxed">{para}</p>
                  ))}
              </div>
            </article>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
