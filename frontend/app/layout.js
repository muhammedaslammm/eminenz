// app/layout.js
import "./globals.css";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/appContext";

const inter_tight = Inter_Tight({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata = {
  title: "Your Site Title",
  description: "Your site description here.",
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
        </AppProvider>
      </body>
    </html>
  );
}
