import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ramin Hamepour",
  description:
    "I'm Ramin Hamepour, a passionate web developer specialized in React, Next.js, and building modern, responsive websites. Check out my projects and resume.",
  keywords:
    "Web Developer, Frontend Developer, React Developer, Next.js, Portfolio, JavaScript, HTML, CSS, Tailwind, Remote Developer , رامین حمه پور , برنامه نویس , فرانت اند , برنامه نویس وب , نوبت دخی آنلاین , ",
  authors: [{ name: "Ramin Hamepour" }],
  viewport: "width=device-width, initial-scale=1.0",
  other: {
    keywords:
      "Web Developer, Frontend Developer, React Developer, Next.js, Portfolio, JavaScript, HTML, CSS, Tailwind, Remote Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
