"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Website/shared/Navbar/Navbar";
import Footer from "@/components/Website/shared/Footer/Footer";

export default function NavbarFooterWrapper({ children }) {
  const pathname = usePathname();
  const showHeaderFooter =
    pathname !== "/" &&
    !pathname.startsWith("/admin") &&
    !pathname.startsWith("/latest-landing-page");

  return (
    <>
      {showHeaderFooter && <Navbar />}
      {children}
      {showHeaderFooter && <Footer />}
    </>
  );
}
