import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Rajdhani } from "next/font/google";
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
  title: "Rylkon — Programmatic SEO that earns every URL",
  description:
    "Rylkon designs programmatic SEO systems: validated data, strong templates, and controlled indexing so long-tail pages rank — and stay indexed.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Rylkon — Programmatic SEO",
    description:
      "Templates, structured data, and indexing discipline for organic growth that compounds.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
