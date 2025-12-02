import Image from "next/image";

const servicesFr = [
  {
    slug: "ecg",
    title: "ECG et analyse du rythme cardiaque",
    description:
      "ECG 12 dérivations et analyse du rythme pour détecter précocement les arythmies, avant qu’elles ne provoquent des symptômes ou des complications.",
    icon: "/icons/Heartbeat1.png",
  },
  {
    slug: "echo",
    title: "Échocardiographie (échographie cardiaque)",
    description:
      "Échographie non invasive pour évaluer la structure du cœur, le fonctionnement des valves et la force de contraction en temps réel.",
    icon: "/icons/ultrasound.png",
  },
  {
    slug: "hypertension",
    title: "Suivi de l’hypertension et du cholestérol",
    description:
      "Plans de traitement ciblés pour contrôler la tension, les lipides et les facteurs métaboliques qui endommagent le cœur en silence.",
    icon: "/icons/Blood Pressure1.png",
  },
  {
    slug: "prevention",
    title: "Programmes de cardiologie préventive",
    description:
      "Suivi à long terme, accompagnement sur le mode de vie et optimisation des traitements pour protéger votre cœur sur plusieurs années.",
    icon: "/icons/Heart Hand Care Flag Of Cameroon1.png",
  },
];

export default function ServicesSectionFr() {
  return (
    <section
      id="services"
      className="relative bg-slate-950 py-16 text-white sm:py-20"
    >
      {/* halo subtil */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-teal-500/30 to-transparent blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        {/* Titre */}
        <div className="mb-10 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Des services de cardiologie centrés sur la prévention
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            De l’ECG à l’échocardiographie en passant par la gestion des facteurs
            de risque, chaque consultation vise à détecter les problèmes tôt et
            à établir un plan clair pour votre cœur.
          </p>
        </div>

        {/* Cartes de services */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {servicesFr.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col rounded-3xl border border-white/5 bg-white/5 p-5 shadow-lg shadow-black/40 backdrop-blur-md transition hover:-translate-y-1 hover:border-teal-400/60 hover:bg-white/10"
            >
              {/* Icône */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/70 via-slate-800/80 to-slate-900/40">
                {service.icon ? (
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                ) : (
                  <span className="text-xl">🫀</span>
                )}
              </div>

              <h3 className="mb-2 text-sm font-semibold sm:text-base">
                {service.title}
              </h3>
              <p className="text-xs text-slate-300 sm:text-sm">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
