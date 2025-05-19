// app/components/CasinoGames.tsx
import Image from "next/image";
import Link from "next/link";

const EXTERNAL = "https://www.betsson.gr/el/casino";

const games = [
  {
    title: "Φρουτάκια από κορυφαίους Providers",
    description:
      "NetEnt, Microgaming, Pragmatic Play, Quickspin, Spinmatic, Amusnet, Relax Gaming κ.ά.",
    imageSrc: "/slots.jpg",
  },
  {
    title: "Live Καζίνο",
    description:
      "Ρουλέτα, Μπλάκτζακ και Μπακαρά από Evolution Gaming σε πραγματικό χρόνο.",
    imageSrc: "/live-casino.jpg",
  },
  {
    title: "Επιτραπέζια & Βίντεο Πόκερ",
    description:
      "Κλασικά τραπέζια και video poker με υψηλή ποιότητα γραφικών και σενάρια.",
    imageSrc: "/table-games.jpg",
  },
];

export default function CasinoGames() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-8 text-center">
          Τεράστια Ποικιλία Παιχνιδιών Καζίνο
        </h2>

        {/* Вступительный текст */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          Η Betsson προσφέρει μια εντυπωσιακή γκάμα παιχνιδιών και πρωταθλημάτων,
          συνεργαζόμενη με κορυφαίους παρόχους λογισμικού. Οι διαθέσιμες επιλογές
          και χαρακτηριστικά περιλαμβάνουν:
        </p>

        {/* Карточки */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {games.map(({ title, description, imageSrc }) => (
            <Link
              key={title}
              href={EXTERNAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-purple-700 hover:bg-purple-600 text-white rounded-xl overflow-hidden shadow-lg transition transform hover:scale-105"
            >
              <div className="relative w-full h-56">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                  {title}
                </h3>
                <p className="text-gray-200">{description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Заключительный абзац */}
        <p className="text-lg md:text-xl text-gray-600 mt-16 max-w-2xl mx-auto text-center">
          Επιπλέον, η πλατφόρμα προσφέρει μια μεγάλη ποικιλία από πρωταθλήματα και
          διοργανώσεις για στοίχημα, καλύπτοντας τόσο δημοφιλείς όσο και λιγότερο
          εμπορικές αγορές.
        </p>

        {/* Кнопка CTA */}
        <div className="text-center mt-8">
          <Link
            href={EXTERNAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-transform duration-200 hover:scale-105"
          >
            Παίξε τώρα
          </Link>
        </div>
      </div>
    </section>
  );
}
