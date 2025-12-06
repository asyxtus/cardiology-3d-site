// app/sections/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import GlowBullet from "@/app/components/GlowBullet";
import Image from "next/image";

export default function AboutSection() {
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
      id="about"
      className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20"
    >
      {/* subtle background accents */}
      <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#D61F34]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#0EA5E9]/15 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center lg:px-8">
        {/* LEFT: Portrait + card */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-sm">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
              {/* portrait container */}
              <div className="relative h-[450px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#020617] via-[#020617] to-[#020617]">
                <Image
                  src="/images/doctor-portrait.jpg"
                  alt="Cardiologist portrait"
                  fill
                  className="object-cover object-center"
                />

                {/* subtle 3D heart badge */}
                <div className="pointer-events-none absolute left-3 top-3 rounded-2xl bg-black/40 px-3 py-1 text-[0.7rem] uppercase tracking-wide text-teal-300 backdrop-blur-md">
                  Preventive cardiology
                </div>
              </div>

              {/* small info row under photo */}
              <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-200 sm:text-sm">
                <div>
                  <div className="font-semibold text-white">
                    Dr. Asah Syxtus Mbuo
                  </div>
                  <div className="text-slate-300">
                    Cardiologist & Preventive Medicine
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 px-3 py-2 text-right text-[0.7rem] text-slate-300 backdrop-blur-md">
                  
                  <div>Practicing at Total Care Medical Clinic</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Bio text */}
        <div className="flex-1 space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              About your cardiologist
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Dr. Asah Syxtus is a leading cardiologist in Douala, offering comprehensive heart evaluation and preventive care at Total Care Medical Clinic. 
              His services include ECG, echocardiography, hypertension management, lipid control, and cardiovascular risk assessment.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2 sm:text-sm">
    {/* Clinical background */}
    <motion.div
      className="space-y-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={listVariants}
    >
      <h3 className="text-sm font-semibold text-teal-300">
        Clinical background
      </h3>
      <motion.ul className="space-y-3 text-xs text-slate-300 sm:text-sm">
        <motion.li
          variants={itemVariants}
          className="flex items-start gap-3"
        >
          <GlowBullet />
          <span>Medical training and cardiology experience in Ukraine</span>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="flex items-start gap-3"
        >
          <GlowBullet />
          <span>Practice in Douala focused on heart and vascular health</span>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="flex items-start gap-3"
        >
          <GlowBullet />
          <span>
            Experience with ECG, echocardiography, and risk management
          </span>
        </motion.li>
      </motion.ul>
    </motion.div>

    {/* Approach to care */}
    <motion.div
      className="space-y-2"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={listVariants}
    >
      <h3 className="text-sm font-semibold text-teal-300">
        Approach to care
      </h3>
      <motion.ul className="space-y-3 text-xs text-slate-300 sm:text-sm">
        <motion.li
          variants={itemVariants}
          className="flex items-start gap-3"
        >
          <GlowBullet />
          <span>Clear explanations in language you understand</span>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="flex items-start gap-3"
        >
          <GlowBullet />
          <span>Focus on prevention, not just crisis treatment</span>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="flex items-start gap-3"
        >
          <GlowBullet />
          <span>Personalized plans that fit your life and goals</span>
        </motion.li>
      </motion.ul>
    </motion.div>
  </div>

          <div className="space-y-3 text-xs text-slate-300 sm:text-sm">
            <p>
              My goal is to make cardiology feel less intimidating and more
              collaborative. I want you to leave each consultation knowing what
              is happening with your heart, why it matters, and what we are
              doing together to improve it.
            </p>
            <p>
              Whether you are dealing with high blood pressure, heart failure, cholesterol,
              chest discomfort, or simply want to check in on your heart health,
              you are welcome to book a preventive visit before problems become
              urgent.
            </p>
          </div>

          <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
            <div className="rounded-full border border-teal-400/60 bg-teal-400/10 px-3 py-1">
              Preventive cardiology
            </div>
            <div className="rounded-full border border-teal-400/60 bg-teal-400/10 px-3 py-1">
              Hypertension & risk factors
            </div>
            <div className="rounded-full border border-teal-400/60 bg-teal-400/10 px-3 py-1">
              Patient education
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
