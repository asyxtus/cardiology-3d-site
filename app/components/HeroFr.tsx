"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";

export default function HeroFr() {
  const whatsappUrl = useMemo(
    () => "https://wa.me/237674806650", // même numéro, version FR
    []
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#050814] via-[#071426] to-[#02040A] text-white"
    >
      {/* Image de fond 3D */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/heart-with-stethoscope.jpg"
          alt="Fond 3D de cardiologie"
          fill
          className="h-full w-full object-cover opacity-70 mix-blend-screen"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />
      </div>

      {/* Halo lumineux */}
      <div className="pointer-events-none absolute -left-32 -top-40 h-72 w-72 rounded-full bg-[#D61F34]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#00998C]/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center md:py-24 lg:px-8">
        {/* GAUCHE : texte et CTA */}
        <motion.div
          className="relative z-10 flex-1 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-teal-200">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            Clinique de cardiologie préventive
          </div>

          {/* Titre + sous-titre */}
          <div className="space-y-4">
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Protégez votre cœur aujourd&apos;hui
              <span className="block text-teal-300">
                avant l&apos;apparition des symptômes
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-200 sm:text-base">
              Prise en charge cardiologique moderne centrée sur la prévention,
              le diagnostic précoce et la santé cardiaque à long terme, assurée
              par un cardiologue formé à l&apos;international à Total Care
              Medical Clinic à Douala.
            </p>
          </div>

          <section className="w-full bg-slate-950 py-8 md:py-10">
  <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 px-4 md:flex-row md:items-center md:justify-between md:px-6">
    <div>
      <h2 className="text-base md:text-lg font-semibold text-slate-50">
        En savoir plus sur votre cardiologue à Douala
      </h2>
      <p className="mt-1 text-sm md:text-[15px] text-slate-300">
        Découvrez le parcours, l’approche en cardiologie préventive et les
        services du Dr Asah Syxtus dédiés aux patients de Douala.
      </p>
    </div>
    <Link
      href="/fr/cardiologue-douala"
      className="mt-3 inline-flex rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 md:mt-0"
    >
      Plus sur le cardiologue à Douala
    </Link>
  </div>
</section>


          {/* CTA */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#book-visit"
              className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40 transition hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              Demander un bilan cardiaque
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-50 shadow-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              Consultation WhatsApp
            </a>
          </div>

          {/* Points de confiance */}
          <div className="mt-6 grid gap-3 text-xs text-slate-200 sm:grid-cols-3 sm:text-sm">
            <div className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-300" />
              <span>
                ECG, échocardiographie et contrôle de la tension sur place
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-300" />
              <span>
                Suivi de l&apos;hypertension, du cholestérol et des facteurs de
                risque
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-300" />
              <span>
                Plans de prévention personnalisés pour le long terme
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-6 text-xs text-slate-300 sm:text-sm">
            <div>
              <div className="text-lg font-semibold text-white">4+</div>
              <div className="text-slate-300">
                années d&apos;expérience en cardiologie
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-white">1000+</div>
              <div className="text-slate-300">
                consultations de patients réalisées
              </div>
            </div>
            <div>
              <div className="text-lg font-semibold text-white">24/7</div>
              <div className="text-slate-300">
                priorité donnée à la prévention
              </div>
            </div>
          </div>
        </motion.div>

        {/* DROITE : bloc 3D avec Sketchfab */}
        <div className="relative z-10 flex-1">
          <div className="mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B1C2D] via-[#071426] to-[#14030A]">
                <iframe
                  title="Heart Beating 3D"
                  src="https://sketchfab.com/models/9131e6fe5b0b4d54bacb4445c592d4a8/embed?autostart=1&preload=1"
                  className="h-full w-full border-0"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />

                {/* Ligne ECG animée si tu as gardé l’animation CSS */}
                <div className="pointer-events-none absolute inset-x-4 bottom-6 h-12 opacity-80">
                  <svg
                    viewBox="0 0 200 40"
                    className="h-full w-full"
                    aria-hidden="true"
                  >
                    <polyline
                      className="ecg-line"
                      points="0,20 20,20 30,5 40,35 55,20 80,20 95,10 110,30 130,20 160,20 170,8 182,32 200,20"
                      fill="none"
                      stroke="#4ADE80"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Petites tuiles d’infos */}
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-100">
                <div className="rounded-2xl bg-white/5 px-3 py-2 backdrop-blur-md">
                  <div className="text-[0.65rem] uppercase text-slate-300">
                    Fréquence au repos
                  </div>
                  <div className="text-sm font-semibold">72 bpm</div>
                </div>
                <div className="rounded-2xl bg-white/5 px-3 py-2 backdrop-blur-md">
                  <div className="text-[0.65rem] uppercase text-slate-300">
                    Tension artérielle
                  </div>
                  <div className="text-sm font-semibold">120 / 80</div>
                </div>
                <div className="rounded-2xl bg-white/5 px-3 py-2 backdrop-blur-md">
                  <div className="text-[0.65rem] uppercase text-slate-300">
                    Niveau de risque
                  </div>
                  <div className="text-sm font-semibold text-teal-300">
                    Faible à modéré
                  </div>
                </div>
              </div>

              <p className="mt-3 text-[0.7rem] text-slate-300">
                Des outils visuels vous aident à mieux comprendre votre cœur,
                votre profil de risque et l&apos;impact de la prévention sur vos
                résultats à long terme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
