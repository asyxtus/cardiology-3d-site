// app/components/FaqSectionEn.tsx
import React from "react";

export default function FaqSectionEn() {
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
            Frequently asked questions – Cardiologist in Douala
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-300">
            Answers to common questions about cardiology consultations,
            symptoms, and how to see{" "}
            <span className="font-medium text-cyan-300">
              a cardiologist in Douala
            </span>{" "}
            at Total Care Medical Clinic.
          </p>
        </div>

        <div className="grid gap-4 md:gap-5">
          {/* Q1 */}
          <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 md:px-6 md:py-5 transition hover:border-cyan-500/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                What services does a cardiologist in Douala provide?
              </h3>
              <span className="shrink-0 rounded-full border border-slate-600 p-1 text-xs text-slate-300 group-open:rotate-90 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-300">
              A{" "}
              <strong className="font-semibold">
                cardiologist in Douala
              </strong>{" "}
              performs ECG, echocardiography, hypertension management,
              cholesterol control, arrhythmia evaluation, and full
              cardiovascular risk assessment. At{" "}
              <strong>Total Care Medical Clinic</strong>, Dr. Asah offers
              comprehensive preventive heart care to reduce the risk of heart
              attack, stroke, and heart failure.
            </p>
          </details>

          {/* Q2 */}
          <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 md:px-6 md:py-5 transition hover:border-cyan-500/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                What symptoms should prompt me to see a cardiologist?
              </h3>
              <span className="shrink-0 rounded-full border border-slate-600 p-1 text-xs text-slate-300 group-open:rotate-90 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-300">
              You should book a cardiology consultation if you experience chest
              pain or pressure, palpitations, unexplained shortness of breath,
              high blood pressure, high cholesterol, swollen legs, or a family
              history of heart disease. These symptoms can indicate underlying
              cardiovascular problems that require prompt evaluation in{" "}
              <strong>Douala</strong>.
            </p>
          </details>

          {/* Q3 */}
          <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 md:px-6 md:py-5 transition hover:border-cyan-500/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                Where is your cardiology clinic located in Douala?
              </h3>
              <span className="shrink-0 rounded-full border border-slate-600 p-1 text-xs text-slate-300 group-open:rotate-90 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-300">
              Dr. Asah consults at{" "}
              <strong>Total Care Medical Clinic</strong>, located in Bonaberi,
              ancien route, behind UBA Bank. The clinic offers ECG, heart
              ultrasound (echocardiography), and full{" "}
              <strong>cardiology services in Douala</strong> in a preventive
              medicine setting.
            </p>
          </details>

          {/* Q4 */}
          <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 md:px-6 md:py-5 transition hover:border-cyan-500/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                Can I get an ECG or echocardiography on the same day?
              </h3>
              <span className="shrink-0 rounded-full border border-slate-600 p-1 text-xs text-slate-300 group-open:rotate-90 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-300">
              Yes. ECG is performed immediately during the consultation, and
              echocardiography is usually available the same day depending on
              schedule. This is particularly useful for patients with chest
              discomfort, palpitations, poorly controlled blood pressure, or
              those needing follow-up heart imaging in Douala.
            </p>
          </details>

          {/* Q5 */}
          <details className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-4 md:px-6 md:py-5 transition hover:border-cyan-500/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                Do I need heart screening even if I have no symptoms?
              </h3>
              <span className="shrink-0 rounded-full border border-slate-600 p-1 text-xs text-slate-300 group-open:rotate-90 transition-transform">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-slate-300">
              Yes. Many cardiovascular diseases develop silently. Preventive
              screening with a{" "}
              <strong>cardiologist in Douala</strong> helps detect early risk
              factors such as hypertension, arrhythmias, and high cholesterol
              before they cause heart attack, stroke, or heart failure,
              especially in patients with a family history or multiple risk
              factors.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
