import type { Metadata } from "next";
import Link from "next/link";
import FaqSectionFr from "@/app/sections/FaqSectionFr";

export const metadata: Metadata = {
  title: "Cardiologue à Douala – Consultation et dépistage au Total Care Medical Clinic",
  description:
    "Vous cherchez un cardiologue à Douala ? Le Dr Asah Syxtus réalise ECG, échographie cardiaque, bilan de risque cardiovasculaire et suivi de l’hypertension au Total Care Medical Clinic Bonaberi.",
  alternates: {
    canonical: "https://asahcardiology.com/fr/cardiologue-douala",
  },
};

export default function CardiologueDoualaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="relative w-full border-b border-slate-800/60 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/80 py-16 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Cardiologue Douala
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight text-slate-50">
              Cardiologue à Douala pour la prévention et le dépistage des
              maladies cardiovasculaires
            </h1>
            <p className="mt-4 text-sm md:text-base text-slate-300">
              Le Dr Asah Syxtus, cardiologue à Douala, consulte au Total Care
              Medical Clinic à Bonaberi. Il est spécialisé en cardiologie
              préventive, ECG, échographie cardiaque et suivi de
              l&apos;hypertension. Cette page est dédiée aux patients qui
              recherchent une prise en charge cardiaque fiable à Douala.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/fr#booking"
                className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/fr#services"
                className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
              >
                Voir les services de cardiologie
              </Link>
            </div>
          </div>
          <div className="grid gap-4 text-sm md:grid-cols-3 md:text-[15px]">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
                Dépistage complet
              </p>
              <p className="mt-2 text-slate-200">
                ECG, échographie cardiaque, bilan de risque cardiovasculaire,
                profil lipidique et suivi de l&apos;hypertension artérielle.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
                Cardiologie préventive
              </p>
              <p className="mt-2 text-slate-200">
                Focus sur la prévention des infarctus, AVC et insuffisance
                cardiaque grâce à un suivi personnalisé adapté à votre profil.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
                Accès à Douala Bonaberi
              </p>
              <p className="mt-2 text-slate-200">
                Consultations au Total Care Medical Clinic, Bonaberi, ancien
                route, derrière UBA Bank, facilement accessible depuis Douala.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI CONSULTER */}
      <section className="w-full border-b border-slate-800/60 bg-slate-950 py-16 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 md:px-6 md:flex-row">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Quand consulter un cardiologue à Douala
            </h2>
            <p className="mt-3 text-sm md:text-[15px] text-slate-300">
              Certains symptômes doivent conduire à une consultation rapide
              chez un cardiologue à Douala. Une prise en charge précoce permet
              de réduire le risque de complications cardiovasculaires.
            </p>
            <ul className="mt-4 space-y-2 text-sm md:text-[15px] text-slate-200">
              <li>• Douleurs ou oppression thoracique</li>
              <li>• Palpitations, battements irréguliers ou rapides</li>
              <li>• Essoufflement à l&apos;effort ou au repos</li>
              <li>• Hypertension artérielle connue ou découverte récemment</li>
              <li>• Gonflement des jambes ou chevilles</li>
              <li>• Antécédents familiaux d&apos;infarctus ou d&apos;AVC</li>
              <li>• Diabète, surpoids, tabac ou cholestérol élevé</li>
            </ul>
          </div>
          <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
              Objectif
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-50">
              Dépister tôt, traiter avant les complications
            </h3>
            <p className="mt-3 text-sm md:text-[15px] text-slate-300">
              Le rôle du cardiologue est de détecter le plus tôt possible les
              facteurs de risque cardiovasculaire. En combinant ECG,
              échocardiographie, bilan biologique et suivi régulier, le Dr Asah
              aide à prévenir l&apos;infarctus, l&apos;AVC et l&apos;insuffisance
              cardiaque chez les patients à Douala.
            </p>
            <Link
              href="/fr#booking"
              className="mt-4 inline-flex rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Demander une consultation
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES DE CARDIOLOGIE */}
      <section className="w-full border-b border-slate-800/60 bg-slate-950 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
            Services de cardiologie proposés à Douala
          </h2>
          <p className="mt-3 text-sm md:text-[15px] text-slate-300">
            Le Dr Asah propose une cardiologie centrée sur la prévention, la
            détection précoce et le suivi des maladies cardiovasculaires au
            Total Care Medical Clinic.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm md:text-[15px]">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                ECG à Douala
              </h3>
              <p className="mt-2 text-slate-300">
                Electrocardiogramme sur place pour analyser le rythme cardiaque,
                dépister les anomalies électriques et certaines souffrances du
                muscle cardiaque.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Echographie cardiaque
              </h3>
              <p className="mt-2 text-slate-300">
                Echocardiographie transthoracique pour évaluer la fonction
                cardiaque, les valves et la structure du coeur, utile en cas
                d&apos;hypertension, souffle ou dyspnée.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Bilan de risque cardiovasculaire
              </h3>
              <p className="mt-2 text-slate-300">
                Evaluation globale du risque en tenant compte de la tension, du
                cholestérol, du diabète, du tabac, du poids et des antécédents
                familiaux.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Suivi de l&apos;hypertension
              </h3>
              <p className="mt-2 text-slate-300">
                Ajustement du traitement, conseils hygiéno-diététiques et
                surveillance rapprochée pour éviter les complications
                cardiovasculaires.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Suivi des troubles du rythme
              </h3>
              <p className="mt-2 text-slate-300">
                Evaluation des palpitations, suspicion de fibrillation
                auriculaire ou autres arythmies, adaptation du traitement et
                prévention du risque thromboembolique.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Education et prévention
              </h3>
              <p className="mt-2 text-slate-300">
                Explications claires, conseils sur le mode de vie et
                accompagnement du patient pour mieux comprendre sa maladie
                cardiaque et réduire son risque à long terme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI CHOISIR DR ASAH */}
      <section className="w-full border-b border-slate-800/60 bg-slate-950 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-50">
                Pourquoi choisir le Dr Asah comme cardiologue à Douala
              </h2>
              <p className="mt-3 text-sm md:text-[15px] text-slate-300">
                Le Dr Asah combine une expertise en cardiologie, une approche
                centrée sur le patient et un fort accent sur la prévention. Son
                objectif est d&apos;offrir un suivi personnalisé à chaque
                patient, en tenant compte de son contexte médical et familial.
              </p>
              <ul className="mt-4 space-y-2 text-sm md:text-[15px] text-slate-200">
                <li>• Approche préventive et explicative des maladies du coeur</li>
                <li>• Accès aux examens essentiels sur place (ECG, echo)</li>
                <li>• Suivi régulier adapté aux facteurs de risque</li>
                <li>• Communication claire en français et en anglais</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300">
                Localisation
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-50">
                Total Care Medical Clinic, Douala Bonaberi
              </h3>
              <p className="mt-3 text-sm md:text-[15px] text-slate-300">
                Le cabinet de cardiologie est situé au Total Care Medical
                Clinic, Bonaberi, ancien route, derrière UBA Bank. Facilement
                accessible depuis différentes zones de Douala.
              </p>
              <p className="mt-3 text-sm md:text-[15px] text-slate-200">
                Téléphone :{" "}
                <a
                  href="tel:+237674806650"
                  className="font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  +237 674 806 650
                </a>
              </p>
              <Link
                href="/fr#booking"
                className="mt-4 inline-flex rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
              >
                Prendre rendez-vous en ligne
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ REUSE */}
      <FaqSectionFr />
    </main>
  );
}
