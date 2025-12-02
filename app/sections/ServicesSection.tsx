import Image from "next/image";

const services = [
  {
    slug: "ecg",
    title: "ECG & Heart Rhythm Analysis",
    description:
      "12-lead ECG and rhythm assessment to detect arrhythmias early, before they cause symptoms or complications.",
    icon: "/icons/Heartbeat1.png", // TODO: replace or create this file
  },
  {
    slug: "echo",
    title: "Echocardiography (Heart Ultrasound)",
    description:
      "Non-invasive ultrasound to evaluate heart structure, valve function, and pumping strength in real time.",
    icon: "/icons/ultrasound.png", // TODO
  },
  {
    slug: "hypertension",
    title: "Hypertension & Cholesterol Management",
    description:
      "Targeted treatment plans to control blood pressure, lipids, and metabolic risk factors that silently damage the heart.",
    icon: "/icons/Blood Pressure1.png", // TODO
  },
  {
    slug: "prevention",
    title: "Preventive Cardiology Programs",
    description:
      "Long-term follow-up, lifestyle coaching, and medication optimization to protect your heart for years to come.",
    icon: "/icons/Heart Hand Care Flag Of Cameroon1.png", // TODO
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-slate-950 py-16 text-white sm:py-20"
    >
      {/* subtle top divider glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-teal-500/30 to-transparent blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-10 max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Cardiology services designed around prevention
          </h2>
          <p className="text-sm text-slate-300 sm:text-base">
            From ECG and echocardiography to risk-factor management and
            preventive programs, each visit focuses on finding problems early
            and building a clear plan for your heart.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col rounded-3xl border border-white/5 bg-white/5 p-5 shadow-lg shadow-black/40 backdrop-blur-md transition hover:-translate-y-1 hover:border-teal-400/60 hover:bg-white/10"
            >
              {/* Icon bubble */}
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
