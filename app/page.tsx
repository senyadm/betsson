// app/page.tsx
import Image from "next/image";
import Link from "next/link";

// import CasinoGames from "./components/CasinoGames";
// import LiveCasino from "./components/LiveCasino";
// import SportsBetting from "./components/SportsBetting";
// import LiveBetting from "./components/LiveBetting";
// import ResponsibleGaming from "./components/ResponsibleGaming";
import SafetyLicense from "./components/SafetyLicense";
import CasinoGames from "./components/CasinoGames";
import LiveCasino from "./components/LiveCasino";
import SportsBetting from "./components/SportsBetting";
import LiveBetting from "./components/LiveBetting";
import ResponsibleGaming from "./components/ResponsibleGaming";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Hero-блок */}
      <section className="container mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center">
        {/* Левый столбец: заголовок, текст, кнопка */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Betsson GR: Καζίνο Ελλάδα – Παίξε Νόμιμα και Ασφαλώς Online
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Η Betsson αποτελεί μια από τις κορυφαίες επιλογές για online καζίνο
            στην Ελλάδα, προσφέροντας μια ασφαλή και διασκεδαστική εμπειρία
            παιχνιδιού. Η Betsson διαθέτει μια πλήρως εξοπλισμένη mobile app που
            επιτρέπει στους χρήστες να συμμετέχουν σε δραστηριότητες παιχνιδιού
            εν κινήσει, με εύκολη πρόσβαση και ομαλή πλοήγηση. Με πλήρη
            αδειοδότηση από την ΕΕΕΠ, παρέχει πρόσβαση σε χιλιάδες παιχνίδια,
            live καζίνο και αθλητικό στοίχημα, καθώς και διάφορα μπόνους και
            προσφορές.
          </p>
          <Link
            href="/register"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-transform duration-200 hover:scale-105"
          >
            Παίξε τώρα
          </Link>
        </div>

        {/* Правый столбец: картинка */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/home.jpg"
            alt="Betsson Καζίνο Ελλάδα"
            width={600}
            height={450}
            className="rounded-lg shadow-xl object-cover"
            priority
          />
        </div>
      </section>

      {/* Прочие секции главной страницы */}
      <section className="container mx-auto px-4 space-y-8 pb-16">
        <SafetyLicense />
        <CasinoGames />
        <LiveCasino />
        <SportsBetting />
        <LiveBetting />
        <ResponsibleGaming />
      </section>
    </main>
  );
}
