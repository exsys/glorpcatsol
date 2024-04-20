import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "$glorp",
  description: "$glorp on solana",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.className} bg-black`}>
        {children}
      </body>
    </html>
  );
}
