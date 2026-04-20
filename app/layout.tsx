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
    "ISO-certified solar eclipse glasses engineered for museums, science centers, observatories, and large-scale public events. Bulk supply and branded programs available.",
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
