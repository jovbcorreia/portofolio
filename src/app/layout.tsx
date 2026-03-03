import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Correia | Full Stack Developer",
  description: "Full Stack Software Developer specializing in modern web technologies. Building scalable, performant applications with React, Node.js, and more.",
  keywords: ["Full Stack Developer", "Software Engineer", "React", "Node.js", "TypeScript", "Portugal"],
  authors: [{ name: "João Correia" }],
  openGraph: {
    title: "João Correia | Full Stack Developer",
    description: "Full Stack Software Developer building modern web applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Correia | Full Stack Developer",
    description: "Full Stack Software Developer building modern web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
