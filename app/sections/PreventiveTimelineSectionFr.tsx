import Image from "next/image";

export default function PreventiveTimelineSectionFr() {
  const steps = [
    {
      id: 1,
      title: "Évaluation du mode de vie et des risques",
      description:
        "Nous revoyons vos symptômes, vos habitudes, vos antécédents familiaux, votre tension artérielle et vos bilans de base pour comprendre votre profil de risque cardiaque.",
      tag: "Étape 1",
    },
    {
      id: 2,
      title: "Dépistage et examens diagnostiques",
      description:
        "ECG, échocardiographie et bilans sanguins ciblés nous aident à détecter précocement les anomalies structurelles ou les troubles du rythme, avant qu’ils ne deviennent graves.",
      tag: "Étape 2",
    },
    {
      id: 3,
      title: "Plan de prévention personnalisé",
      description:
        "Vous recevez un plan clair qui peut inclure des changements de mode de vie, un traitement et un calendrier de suivi adaptés à votre cœur et à votre niveau de risque.",
      tag: "Étape 3",
    },
    {
      id: 4,
      title: "Suivi et réévaluation",
      description:
        "Des consultations régulières, la révision des examens et l’ajustement du traitement permettent de stabiliser votre état et de prévenir les complications futures.",
      tag: "Étape 4",
    },
    {
      id: 5,
      title: "Santé cardiaque à long terme",
      description:
        "Nous mettons l’accent sur la prévention à long terme, avec des objectifs clairs, de l’éducation et un accompagnement continu pour garder votre cœur en bonne santé.",
      tag: "Étape 5",
    },
  ];

  return (
    <section
      id="journey"
      className="relative bg-slate-950 py-16 text-white sm:py-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/robotic-human-heart.jpg"
          alt="Fond visuel de cardiologie préventive"
          fill
          className="object-cover opacity-60 mix-blend-screen"
        />
        {/* overlay sombre pour lisibilité du texte */}
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      {/* soft glow at top */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-teal-500/25 to-transparent blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-10 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Votre parcours de cardiologie préventive, étape par étape
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Au lieu d’attendre l’urgence, nous vous guidons sur un chemin
            clair&nbsp;: de la première évaluation à la protection à long terme
            de votre cœur, avec chaque étape expliquée simplement.
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
            Chaque patient suit une version personnalisée de ce parcours.
            L’objectif est simple&nbsp;: détecter les problèmes tôt, stabiliser
            les facteurs de risque et offrir à votre cœur les meilleures chances
            de rester en bonne santé sur le long terme.
          </p>
        </div>
      </div>
    </section>
  );
}
