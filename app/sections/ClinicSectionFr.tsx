// app/sections/ClinicSectionFr.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlowBullet from "@/app/components/GlowBullet";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function ClinicSectionFr() {
  return (
    <section
      id="clinic"
      className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-teal-500/15 via-slate-950/80 to-slate-950 blur-2xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center lg:px-8">
        {/* LEFT with background image + glass card */}
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          

          <div className="space-y-5 rounded-3xl border border-white/10 bg-slate-950/30 p-5 shadow-lg shadow-black/40 backdrop-blur-xl">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Votre clinique à Douala pour la prévention cardiovasculaire
              </h2>
              <p className="text-sm text-slate-200 sm:text-base">
                Total Care Medical Clinic est une clinique pluridisciplinaire
                moderne à Douala. Le service de cardiologie est centré sur la
                prévention, le diagnostic précoce et le suivi régulier de votre
                santé cardiaque et vasculaire, dans un environnement calme et
                respectueux.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Environnement */}
              <motion.div
                className="space-y-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={listVariants}
              >
                <h3 className="text-sm font-semibold text-teal-300">
                  Environnement et confort
                </h3>
                <motion.ul className="space-y-3 text-xs text-slate-200 sm:text-sm">
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <GlowBullet />
                    <span>Situation facilement accessible à Douala</span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <GlowBullet />
                    <span>
                      Salles de consultation propres et calmes pour les bilans
                      cardiaques
                    </span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <GlowBullet />
                    <span>
                      Équipe formée pour accompagner les patients anxieux ou
                      venant pour la première fois
                    </span>
                  </motion.li>
                </motion.ul>
              </motion.div>

              {/* Équipement */}
              <motion.div
                className="space-y-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={listVariants}
              >
                <h3 className="text-sm font-semibold text-teal-300">
                  Équipement et services
                </h3>
                <motion.ul className="space-y-3 text-xs text-slate-200 sm:text-sm">
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <GlowBullet />
                    <span>ECG et échocardiographie sur place</span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <GlowBullet />
                    <span>
                      Dépistage de l’hypertension, du cholestérol et du diabète
                    </span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <GlowBullet />
                    <span>
                      Suivi continu de l’hypertension, insuffisance cardiaque et
                      contrôle des facteurs de risque
                    </span>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </div>

            <p className="text-xs text-slate-300 sm:text-sm">
              Vous pouvez utiliser le formulaire de demande de rendez-vous ci-dessous
              pour un bilan cardiaque préventif, une consultation de suivi ou un
              deuxième avis. Si vous ne savez pas quel type de visite choisir,
              nous vous orienterons lors du contact.
            </p>
          </div>
        </motion.div>

        {/* RIGHT card same as EN but FR text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative mx-auto max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-900">
                <Image
                  src="/images/clinic-interior.jpg"
                  alt="Intérieur de Total Care Medical Clinic"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              </div>
              <div className="mt-3 space-y-2 text-xs text-slate-200 sm:text-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-wide text-teal-300">
                      Localisation
                    </p>
                    <p className="text-sm font-semibold">
                      Total Care Medical Clinic, Douala
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[0.7rem] font-medium text-emerald-300 ring-1 ring-emerald-400/40">
                    Cardiologie préventive
                  </span>
                </div>
                <p className="text-[0.75rem] text-slate-300">
                  Rendez-vous par demande via le site, par téléphone ou
                  WhatsApp. En cas de symptômes urgents, merci de vous rendre
                  directement au service d’urgences le plus proche.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
