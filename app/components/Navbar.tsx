// app/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isFrench = pathname.startsWith("/fr");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        isScrolled
          ? "backdrop-blur-xl bg-slate-950/75 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo / Name */}
        <Link href="#home" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-rose-500 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/40">
            🫀
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Dr. Asah Syxtus</span>
            <span className="text-[0.65rem] text-slate-300">
              {isFrench ? "Cardiologue" : "Cardiologist"}
            </span>
          </div>
        </Link>

        {/* Desktop links + language toggle */}
        <div className="hidden items-center gap-6 text-xs text-slate-200 sm:flex">
          <a href="#services" className="hover:text-teal-300">
            {isFrench ? "Services" : "Services"}
          </a>
          <a href="#journey" className="hover:text-teal-300">
            {isFrench ? "Parcours préventif" : "Preventive journey"}
          </a>
          <a href="#about" className="hover:text-teal-300">
            {isFrench ? "À propos" : "About"}
          </a>
          <a href="#clinic" className="hover:text-teal-300">
            {isFrench ? "Clinique" : "Clinic"}
          </a>
          <a
            href="#book-visit"
            className="rounded-full bg-teal-400 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-md shadow-teal-500/40 hover:bg-teal-300"
          >
            {isFrench ? "Prendre rendez-vous" : "Book a visit"}
          </a>

          {/* EN / FR toggle */}
          <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-1 py-0.5 text-[0.7rem]">
            <Link
              href="/"
              className={`rounded-full px-2 py-1 ${
                !isFrench
                  ? "bg-teal-400 text-slate-950 shadow-sm shadow-teal-500/40"
                  : "text-slate-200 hover:bg-white/10"
              }`}
            >
              EN
            </Link>
            <Link
              href="/fr"
              className={`rounded-full px-2 py-1 ${
                isFrench
                  ? "bg-teal-400 text-slate-950 shadow-sm shadow-teal-500/40"
                  : "text-slate-200 hover:bg-white/10"
              }`}
            >
              FR
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/30 p-2 text-slate-100 sm:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden">
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <div className="space-y-2 rounded-3xl border border-white/10 bg-slate-950/95 p-4 text-sm text-slate-100 shadow-xl">
              <a
                href="#services"
                className="block rounded-2xl px-3 py-2 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {isFrench ? "Services" : "Services"}
              </a>
              <a
                href="#journey"
                className="block rounded-2xl px-3 py-2 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {isFrench ? "Parcours préventif" : "Preventive journey"}
              </a>
              <a
                href="#about"
                className="block rounded-2xl px-3 py-2 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {isFrench ? "À propos" : "About"}
              </a>
              <a
                href="#clinic"
                className="block rounded-2xl px-3 py-2 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {isFrench ? "Clinique" : "Clinic"}
              </a>
              <a
                href="#book-visit"
                className="block rounded-2xl bg-teal-400 px-3 py-2 text-center font-semibold text-slate-950 hover:bg-teal-300"
                onClick={() => setOpen(false)}
              >
                {isFrench ? "Prendre rendez-vous" : "Book a visit"}
              </a>

              {/* Mobile EN / FR toggle */}
              <div className="mt-2 flex justify-center">
                <div className="flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-1 py-0.5 text-[0.75rem]">
                  <Link
                    href="/"
                    className={`rounded-full px-2 py-1 ${
                      !isFrench
                        ? "bg-teal-400 text-slate-950 shadow-sm shadow-teal-500/40"
                        : "text-slate-200 hover:bg-white/10"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    EN
                  </Link>
                  <Link
                    href="/fr"
                    className={`rounded-full px-2 py-1 ${
                      isFrench
                        ? "bg-teal-400 text-slate-950 shadow-sm shadow-teal-500/40"
                        : "text-slate-200 hover:bg-white/10"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    FR
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
