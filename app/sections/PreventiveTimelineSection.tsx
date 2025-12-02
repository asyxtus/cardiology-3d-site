// app/sections/PreventiveTimelineSection.tsx
import Image from "next/image";
export default function PreventiveTimelineSection() {
  const steps = [
    {
      id: 1,
      title: "Lifestyle & Risk Assessment",
      description:
        "We review your symptoms, habits, family history, blood pressure, and basic labs to understand your personal heart risk profile.",
      tag: "Step 1",
    },
    {
      id: 2,
      title: "Screening & Diagnostics",
      description:
        "ECG, echocardiography, and targeted blood tests help us detect early structural changes or rhythm disorders before they become serious.",
      tag: "Step 2",
    },
    {
      id: 3,
      title: "Personalized Prevention Plan",
      description:
        "You receive a clear plan that may include lifestyle changes, medications, and follow-up intervals tailored to your heart and risk level.",
      tag: "Step 3",
    },
    {
      id: 4,
      title: "Monitoring & Follow-up",
      description:
        "Regular checkups, test reviews, and treatment adjustments keep your heart condition stable and prevent future complications.",
      tag: "Step 4",
    },
    {
      id: 5,
      title: "Long-term Heart Health",
      description:
        "We focus on long-term prevention, empowering you with clear goals, education, and ongoing support for a stronger, healthier heart.",
      tag: "Step 5",
    },
  ];

  return (
    <section 
    id="journey"
    className="relative bg-slate-950 py-16 text-white sm:py-20">
      {/* Background image */}
<div className="absolute inset-0">
      <Image
        src="/images/robotic-human-heart.jpg"
        alt="Preventive cardiology visual background"
        fill
        className="object-cover opacity-60 mix-blend-screen"
      />
      {/* optional dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-slate-950/60" />
    </div>

      
      {/* soft glow at top */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-teal-500/25 to-transparent blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-10 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Your preventive cardiology journey, step by step
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Instead of waiting for emergencies, we guide you along a clear path:
            from first assessment to long-term protection of your heart, with
            every step explained in simple language.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative mt-6">
          {/* curved path background for desktop */}
          <div className="pointer-events-none absolute inset-x-4 top-10 hidden h-40 md:block">
            <svg
              viewBox="0 0 800 200"
              className="h-full w-full opacity-40"
              aria-hidden="true"
            >
              <path
                d="M 20 180 C 200 40 400 40 780 120"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 10"
              />
            </svg>
          </div>

          {/* Steps */}
          <div className="grid gap-6 md:grid-cols-5">
            {steps.map((step, idx) => (
              <div
                key={step.id}
                className="relative flex flex-col items-start md:items-center"
              >
                {/* connector line for mobile */}
                {idx !== 0 && (
                  <div className="absolute -left-3 top-4 h-10 w-px bg-gradient-to-b from-teal-400/70 to-cyan-400/70 md:hidden" />
                )}

                {/* numbered node */}
                <div className="relative mb-3 flex items-center md:flex-col">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 via-cyan-400 to-sky-500 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40">
                    {step.id}
                  </div>
                  <span className="ml-3 text-[0.7rem] uppercase tracking-wide text-teal-300 md:ml-0 md:mt-2">
                    {step.tag}
                  </span>
                </div>

                {/* card */}
                <div className="w-full rounded-3xl border border-white/5 bg-white/5 p-4 text-left shadow-lg shadow-black/40 backdrop-blur-md transition hover:-translate-y-1 hover:border-teal-400/60 hover:bg-white/10 md:text-center">
                  <h3 className="mb-2 text-sm font-semibold sm:text-base">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 sm:text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* small caption */}
          <p className="mt-8 max-w-xl text-xs text-slate-400 sm:text-sm">
            Every patient follows a personalized version of this path. The aim
            is simple: catch problems early, stabilize risk factors, and give
            your heart the best chance for a long, healthy life.
          </p>
        </div>
      </div>
    </section>
  );
}
