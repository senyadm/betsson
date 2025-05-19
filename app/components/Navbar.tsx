// app/components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";

const EXTERNAL_REG = "https://www.betsson.gr/el/eggrafi?product=common";

export default function Navbar() {
  const menu = [
    { href: "/bonuses-promotions", label: "Μπόνους Προσφορές" },
    { href: "/mobile-app",         label: "Κινητή Εφαρμογή" },
    { href: "/customer-support",   label: "Υποστήριξη Πελατών" },
    { href: "/payment-methods",    label: "Μέθοδοι Πληρωμής" },
    { href: "/faq",               label: "Συχνές Ερωτήσεις" },
  ];

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Логотип слева */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Betsson"
            width={100}
            height={32}
            className="object-contain"
            priority
          />
        </Link>

        {/* Меню */}
        <ul className="hidden md:flex space-x-8">
          {menu.map(({ href, label }) => (
            <li key={href} className="relative group">
              <Link
                href={href}
                className="transition-colors duration-300 hover:text-gray-200"
              >
                {label}
              </Link>
              <span
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-white
                           transition-all duration-300 group-hover:w-full"
              />
            </li>
          ))}
        </ul>

        {/* Σύνδεση / Εγγραφή */}
        <div className="flex items-center space-x-4">
          <Link
            href={EXTERNAL_REG}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-gray-200"
          >
            Σύνδεση
          </Link>
          <Link
            href={EXTERNAL_REG}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600
                       px-4 py-2 rounded
                       transform transition-transform duration-300 hover:scale-105"
          >
            Εγγραφή
          </Link>
        </div>
      </div>
    </nav>
  );
}
