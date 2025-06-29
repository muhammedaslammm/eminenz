// app/layout.js
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/appContext";
import WhatsappIcon from "@/components/WhatsappIcon";
import Menu from "@/components/Menu";

const inter_tight = Inter_Tight({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata = {
  title: "Total Solutions",
  description:
    "Total Solutions General Trading W.L.L, based in Abu Dhabi and founded in 2009, is a trusted provider of industrial engineering products and services across sectors like Oil & Gas, Power, Pharma, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`antialiased relative bg-white ${inter_tight.className} overflow-x-hidden`}
      >
        <AppProvider>
          <Header />
          {children}
          <Footer />
          <Menu />
        </AppProvider>
        {/* <WhatsappIcon /> */}
      </body>
    </html>
  );
}
