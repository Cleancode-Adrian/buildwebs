import type { BlogPost } from '../blogTypes'

export const post: BlogPost = {
  slug: 'haeufige-wordpress-probleme',
  title: 'Die 10 häufigsten WordPress-Probleme, die wir bei Website-Audits kleiner Unternehmen finden – und wie Sie sie beheben',
  metaTitle: '10 häufige WordPress-Probleme und Lösungen | BuildWebs',
  metaDescription: 'Die 10 häufigsten WordPress-Probleme aus unseren Website-Audits – veraltete Plugins, fehlende Backups, Spam-Formulare – und wie Sie jedes davon beheben.',
  author: 'BuildWebs Team',
  date: '2026-10-31',
  readTime: '10 Min. Lesezeit',
  category: 'Wartung',
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
  content: `
      <p>Ein großer Teil unserer Arbeit bei BuildWebs besteht nicht darin, neue Webseiten zu bauen, sondern bestehende genau anzusehen. Inhaber melden sich bei uns, weil ihre WordPress-Seite langsam geworden ist, ein Formular nicht mehr funktioniert – oder weil seit dem Weggang der Person, die die Seite gebaut hat, niemand mehr hineingeschaut hat. Was auch immer der Anlass ist: In Audit nach Audit tauchen dieselben Probleme auf.</p>

      <p>Die meisten davon sind weder exotisch noch teuer zu beheben. Hier sind die zehn, die uns am häufigsten begegnen – woran Sie jedes davon selbst erkennen und was zur Behebung in der Regel nötig ist.</p>

      <h2>1. Veraltete WordPress-Version, Plugins und PHP</h2>

      <p>Das häufigste Problem – und das mit den gravierendsten Folgen. Viele Updates für WordPress, Plugins und PHP schließen öffentlich dokumentierte Sicherheitslücken, und automatisierte Bots suchen gezielt nach Seiten, die sie nicht installiert haben.</p>

      <p><strong>Woran Sie es erkennen:</strong> Melden Sie sich an und sehen Sie sich den Update-Zähler in der Adminleiste an. Ein Dutzend ausstehende Plugin-Updates oder eine WordPress-Version, die mehrere Releases zurückliegt, sind deutliche Warnsignale. Die PHP-Version finden Sie unter Werkzeuge → Website-Zustand; 7.4 oder 8.0 bedeutet, dass der Server mit einer Version läuft, die keine Sicherheitsupdates mehr erhält.</p>

      <p><strong>So beheben Sie es:</strong> Erstellen Sie zuerst ein vollständiges Backup (siehe Problem 2) und aktualisieren Sie dann Plugins, Theme und Kern – idealerweise zunächst auf einer Staging-Kopie. Bitten Sie Ihren Hoster, auf eine unterstützte PHP-8.x-Version umzustellen. Machen Sie es dann zur Routine: monatliche Updates – oder ein <a href="/de/services/website-care">Wartungspaket</a>, das sich darum kümmert.</p>

      <h2>2. Keine funktionierenden Backups – oder Backups auf demselben Server</h2>

      <p>Fast jeder Inhaber, mit dem wir sprechen, geht davon aus, Backups zu haben. Wenn wir nachsehen, laufen die Sicherungen seit Monaten nicht mehr, liegen im selben Hosting-Konto wie die Seite oder wurden noch nie wiederhergestellt. Ein ungetestetes Backup ist eine Hoffnung, kein Backup.</p>

      <p><strong>Woran Sie es erkennen:</strong> Wo liegt Ihr aktuellstes Backup gerade, und wann wurde es erstellt? Wenn Sie das nicht innerhalb einer Minute beantworten können, haben Sie kein funktionierendes Backup.</p>

      <p><strong>So beheben Sie es:</strong> Richten Sie automatische tägliche Backups von Dateien und Datenbank an einen separaten Ort ein – Google Drive, Dropbox, einen S3-Bucket oder den Off-Site-Dienst Ihres Hosters. Bewahren Sie mehrere Wochen Historie auf und führen Sie ein- bis zweimal im Jahr eine Test-Wiederherstellung durch.</p>

      <h2>3. Verwaiste Plugins, Plugin-Wildwuchs und schwere Page-Builder</h2>

      <p>Auf vielen Seiten sammeln sich Plugins an, die für eine einzelne Aufgabe installiert und nie entfernt wurden, Plugins, die dasselbe doppelt erledigen, und Plugins, deren Entwickler die Pflege eingestellt haben. Jedes fügt Code hinzu, der auf jeder Seite geladen wird, und verwaiste Plugins bringen häufig ungepatchte Sicherheitslücken mit.</p>

      <p><strong>Woran Sie es erkennen:</strong> Suchen Sie nach Plugins, die deaktiviert, aber noch installiert sind, nach Plugins, deren letztes Update mehr als zwei Jahre zurückliegt, und nach Plugins, die im WordPress-Verzeichnis als geschlossen markiert sind.</p>

      <p><strong>So beheben Sie es:</strong> Entfernen Sie alles, was nicht aktiv gebraucht wird – Deaktivieren reicht nicht, denn der Code bleibt auf dem Server –, und ersetzen Sie verwaiste Plugins durch gepflegte Alternativen. Ist ein Page-Builder die Hauptursache für lange Ladezeiten, ist ein Neuaufbau auf einem schlankeren Theme manchmal die ehrliche Antwort; bei einer <a href="/de/services/business-websites">kleinen Unternehmenswebseite</a> ist das oft weniger Aufwand, als viele erwarten.</p>

      <h2>4. Kein Caching und langsames Shared Hosting</h2>

      <p>WordPress erzeugt jede Seite dynamisch und führt für jeden Besucher PHP-Code und Datenbankabfragen aus. Ohne Caching kann eine Seite auf günstigem Shared Hosting mehrere Sekunden brauchen, bis der erste Inhalt erscheint.</p>

      <p><strong>Woran Sie es erkennen:</strong> Prüfen Sie Ihre Startseite mit Google PageSpeed Insights und achten Sie auf die Antwortzeit des Servers. Deutlich über einer Sekunde deutet auf Caching oder Hosting hin.</p>

      <p><strong>So beheben Sie es:</strong> Installieren und konfigurieren Sie ein Caching-Plugin, komprimieren und verkleinern Sie Bilder und stellen Sie sicher, dass der Server eine aktuelle PHP-Version nutzt. Ist die Seite danach immer noch langsam, ist das Hosting selbst der Flaschenhals – und ein Umzug zu einem besseren Anbieter ist meist günstig.</p>

      <h2>5. Schwache Admin-Sicherheit: Benutzername „admin“, keine 2FA, kein Login-Limit</h2>

      <p>Die meisten WordPress-Hacks sind nicht raffiniert: Automatisierte Skripte probieren Tausende Kombinationen aus Benutzername und Passwort gegen die Login-Seite aus. Eine Seite, die noch „admin“ als Benutzernamen verwendet, Fehlversuche nicht begrenzt und keinen zweiten Faktor verlangt, macht ihnen die Arbeit leicht.</p>

      <p><strong>Woran Sie es erkennen:</strong> Sehen Sie im Dashboard unter Benutzer nach. Gibt es ein Konto namens „admin“? Wie viele Administratoren gibt es, und kennen Sie alle? Geben Sie fünfmal ein falsches Passwort ein – wenn Sie nichts stoppt, gibt es kein Login-Limit.</p>

      <p><strong>So beheben Sie es:</strong> Benennen Sie das Konto „admin“ um oder ersetzen Sie es, geben Sie jeder Person ein eigenes Konto mit der niedrigsten nötigen Rolle und entfernen Sie ungenutzte Konten. Ergänzen Sie ein Plugin, das Anmeldeversuche begrenzt, und aktivieren Sie die Zwei-Faktor-Authentifizierung für alle Administratoren. All das dauert nicht länger als eine Stunde.</p>

      <h2>6. Defekte oder von Spam überflutete Kontaktformulare – und Formular-Mails im Spam-Ordner</h2>

      <p>Dieses Problem ist unsichtbar: Die Webseite sieht gut aus – und die Anfrage kommt nie an. Wir finden regelmäßig Formulare, die nach einem Update still und leise aufgehört haben zu senden, Formulare, die Hunderte Spam-Nachrichten pro Woche liefern, und Formulare, die einwandfrei funktionieren – nur dass jede Nachricht im Spam-Ordner des Inhabers landet.</p>

      <p><strong>Woran Sie es erkennen:</strong> Schicken Sie sich selbst über jedes Formular eine Testnachricht und prüfen Sie, ob – und wo – sie ankommt. Nachrichten im Spam-Ordner deuten fast immer auf fehlende E-Mail-Authentifizierung hin.</p>

      <p><strong>So beheben Sie es:</strong> Versenden Sie Formular-Mails über ein SMTP-Plugin, das mit Ihrem eigenen Postfach oder einem Transaktions-E-Mail-Dienst verbunden ist, statt über die PHP-Mail-Funktion des Servers, und sorgen Sie für korrekte SPF-, DKIM- und DMARC-Einträge im DNS Ihrer Domain – sie belegen gegenüber empfangenden Mailservern, dass die Nachricht wirklich von Ihnen stammt. Ergänzen Sie ein Honeypot-Feld oder ein datenschutzfreundliches Captcha gegen Spam.</p>

      <h2>7. Mixed Content und fehlerhafte SSL-Konfiguration</h2>

      <p>Ein SSL-Zertifikat zu haben ist nicht dasselbe, wie es richtig zu nutzen – und die Lücken fallen kaum auf, weil die Startseite meist in Ordnung aussieht.</p>

      <p><strong>Woran Sie es erkennen:</strong> Öffnen Sie einige Seiten und achten Sie auf die Adressleiste. Ein Warndreieck oder „Nicht sicher“ statt eines Schlosses bedeutet, dass einzelne Bilder, Skripte oder Stylesheets noch über unverschlüsseltes HTTP geladen werden („Mixed Content“). Geben Sie Ihre Domain mit vorangestelltem http:// ein: Lädt die Seite, ohne auf https:// zu wechseln, fehlt die Weiterleitung.</p>

      <p><strong>So beheben Sie es:</strong> Stellen Sie WordPress-Adresse und Website-Adresse auf https:// um, aktualisieren Sie alte http://-Verweise per Suchen-und-Ersetzen in der Datenbank und richten Sie auf Serverebene eine permanente Weiterleitung von HTTP auf HTTPS ein. Stellen Sie schließlich sicher, dass sich das Zertifikat automatisch erneuert.</p>

      <h2>8. Fehlende oder nicht rechtskonforme Cookie-Einwilligung und Datenschutz</h2>

      <p>Beim Datenschutz stehen Webseiten kleiner Unternehmen am häufigsten nicht im Einklang mit dem Gesetz. Typische Befunde: Tracking-Skripte, die laden, bevor der Besucher zugestimmt hat, ein Banner ohne echte Ablehnen-Option, Schriftarten von Googles Servern und eingebettete Videos oder Karten, die schon beim Seitenaufruf Cookies setzen.</p>

      <p><strong>Woran Sie es erkennen:</strong> Öffnen Sie Ihre Seite in einem privaten Browserfenster und prüfen Sie – bevor Sie irgendwo klicken – in den Entwicklertools des Browsers die gesetzten Cookies und Netzwerkanfragen. Sind Google Analytics, Facebook Pixel oder Ähnliches bereits aktiv, erfüllt das Banner seinen Zweck nicht.</p>

      <p><strong>So beheben Sie es:</strong> Verwenden Sie ein Consent-Plugin, das Skripte tatsächlich blockiert, bis eine Einwilligung vorliegt, hosten Sie Schriftarten lokal, laden Sie Videos und Karten erst nach einem Klick und aktualisieren Sie Datenschutzerklärung und Impressum. In Deutschland hat allein das Einbinden von Google Fonts über Googles Server bereits zu Gerichtsurteilen und Abmahnungen geführt.</p>

      <h2>9. Defekte Links, Weiterleitungsketten und vergessene Staging-URLs nach einem Umzug</h2>

      <p>Jeder Umzug zu einem neuen Hoster, einer neuen Domain oder einem neuen Design hinterlässt Spuren, wenn er nicht sauber nachbereitet wird: interne Links auf Seiten, die nicht mehr existieren, Weiterleitungen, die über zwei oder drei alte Adressen springen, und erstaunlich oft Bilder und Links, die noch auf eine Staging-Adresse wie dev.beispiel.de verweisen.</p>

      <p><strong>Woran Sie es erkennen:</strong> Ein kostenloser Crawler wie Screaming Frog oder ein Online-Linkchecker listet 404-Fehler und Weiterleitungsketten in wenigen Minuten auf. Suchen Sie bei Google nach Ihrer Staging-Domain, um zu sehen, ob eine Testversion indexiert wurde.</p>

      <p><strong>So beheben Sie es:</strong> Reparieren oder entfernen Sie defekte interne Links, ersetzen Sie Weiterleitungsketten durch eine einzige direkte Weiterleitung und aktualisieren Sie übrig gebliebene Staging-URLs per Suchen-und-Ersetzen. Ist eine Staging-Seite indexiert, schützen Sie sie mit einem Passwort oder einem serverseitigen noindex und beantragen Sie die Entfernung in der Search Console.</p>

      <h2>10. Der Inhaber hat keinen Zugriff auf Domain, Hosting oder Admin-Bereich</h2>

      <p>Viele Inhaber stellen erst beim Audit fest, dass die Domain auf den Namen eines früheren Entwicklers registriert ist, die Hosting-Rechnung an eine Agentur geht, die nicht mehr existiert, oder das einzige Administratorkonto jemandem gehört, den sie nicht mehr erreichen. Läuft die Domain aus, kann ein Unternehmen seine Webadresse und seine E-Mails über Nacht verlieren.</p>

      <p><strong>Woran Sie es erkennen:</strong> Können Sie sich jetzt sofort selbst beim Domain-Registrar, im Hosting-Kundenbereich und in WordPress anmelden – mit Zugangsdaten, die auf Ihren Namen laufen? Erhalten Sie die Verlängerungsrechnungen? Lautet eine Antwort Nein, hängt Ihre Webseite vom guten Willen eines anderen ab.</p>

      <p><strong>So beheben Sie es:</strong> Lassen Sie die Domain in ein Registrar-Konto auf den Namen Ihres Unternehmens übertragen und das Hosting in Ihr eigenes Konto verlegen. Legen Sie sich ein eigenes Administratorkonto an und bewahren Sie alle Zugangsdaten in einem Passwort-Manager auf. Jeder Entwickler und jede Agentur – uns eingeschlossen – sollte separate Zugänge nutzen, die Sie jederzeit entziehen können.</p>

      <h2>Was Sie diese Woche prüfen sollten</h2>

      <p>Sie müssen nicht alles auf einmal beheben. Wenn Sie diese Woche eine Stunde in Ihre Webseite investieren, beginnen Sie hier:</p>

      <ol>
        <li>Notieren Sie die ausstehenden Updates und die PHP-Version unter Website-Zustand.</li>
        <li>Suchen Sie Ihr aktuellstes Backup und prüfen Sie Datum und Speicherort.</li>
        <li>Senden Sie über jedes Kontaktformular eine Testnachricht und sehen Sie nach, wo sie ankommt.</li>
        <li>Rufen Sie Ihre Seite mit http:// sowie einige Unterseiten auf und achten Sie auf das Schloss-Symbol.</li>
        <li>Prüfen Sie in einem privaten Fenster, welche Cookies gesetzt werden, bevor Sie auf „Akzeptieren“ klicken.</li>
        <li>Vergewissern Sie sich, dass Sie persönlich die Zugänge zu Domain, Hosting und WordPress besitzen.</li>
        <li>Sehen Sie unter Benutzer nach einem Konto „admin“ und nach Personen, die keinen Zugriff mehr haben sollten.</li>
      </ol>

      <p>Notieren Sie, was Sie finden – so wissen Sie, worum Sie bitten müssen und ob es erledigt wurde.</p>

      <h2>Sie wünschen sich einen zweiten Blick?</h2>

      <p>BuildWebs ist ein kleines Webstudio mit Sitz in Polen, das remote mit kleinen Unternehmen in der gesamten EU arbeitet. Wir bauen WordPress-Webseiten und WooCommerce-Shops – und wir reparieren und pflegen bestehende: Einmalige Reparaturen und die Bereinigung gehackter Seiten beginnen bei 290 €, unsere Wartungspakete ab 49 € pro Monat umfassen Updates, Backups und Monitoring. Sie arbeiten immer direkt mit dem Entwickler zusammen, zu einem vorab vereinbarten Festpreis.</p>

      <p>Wenn wir uns Ihre Seite einmal unverbindlich ansehen sollen, <a href="/de#contact">nehmen Sie Kontakt mit uns auf</a>. Wir sagen Ihnen ehrlich, was wir finden, was dringend ist und was nicht – und nennen Ihnen einen festen Preis für die Behebung.</p>
    `,
}
