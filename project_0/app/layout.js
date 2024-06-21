import { Inter, Playfair_Display } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import PageTransition from "@/app/components/PageTransition";
import StairTransition from "@/app/components/ui/StairTransition";

const inter = Inter({ subsets: ["latin"] });

export const play = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-PlayfairDisplay",
});

export const metadata = {
  title: "N Ethiopia",
  description: "Creative Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={play.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
