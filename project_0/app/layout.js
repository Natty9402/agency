import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import PageTransition from "@/app/components/PageTransition";
import StairTransition from "@/app/components/ui/StairTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "N Ethiopia",
  description: "Creative Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
