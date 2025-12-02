import type { Metadata } from "next";
import React from "react";
import "../globals.css";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Cardiologie Préventive à Douala – Dr. Asah Syxtus",
  description:
    "Consultations spécialisées en cardiologie préventive à Douala. ECG, échographie cardiaque, gestion de l’hypertension, bilan lipidique, dépistage des maladies cardiovasculaires au Total Care Medical Clinic.",
  alternates: {
    canonical: "https://yourdomain.com/fr",
    languages: {
      "fr-FR": "https://yourdomain.com/fr",
      "en-US": "https://yourdomain.com/",
    },
  },
  openGraph: {
    title: "Cardiologie Préventive à Douala – Dr. Asah Syxtus",
    description:
      "Dépistage cardiovasculaire, ECG, échocardiographie, prise en charge de l’hypertension et du cholestérol au Total Care Medical Clinic Douala.",
    url: "https://yourdomain.com/fr",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image-fr.jpg",
        width: 1200,
        height: 630,
        alt: "Total Care Medical Clinic – Cardiologie Préventive",
      },
    ],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://yourdomain.com/fr/#doctor",
      name: "Dr. Asah Syxtus",
      jobTitle: "Cardiologue",
      medicalSpecialty: [
        "Cardiologie",
        "Cardiologie Préventive",
        "Hypertension",
        "Dyslipidémie",
      ],
      worksFor: { "@id": "https://yourdomain.com/fr/#clinic" },
      image: "https://yourdomain.com/dr-asah.jpg",
      url: "https://yourdomain.com/fr",
      description:
        "Cardiologue spécialisé en médecine préventive, ECG, échocardiographie et dépistage cardiovasculaire à Douala.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Total Care Medical Clinic, Bonaberi",
        addressLocality: "Douala",
        addressCountry: "CM",
      },
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://yourdomain.com/fr/#clinic",
      name: "Total Care Medical Clinic Douala",
      description:
        "Clinique spécialisée en prévention médicale avec un service de cardiologie et des examens avancés.",
      url: "https://yourdomain.com/fr",
      medicalSpecialty: "Cardiologie",
      image: "https://yourdomain.com/clinic.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bonamoussadi",
        addressLocality: "Douala",
        addressCountry: "CM",
      },
      openingHours: "Mo-Su 08:00-08:00",
      telephone: "+237674806650",
    },
    {
      "@type": "WebPage",
      name: "Cardiologie Préventive à Douala – Dr. Asah Syxtus",
      url: "https://yourdomain.com/fr",
      description:
        "ECG, échocardiographie, gestion de l’hypertension et dépistage cardiovasculaire.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: "https://yourdomain.com/fr",
        },
      ],
    },
  ],
};

export default function FrenchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </body>
    </html>
  );
}
