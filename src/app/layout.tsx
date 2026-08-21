import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, Rajdhani } from "next/font/google";
import { DocumentMeta } from "@/components/DocumentMeta";
import { JsonLd } from "@/components/JsonLd";
import { SkipLink } from "@/components/SkipLink";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const rajdhani = Rajdhani({
  variable: "--font-logo-face",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rylkon.com"),
  title: {
    default: "Rylkon — Programmatic SEO that earns every URL",
    template: "%s — Rylkon",
  },
  description:
    "Rylkon designs programmatic SEO systems: validated data, strong templates, and controlled indexing so long-tail pages rank — and stay indexed.",
  applicationName: "Rylkon",
  keywords: [
    "programmatic SEO",
    "SEO systems",
    "indexing",
    "template SEO",
    "Rylkon",
    "SEO programático",
  ],
  authors: [{ name: "Rylkon" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Rylkon — Programmatic SEO",
    description:
      "Templates, structured data, and indexing discipline for organic growth that compounds.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    siteName: "Rylkon",
    url: "https://rylkon.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rylkon — Programmatic SEO",
    description:
      "Templates, structured data, and indexing discipline for organic growth that compounds.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f3f8" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${rajdhani.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans text-ink">
        <LanguageProvider>
          <DocumentMeta />
          <JsonLd />
          <SkipLink />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
