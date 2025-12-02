// app/sections/BookingSection.tsx
"use client";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import GlowBullet from "@/app/components/GlowBullet";


export default function BookingSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setStatusType(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      preferredDate: formData.get("preferredDate")?.toString() || "",
      preferredTime: formData.get("preferredTime")?.toString() || "",
      reason: formData.get("reason")?.toString() || "",
    };

    try {
      const res = await fetch("/api/book-visit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusType("error");
        setStatusMessage(
          data?.error || "Could not send your request. Please try again."
        );
        return;
      }

      setStatusType("success");
      setStatusMessage(
        "Your request has been sent. We will contact you to confirm your appointment."
      );
      form.reset();
    } catch (err) {
      console.error(err);
      setStatusType("error");
      setStatusMessage(
        "Something went wrong while sending your request. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
      id="book-visit"
      className="relative overflow-hidden py-16 text-white sm:py-20"
    >
        {/* Background image */}
<div className="pointer-events-none absolute inset-0 -z-10">
  <Image
    src="/images/medical report 3d-heart.jpg"
    alt="Booking background"
    fill
    className="object-cover opacity-100 mix-blend-overlay"
  />

</div>

      {/* background glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-20 bg-gradient-to-b from-teal-500/25 to-transparent blur-2xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-start lg:px-8">
        {/* LEFT: Copy and steps */}
        <div className="flex-1 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Book your preventive heart checkup
            </h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Use this form to request an appointment for a preventive
              cardiology visit or follow up consultation. We will contact you to
              confirm the date and time and answer any questions.
            </p>
          </div>

         <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-2 sm:text-sm">
  {/* What happens after you submit */}
  <motion.div
    className="space-y-2"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    variants={listVariants}
  >
    <h3 className="text-sm font-semibold text-teal-300">
      What happens after you submit
    </h3>
    <motion.ul className="space-y-3">
      <motion.li
        variants={itemVariants}
        className="flex items-start gap-3"
      >
        <GlowBullet />
        <span>We review your request and contact you by phone or WhatsApp</span>
      </motion.li>
      <motion.li
        variants={itemVariants}
        className="flex items-start gap-3"
      >
        <GlowBullet />
        <span>Together, we choose a suitable time and date</span>
      </motion.li>
      <motion.li
        variants={itemVariants}
        className="flex items-start gap-3"
      >
        <GlowBullet />
        <span>You receive instructions on how to prepare for your visit</span>
      </motion.li>
    </motion.ul>
  </motion.div>

  {/* Best visits for this form */}
  <motion.div
    className="space-y-2"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    variants={listVariants}
  >
    <h3 className="text-sm font-semibold text-teal-300">
      Best visits for this form
    </h3>
    <motion.ul className="space-y-3">
      <motion.li
        variants={itemVariants}
        className="flex items-start gap-3"
      >
        <GlowBullet />
        <span>Preventive heart checkups</span>
      </motion.li>
      <motion.li
        variants={itemVariants}
        className="flex items-start gap-3"
      >
        <GlowBullet />
        <span>Hypertension and cholesterol review</span>
      </motion.li>
      <motion.li
        variants={itemVariants}
        className="flex items-start gap-3"
      >
        <GlowBullet />
        <span>Follow up after ECG, echo, or lab tests</span>
      </motion.li>
    </motion.ul>
  </motion.div>
</div>


          <p className="text-xs text-slate-400 sm:text-sm">
            If you have severe chest pain, difficulty breathing, or symptoms
            suggesting an emergency, please seek urgent medical care
            immediately rather than using this form.
          </p>
        </div>

        {/* RIGHT: Booking form card */}
        <div className="flex-1">
          <div className="relative mx-auto max-w-md">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <h3 className="mb-4 text-lg font-semibold text-white">
                Appointment request form
              </h3>

              <form
                className="space-y-4 text-xs sm:text-sm"
                onSubmit={handleSubmit}
              >
                <div className="space-y-1">
                  <label className="block text-slate-200" htmlFor="fullName">
                    Full name<span className="text-teal-300">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-teal-400/0 transition focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/40"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-200" htmlFor="phone">
                    Phone / WhatsApp number
                    <span className="text-teal-300">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-teal-400/0 transition focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/40"
                    placeholder="e.g. +237..."
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="block text-slate-200"
                    htmlFor="preferredDate"
                  >
                    Preferred date
                  </label>
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-teal-400/0 transition focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/40"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    className="block text-slate-200"
                    htmlFor="preferredTime"
                  >
                    Preferred time of day
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-teal-400/0 transition focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/40"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a time window
                    </option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                    <option>No preference</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-200" htmlFor="reason">
                    Reason for visit
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={3}
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-3 py-2 text-sm text-white outline-none ring-teal-400/0 transition focus:border-teal-400/70 focus:ring-2 focus:ring-teal-400/40"
                    placeholder="Short description: preventive checkup, hypertension follow up, chest discomfort, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-teal-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/40 transition hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Submit request"}
                </button>
              </form>

              {statusMessage && (
                <p
                  className={`mt-3 text-[0.7rem] ${
                    statusType === "success"
                      ? "text-teal-300"
                      : "text-red-400"
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
