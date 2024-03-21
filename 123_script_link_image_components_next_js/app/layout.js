import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook App",
  description: "This is facebook, we can connect with world using facebook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="container min-h-[81vh]">

        {children}
        </div>
        <Footer />
        </body>

    </html>
  );
}
