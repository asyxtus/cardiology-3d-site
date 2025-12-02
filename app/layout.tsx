import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Navbar from "@/app/components/Navbar";

export const metadata: Metadata = {
  title: "Preventive Cardiology in Douala – Dr. Asah Syxtus",
  description:
    "Specialized preventive cardiology in Douala. ECG, echocardiography, hypertension management, lipid control, heart failure assessment, chest pain evaluation, and full preventive medicine provided by Dr. Asah Syxtus at Total Care Medical Clinic.",
  alternates: {
    canonical: "https://yourdomain.com/",
    languages: {
      "en-US": "https://yourdomain.com/",
      "fr-FR": "https://yourdomain.com/fr",
    },
  },
  openGraph: {
    title: "Preventive Cardiology in Douala – Dr. Asah Syxtus",
    description:
      "Preventive medicine, heart disease screening, echocardiography, ECG, hypertension and cholesterol management at Total Care Medical Clinic Douala.",
    url: "https://yourdomain.com/",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Total Care Medical Clinic – Preventive Cardiology",
      },
    ],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://yourdomain.com/#doctor",
      name: "Dr. Asah Syxtus",
      jobTitle: "Cardiologist",
      medicalSpecialty: [
        "Cardiology",
        "Preventive Cardiology",
        "Hypertension Management",
        "Lipidology",
      ],
      worksFor: { "@id": "https://yourdomain.com/#clinic" },
      image: "https://yourdomain.com/dr-asah.jpg",
      url: "https://yourdomain.com/",
      description:
        "Cardiologist specializing in preventive medicine, ECG, echocardiography, and heart disease prevention in Douala.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Total Care Medical Clinic, Bonaberi, ancien route, Behind UBA Bank",
        addressLocality: "Douala",
        addressCountry: "CM",
      },
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://yourdomain.com/#clinic",
      name: "Total Care Medical Clinic Douala",
      description:
        "Preventive medical clinic with cardiology, general medicine, and advanced diagnostics.",
      url: "https://yourdomain.com/",
      medicalSpecialty: "Cardiology",
      image: "https://yourdomain.com/clinic.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bonaberi",
        addressLocality: "Douala",
        addressCountry: "CM",
      },
      openingHours: "Mo-Su 08:00-08:00",
      telephone: "+237674806650",
    },
    {
      "@type": "LocalBusiness",
      name: "Total Care Medical Clinic Douala – Cardiology",
      url: "https://yourdomain.com/",
      image: "https://yourdomain.com/clinic-cardio.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bonamoussadi",
        addressLocality: "Douala",
        addressCountry: "CM",
      },
      priceRange: "$$",
    },
    {
      "@type": "WebPage",
      name: "Preventive Cardiology in Douala – Dr. Asah Syxtus",
      url: "https://yourdomain.com/",
      description:
        "Preventive cardiology services including ECG, echocardiography, hypertension, cholesterol management, and early detection.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://yourdomain.com/",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
