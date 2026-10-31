import type { BlogPost } from '../blogTypes'

export const post: BlogPost = {
  slug: 'barrierefreiheit-fehler-onlineshop-bfsg',
  title: 'Die häufigsten Barrierefreiheitsfehler in Onlineshops nach dem BFSG – und wie Sie sie in 15 Minuten selbst prüfen',
  metaTitle: 'Barrierefreiheit im Onlineshop: BFSG-Fehler | BuildWebs',
  metaDescription: 'Die häufigsten Barrierefreiheitsfehler in Onlineshops nach dem BFSG: betroffene WCAG-Kriterien und wie Sie Ihren Shop in 15 Minuten selbst prüfen.',
  author: 'BuildWebs Team',
  date: '2026-10-31',
  readTime: '11 Min. Lesezeit',
  category: 'Barrierefreiheit',
  image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&h=600&fit=crop',
  content: `
      <p>Seit dem 28. Juni 2025 gilt in der EU der European Accessibility Act – in Deutschland umgesetzt durch das Barrierefreiheitsstärkungsgesetz (BFSG). Onlineshops sind ausdrücklich erfasst. Viele Shopbetreiber haben davon gehört; deutlich weniger wissen, was eine Prüfung ihres Shops tatsächlich ergeben würde. Die gute Nachricht: Die Fehler, an denen Shops scheitern, sind erstaunlich vorhersehbar – und die meisten lassen sich mit kostenlosen Werkzeugen in einer Viertelstunde aufspüren.</p>

      <p>Dieser Leitfaden stellt die zehn Fehler vor, die wir in WooCommerce-Shops und anderen Onlineshops am häufigsten finden: was dahintersteckt, welches WCAG-Kriterium betroffen ist, wie Sie den Fehler selbst erkennen und wie er in der Regel behoben wird. Ein Hinweis vorab: Wir sind Webentwickler, keine Juristen – dieser Artikel ist keine Rechtsberatung.</p>

      <h2>Das Barrierefreiheitsstärkungsgesetz in Kürze</h2>

      <p>Grundlage des BFSG ist die EU-Richtlinie 2019/882, die seit dem 28. Juni 2025 anzuwenden ist und von jedem Mitgliedstaat über nationales Recht durchgesetzt wird. Die wichtigsten Punkte für Onlineshops:</p>

      <ul>
        <li><strong>Dienstleistungen im elektronischen Geschäftsverkehr sind ausdrücklich erfasst</strong> – wer online an Verbraucher in der EU verkauft, muss diesen Verkaufsprozess barrierefrei gestalten.</li>
        <li><strong>Kleinstunternehmen, die Dienstleistungen anbieten, sind ausgenommen</strong> – weniger als 10 Beschäftigte und ein Jahresumsatz oder eine Jahresbilanzsumme von höchstens 2 Millionen Euro. Beide Bedingungen müssen erfüllt sein.</li>
        <li><strong>Technischer Maßstab ist die Norm EN 301 549</strong>, die in der Praxis WCAG 2.1 auf Stufe AA bedeutet. Wer nach WCAG 2.2 AA prüft, deckt auch die neueren Kriterien ab.</li>
        <li><strong>Sanktionen regeln die Mitgliedstaaten selbst</strong>; sie müssen „wirksam, verhältnismäßig und abschreckend“ sein.</li>
        <li><strong>Sie müssen eine Erklärung zur Barrierefreiheit veröffentlichen</strong>, aus der hervorgeht, wie Ihr Angebot die Anforderungen erfüllt.</li>
      </ul>

      <h2>1. Zu geringer Farbkontrast – der mit Abstand häufigste Befund</h2>

      <p>Text oder Bedienelemente, die sich zu wenig vom Hintergrund abheben. In fast jedem Shop, den wir prüfen, ist das der erste Befund – und meist an denselben Stellen: graue Hilfetexte unter Formularfeldern, Platzhaltertexte in Such- und Checkout-Feldern, Preise oder Rabatt-Badges auf farbigen Flächen sowie dünne, helle Buttons wie „Weiter einkaufen“.</p>

      <ul>
        <li><strong>WCAG:</strong> 1.4.3 Kontrast (Minimum) verlangt ein Kontrastverhältnis von mindestens 4,5:1 für normalen Text und 3:1 für großen Text; 1.4.11 Nicht-Text-Kontrast verlangt 3:1 für Bedienelemente wie Button-Rahmen und Feldumrandungen.</li>
        <li><strong>So erkennen Sie es:</strong> Klicken Sie mit der rechten Maustaste auf einen verdächtigen Text, wählen Sie „Untersuchen“ und klicken Sie auf das Farbfeld neben der Textfarbe: Chrome und Edge zeigen das Kontrastverhältnis an – und ob es AA erfüllt. WAVE und axe DevTools markieren zu schwachen Text automatisch.</li>
        <li><strong>So wird es behoben:</strong> Text oder Hintergrund in den Theme-Einstellungen bzw. im Stylesheet abdunkeln. Oft wird ein einziger Grauwert im ganzen Shop verwendet – eine Änderung repariert dann Dutzende Elemente. Platzhaltertexte ebenfalls dunkler setzen oder besser gleich durch sichtbare Beschriftungen ersetzen.</li>
      </ul>

      <h2>2. Checkout-Felder ohne Beschriftung und Fehler, die nur rot markiert werden</h2>

      <p>Viele Checkouts blenden Feldbeschriftungen aus, damit es aufgeräumter wirkt, und verlassen sich auf Platzhaltertexte. Sobald der Kunde zu tippen beginnt, verschwindet der Platzhalter – und nichts sagt einem Screenreader-Nutzer, um welches Feld es sich handelt. Eingabefehler werden oft nur durch einen roten Rahmen gekennzeichnet, ohne Hinweis darauf, was falsch ist.</p>

      <ul>
        <li><strong>WCAG:</strong> 3.3.2 Beschriftungen oder Anweisungen, 1.3.1 Info und Beziehungen, 3.3.1 Fehlererkennung und 1.4.1 Benutzung von Farbe.</li>
        <li><strong>So erkennen Sie es:</strong> Lassen Sie WAVE über Ihren Checkout laufen: Fehlende Beschriftungen erscheinen als rote Symbole. Schicken Sie das Formular dann leer ab – könnte ein farbenblinder Kunde erkennen, welche Felder fehlgeschlagen sind und warum?</li>
        <li><strong>So wird es behoben:</strong> Sichtbare Beschriftungen über jedem Feld anzeigen (viele Themes blenden sie nur aus) und an jedem fehlerhaften Feld eine mit ihm verknüpfte Textmeldung ergänzen – nicht nur einen roten Rahmen.</li>
      </ul>

      <h2>3. Unsichtbarer Fokus und Tastaturfallen in Menüs und Filtern</h2>

      <p>Wer per Tastatur navigiert, bewegt sich mit der Tab-Taste durch die Seite und muss sehen, wo er gerade ist. Viele Themes entfernen die Fokusmarkierung des Browsers aus optischen Gründen. Mega-Menüs und Filterleisten bringen ein zweites Problem mit: Ist der Fokus einmal drin, kommt er ohne Maus manchmal nicht mehr heraus.</p>

      <ul>
        <li><strong>WCAG:</strong> 2.4.7 Fokus sichtbar und 2.1.2 Keine Tastaturfalle.</li>
        <li><strong>So erkennen Sie es:</strong> Legen Sie die Maus beiseite und drücken Sie wiederholt Tab. Sehen Sie immer, welches Element gerade markiert ist? Können Sie das Hauptmenü öffnen, auf einer Kategorieseite durch die Filter gehen und mit Tab, Umschalt+Tab und Escape wieder herauskommen?</li>
        <li><strong>So wird es behoben:</strong> Eine deutlich sichtbare Fokusmarkierung wiederherstellen (ein 2 Pixel breiter Rahmen in Kontrastfarbe genügt) und dafür sorgen, dass Escape Menüs und Filter schließt und der Fokus zum auslösenden Element zurückkehrt.</li>
      </ul>

      <h2>4. Variantenauswahl, die nur mit der Maus funktioniert</h2>

      <p>Farbkacheln und Größen-Buttons stammen meist aus einem „Variation Swatches“-Plugin. Viele ersetzen das Standard-Dropdown durch einfache klickbare Kästchen, die per Tastatur nicht erreichbar sind und keinen Namen haben, den ein Screenreader vorlesen könnte. Der Kunde sieht sechs Farben, kann aber keine auswählen.</p>

      <ul>
        <li><strong>WCAG:</strong> 2.1.1 Tastatur und 4.1.2 Name, Rolle, Wert.</li>
        <li><strong>So erkennen Sie es:</strong> Springen Sie auf einem variablen Produkt mit Tab zu den Kacheln. Überspringt der Fokus sie, oder lässt sich keine mit Leertaste oder Enter auswählen, ist der Test nicht bestanden. Bei laufendem NVDA (Windows, kostenlos) oder VoiceOver (Mac) sollte jede Option etwa als „Blau, Option 2 von 6“ angesagt werden.</li>
        <li><strong>So wird es behoben:</strong> Ein Swatch-Plugin einsetzen, das echte Buttons oder Radio-Buttons mit Beschriftung ausgibt – oder das barrierefreie Standard-Dropdown beibehalten und optisch anpassen.</li>
      </ul>

      <h2>5. Produktbilder ohne aussagekräftigen Alternativtext</h2>

      <p>Der Alternativtext ist das, was ein Screenreader anstelle des Bildes vorliest. Produktfotos werden oft ganz ohne Alternativtext hochgeladen, mit Dateinamen wie „IMG_4821.jpg“ oder mit demselben Keyword in jedem Bild. Nichts davon sagt einem blinden Kunden, wie das Produkt aussieht.</p>

      <ul>
        <li><strong>WCAG:</strong> 1.1.1 Nicht-Text-Inhalt.</li>
        <li><strong>So erkennen Sie es:</strong> WAVE markiert Bilder ohne Alternativtext mit einem roten Symbol; ein Klick auf das grüne Symbol neben den übrigen Bildern zeigt deren Text. Auch Lighthouse listet fehlende Alt-Attribute auf.</li>
        <li><strong>So wird es behoben:</strong> Beschreiben, was für den Kauf wichtig ist: „Dunkelblauer Wollmantel, zweireihig, Vorderansicht“. Rein dekorative Bilder bekommen ein leeres Alt-Attribut, damit Screenreader sie überspringen. Gepflegt wird der Text einmal pro Bild in der Mediathek.</li>
      </ul>

      <h2>6. „In den Warenkorb gelegt“ und Mengenänderungen, die niemand hört</h2>

      <p>Klickt ein Kunde auf einer Kategorieseite auf „In den Warenkorb“, zeigen die meisten Shops kurz eine Meldung und aktualisieren das Warenkorb-Symbol. Ein Screenreader-Nutzer hört davon nichts. Dasselbe gilt für Mengenänderungen im Warenkorb, neu berechnete Summen und aktualisierte Versandkosten.</p>

      <ul>
        <li><strong>WCAG:</strong> 4.1.3 Statusmeldungen.</li>
        <li><strong>So erkennen Sie es:</strong> Legen Sie bei laufendem NVDA oder VoiceOver ein Produkt in den Warenkorb, ohne die Seite zu verlassen. Wird nichts angesagt, ist die Meldung rein visuell.</li>
        <li><strong>So wird es behoben:</strong> Bestätigungsmeldung und Warenkorbzähler brauchen eine ARIA-Live-Region – ein Attribut, das Hilfstechnologien anweist, Änderungen vorzulesen. In WooCommerce ist das eine kurze Anpassung im Theme.</li>
      </ul>

      <h2>7. Ein Cookie-Banner, das sich ohne Maus nicht bedienen lässt</h2>

      <p>Das Cookie-Banner ist das Erste, was jeder Besucher sieht – und oft die erste Barriere. Viele Banner sind per Tab nicht erreichbar, halten den Fokus gefangen, sobald er dort angekommen ist, oder verdecken die Seite so, dass Tastaturnutzer einen Shop bedienen, den sie gar nicht sehen können.</p>

      <ul>
        <li><strong>WCAG:</strong> 2.1.1 Tastatur, 2.4.3 Fokus-Reihenfolge und 2.4.11 Fokus nicht verdeckt (WCAG 2.2).</li>
        <li><strong>So erkennen Sie es:</strong> Öffnen Sie Ihren Shop in einem privaten Fenster und versuchen Sie, Cookies nur mit Tab, Enter und Escape zu akzeptieren oder abzulehnen.</li>
        <li><strong>So wird es behoben:</strong> Ein Consent-Plugin wählen, das den Fokus beim Laden in das Banner setzt, „Akzeptieren“ und „Ablehnen“ als echte Buttons anbietet und den Fokus danach an die Seite zurückgibt.</li>
      </ul>

      <h2>8. Rein visuelles CAPTCHA</h2>

      <p>Ein Bild-CAPTCHA („Wählen Sie alle Bilder mit Ampeln aus“) vor dem Checkout, dem Login oder der Newsletter-Anmeldung schließt blinde und sehbehinderte Kunden vollständig aus.</p>

      <ul>
        <li><strong>WCAG:</strong> 1.1.1 Nicht-Text-Inhalt verlangt eine Alternative; 3.3.8 Barrierefreie Authentifizierung (WCAG 2.2) schränkt Rätsel beim Login ein.</li>
        <li><strong>So erkennen Sie es:</strong> Gehen Sie Checkout, Kontoregistrierung und Kontaktformular durch und notieren Sie jedes Rätsel, das Sie lösen müssen.</li>
        <li><strong>So wird es behoben:</strong> Unsichtbaren Spamschutz einsetzen (Honeypot-Felder, serverseitige Prüfungen oder einen modernen risikobasierten Dienst ohne Rätsel) – oder zumindest eine Audio-Alternative anbieten.</li>
      </ul>

      <h2>9. Fehlendes oder falsches Sprachattribut</h2>

      <p>Das lang-Attribut am HTML-Element teilt Browsern und Screenreadern mit, in welcher Sprache die Seite verfasst ist. Fehlt es oder steht dort „en“, obwohl der Shop auf Deutsch ist, liest der Screenreader mit der falschen Aussprache vor – der Text wird nahezu unverständlich. Bei mehrsprachigen Shops stimmt es häufig nur für die Hauptsprache.</p>

      <ul>
        <li><strong>WCAG:</strong> 3.1.1 Sprache der Seite.</li>
        <li><strong>So erkennen Sie es:</strong> Lighthouse und axe DevTools melden ein fehlendes oder ungültiges lang-Attribut; alternativ den Seitenquelltext öffnen und die erste Zeile prüfen.</li>
        <li><strong>So wird es behoben:</strong> Die Website-Sprache in WordPress korrekt einstellen und sicherstellen, dass das Übersetzungs-Plugin das Attribut für jede Sprachversion anpasst.</li>
      </ul>

      <h2>10. Zu kleine Touch-Ziele</h2>

      <p>Winzige „+“- und „−“-Buttons für die Menge, Schließen-Symbole an Pop-ups und eng gesetzte Footer-Links sind auf dem Smartphone schwer zu treffen – besonders für Kunden mit Tremor oder eingeschränkter Feinmotorik.</p>

      <ul>
        <li><strong>WCAG:</strong> 2.5.8 Zielgröße (Minimum) in WCAG 2.2 verlangt mindestens 24 × 24 CSS-Pixel oder einen entsprechenden Abstand rund um das Ziel.</li>
        <li><strong>So erkennen Sie es:</strong> Öffnen Sie in den DevTools Ihres Browsers die mobile Ansicht und untersuchen Sie Mengen-Buttons, Icon-Buttons und Links im Fließtext. Lighthouse meldet ebenfalls zu kleine oder zu dicht gesetzte Ziele.</li>
        <li><strong>So wird es behoben:</strong> Innenabstand kleiner Buttons erhöhen und benachbarte Links auf Abstand setzen; 44 × 44 Pixel sind eine bequeme, weit verbreitete Zielgröße.</li>
      </ul>

      <h2>Warum Overlay-Widgets das Problem nicht lösen</h2>

      <p>Barrierefreiheits-Overlays – das schwebende Symbol, das eine Leiste für Schriftgröße, Kontrast und „Screenreader-Modus“ öffnet – werden Shopbetreibern gern als Ein-Zeilen-Lösung für das BFSG verkauft. Das sind sie nicht. Die zehn Fehler oben – fehlende Beschriftungen, Farbkacheln ohne Tastaturzugang, fehlende Alternativtexte, nie angesagte Statusmeldungen – sind Mängel im Code Ihres Shops. Ein Skript, das obendrauf geladen wird, kann nicht wissen, was Ihr Produktfoto zeigt oder wofür ein Formularfeld gedacht ist. Im besten Fall rät ein Overlay; im schlimmsten Fall kommt es dem Screenreader oder der Bildschirmlupe in die Quere, die der Kunde ohnehin schon nutzt.</p>

      <p>Ein Overlay liefert auch nicht die gesetzlich geforderte Erklärung zur Barrierefreiheit und ändert nichts daran, dass Ihr Shop an der EN 301 549 gemessen wird. Die Anforderungen erfüllt man, indem man Theme, Checkout und Inhalte in Ordnung bringt – nicht mit einem weiteren Plugin.</p>

      <h2>Die 15-Minuten-Checkliste zum Selbsttest</h2>

      <ol>
        <li><strong>Tastatur-Rundgang (5 Minuten):</strong> Startseite, eine Kategorieseite, eine Produktseite, Warenkorb und Checkout – nur mit Tab, Umschalt+Tab, Enter, Leertaste und Escape. Notieren Sie alles, was Sie nicht erreichen, nicht sehen oder nicht verlassen können – Cookie-Banner inklusive.</li>
        <li><strong>WAVE auf drei Seiten (4 Minuten):</strong> Lassen Sie WAVE über Startseite, eine Produktseite und den Checkout laufen. Zählen Sie rote Fehler und Kontrastfehler und prüfen Sie die Alternativtexte der Produktbilder.</li>
        <li><strong>Lighthouse-Prüfung „Accessibility“ (2 Minuten):</strong> Starten Sie Lighthouse in den Chrome DevTools nur mit der Kategorie „Accessibility“ auf der Produktseite. Achten Sie auf Befunde zu Sprachattribut, Kontrast, Beschriftungen und Zielgröße.</li>
        <li><strong>Kontrast-Stichprobe (2 Minuten):</strong> Untersuchen Sie Hilfetexte, Platzhalter, Preis-Badges und Ihren hellsten Button. Alles unter 4,5:1 bei Text bzw. 3:1 bei Rahmen und Symbolen kommt auf die Liste.</li>
        <li><strong>Screenreader (2 Minuten):</strong> Starten Sie NVDA oder VoiceOver, wählen Sie eine Variante und legen Sie ein Produkt in den Warenkorb. Wurden Optionen und Bestätigung angesagt?</li>
      </ol>

      <p>Nach unserer Erfahrung stehen bei den meisten Shops am Ende mehrere Punkte auf der Liste – und die ersten zwei oder drei sind meist schnell behoben.</p>

      <h2>Unsicher, was Sie gefunden haben? Kostenloser Mini-Check</h2>

      <p>Wenn Sie den ersten Durchgang lieber abgeben möchten: Wir bieten einen <a href="/de/european-accessibility-act-woocommerce">kostenlosen Barrierefreiheits-Mini-Check für Onlineshops</a> an – wir prüfen Ihre Startseite, eine Produktseite und Ihren Checkout und schicken Ihnen innerhalb von zwei Werktagen die drei gravierendsten Probleme, unverbindlich.</p>

      <p>Für das vollständige Bild gibt es unser <a href="/de/services/web-accessibility">WCAG-2.2-AA-Audit</a> ab 490 €. Da wir selbst <a href="/de/services/woocommerce-stores">WooCommerce-Shops</a> bauen, setzen wir die Korrekturen direkt im Theme und im Checkout um, statt Ihnen nur einen Bericht zu übergeben, und erstellen den Entwurf Ihrer Erklärung zur Barrierefreiheit. Remote, zu Festpreisen.</p>
    `,
}
