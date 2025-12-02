// app/sections/FooterSectionFr.tsx
"use client";

import { motion } from "framer-motion";

export default function FooterSectionFr() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/95 py-10 text-slate-300">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-teal-500/20 to-transparent blur-2xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        {/* Gauche */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-3"
        >
          <h2 className="text-lg font-semibold text-white">
            Total Care Cardiology — Douala
          </h2>
          <p className="max-w-md text-sm text-slate-400">
            Cardiologie préventive, diagnostic précoce et suivi serein de votre
            cœur à Total Care Medical Clinic.
          </p>
        </motion.div>

        {/* Centre */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="space-y-3 text-sm"
        >
          <h3 className="text-xs font-semibold uppercase tracking-wide text-teal-300">
            Contact & localisation
          </h3>
          <div className="space-y-2">
            <p className="text-slate-200">
              Total Care Medical Clinic, Douala
            </p>
            <p className="text-slate-400">
              Behind UBA Bank, Ancien route, Bonaberi
            </p>
            <p className="text-slate-200">
              Téléphone / WhatsApp&nbsp;:{" "}
              <a
                href="https://wa.me/237674806650"
                target="_blank"
                className="text-teal-300 hover:text-teal-200"
              >
                +237 674 80 66 50
              </a>
            </p>
            <p className="text-slate-200">
              Email&nbsp;:{" "}
              <a
                href="mailto:asyxtus@gmail.com"
                className="text-teal-300 hover:text-teal-200"
              >
                asyxtus@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-1 text-xs">
            <a
              href="#book-visit"
              className="rounded-full bg-teal-400 px-4 py-1.5 font-semibold text-slate-950 shadow-md shadow-teal-500/40 hover:bg-teal-300"
            >
              Demander un rendez-vous
            </a>
            <a
              href="https://wa.me/237674806650"
              target="_blank"
              className="rounded-full border border-teal-400/50 px-4 py-1.5 font-semibold text-teal-300 hover:border-teal-300 hover:bg-teal-300/10"
            >
              Écrire sur WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Droite */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="max-w-sm space-y-3 text-xs text-slate-400"
        >
          <h3 className="text-xs font-semibold uppercase tracking-wide text-rose-300">
            Important
          </h3>
          <p>
            Ce site a pour but d&apos;informer et de faciliter les demandes de
            rendez-vous. Il ne remplace pas une prise en charge d&apos;urgence.
          </p>
          <p>
            En cas de douleur thoracique, essoufflement important, malaise ou
            perte de connaissance, veuillez vous rendre immédiatement au service
            d&apos;urgences le plus proche ou appeler le numéro d&apos;urgence
            local.
          </p>
        </motion.div>
      </div>

      <div className="mt-8 border-t border-white/5 pt-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-[0.7rem] text-slate-500 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} Asah Syxtus. Tous droits
            réservés.
          </p>
          <p>Site conçu et développé par Asah Syxtus à Douala.</p>
        </div>
      </div>
    </footer>
  );
}
