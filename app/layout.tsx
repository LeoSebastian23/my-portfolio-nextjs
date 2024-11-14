"use client"; // Marca este archivo como un componente del lado del cliente

import { useState } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { SetStateAction } from "react";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeSection, setActiveSection] = useState<string>("inicio");

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex">
        <Sidebar setActiveSection={setActiveSection} />
        <main className="ml-60 p-8 w-full">
          {activeSection === "inicio" && <Hero />}
          {activeSection === "proyectos" && <Projects />}
          {activeSection === "about" && <About />}
          {activeSection === "contacto" && <Contact />}
        </main>
        </div>
      </body>
    </html>
  );
}
