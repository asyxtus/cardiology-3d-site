// app/sections/AboutSectionFr.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GlowBullet from "@/app/components/GlowBullet";
import Image from "next/image";

export default function AboutSectionFr() {
  const listVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20"
    >
      {/* accents de fond subtils */}
      <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#D61F34]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#0EA5E9]/15 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center lg:px-8">
        {/* GAUCHE : Portrait + carte */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-sm">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
              {/* conteneur du portrait */}
              <div className="relative h-[450px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]">
                <Image
                  src="/images/doctor-portrait.jpg"
                  alt="Portrait du cardiologue"
                  fill
                  className="object-cover object-center"
                />

                {/* badge cœur 3D subtil */}
                <div className="pointer-events-none absolute left-3 top-3 rounded-2xl bg-black/40 px-3 py-1 text-[0.7rem] uppercase tracking-wide text-teal-300 backdrop-blur-md">
                  Cardiologie préventive
                </div>
              </div>

              {/* petite ligne d&apos;infos sous la photo */}
              <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-200 sm:text-sm">
                <div>
                  <div className="font-semibold text-white">
                    Dr. Asah Syxtus Mbuo
                  </div>
                  <div className="text-slate-300">
                    Cardiologue &amp; médecine préventive
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 px-3 py-2 text-right text-[0.7rem] text-slate-300 backdrop-blur-md">
                  <div>En exercice à Total Care Medical Clinic</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DROITE : Texte bio */}
        <div className="flex-1 space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              À propos de votre cardiologue
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Le Dr Asah Syxtus,{" "}
  <Link
    href="/fr/cardiologue-douala"
    className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300 transition"
  >
    cardiologue à Douala
  </Link>
  {" "}propose une prise en charge complète des maladies cardiovasculaires au Total Care Medical Clinic. 
              Spécialisé en cardiologie préventive, il réalise l’ECG, l’échographie cardiaque, l’évaluation du risque cardiovasculaire, le suivi de l’hypertension artérielle et des troubles du cholestérol
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2 sm:text-sm">
            {/* Parcours clinique */}
            <motion.div
              className="space-y-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={listVariants}
            >
              <h3 className="text-sm font-semibold text-teal-300">
                Parcours clinique
              </h3>
              <motion.ul className="space-y-3 text-xs text-slate-300 sm:text-sm">
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <GlowBullet />
                  <span>
                    Formation médicale et expérience en cardiologie en Ukraine
                  </span>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <GlowBullet />
                  <span>
                    Pratique à Douala axée sur la santé du cœur et des vaisseaux
                  </span>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <GlowBullet />
                  <span>
                    Expérience en ECG, échocardiographie et gestion des risques
                  </span>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Approche de soin */}
            <motion.div
              className="space-y-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={listVariants}
            >
              <h3 className="text-sm font-semibold text-teal-300">
                Approche de prise en charge
              </h3>
              <motion.ul className="space-y-3 text-xs text-slate-300 sm:text-sm">
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <GlowBullet />
                  <span>
                    Explications claires, dans un langage que vous comprenez
                  </span>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <GlowBullet />
                  <span>
                    Priorité à la prévention, pas seulement au traitement en
                    urgence
                  </span>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <GlowBullet />
                  <span>
                    Plans personnalisés adaptés à votre vie et à vos objectifs
                  </span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>

          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              Mon objectif est de rendre la cardiologie moins intimidante et
              plus collaborative. Je souhaite que vous quittiez chaque
              consultation en comprenant ce qui se passe avec votre cœur,
              pourquoi cela compte et ce que nous faisons ensemble pour
              l&apos;améliorer.
            </p>
            <p>
              Que vous ayez une hypertension, insuffisance cardiaque, un cholestérol élevé, une gêne
              thoracique ou que vous souhaitiez simplement vérifier l&apos;état
              de votre cœur, vous pouvez demander une visite préventive avant
              que les problèmes ne deviennent urgents.
            </p>
          </div>

          <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
            <div className="rounded-full border border-teal-400/60 bg-teal-400/10 px-3 py-1">
              Cardiologie préventive
            </div>
            <div className="rounded-full border border-teal-400/60 bg-teal-400/10 px-3 py-1">
              Hypertension &amp; facteurs de risque
            </div>
            <div className="rounded-full border border-teal-400/60 bg-teal-400/10 px-3 py-1">
              Éducation du patient
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
