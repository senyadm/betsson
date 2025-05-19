// app/why-betsson/page.tsx
import React from "react";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const EXTERNAL_CASINO = "https://www.betsson.gr/el/casino";

const reasons = [
  "Νόμιμη λειτουργία με άδειες από την ΕΕΕΠ",
  "Πλούσιο πακέτο καλωσορίσματος και συνεχείς προσφορές",
  "Μεγάλη ποικιλία παιχνιδιών από κορυφαίους παρόχους",
  "Ασφαλείς και γρήγορες συναλλαγές",
  "Ανταγωνιστικές αποδόσεις σε διάφορα αθλήματα και γεγονότα",
  "Εξυπηρέτηση πελατών στα ελληνικά 24/7",
];

const advantages = [
  {
    title: "Νομικά",
    text: `Η Betsson είναι μια νόμιμη και αξιόπιστη πλατφόρμα διαδικτυακών τυχερών παιχνιδιών με πλήρη αδειοδότηση από την ΕΕΕΠ και τη Μαλτέζικη Αρχή Τυχερών Παιχνιδιών (MGA), διασφαλίζοντας ότι συμμορφώνεται με όλους τους νόμους και τις ρυθμίσεις.`,
  },
  {
    title: "Χρήσιμα Εργαλεία",
    text: `Διαθέτει όρια στο λογαριασμό σας, εργαλείο αυτοαξιολόγησης για τις συνήθειες παιχνιδιού σας, καθώς και mobile app για παιχνίδι εν κινήσει.`,
  },
  {
    title: "Λήψη Αποφάσεων",
    text: `Παρέχει αποδόσεις, στατιστικά και προβλέψεις, καθώς και Bet Builder για να συνδυάζετε στοιχήματα σε ένα μόνο γεγονός.`,
  },
];

const faqs = [
  {
    q: "Είναι η Betsson νόμιμη στην Ελλάδα;",
    a: "Ναι, λειτουργεί με άδεια της Ελληνικής Επιτροπής Εποπτείας και Ελέγχου Παιγνίων (ΕΕΕΠ), τηρώντας όλους τους κανονισμούς για online στοίχημα και καζίνο.",
  },
  {
    q: "Είναι ασφαλές να καταθέσω χρήματα στη Betsson;",
    a: "Απολύτως. Όλες οι συναλλαγές προστατεύονται με SSL κρυπτογράφηση και συνεργαζόμαστε με αξιόπιστους παρόχους πληρωμών.",
  },
  {
    q: "Ποια είναι η ελάχιστη κατάθεση;",
    a: "Η ελάχιστη κατάθεση είναι 10€, αλλά μπορεί να διαφέρει ελαφρώς ανάλογα με τη μέθοδο πληρωμής.",
  },
  {
    q: "Πώς μπορώ να επικοινωνήσω με την υποστήριξη;",
    a: "Μπορείτε να επικοινωνήσετε μέσω Live Chat, email ή τηλεφώνου, 24/7 στα ελληνικά.",
  },
  {
    q: "Τι είδους παιχνίδια θα βρω στο καζίνο της Betsson;",
    a: "Φρουτάκια, live τραπέζια, επιτραπέζια παιχνίδια, video poker, τηλεπαιχνίδια και jackpot slots από κορυφαίους παρόχους.",
  },
];

export const metadata = {
  title: "Γιατί να Επιλέξεις τη Betsson – Betsson GR",
  description:
    "Μάθετε γιατί η Betsson είναι η κορυφαία επιλογή για νόμιμο, ασφαλές και συναρπαστικό online καζίνο και στοίχημα στην Ελλάδα.",
};

export default function WhyBetssonPage() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4 space-y-12">
        {/* Reasons */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Γιατί να Επιλέξεις τη Betsson;
          </h1>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="flex items-start p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition"
              >
                <FaCheckCircle
                  className="text-primary mt-1 mr-4 flex-shrink-0"
                  size={24}
                />
                <p className="text-gray-700 leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advantages */}
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-secondary mb-6">
            Πλεονεκτήματα της Πλατφόρμας
          </h2>
          <div className="space-y-8 max-w-3xl mx-auto">
            {advantages.map((adv, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-semibold mb-2">{adv.title}</h3>
                <p className="text-gray-700 leading-relaxed">{adv.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
            Εγγράψου σήμερα για να απολαύσεις ένα γενναιόδωρο πακέτο καλωσορίσματος
            και ζήσε την απόλυτη εμπειρία online gaming!
          </p>
          <Link
            href={EXTERNAL_CASINO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-lg transition-transform duration-200 hover:scale-105"
          >
            Παίξε τώρα
          </Link>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-secondary mb-6">
            Συχνές Ερωτήσεις (FAQ)
          </h2>
          <ol className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <li key={idx} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-semibold">
                  {idx + 1}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">{faq.q}</h4>
                  <p className="mt-1 text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
