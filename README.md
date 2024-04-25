# Schere Stein Papier - Erweitert durch KI

Willkommen bei der Web-App "Schere Stein Papier", einer innovativen browserbasierten Adaption des zeitlosen Spiels, entwickelt mit Next.js 14.
Diese Anwendung nutzt fortschrittliche KI für die Eingabeerkennung, während das Gameplay gegen zufällige Züge des Computers stattfindet.

## Funktionen

- **Mehrere Eingabemethoden**: Spielen Sie auf die Weise, die Ihnen am besten gefällt:

  - **Maus**: Eine klassische Point-and-Click-Schnittstelle.
  - **Tastatur**: Reaktionsfähiges Gameplay mit Tastaturkürzeln.
  - **Webcam**: Nutzen Sie modernste KI, um Ihre Handgesten durch Echtzeit-Bilderkennung mittels TensorFlow.js zu interpretieren.

- **KI-Integration zur Gestenerkennung**: Der Webcam-Modus verwendet TensorFlow.js, um Ihre Handgesten zu analysieren und Ihre Bewegung (Schere, Stein oder Papier) genau zu bestimmen.

- **Lokalisierte Erfahrung**: Verfügbar in Deutsch und Englisch, ermöglicht durch das \`next-intl\` Paket, macht das Spiel zugänglich für eine diverse Spielerbasis.

- **Responsives und Stilvolles UI**: Entworfen mit Tailwind CSS für ein sauberes, modernes Aussehen, das sich nahtlos über Geräte hinweg anpasst.

- **Spitzentechnologie**: Beinhaltet die neuesten Funktionen von Next.js 14, einschließlich des App Routers. Die Anwendung ist vollständig in TypeScript implementiert, um die Qualität und Wartbarkeit des Codes zu verbessern.

## So funktioniert's

1. **Wählen Sie die Eingabemethode**: Beginnen Sie, indem Sie auswählen, wie Sie mit dem Spiel interagieren möchten: Maus, Tastatur oder Webcam.
2. **Machen Sie Ihren Zug**: Im Webcam-Modus zeigen Sie Ihre Wahl von Schere, Stein oder Papier vor der Kamera. Das TensorFlow.js-Modell verarbeitet diese Eingabe, um Ihre Geste zu identifizieren.
3. **Zug des Computers**: Gleichzeitig wird ein zufälliger Zug für den Computer generiert.
4. **Ermitteln des Gewinners**: Die App vergleicht beide Wahlen anhand der klassischen Regeln von Schere, Stein, Papier, um den Gewinner zu ermitteln.

## Erste Schritte

Um diese Anwendung lokal auszuführen:

\`\`\`bash
git clone https://github.com/sa19b025/scheresteinpapier.git
cd rockpaperscissors
npm install
npm run dev
\`\`\`

Besuchen Sie \`http://localhost:3000\`, um das Spiel zu genießen! Oder spielen Sie direkt online unter [schere-stein-papier.thomasscheiber.com](https://schere-stein-papier.thomasscheiber.com/).

## Verwendete Technologien

- **Next.js 14**: Ermöglicht serverseitiges Rendering und statische Generierung.
- **TypeScript**: Bietet starke Typisierung, um Laufzeitfehler zu reduzieren.
- **Tailwind CSS**: Gewährleistet ein responsives, mobile-first Design.
- **TensorFlow.js**: Ermöglicht die Echtzeit-Erkennung von Handgesten.
- **Next-Intl**: Bietet umfassende Unterstützung für Internationalisierung.

Diese Anwendung zeigt die Integration von modernen Webtechnologien und KI, bietet ein einzigartiges und fesselndes Spielerlebnis. Testen Sie Ihre Strategie gegen die zufälligen Züge des Computers und genießen Sie eine moderne Wendung des klassischen Spiels Schere Stein Papier!
