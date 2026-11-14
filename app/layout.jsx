import { Familjen_Grotesk, Metal } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const grotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-grotesk-src",
});
const metal = Metal({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-metal-src",
});

export const metadata = {
  title: "OTW | On The Way to Win",
  description:
    "We are not there yet, but every move we make is on the way to win.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${grotesk.variable} ${metal.variable} relative isolate min-h-screen overflow-x-hidden font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}