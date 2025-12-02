// app/sections/BookingSectionFr.tsx
"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import GlowBullet from "@/app/components/GlowBullet";

export default function BookingSectionFr() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      preferredDate: formData.get("preferredDate")?.toString() || "",
      preferredTime: formData.get("preferredTime")?.toString() || "",
      reason: formData.get("reason")?.toString() || "",
    };

    try {
      const res = await fetch("/api/book-visit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusType("error");
        setStatusMessage(
          data?.error ||
            "Nous n’avons pas pu envoyer votre demande. Veuillez réessayer."
        );
        return;
      }

      setStatusType("success");
      setStatusMessage(
        "Votre demande a été envoyée. Nous vous contacterons pour confirmer le rendez-vous."
      );
      form.reset();
    } catch (err) {
      console.error(err);
      setStatusType("error");
      setStatusMessage(
        "Une erreur est survenue lors de l’envoi de votre demande. Veuillez réessayer ou nous contacter directement."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
      id="book-visit"
      className="relative overflow-hidden py-16 text-white sm:py-20"
    >
      {/* Image de fond */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/medical report 3d-heart.jpg"
          alt="Fond de réservation"
          fill
          className="object-cover opacity-100 mix-blend-overlay"
        />
      </div>

      {/* halo de fond */}
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-20 bg-gradient-to-b from-teal-500/25 to-transparent blur-2xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-start lg:px-8">
        {/* GAUCHE : texte + explications */}
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Demander un bilan cardiaque préventif
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Utilisez ce formulaire pour demander un rendez-vous pour une
              consultation de cardiologie préventive ou une visite de suivi. Nous
              vous contacterons pour confirmer la date, l’heure et répondre à vos
              questions.
            </p>
          </div>

          <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-2 sm:text-sm">
            {/* Que se passe-t-il après l’envoi */}
            <motion.div
              className="space-y-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={listVariants}
            >
              <h3 className="text-sm font-semibold text-teal-300">
                Après l’envoi de votre demande
              </h3>
              <motion.ul className="space-y-3">
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <GlowBullet />
                  <span>
                    Nous analysons votre demande et vous contactons par téléphone
                    ou WhatsApp.
                  </span>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <GlowBullet />
                  <span>
                    Ensemble, nous choisissons un créneau (date et heure) adapté.
                  </span>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <GlowBullet />
                  <span>
                    Vous recevez des instructions pour bien préparer votre visite.
                  </span>
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Visites adaptées à ce formulaire */}
            <motion.div
              className="space-y-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={listVariants}
            >
              <h3 className="text-sm font-semibold text-teal-300">
                Visites adaptées à ce formulaire
              </h3>
              <motion.ul className="space-y-3">
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <GlowBullet />
                  <span>Bilans cardiaques préventifs</span>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <GlowBullet />
                  <span>Suivi de l’hypertension et du cholestérol</span>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <GlowBullet />
                  <span>
                    Suivi après ECG, échocardiographie ou examens sanguins
                  </span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>

          <p className="text-xs text-slate-400 sm:text-sm">
            En cas de douleur thoracique intense, de difficulté respiratoire
            importante, de malaise ou de signes d’urgence, merci de vous rendre
            immédiatement au service d’urgences le plus proche plutôt que
            d’utiliser ce formulaire.
          </p>
        </div>

        {/* DROITE : carte avec formulaire */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Formulaire de demande de rendez-vous
              </h3>

              <form
                className="space-y-4 text-xs sm:text-sm"
                onSubmit={handleSubmit}
              >
                <div className="space-y-1">
                  <label className="block text-slate-200" htmlFor="fullName">
                    Nom complet<span className="text-teal-300">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-teal-400/0 transition focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/40"
                    placeholder="Entrez votre nom et prénom"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-200" htmlFor="phone">
                    Numéro de téléphone / WhatsApp
                    <span className="text-teal-300">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-teal-400/0 transition focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/40"
                    placeholder="ex. +237…"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="block text-slate-200"
                    htmlFor="preferredDate"
                  >
                    Date souhaitée
                  </label>
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-teal-400/0 transition focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/40"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="block text-slate-200"
                    htmlFor="preferredTime"
                  >
                    Moment de la journée préféré
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-teal-400/0 transition focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/40"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choisir un créneau
                    </option>
                    <option>Matin</option>
                    <option>Après-midi</option>
                    <option>Soir</option>
                    <option>Pas de préférence</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-200" htmlFor="reason">
                    Motif de la consultation
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={3}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-teal-400/0 transition focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/40"
                    placeholder="Ex. : bilan préventif, suivi d’hypertension, gêne thoracique, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40 transition hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
                </button>
              </form>

              {statusMessage && (
                <p
                  className={`mt-3 text-[0.7rem] ${
                    statusType === "success"
                      ? "text-teal-300"
                      : "text-red-400"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
