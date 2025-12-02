"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const whatsappUrl = useMemo(
    () => "https://wa.me/237674806650", // TODO: replace with your real WhatsApp number
    []
  );

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#050814] via-[#071426] to-[#02040A] text-white">


    {/* 3D background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/heart-with-stethoscope.jpg"
          alt="3D cardiology background"
          fill
          className="h-full w-full object-cover opacity-70 mix-blend-screen"
          priority
        />
        {/* extra darkening overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />
      </div>

      {/* Glowing background blobs */}
      <div className="pointer-events-none absolute -left-32 -top-40 h-72 w-72 rounded-full bg-[#D61F34]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#00998C]/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center md:py-24 lg:px-8">
        
        
        {/* LEFT: copy and CTAs */}
        <motion.div 
        className="relative z-10 flex-1 space-y-6"
        initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}>
          {/* Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-teal-200">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            Preventive cardiology clinic
          </div>

          {/* Heading and subheading */}
          <div className="space-y-4">
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Protect your heart today
              <span className="block text-teal-300">
                before symptoms appear
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-200 sm:text-base">
              Modern cardiology care focused on prevention, early diagnosis, and
              long term heart health, provided by an internationally trained
              cardiologist at Total Care Medical Clinic in Douala.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#book-visit"
              className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40 transition hover:bg-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              Book a free heart checkup
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-50 shadow-sm transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
            >
              WhatsApp consultation
            </a>
          </div>

          {/* Trust bullets */}
          <div className="mt-6 grid gap-3 text-xs text-slate-200 sm:grid-cols-3 sm:text-sm">
            <div className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-300" />
              <span>
                ECG, echocardiography, and blood pressure monitoring on site
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-300" />
              <span>
                Hypertension, cholesterol, and lifestyle risk management
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-300" />
              <span>
                Personalized preventive plans for long term heart health
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-6 text-xs text-slate-300 sm:text-sm">
            <div>
              <div className="text-lg font-semibold text-white">4+</div>
              <div className="text-slate-300">years in cardiology</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-white">1000+</div>
              <div className="text-slate-300">patient visits</div>
            </div>
            <div>
              <div className="text-lg font-semibold text-white">24/7</div>
              <div className="text-slate-300">focus on prevention</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: 3D image block using "medical report 3d-heart liver" */}
        <div className="relative z-10 flex-1">
          <div className="mx-auto w-full max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
              {/* Image container */}
              <div className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B1C2D] via-[#071426] to-[#14030A]">
                <iframe
                  title="Heart Beating 3D"
                  src="https://sketchfab.com/models/9131e6fe5b0b4d54bacb4445c592d4a8/embed?autostart=1&preload=1"
                  className="h-full w-full border-0"
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  allowFullScreen
                />

                {/* Soft overlay */}
                <div className="pointer-events-none absolute inset-x-4 bottom-6 h-12 opacity-80">
                  <svg
                    viewBox="0 0 200 40"
                    className="h-full w-full"
                    aria-hidden="true"
                  >
                    <polyline
                      className="ecg-line"
                      points="0,20 20,20 30,5 40,35 55,20 80,20 95,10 110,30 130,20 160,20 170,8 182,32 200,20"
                      fill="none"
                      stroke="#4ADE80"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Small info tiles under image */}
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-100">
                <div className="rounded-2xl bg-white/5 px-3 py-2 backdrop-blur-md">
                  <div className="text-[0.65rem] uppercase text-slate-300">
                    Resting heart rate
                  </div>
                  <div className="text-sm font-semibold">72 bpm</div>
                </div>
                <div className="rounded-2xl bg-white/5 px-3 py-2 backdrop-blur-md">
                  <div className="text-[0.65rem] uppercase text-slate-300">
                    Blood pressure
                  </div>
                  <div className="text-sm font-semibold">120 / 80</div>
                </div>
                <div className="rounded-2xl bg-white/5 px-3 py-2 backdrop-blur-md">
                  <div className="text-[0.65rem] uppercase text-slate-300">
                    Risk level
                  </div>
                  <div className="text-sm font-semibold text-teal-300">
                    Low to moderate
                  </div>
                </div>
              </div>

              <p className="mt-3 text-[0.7rem] text-slate-300">
                Visual tools help you understand your heart, your risk profile,
                and why prevention changes long term outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
}
