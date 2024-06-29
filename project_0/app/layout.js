import { Inter, Roboto_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import PageTransition from "@/app/components/PageTransition";
import StairTransition from "@/app/components/ui/StairTransition";
import Footer from "./components/Footer";
import ContactSm from "./components/head_contact/ContactSm";

const inter = Inter({ subsets: ["latin"] });

export const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--Roboto_Mono",
});

export const metadata = {
  title: "N Ethiopia",
  description: "Creative Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <ContactSm />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
