// app/components/FaqSectionFr.tsx
import React from "react";

export default function FaqSectionFr() {
  return (
    <section
      id="faq"
      className="relative w-full bg-slate-950/80 border-t border-slate-800/60 py-16 md:py-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 md:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
            FAQ
          </p>
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-slate-50">
            Questions fréquentes – Cardiologue à Douala
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-300">
            Réponses aux questions les plus courantes sur la{" "}
            <span className="font-medium text-cyan-300">
              consultation chez un cardiologue à Douala
            </span>
            , le dépistage des maladies cardiovasculaires et la prise de
            rendez-vous au Total Care Medical Clinic.
          </p>
        </div>

        <div className="grid gap-4 md:gap-5">
          {/* Q1 */}
          <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 md:px-6 md:py-5 transition hover:border-cyan-500/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                Quels sont les services proposés par un cardiologue à Douala ?
              </h3>
              <span className="shrink-0 rounded-full border border-slate-600 p-1 text-xs text-slate-300 group-open:rotate-90 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-300">
              Un{" "}
              <strong className="font-semibold">
                cardiologue à Douala
              </strong>{" "}
              réalise l’ECG, l’échographie cardiaque, la mesure du risque
              cardiovasculaire, le dépistage et la prise en charge de
              l’hypertension, des troubles du cholestérol, des palpitations,
              douleurs thoraciques et troubles du rythme. Au{" "}
              <strong>Total Care Medical Clinic</strong>, le Dr Asah propose une
              cardiologie préventive complète pour réduire le risque
              d’infarctus et d’AVC.
            </p>
          </details>

          {/* Q2 */}
          <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 md:px-6 md:py-5 transition hover:border-cyan-500/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                Quels symptômes doivent pousser à consulter un cardiologue ?
              </h3>
              <span className="shrink-0 rounded-full border border-slate-600 p-1 text-xs text-slate-300 group-open:rotate-90 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-300">
              Vous devriez consulter un cardiologue en cas de douleurs ou
              oppression thoracique, palpitations, essoufflement inhabituel,
              tension artérielle élevée, gonflement des jambes ou antécédents
              familiaux d’infarctus ou d’AVC. Ces signes peuvent révéler une
              maladie cardiovasculaire qui nécessite un{" "}
              <strong>dépistage rapide à Douala</strong>.
            </p>
          </details>

          {/* Q3 */}
          <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 md:px-6 md:py-5 transition hover:border-cyan-500/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                Où se situe votre cabinet de cardiologie à Douala ?
              </h3>
              <span className="shrink-0 rounded-full border border-slate-600 p-1 text-xs text-slate-300 group-open:rotate-90 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-300">
              Le Dr Asah reçoit au{" "}
              <strong>Total Care Medical Clinic</strong>, situé à Bonaberi,
              ancien route, derrière UBA Bank. La clinique propose une
              consultation spécialisée, l’ECG sur place et l’échographie
              cardiaque dans un environnement dédié à la{" "}
              <strong>cardiologie préventive à Douala</strong>.
            </p>
          </details>

          {/* Q4 */}
          <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 md:px-6 md:py-5 transition hover:border-cyan-500/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                Puis-je faire un ECG ou une échographie cardiaque le jour même ?
              </h3>
              <span className="shrink-0 rounded-full border border-slate-600 p-1 text-xs text-slate-300 group-open:rotate-90 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-300">
              Oui. L’ECG est réalisé en quelques minutes durant la consultation
              et l’échographie cardiaque est généralement disponible le jour
              même selon le planning. C’est particulièrement utile en cas de
              douleur thoracique, palpitations, hypertension mal contrôlée ou
              suivi cardiologique.
            </p>
          </details>

          {/* Q5 */}
          <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 md:px-6 md:py-5 transition hover:border-cyan-500/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                La cardiologie préventive est-elle utile si je n’ai aucun
                symptôme ?
              </h3>
              <span className="shrink-0 rounded-full border border-slate-600 p-1 text-xs text-slate-300 group-open:rotate-90 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-300">
              Oui. De nombreuses maladies cardiaques se développent sans
              symptômes. Un bilan de{" "}
              <strong>cardiologie préventive à Douala</strong> permet de
              dépister précocement l’hypertension, les troubles du rythme et les
              anomalies du cholestérol, avant qu’ils ne provoquent un
              infarctus, un AVC ou une insuffisance cardiaque.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
