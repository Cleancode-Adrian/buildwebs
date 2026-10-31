import type { BlogPost } from '../blogTypes'

export const post: BlogPost = {
  slug: 'seo-checkliste',
  title: 'SEO-Checkliste für kleine Unternehmen: So rankt Ihre Webseite bei Google besser',
  metaTitle: 'SEO-Checkliste für kleine Unternehmen | BuildWebs',
  metaDescription: 'SEO-Checkliste für kleine Unternehmen: Technik, Inhalte, lokale Sichtbarkeit und Backlinks – Schritt für Schritt zu besseren Rankings bei Google.',
  author: 'BuildWebs Team',
  date: '2026-10-27',
  readTime: '9 Min. Lesezeit',
  category: 'SEO',
  image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1200&h=600&fit=crop',
  content: `
      <p>Suchmaschinenoptimierung verändert sich ständig – die Grundlagen bleiben jedoch erstaunlich stabil. Wer seine Webseite bei Google besser ranken lassen möchte, braucht kein Geheimwissen, sondern eine saubere technische Basis, hilfreiche Inhalte und etwas Geduld. Diese SEO-Checkliste zeigt Ihnen Schritt für Schritt, worauf es ankommt – egal, ob Sie gerade eine neue Webseite planen oder eine bestehende verbessern möchten.</p>

      <p>Wir haben die Checkliste in vier Bereiche gegliedert: technisches SEO, OnPage-Optimierung, Content-Strategie und OffPage-SEO. Dazu kommen Hinweise zur lokalen Suche, zum Monitoring und zu typischen Fehlern. Arbeiten Sie die Punkte am besten der Reihe nach ab.</p>

      <h2>Teil 1: Das technische Fundament</h2>

      <p>Technisches SEO sorgt dafür, dass Suchmaschinen Ihre Webseite crawlen, indexieren und verstehen können. Ohne diese Basis haben selbst die besten Inhalte kaum eine Chance.</p>

      <h3>Ladezeit und Performance</h3>

      <ul>
        <li><strong>Ladezeit messen:</strong> Prüfen Sie Ihre wichtigsten Seiten regelmäßig mit Google PageSpeed Insights – und zwar die mobile Ansicht, nicht nur den Desktop.</li>
        <li><strong>Core Web Vitals im grünen Bereich:</strong> LCP (Largest Contentful Paint) unter 2,5 Sekunden, INP (Interaction to Next Paint) unter 200 Millisekunden, CLS (Cumulative Layout Shift) unter 0,1. INP hat im März 2024 den früheren Messwert FID abgelöst.</li>
        <li><strong>Lazy Loading nutzen:</strong> Bilder und Videos unterhalb des sichtbaren Bereichs erst laden, wenn sie gebraucht werden – das wichtigste Bild oben auf der Seite aber sofort.</li>
        <li><strong>Überflüssige Skripte entfernen:</strong> Jedes zusätzliche Plugin, Tracking-Tool oder Chat-Widget kostet Ladezeit. Behalten Sie nur, was Sie wirklich brauchen.</li>
        <li><strong>Komprimierung aktivieren:</strong> Gzip oder Brotli auf dem Server verkleinern die übertragenen Dateien deutlich.</li>
        <li><strong>Bilder optimieren:</strong> Moderne Formate wie WebP oder AVIF verwenden, Bilder komprimieren und nicht größer ausliefern als nötig.</li>
      </ul>

      <h3>Mobile Optimierung</h3>

      <ul>
        <li><strong>Mobile First denken:</strong> Google bewertet Webseiten anhand ihrer mobilen Version. Planen Sie Layout und Inhalte daher zuerst für das Smartphone.</li>
        <li><strong>Responsives Layout:</strong> Ihre Seite muss auf jeder Bildschirmgröße einwandfrei funktionieren.</li>
        <li><strong>Gut bedienbare Elemente:</strong> Buttons und Links sollten groß genug zum Antippen sein (als Richtwert etwa 48 × 48 Pixel) und nicht zu dicht beieinanderliegen.</li>
        <li><strong>Keine störenden Overlays:</strong> Bildschirmfüllende Pop-ups, die den Inhalt verdecken, verschlechtern die Nutzererfahrung. Achten Sie außerdem auf gut lesbare Schriftgrößen.</li>
        <li><strong>Auf echten Geräten testen:</strong> Browser-Simulatoren sind hilfreich, ersetzen aber keinen Test auf einem echten Smartphone.</li>
      </ul>

      <h3>Seitenstruktur und Crawlbarkeit</h3>

      <ul>
        <li><strong>XML-Sitemap erstellen:</strong> Reichen Sie sie in der Google Search Console ein, damit neue Seiten schneller gefunden werden.</li>
        <li><strong>robots.txt prüfen:</strong> Stellen Sie sicher, dass keine wichtigen Seiten versehentlich blockiert sind.</li>
        <li><strong>Defekte Links beheben:</strong> Tools wie Screaming Frog finden 404-Fehler; leiten Sie entfernte Seiten per 301-Weiterleitung sinnvoll weiter.</li>
        <li><strong>Breadcrumbs einsetzen:</strong> Sie helfen Besuchern und Suchmaschinen, die Struktur Ihrer Seite zu verstehen.</li>
        <li><strong>Sprechende URLs:</strong> Kurz, beschreibend und mit dem passenden Suchbegriff – etwa /leistungen/badsanierung statt /seite?id=123.</li>
        <li><strong>Canonical-Tags setzen:</strong> So vermeiden Sie Probleme mit doppelten Inhalten, zum Beispiel bei Filter- oder Sortierseiten im Onlineshop.</li>
      </ul>

      <h3>HTTPS und Sicherheit</h3>

      <ul>
        <li><strong>SSL-Zertifikat installieren:</strong> HTTPS ist heute Standard, ein (kleiner) Rankingfaktor und schafft Vertrauen.</li>
        <li><strong>Gemischte Inhalte vermeiden:</strong> Alle Bilder, Skripte und Schriften müssen ebenfalls über HTTPS geladen werden.</li>
        <li><strong>Regelmäßige Updates:</strong> Halten Sie CMS, Theme und Plugins aktuell. Gehackte Webseiten verlieren schnell ihre Rankings. Wer das nicht selbst übernehmen möchte, kann auf eine <a href="/de/services/website-care">professionelle WordPress-Wartung</a> setzen.</li>
      </ul>

      <h3>Strukturierte Daten (Schema.org)</h3>

      <ul>
        <li><strong>Organization:</strong> Hilft Google, Ihr Unternehmen als Marke einzuordnen.</li>
        <li><strong>LocalBusiness:</strong> Adresse, Öffnungszeiten und Kontaktdaten maschinenlesbar hinterlegen – wichtig für die lokale Suche.</li>
        <li><strong>Article:</strong> Für Blogbeiträge und Ratgeber.</li>
        <li><strong>Product:</strong> Für Onlineshops, damit Preis und Verfügbarkeit in den Suchergebnissen erscheinen können.</li>
        <li><strong>Bewertungen:</strong> Sternebewertungen sind für Produkte möglich, aber nur für echte Bewertungen, die auch auf der Seite sichtbar sind.</li>
        <li><strong>FAQ:</strong> FAQ-Markup schadet nicht, aufklappbare FAQ-Ergebnisse zeigt Google seit 2023 jedoch fast nur noch für Behörden- und Gesundheitsseiten an. Rechnen Sie also nicht mit zusätzlicher Fläche in den Suchergebnissen.</li>
      </ul>

      <h2>Teil 2: OnPage-Optimierung</h2>

      <p>Bei der OnPage-Optimierung geht es darum, einzelne Seiten so zu gestalten, dass sie für die richtigen Suchanfragen gefunden werden. Hier trifft die Keyword-Recherche auf die praktische Umsetzung.</p>

      <h3>Keyword-Recherche</h3>

      <ul>
        <li><strong>Hauptkeywords finden:</strong> Tools wie der Google Keyword Planner, Ahrefs, Semrush oder Sistrix (im DACH-Raum verbreitet) zeigen Suchvolumen und Wettbewerb.</li>
        <li><strong>Longtail-Keywords nutzen:</strong> Spezifische Suchanfragen wie „Steuerberater für Freiberufler in Graz“ haben weniger Konkurrenz und oft eine klarere Kaufabsicht.</li>
        <li><strong>Suchintention verstehen:</strong> Will der Nutzer etwas wissen, vergleichen oder direkt kaufen? Ihre Seite muss genau diese Absicht bedienen.</li>
        <li><strong>Wettbewerb realistisch einschätzen:</strong> Als kleines Unternehmen sind Nischen- und Regionalbegriffe meist erfolgversprechender als hart umkämpfte Oberbegriffe.</li>
        <li><strong>Keywords Seiten zuordnen:</strong> Pro Seite ein Hauptthema – so konkurrieren Ihre eigenen Seiten nicht miteinander.</li>
      </ul>

      <h3>Title-Tags und Meta-Descriptions</h3>

      <ul>
        <li><strong>Einzigartige Titel:</strong> Jede Seite braucht einen eigenen Title-Tag.</li>
        <li><strong>Hauptkeyword nach vorne:</strong> Der wichtigste Begriff steht möglichst am Anfang.</li>
        <li><strong>Passende Länge:</strong> Etwa 50 bis 60 Zeichen für den Titel und rund 150 bis 160 Zeichen für die Beschreibung, damit nichts abgeschnitten wird.</li>
        <li><strong>Zum Klicken einladen:</strong> Formulieren Sie einen klaren Nutzen. Die Meta-Description ist Ihre Werbefläche in den Suchergebnissen.</li>
        <li><strong>Markenname ergänzen:</strong> Er stärkt die Wiedererkennung.</li>
      </ul>

      <h3>Überschriften-Struktur</h3>

      <ul>
        <li><strong>Eine H1 pro Seite:</strong> Sie beschreibt das Hauptthema und enthält idealerweise das Hauptkeyword.</li>
        <li><strong>Logische Hierarchie:</strong> H2 bis H6 gliedern den Inhalt wie ein Inhaltsverzeichnis – ohne Ebenen zu überspringen.</li>
        <li><strong>Keywords natürlich einbauen:</strong> Relevante Begriffe ja, erzwungene Formulierungen nein.</li>
        <li><strong>Aussagekräftige Überschriften:</strong> Wer nur die Überschriften überfliegt, sollte bereits verstehen, worum es geht.</li>
      </ul>

      <h3>Inhalte optimieren</h3>

      <ul>
        <li><strong>Für Menschen schreiben:</strong> Der Nutzen für Ihre Leser steht an erster Stelle, die Suchmaschine an zweiter.</li>
        <li><strong>Thema vollständig abdecken:</strong> Entscheidend ist nicht eine bestimmte Wortzahl, sondern dass alle wichtigen Fragen beantwortet werden.</li>
        <li><strong>Synonyme und verwandte Begriffe:</strong> Sie helfen Google, den Kontext zu verstehen.</li>
        <li><strong>Konkrete Antworten geben:</strong> Klare, gut strukturierte Antworten werden eher als Snippet angezeigt – und auch eher von KI-gestützten Suchfunktionen wie den AI Overviews aufgegriffen.</li>
        <li><strong>Regelmäßig aktualisieren:</strong> Veraltete Preise, Angebote oder Informationen kosten Vertrauen.</li>
        <li><strong>Medien einbinden:</strong> Eigene Fotos, Grafiken und Videos machen Inhalte anschaulicher.</li>
      </ul>

      <h3>Interne Verlinkung</h3>

      <ul>
        <li><strong>Passende Inhalte verknüpfen:</strong> Führen Sie Besucher gezielt zu weiterführenden Seiten.</li>
        <li><strong>Beschreibende Linktexte:</strong> „Hier klicken“ sagt nichts aus – „Preise für Badsanierung“ schon.</li>
        <li><strong>Themencluster aufbauen:</strong> Verlinken Sie verwandte Beiträge mit einer zentralen Übersichtsseite.</li>
        <li><strong>Verwaiste Seiten vermeiden:</strong> Jede Seite sollte von mindestens einer anderen Seite aus erreichbar sein.</li>
        <li><strong>Ältere Beiträge ergänzen:</strong> Setzen Sie dort Links auf neue, passende Inhalte.</li>
      </ul>

      <h3>Bilder optimieren</h3>

      <ul>
        <li><strong>Sprechende Dateinamen:</strong> zum Beispiel badsanierung-muenchen.jpg statt IMG_1234.jpg.</li>
        <li><strong>Alt-Texte für alle Bilder:</strong> Beschreiben Sie, was zu sehen ist. Das hilft Suchmaschinen und ist zugleich ein wichtiger Punkt der <a href="/de/services/web-accessibility">Barrierefreiheit</a>.</li>
        <li><strong>Komprimieren:</strong> Kleinere Dateien bei gleichbleibender Qualität.</li>
        <li><strong>Responsive Bilder:</strong> Für jedes Gerät die passende Bildgröße ausliefern.</li>
        <li><strong>Bilder auffindbar machen:</strong> Wichtige Bilder gehören in den HTML-Code und gegebenenfalls in die Sitemap.</li>
      </ul>

      <h2>Teil 3: Content-Strategie</h2>

      <p>Inhalte sind das Herzstück jeder SEO-Strategie. Ohne relevanten, hilfreichen Content bringt auch die beste Technik wenig.</p>

      <h3>Inhalte planen</h3>

      <ul>
        <li><strong>Redaktionsplan erstellen:</strong> Planen Sie Themen einige Monate im Voraus.</li>
        <li><strong>Suchintention berücksichtigen:</strong> Informieren, navigieren, vergleichen oder kaufen – jede Absicht braucht eine andere Art von Seite.</li>
        <li><strong>Themen gründlich behandeln:</strong> Werden Sie zur besten Anlaufstelle für Ihr Fachgebiet.</li>
        <li><strong>Häufige Kundenfragen beantworten:</strong> Fragen aus dem Verkaufsalltag sind die besten Blogthemen.</li>
        <li><strong>Bestehende Inhalte pflegen:</strong> Ein überarbeiteter Beitrag ist oft wirkungsvoller als ein neuer.</li>
      </ul>

      <h3>Blog-Strategie</h3>

      <ul>
        <li><strong>Regelmäßig veröffentlichen:</strong> Lieber ein guter Beitrag im Monat als vier oberflächliche.</li>
        <li><strong>Formate mischen:</strong> Anleitungen, Checklisten, Projektberichte, Antworten auf Kundenfragen.</li>
        <li><strong>Longtail-Themen bevorzugen:</strong> Weniger Konkurrenz, passendere Besucher.</li>
        <li><strong>Handlungsaufforderungen einbauen:</strong> Zeigen Sie am Ende jedes Beitrags den nächsten Schritt.</li>
        <li><strong>Inhalte verbreiten:</strong> Teilen Sie neue Beiträge über Newsletter und soziale Netzwerke.</li>
      </ul>

      <h3>Qualitätssignale (E-E-A-T)</h3>

      <ul>
        <li><strong>Erfahrung:</strong> Zeigen Sie, dass Sie aus der Praxis sprechen – mit eigenen Beispielen und Fotos.</li>
        <li><strong>Expertise:</strong> Fundiertes Fachwissen, nachvollziehbar erklärt.</li>
        <li><strong>Autorität:</strong> Erwähnungen und Verlinkungen durch andere seriöse Quellen.</li>
        <li><strong>Vertrauenswürdigkeit:</strong> Korrekte Informationen, vollständiges Impressum, Datenschutzerklärung und sichere Verbindung.</li>
        <li><strong>Nutzererfahrung:</strong> Besucher, die finden, was sie suchen, bleiben länger und kommen wieder.</li>
      </ul>

      <h2>Teil 4: OffPage-SEO und Linkaufbau</h2>

      <p>OffPage-SEO – vor allem Backlinks – signalisiert Google, dass andere Webseiten Ihre Inhalte für empfehlenswert halten.</p>

      <h3>Strategien für den Linkaufbau</h3>

      <ul>
        <li><strong>Verlinkenswerte Inhalte erstellen:</strong> Ausführliche Ratgeber, eigene Auswertungen oder nützliche Rechner.</li>
        <li><strong>Gastbeiträge:</strong> Schreiben Sie für Branchenportale und Fachmagazine.</li>
        <li><strong>Lokale Presse und PR:</strong> Regionale Medien berichten gern über lokale Unternehmen, Jubiläen oder Projekte.</li>
        <li><strong>Verbände und Kammern:</strong> Einträge bei IHK, Handwerkskammer, Wirtschaftskammer oder Branchenverbänden.</li>
        <li><strong>Defekte Links aufspüren:</strong> Finden Sie tote Links auf Fachseiten und bieten Sie Ihren Inhalt als Ersatz an.</li>
        <li><strong>Partner und Lieferanten:</strong> Bitten Sie Geschäftspartner um eine Verlinkung.</li>
      </ul>

      <h3>Qualität vor Quantität</h3>

      <ul>
        <li><strong>Relevanz zählt:</strong> Links von themenverwandten Seiten sind am wertvollsten.</li>
        <li><strong>Autorität zählt:</strong> Ein Link von einer angesehenen Seite wiegt mehr als viele Links von minderwertigen Seiten.</li>
        <li><strong>Finger weg von Linkkauf:</strong> Gekaufte Links und Linknetzwerke verstoßen gegen die Google-Richtlinien und können abgestraft werden.</li>
        <li><strong>Natürliche Linktexte:</strong> Variieren Sie die Ankertexte, statt immer dasselbe Keyword zu verwenden.</li>
      </ul>

      <h2>Checkliste für lokales SEO</h2>

      <p>Für Unternehmen mit regionalem Einzugsgebiet ist die lokale Suche oft der wichtigste Hebel:</p>

      <ul>
        <li><strong>Google Unternehmensprofil:</strong> Beanspruchen Sie Ihr Profil und pflegen Sie es vollständig – mit Kategorien, Öffnungszeiten, Fotos und Leistungen.</li>
        <li><strong>Einheitliche NAP-Daten:</strong> Name, Adresse und Telefonnummer müssen überall exakt gleich geschrieben sein – auf der Webseite, im Impressum und in allen Verzeichnissen.</li>
        <li><strong>Lokale Branchenverzeichnisse:</strong> Tragen Sie sich in relevante Verzeichnisse ein, etwa Gelbe Seiten und Das Örtliche in Deutschland, Herold in Österreich oder local.ch in der Schweiz.</li>
        <li><strong>Standortseiten:</strong> Eigene Seiten für jeden Standort oder jede Region – mit echtem, individuellem Inhalt statt kopierter Texte.</li>
        <li><strong>Lokale Inhalte:</strong> Berichten Sie über Projekte, Veranstaltungen oder Themen aus Ihrer Region.</li>
        <li><strong>Bewertungen:</strong> Bitten Sie zufriedene Kunden um eine Google-Bewertung und antworten Sie auf jede Rezension – auch auf kritische.</li>
        <li><strong>Lokale strukturierte Daten:</strong> Hinterlegen Sie LocalBusiness-Markup mit denselben Daten wie im Unternehmensprofil.</li>
      </ul>

      <h2>Monitoring und Auswertung</h2>

      <p>SEO ist kein einmaliges Projekt. Regelmäßige Kontrolle zeigt Ihnen, was funktioniert und wo es hakt:</p>

      <ul>
        <li><strong>Google Search Console:</strong> Indexierung, Suchanfragen, Klicks und technische Fehler im Blick behalten.</li>
        <li><strong>Webanalyse:</strong> Mit Google Analytics 4 oder einer datenschutzfreundlichen Alternative wie Matomo Besucher und Anfragen auswerten – DSGVO-konform und mit Einwilligung, wo nötig.</li>
        <li><strong>Rankings verfolgen:</strong> Beobachten Sie die Positionen Ihrer wichtigsten Suchbegriffe.</li>
        <li><strong>Backlinks prüfen:</strong> Neue Links im Blick behalten. Das Disavow-Tool brauchen Sie nur in Ausnahmefällen, etwa nach einer manuellen Maßnahme.</li>
        <li><strong>Wettbewerber beobachten:</strong> Was machen die Mitbewerber, die vor Ihnen ranken, anders?</li>
      </ul>

      <h2>Häufige SEO-Fehler</h2>

      <ul>
        <li><strong>Keyword-Stuffing:</strong> Schreiben Sie natürlich, statt Begriffe zwanghaft zu wiederholen.</li>
        <li><strong>Doppelte Inhalte:</strong> Jede Seite braucht eigenen, einzigartigen Text.</li>
        <li><strong>Mobile Nutzer vernachlässigen:</strong> Ein Großteil der Suchanfragen kommt vom Smartphone.</li>
        <li><strong>Langsame Webseite:</strong> Lange Ladezeiten kosten Rankings und Anfragen.</li>
        <li><strong>Schlechte Nutzerführung:</strong> Wer nicht schnell findet, was er sucht, ist wieder weg.</li>
        <li><strong>Technik ignorieren:</strong> Das Fundament ist genauso wichtig wie der Inhalt.</li>
        <li><strong>Links kaufen:</strong> Setzen Sie auf natürlich verdiente Empfehlungen.</li>
      </ul>

      <h2>Wie BuildWebs SEO in Webseiten einbaut</h2>

      <p>Bei BuildWebs ist technisches SEO kein nachträgliches Extra, sondern Teil jeder Webseite. Als kleines Webstudio mit Sitz in Polen entwickeln wir für Kunden in ganz Europa <a href="/de/services/business-websites">WordPress-Webseiten</a> und WooCommerce-Onlineshops – vollständig remote. Dazu gehören schnelle Ladezeiten, eine saubere Seitenstruktur, korrekte Meta-Daten, strukturierte Daten, eine XML-Sitemap und eine mobile Optimierung von Anfang an.</p>

      <p>Nach dem Start halten wir Ihre Seite auf Wunsch mit einem Wartungspaket aktuell und sicher. Und weil Barrierefreiheit und gute Auffindbarkeit viel gemeinsam haben, prüfen wir Webseiten auch nach WCAG und den Anforderungen des Barrierefreiheitsstärkungsgesetzes (BFSG).</p>

      <h2>Ihr SEO-Fahrplan</h2>

      <p>Beginnen Sie mit den technischen Grundlagen: Ihre Webseite muss schnell, mobil gut nutzbar und für Suchmaschinen zugänglich sein. Danach folgt die OnPage-Optimierung mit hochwertigen Inhalten, die zu den Suchanfragen Ihrer Kunden passen. Anschließend bauen Sie Ihre Sichtbarkeit über lokale Einträge, Bewertungen und seriöse Backlinks aus.</p>

      <p>SEO ist ein Marathon, kein Sprint. Bis sich spürbare Ergebnisse zeigen, vergehen meist mehrere Monate. Dafür ist organische Sichtbarkeit nachhaltig: Sie gewinnen Besucher, ohne für jeden Klick zu bezahlen, und bauen Schritt für Schritt Vertrauen bei Ihrer Zielgruppe auf.</p>

      <p>Sie möchten eine Webseite, die von Anfang an technisch sauber aufgestellt ist? <a href="/de#contact">Kontaktieren Sie BuildWebs</a> für ein unverbindliches Gespräch. Wir sehen uns Ihre aktuelle Seite an, zeigen Ihnen technische Schwachstellen und besprechen, wie eine neue oder überarbeitete Webseite Ihre Sichtbarkeit bei Google unterstützen kann.</p>
    `,
}
