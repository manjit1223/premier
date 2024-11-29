import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import StoreProvider from "./storeProvider";
import { cookies } from 'next/headers';
import NavbarFooterWrapper from "./navbarFooterWrapper";

export const metadata = {
  title: "Premier",
  description: "Premier Landing Page",
  openGraph: {
    title: "Premier Landing",
    description: "Premier Landing Page",
    type: "website",
    locale: "en_US",
    siteName: "Premier",
  },
};

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value; 

  return (
    <html lang="en">
      <body className="container bg-black text-white">
        <StoreProvider>
          <div className="flex flex-col min-h-screen">
            <NavbarFooterWrapper>
            <main className="flex-grow grid gap-14 !p-0 !m-0">
              {children}
            </main>
            </NavbarFooterWrapper>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
