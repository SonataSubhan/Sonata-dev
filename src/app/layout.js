
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
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(0,0,0,1)_10%,rgba(0,0,0,0.6)_30%,transparent_100%),radial-gradient(circle_at_70%_80%,rgba(255,0,0,0.1)_0%,transparent_100%)] blur-lg" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
