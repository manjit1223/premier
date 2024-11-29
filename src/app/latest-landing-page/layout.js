import React from "react";
import Navbar from "@/components/Website/LatestLandingPage/Navbar/Navbar";
import Footer from "@/components/Website/LatestLandingPage/Footer/Footer";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow grid gap-14 !p-0 !m-0">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
