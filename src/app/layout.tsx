import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { socialLinks } from "@/data/social";
import { absoluteUrl, siteMetadata } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeInitScript = `
try {
  var theme = window.localStorage.getItem("theme");
  if (theme === "light" || theme === "dark") {
    document.documentElement.dataset.theme = theme;
  }
} catch (_) {}
`;

const sameAsLinks = socialLinks
  .filter((link) => link.href?.startsWith("https://"))
  .map((link) => link.href);

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteMetadata.name,
  url: siteMetadata.url,
  email: siteMetadata.email,
  jobTitle: "Full-Stack Software Engineer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta",
    addressCountry: "ID",
  },
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Backend Systems",
    "Payment Systems",
    "API Architecture",
  ],
  ...(sameAsLinks.length > 0 ? { sameAs: sameAsLinks } : {}),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: {
    default: siteMetadata.title,
    template: "%s | Ivan Reinaldo",
  },
  description: siteMetadata.description,
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
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: "Ivan Reinaldo Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
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
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
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
