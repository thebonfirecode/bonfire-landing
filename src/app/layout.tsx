import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Bonfire Code",
  description: "Bonfire Code, Go Digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
