"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlowBullet from "@/app/components/GlowBullet";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function ClinicSection() {
  return (
    <section
      id="clinic"
      className="relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20"
    >
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-teal-500/15 via-slate-950/80 to-slate-950 blur-2xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-center lg:px-8">
        {/* LEFT: text with its own background image */}
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Background image just for this column */}
          

          {/* Glass card with content */}
          <div className="space-y-5 rounded-3xl border border-white/5 bg-slate-950/30 p-5 shadow-lg shadow-black/40 backdrop-blur-xl">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Your clinic in Douala for preventive heart care
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Total Care Medical Clinic is a modern multidisciplinary clinic in
                Douala. The cardiology department focuses on prevention, early
                diagnosis and ongoing follow up for your heart and vascular
                health, in a calm and respectful environment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Environment and comfort */}
              <motion.div
                className="space-y-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={listVariants}
              >
                <h3 className="text-sm font-semibold text-teal-300">
                  Environment and comfort
                </h3>
                <motion.ul className="space-y-3 text-xs text-slate-300 sm:text-sm">
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <GlowBullet />
                    <span>Easy to access location in Douala</span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <GlowBullet />
                    <span>
                      Clean, quiet consultation rooms for heart evaluations
                    </span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <GlowBullet />
                    <span>
                      Staff trained to support anxious or first time patients
                    </span>
                  </motion.li>
                </motion.ul>
              </motion.div>

              {/* Equipment and services */}
              <motion.div
                className="space-y-2"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={listVariants}
              >
                <h3 className="text-sm font-semibold text-teal-300">
                  Equipment and services
                </h3>
                <motion.ul className="space-y-3 text-xs text-slate-300 sm:text-sm">
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <GlowBullet />
                    <span>On site ECG and echocardiography</span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <GlowBullet />
                    <span>
                      Blood pressure, cholesterol and diabetes screening
                    </span>
                  </motion.li>
                  <motion.li
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <GlowBullet />
                    <span>
                      Continuous follow up for hypertension, heart failure and
                      risk factor control
                    </span>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </div>

            <p className="text-xs text-slate-400 sm:text-sm">
              You can use the booking form below to request a preventive heart
              checkup, follow up visit or second opinion. If you are unsure
              which type of visit you need, we will guide you when we contact
              you.
            </p>
          </div>
        </motion.div>

        {/* RIGHT: Clinic visual card */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative mx-auto max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/60 backdrop-blur-xl">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-900">
                <Image
                  src="/images/clinic-interior.jpg" // replace with your image
                  alt="Total Care Medical Clinic interior"
                  fill
                  className="object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              </div>

              <div className="mt-3 space-y-2 text-xs text-slate-200 sm:text-sm">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-wide text-teal-300">
                      Location
                    </p>
                    <p className="text-sm font-semibold">
                      Behind UBA Bank, Ancien route, Bonaberi, Douala
                    </p>
                  </div>
                  
                </div>
                <p className="text-[0.75rem] text-slate-300">
                  Appointments by booking request and direct phone or WhatsApp.
                  Emergency symptoms should be taken to the nearest emergency
                  department.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
