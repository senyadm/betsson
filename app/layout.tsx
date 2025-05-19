// app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Betsson Mirror",
  description: "Καθρέφτης Betsson στα Ελληνικά",
  icons: {
    icon: "/favicon.ico",         // основной favicon
    shortcut: "/favicon.ico",     // для некоторых браузеров
    apple: "/favicon.ico",        // иконка для Apple-устройств
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
