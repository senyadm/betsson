// app/components/ResponsibleGaming.tsx
"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export default function ResponsibleGaming() {
  const points = [
    "Οι παίκτες μπορούν να θέτουν ημερήσια, εβδομαδιαία ή μηνιαία όρια καταθέσεων και χρονικών περιορισμών.",
    "Η Betsson προσφέρει μηχανισμό ειδοποιήσεων για να ενημερώσει τους χρήστες όταν υπερβούν τα όρια τους.",
    "Η Betsson δίνει ιδιαίτερη έμφαση στη δημιουργία ενός ασφαλούς περιβάλλοντος, διασφαλίζοντας την αξιοπιστία και τη συμμόρφωση με τους κανονισμούς.",
    "Η Betsson συνεργάζεται με τον οργανισμό Global Gambling Guidance Group (G4) για να προσφέρει εργαλεία για την αποτροπή ανθυγιεινών συμπεριφορών παιχνιδιού.",
  ];

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      {/* Декоративные размытые круги */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary rounded-full opacity-10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary rounded-full opacity-10 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        {/* Градиентный заголовок */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          Υπεύθυνο Παιχνίδι
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8 rounded" />

        {/* Описание */}
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-12 leading-relaxed">
          Η Betsson προσφέρει εργαλεία για να βοηθήσει τους παίκτες να παίξουν
          υπεύθυνα, προωθώντας το «υπεύθυνο παιχνίδι». Οι παίκτες μπορούν να
          θέτουν όρια κατάθεσης και χρόνου, ενώ λαμβάνουν ειδοποιήσεις όταν
          πλησιάζουν ή ξεπερνούν αυτά τα όρια.
        </p>

        {/* Список ключевых пунктов */}
        <ul className="max-w-2xl mx-auto space-y-6">
          {points.map((text, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <CheckCircle className="mt-1 flex-shrink-0 w-6 h-6 text-primary" />
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}