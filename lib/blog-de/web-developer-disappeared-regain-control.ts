import type { BlogPost } from '../blogTypes'

export const post: BlogPost = {
  slug: 'webentwickler-nicht-erreichbar-zugriff-webseite',
  title: 'Ihr Webentwickler ist nicht mehr erreichbar? So erhalten Sie wieder Zugriff auf Webseite, Domain und Hosting',
  metaTitle: 'Webentwickler nicht erreichbar? Zugriff sichern | BuildWebs',
  metaDescription: 'Ihr Webentwickler ist nicht erreichbar? Schritt für Schritt erklärt, wie Sie wieder Zugriff auf Webseite, Domain, Hosting und WordPress-Admin erhalten.',
  author: 'BuildWebs Team',
  date: '2026-10-31',
  readTime: '9 Min. Lesezeit',
  category: 'Website-Rettung',
  image: 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=1200&h=600&fit=crop',
  content: `
      <p>Das Telefon bleibt stumm, E-Mails werden nicht beantwortet, und die letzte Rechnung für „Hosting und Wartung“ ging an jemanden, den Sie nicht mehr erreichen. Für ein kleines Unternehmen ist das vor allem deshalb beunruhigend, weil die Webseite von außen völlig normal aussieht. Nur weiß niemand mehr, wer die Schlüssel in der Hand hält.</p>

      <p>Mit dieser Situation haben wir im Rahmen unserer Website-Rettung regelmäßig zu tun – und sie ist fast immer lösbar. Dieser Leitfaden führt Sie in Ruhe hindurch: von der Frage, wer was kontrolliert, bis dahin, wie Sie sicherstellen, dass Ihnen das nicht noch einmal passiert. Es handelt sich um praktische Hinweise aus der täglichen Arbeit, nicht um Rechtsberatung.</p>

      <h2>1. Keine Panik: Was schiefgehen kann – und was nicht</h2>

      <p>Eine Webseite hört nicht auf zu funktionieren, nur weil ihr Entwickler nicht mehr antwortet. Die Dateien liegen auf einem Server, die Domain zeigt auf diesen Server, und beides läuft weiter, bis jemand den Stecker zieht oder eine Rechnung unbezahlt bleibt. Nur drei Dinge können wirklich schiefgehen:</p>

      <ul>
        <li><strong>Die Domain läuft ab.</strong> Wird die Verlängerung versäumt, gehen die Webseite und alle E-Mail-Adressen darauf offline, und nach einer Übergangsfrist kann jeder den Namen registrieren. Das ist die einzige echte Frist – ermitteln Sie deshalb zuerst das Verlängerungsdatum.</li>
        <li><strong>Das Hosting wird gekündigt oder nicht bezahlt.</strong> Das Konto wird gesperrt, die Seite geht offline, und nach einiger Zeit werden Dateien und Backups beim Anbieter unter Umständen gelöscht.</li>
        <li><strong>Die Seite wird vernachlässigt.</strong> Keine Updates, keine Patches, keine Backups. Am ersten Tag passiert nichts, aber das Risiko eines Hacks wächst mit jedem Monat.</li>
      </ul>

      <p>Was nicht passieren kann: Niemand kann Ihnen Ihre Texte, Ihre Fotos oder die Marke wegnehmen, die Sie aufgebaut haben. Im schlimmsten Fall lässt sich die Seite neu aufbauen.</p>

      <h2>2. Bestandsaufnahme: Von welchen Konten hängt Ihre Webseite ab?</h2>

      <p>Bevor Sie jemanden kontaktieren, durchsuchen Sie Ihr Postfach nach Rechnungen und Willkommens-E-Mails und fragen Sie in der Buchhaltung nach, welche Unternehmen Sie belasten. Eine typische Unternehmenswebseite hängt von den meisten dieser Dienste ab:</p>

      <ul>
        <li><strong>Domain-Registrar</strong> – dort ist der Name registriert und wird verlängert.</li>
        <li><strong>DNS</strong> – oft beim Registrar, manchmal ein separater Dienst wie Cloudflare.</li>
        <li><strong>Hosting</strong> – der Server mit Dateien und Datenbank, samt Verwaltungsoberfläche, FTP/SFTP- und Datenbankzugang.</li>
        <li><strong>WordPress-Admin</strong> – der Login unter /wp-admin und alle weiteren Administratorkonten.</li>
        <li><strong>E-Mail-Postfächer</strong> – beim Webhoster, bei Google Workspace, Microsoft 365 oder anderswo.</li>
        <li><strong>Google Analytics, Search Console und Unternehmensprofil</strong> – häufig unter dem Google-Konto des Entwicklers eingerichtet.</li>
        <li><strong>Zahlungsanbieter</strong> – Stripe, Mollie, PayPal oder Ähnliches, falls Sie online verkaufen.</li>
        <li><strong>Premium-Plugins, Themes und SaaS-Tools</strong> – Page-Builder, SEO- und Backup-Plugins, Formular- und Newsletter-Tools. Über das Konto des Entwicklers gekaufte Lizenzen erhalten keine Updates mehr, sobald dessen Abonnement ausläuft.</li>
      </ul>

      <p>Notieren Sie zu jedem Punkt, wer Kontoinhaber ist, an welche E-Mail-Adresse das Konto gebunden ist, ob Sie Zugriff haben und wann verlängert wird. Die Lücken sind Ihre To-do-Liste.</p>

      <h2>3. Herausfinden, wem die Domain gehört</h2>

      <p>Die Domain ist der wichtigste Posten auf der Liste. Wer als Inhaber eingetragen ist, bestimmt, wohin der Name zeigt – und damit über Ihre Webseite und Ihre E-Mails.</p>

      <h3>So prüfen Sie den Domaininhaber</h3>

      <p>Führen Sie eine WHOIS- oder RDAP-Abfrage für Ihre Domain durch – jede Länder-Registrierungsstelle bietet eine an: DENIC für .de, nic.at für .at, SWITCH für .ch, EURid für .eu und SIDN für .nl. Seit der DSGVO zeigen die meisten Registrierungsstellen den Namen des Inhabers nicht mehr öffentlich an, Sie sehen aber weiterhin den Registrar, die Nameserver und oft das Ablaufdatum. Ist der Inhaber verborgen, können der Registrar oder das Auskunftsverfahren der Registrierungsstelle Ihnen sagen, wer es ist.</p>

      <p>Läuft die Domain bereits auf Ihr Unternehmen und fehlen Ihnen lediglich die Zugangsdaten, setzt der Support des Registrars den Zugang zurück, sobald Sie nachweisen, dass Sie das Unternehmen vertreten (Handelsregisterauszug, Ausweis, übereinstimmende Rechnungsdaten).</p>

      <h3>Wenn die Domain auf den Entwickler registriert ist</h3>

      <p>Das kommt häufig vor und ist nicht zwangsläufig böswillig: Viele Freelancer registrieren Domains aus Bequemlichkeit für ihre Kunden. Zum Problem wird es erst, wenn sie nicht mehr erreichbar sind. Ihre Möglichkeiten, der Reihe nach:</p>

      <ol>
        <li><strong>Bitten Sie um die Übertragung.</strong> Schicken Sie eine kurze, freundliche und datierte Anfrage (E-Mail plus Brief) mit der Bitte, den Inhaber auf Ihr Unternehmen zu ändern oder den Autorisierungscode herauszugeben (je nach Registrierungsstelle Auth-Code, AuthInfo, EPP-Code oder Transfer-Token genannt). Viele „verschwundene“ Entwickler melden sich wieder, sobald eine klare, höfliche Anfrage eintrifft.</li>
        <li><strong>Wenden Sie sich an den Registrar.</strong> Erklären Sie, dass die Domain ausschließlich für Ihr Unternehmen genutzt wird, und legen Sie Belege vor: Ihren Firmennamen in Inhalt und Impressum der Seite, Rechnungen des Entwicklers über „Domain“, Handelsregister- oder Markenunterlagen. Registrare haben für solche Fälle Verfahren und können oft einen Inhaberwechsel einleiten.</li>
        <li><strong>Nutzen Sie das Streitverfahren der Registrierungsstelle.</strong> Die Länder-Registrierungsstellen und EURid bieten Verfahren für den Fall an, dass der Inhaber nicht erreichbar ist oder sich weigert, eine Domain zu übertragen, die eindeutig einem anderen zusteht. Das dauert – fangen Sie also früh an.</li>
      </ol>

      <p>Behalten Sie dabei das Ablaufdatum im Blick: Manche Registrare lassen zu, dass Sie die Verlängerung selbst übernehmen, während die Übertragung geklärt wird – fragen Sie nach.</p>

      <h2>4. Hosting: Anbieter finden und Konto übernehmen</h2>

      <p>Haben Sie keine Unterlagen vom Hosting-Unternehmen, verrät Ihnen die Seite selbst, wo sie liegt. Ermitteln Sie den A-Record der Domain – die IP-Adresse, auf die sie zeigt – mit einem beliebigen Online-DNS-Tool oder dem Befehl <strong>nslookup ihredomain.de</strong>, und führen Sie dann eine IP-Abfrage für diese Adresse durch. Das Ergebnis nennt das Hosting-Unternehmen oder den Rechenzentrumsbetreiber.</p>

      <p>Kontaktieren Sie den Support des Anbieters mit dem Domainnamen und schildern Sie die Situation. Anbieter übergeben ein Konto nicht an jemanden, der lediglich behauptet, Eigentümer einer Webseite zu sein – rechnen Sie also mit Nachweisen wie Handelsregisterauszug oder Gewerbeanmeldung, dem Ausweis der Geschäftsführung und Belegen, dass Ihr Unternehmen bezahlt hat. Läuft das Konto auf Ihr Unternehmen, ist aber die E-Mail-Adresse des Entwicklers hinterlegt, reicht das meist aus, um die Kontaktdaten ändern zu lassen.</p>

      <p>Läuft das Konto auf den Entwickler und wird von ihm bezahlt, darf der Anbieter es Ihnen in der Regel nicht überlassen. Dann ist der praktikable Weg ein Umzug: Besorgen Sie sich eine Kopie der Seite – vom Entwickler, aus einem älteren Backup oder, wenn nichts anderes hilft, rekonstruiert aus den Live-Seiten –, richten Sie sie auf einem Hosting in Ihrem Namen ein und lassen Sie die Domain darauf zeigen. Für einen Entwickler ist das Routine und meist in ein bis zwei Tagen erledigt.</p>

      <h2>5. Zurück in den WordPress-Admin</h2>

      <p>Der WordPress-Login ist oft das am leichtesten zu öffnende Schloss – sofern Sie eines der Teile darum herum kontrollieren:</p>

      <ul>
        <li><strong>Passwort per E-Mail zurücksetzen.</strong> Rufen Sie ihredomain.de/wp-login.php auf, klicken Sie auf „Passwort vergessen?“ und probieren Sie jede E-Mail-Adresse, die Sie je mit dem Entwickler verwendet haben; existiert ein Administratorkonto mit einer davon, kommt der Link an.</li>
        <li><strong>Über das Hosting-Panel.</strong> Viele Hosting-Oberflächen enthalten ein WordPress-Toolkit mit Ein-Klick-Admin-Login oder erlauben es, einen neuen Administrator anzulegen, ohne ein bestehendes Passwort zu kennen.</li>
        <li><strong>Über die Datenbank.</strong> Mit Datenbankzugang (phpMyAdmin oder Ähnliches) lässt sich das Passwort eines Administrators ersetzen oder ein neuer Administrator anlegen. Das klingt technisch – und ist es auch –, doch für einen Entwickler ist es eine Sache von Minuten.</li>
      </ul>

      <p>Steht Ihnen keine dieser Möglichkeiten offen, hängt alles vom Hosting-Zugang ab (Abschnitt 4) – genau deshalb sind die Konten wichtiger als der WordPress-Login selbst.</p>

      <h2>6. Sobald Sie drin sind: absichern, sichern, dokumentieren</h2>

      <p>Der wiedererlangte Zugang ist nicht das Ziel, sondern der Anfang. Arbeiten Sie diese Liste der Reihe nach ab:</p>

      <ol>
        <li><strong>Erstellen Sie zuerst ein vollständiges Backup</strong> – Dateien und Datenbank – und legen Sie eine Kopie außerhalb des Hosting-Kontos ab, bevor Sie irgendetwas ändern.</li>
        <li><strong>Ändern Sie jedes Passwort</strong>: WordPress-Administratoren, Hosting-Panel, FTP/SFTP, Datenbank, Postfächer, Registrar und DNS. Verwenden Sie einen Passwort-Manager des Unternehmens und aktivieren Sie überall, wo möglich, die Zwei-Faktor-Authentifizierung.</li>
        <li><strong>Prüfen Sie die Benutzer.</strong> Entfernen Sie Administratorkonten, die Sie nicht kennen, und kontrollieren Sie zusätzliche FTP-Konten, SSH-Schlüssel und WordPress-Anwendungspasswörter.</li>
        <li><strong>Erneuern Sie API-Schlüssel und Tokens</strong>: Zahlungsanbieter, SMTP- oder E-Mail-Versand, Google- und Social-Media-Integrationen, Backup-Dienste.</li>
        <li><strong>Prüfen Sie Plugins und Themes.</strong> Notieren Sie alles Unbekannte oder nicht mehr Gepflegte und lizenzieren Sie alles, was auf das Konto des Entwicklers läuft, auf Ihren Namen neu, damit Updates weiterlaufen.</li>
        <li><strong>Übertragen Sie Analyse- und Suchtools</strong> auf Ihr eigenes Google-Konto und entfernen Sie die alten Zugriffe.</li>
        <li><strong>Aktualisieren Sie Inhaber- und Rechnungsdaten</strong> bei Domain und Hosting, damit Verlängerungshinweise bei Ihnen ankommen.</li>
        <li><strong>Dokumentieren Sie alles</strong> in einem einzigen, gesicherten Dokument: jeden Dienst, jede Login-E-Mail, jedes Verlängerungsdatum und jede zugriffsberechtigte Person.</li>
      </ol>

      <h2>7. Die rechtliche und organisatorische Seite</h2>

      <p>Die meisten dieser Situationen beginnen mit einem Vertrag, der nie geregelt hat, wem was gehört – oder ganz ohne schriftlichen Vertrag. Das Prinzip ist einfach: Domain, Hosting und Inhalte gehören dem Unternehmen, und der Entwickler ist ein technischer Ansprechpartner, der sich jederzeit austauschen lässt. Für künftige Vereinbarungen halten Sie Folgendes schriftlich fest:</p>

      <ul>
        <li>Die Domain wird auf Ihr Unternehmen als Inhaber registriert, mit einer Firmenadresse als Konto-E-Mail.</li>
        <li>Das Hosting wird im Namen des Unternehmens beauftragt und bezahlt; der Entwickler erhält Zugriff, nicht Eigentum.</li>
        <li>Klare Rechte an Code, Design, Texten und Bildern sowie Drittlizenzen, die auf den Namen des Unternehmens gekauft werden.</li>
        <li>Die Verpflichtung, innerhalb einer festgelegten Frist nach Ende der Zusammenarbeit sämtliche Zugangsdaten und ein vollständiges Backup zu übergeben.</li>
        <li>Eine benannte Vertretung oder ein Verfahren für den Fall, dass der Entwickler nicht erreichbar ist.</li>
      </ul>

      <p>Noch einmal: Dies sind praktische Hinweise aus der täglichen Arbeit, keine Rechtsberatung; bei einem bestehenden Streit um eine Domain ist ein Anwalt, der die Regeln in Ihrem Land kennt, sein Honorar wert.</p>

      <h2>8. Checkliste zur Vorbeugung</h2>

      <ul>
        <li>Registrieren Sie die Domain selbst, auf den Namen des Unternehmens, mit automatischer Verlängerung über eine Firmenkarte.</li>
        <li>Hinterlegen Sie bei jedem Dienst eine Firmen-E-Mail-Adresse – niemals die des Entwicklers.</li>
        <li>Bewahren Sie alle Zugangsdaten in einem Passwort-Manager des Unternehmens auf und teilen Sie Zugriffe von dort aus.</li>
        <li>Prüfen Sie einmal im Quartal, ob Sie sich tatsächlich bei Registrar, Hosting und WordPress anmelden können.</li>
        <li>Halten Sie ein unabhängiges Backup außerhalb des Hosting-Anbieters vor, das Sie wiederherstellen können.</li>
        <li>Bestehen Sie auf einer schriftlichen Vereinbarung mit Übergabeklausel – so klein das Projekt auch ist.</li>
      </ul>

      <h2>9. Brauchen Sie Hilfe, Ihre Webseite zurückzuholen?</h2>

      <p>BuildWebs ist ein kleines Webstudio mit Sitz in der EU, und die Übernahme verwaister WordPress-Seiten und WooCommerce-Shops gehört zu unserer regelmäßigen Arbeit. Wir helfen Ihnen, wieder Zugriff auf Domain, Hosting und Admin zu erhalten, prüfen und bereinigen, was wir vorfinden, ziehen die Seite um, wenn das der sicherere Weg ist – und halten sie anschließend im Rahmen eines <a href="/de/services/website-care">Wartungsvertrags</a> ab 49 € pro Monat aktuell und gesichert. Einmalige Rettungseinsätze beginnen bei 290 € zum vorab vereinbarten Festpreis, wir starten in der Regel innerhalb von 24–48 Stunden, arbeiten remote, und Sie sprechen direkt mit dem Entwickler, der die Arbeit erledigt.</p>

      <p>Wenn Ihr Entwickler verstummt ist und Sie nicht sicher sind, was Sie noch kontrollieren, <a href="/de/contact">nehmen Sie Kontakt auf</a> und schildern Sie die Situation. Wir sagen Ihnen ehrlich, was der nächste Schritt ist – auch wenn es nur eine höfliche E-Mail ist, die Sie selbst verschicken können.</p>
  `,
}
