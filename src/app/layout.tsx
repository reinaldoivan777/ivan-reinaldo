import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
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
  title: {
    default: "Ivan Reinaldo — Full-Stack Software Engineer",
    template: "%s | Ivan Reinaldo",
  },
  description:
    "Full-Stack Software Engineer specializing in TypeScript, React, Next.js, Node.js and production backend systems.",
  applicationName: "Ivan Reinaldo Portfolio",
  authors: [{ name: "Ivan Reinaldo" }],
  creator: "Ivan Reinaldo",
  publisher: "Ivan Reinaldo",
  keywords: [
    "Ivan Reinaldo",
    "Full-Stack Software Engineer",
    "Senior Software Engineer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Backend Systems",
    "Fintech",
    "Payments",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ivan Reinaldo — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in TypeScript, React, Next.js, Node.js and production backend systems.",
    siteName: "Ivan Reinaldo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivan Reinaldo — Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in TypeScript, React, Next.js, Node.js and production backend systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-soft"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
