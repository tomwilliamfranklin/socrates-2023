import "./globals.scss";
import { Inter } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tom Franklin",
  description: "Creative full-stack development for the games industry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
