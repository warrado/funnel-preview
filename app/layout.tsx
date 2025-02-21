import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perspective Funnel Preview",
  description: "See your funnel in action!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>
        <header
          className="w-full bg-blue-700 mt-6 h-16 flex items-center px-4"
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 1px 8px" }}
        >
          <Image
            src="https://perspective.imgix.net/assets/app/logo/256x256.png?auto=compress&dpr=2"
            alt="Perspective Logo"
            width={100}
            height={100}
          />
          <h1 className="text-white text-2xl font-semibold ml-4">
            Perspective Funnel Preview
          </h1>
        </header>
        <main className="h-full w-full">{children}</main>
        <footer className="fixed bottom-0 w-full bg-blue-700 text-sm text-white pt-3 pb-2 pl-4">
          Made with ❤️ using Next.js
        </footer>
      </body>
    </html>
  );
}
