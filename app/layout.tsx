import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Eclipse Optics — Premium Solar Eclipse Glasses for Institutions & Events",
  description:
    "Solar eclipse glasses compliant with EN ISO 12312-2:2015 and CE marked under EU PPE Regulation 2016/425. Institutional supply for museums, observatories, science centers, and public events.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
