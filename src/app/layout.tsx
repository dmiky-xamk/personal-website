import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./ui/footer/footer";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mikael Kyllönen",
  description:
    "Full Stack Developer with a passion for solving challenges and delivering high-quality, scalable applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
