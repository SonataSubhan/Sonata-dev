
import "./globals.css";
import Navbar from "./navigations/navbar";

import Footer from "./navigations/footer";
export const metadata = {
  title: "Sonata-dev",
  description: "Portfolio by SonataSubhan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="fixed inset-0 -z-10 bg-linear-to-b from-red-950/20 via-black to-red-950/1" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
