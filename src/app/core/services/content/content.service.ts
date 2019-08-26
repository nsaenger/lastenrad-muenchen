import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ModalService} from '../modal.service';
import {UserService} from '../user/user.service';


export interface IContent {
  INDEX_01: string;
  INDEX_02: string;
  INDEX_03: string;
  INDEX_04: string;
  INDEX_05: string;

  ADFC_01: string;

  STATION_01: string;
  STATION_02: string;
  STATION_03: string;

  BOOK_01: string;

  HOW_IT_WORKS_01: string;
  HOW_IT_WORKS_02: string;
  HOW_IT_WORKS_03: string;
  HOW_IT_WORKS_04: string;
  HOW_IT_WORKS_05: string;
  HOW_IT_WORKS_06: string;
  HOW_IT_WORKS_07: string;
  HOW_IT_WORKS_08: string;
  HOW_IT_WORKS_09: string;
  HOW_IT_WORKS_10: string;
  HOW_IT_WORKS_11: string;
  HOW_IT_WORKS_12: string;
  HOW_IT_WORKS_13: string;

  DONATIONS_01: string;
  DONATIONS_02: string;
  DONATIONS_03: string;

  PRESS_01: string;
  PRESS_02: string;
  PRESS_03: string;
  PRESS_04: string;
  PRESS_05: string;
  PRESS_06: string;

  IMPRINT_01: string;
  IMPRINT_02: string;
  IMPRINT_03: string;

  TERMS_OF_USE_01: string;

  DATA_PROTECTION_01: string;

  OFFLINE: string;

  NOT_FOUND: string;
}


export interface IMutableContent {
  INDEX_01?: string;
  INDEX_02?: string;
  INDEX_03?: string;
  INDEX_04?: string;
  INDEX_05?: string;

  ADFC_01?: string;

  STATION_01?: string;
  STATION_02?: string;
  STATION_03?: string;

  BOOK_01?: string;

  HOW_IT_WORKS_01?: string;
  HOW_IT_WORKS_02?: string;
  HOW_IT_WORKS_03?: string;
  HOW_IT_WORKS_04?: string;
  HOW_IT_WORKS_05?: string;
  HOW_IT_WORKS_06?: string;
  HOW_IT_WORKS_07?: string;
  HOW_IT_WORKS_08?: string;
  HOW_IT_WORKS_09?: string;
  HOW_IT_WORKS_10?: string;
  HOW_IT_WORKS_11?: string;
  HOW_IT_WORKS_12?: string;
  HOW_IT_WORKS_13?: string;

  DONATIONS_01?: string;
  DONATIONS_02?: string;
  DONATIONS_03?: string;

  PRESS_01?: string;
  PRESS_02?: string;
  PRESS_03?: string;
  PRESS_04?: string;
  PRESS_05?: string;
  PRESS_06?: string;

  IMPRINT_01?: string;
  IMPRINT_02?: string;
  IMPRINT_03?: string;

  TERMS_OF_USE_01?: string;

  DATA_PROTECTION_01?: string;

  OFFLINE?: string;

  NOT_FOUND?: string;
}


/*const ContentRecord: IContent = {
  INDEX_01: '<h1>„daniel – Dein Lastenrad für München“</h1><p>ist ein robustes Lastenfahrrad (mit 90 kg Tragkraft, einer Klappbank mit Gurten sowie mit einer Schutzplane) und Du kannst es Dir ausleihen. Einfach so. Einfach gut. Du kannst es Dir ausleihen, denn es steht in ganz München an wechselnden Stationen für Dich bereit. Mit „daniel – Dein Lastenrad für München“ kannst Du</p><ul><li>Deine Umzugskartons in Deine neue Wohnung bringen,</li><li>die Grillsachen in den Park,</li><li>die Kinder inklusive Pipapo an die Isar oder</li><li>die leeren Flaschen zum Altglascontainer.</li></ul><p>In drei Schritten kommst Du an „daniel – Dein Lastenrad für München“. Und am Ende des Buchungszeitraums bringst Du daniel wieder zur Station. So einfach geht das! Übrigens, die Ausleihe ist kostenlos (s. u.).</p>',
  INDEX_02: '&nbsp;',
  INDEX_03: '<div><h2>Schritt 1</h2><p>Registriere Dich hier mit wenigen persönlichen Daten.</p><a class="btn light small orange outline" (click)="openModal(\'REGISTER\')">Registrieren</a><p>Logge Dich danach ein</p><a class="btn light small orange outline" (click)="openModal(\'LOGIN\')">Login</a></div><div><h2>Schritt 2</h2><p>Buche im Kalender Deinen Wunschtermin</p><a class="btn light small orange outline" routerLink="/book">Buchen</a><p>Es gibt ein Problem? Schreibe uns an <a href="mailto:daniel@lastenrad-muenchen.de" target="_blank">daniel@lastenrad-muenchen.de</a></p></div><div><h2>Schritt 3</h2><p>Komm am Tag,für den Du daniel online gebucht hast,einfach mit Personalausweis und Ausleihformular zur aktuellen Ausleih-Station (laut Buchungskalender) – und schon kannst Du los fahren.</p></div>',
  INDEX_04: '&nbsp;',
  INDEX_05: '<div><h2>Kostenlos?</h2><p class="align-justify">Ist es wirklich kostenlos? Ja,das ist es. Wir freuen uns aber über eine Spende und wir freuen uns,wenn Du sorgsam und pfleglich mit „daniel – Dein Lastenrad für München“ umgehst. Alle Menschen,die etwas für daniel tun,machen es komplett ehrenamtlich. Es sind einige Stunden im Monat,die wir als ADFC München dafür ehrenamtlich aufwenden. Deswegen wollen wir die laufenden Kosten für Wartung,Reparaturen,Webseite,Telefon und Versicherung aus den Spenden decken. </p></div><div><h2>Spenden</h2><p class="align-justify">Gern darfst Du uns zusätzlich unterstützen mit einer klassischen Banküberweisung auf das Konto des ADFC München,Stichwort:„daniel – Dein Lastenrad für München“. Wir sagen jetzt schon Tausend Dank! Du willst uns auf andere Art und Weise helfen und daniel mal reparieren,von einer Station zur nächsten bringen,über ihn etwas schreiben,ein tolles Video drehen oder für ein neues Lastenrad Geld einsammeln? Sehr gerne. Schreib uns einfach an <a href="mailto:daniel@lastenrad-muenchen.de" target="_blank">daniel@lastenrad-muenchen.de</a></p></div>',

  ADFC_01: '<h1>daniel und der ADFC</h1><div class="grid grid-2"><div><h2>Der ADFC München</h2><p class="align-justify"> Der ADFC München (Allgemeiner Deutscher Fahrrad-Club Kreisverband München e.V.) ist ein Verkehrsclub mit dem Ziel der Förderung des Fahrradverkehrs in München und dem Umland. Als Gliederung des ADFC Bayern und des ADFC Bundesverbandes arbeiten wir auch landes- und bundesweit für einen fahrradfreundlichen Verkehr und eine lebenswerte Umwelt. In Arbeitsgruppen und Projektgruppen engagieren sich die aktiven Mitglieder in ehrenamtlicher Arbeit, um dieses Ziel zu erreichen. Unsere Zentrale ist das Radlerhaus. Dort befinden sich unsere Geschäftsstelle und der Infoladen sowie unsere Selbsthilfewerkstatt und der Fahrrad-Codierungsservice. Außerdem organisieren und bieten wir</p></div><div><h2>&nbsp;</h2> <img src="https://lastenrad-muenchen.de/core/img/adfc-logo.png" alt="Das logo des ADFC München"></div><div><ul class="list-style-none" style="padding-left: 40px;"><li> <a href="http://www.adfc-muenchen.de/radtouren/tagestouren.html" target="_blank">Tagestouren</a></li><li> <a href="http://www.adfc-muenchen.de/radtouren/mehrtagestouren.html" target="_blank">Mehrtagestouren</a></li><li> <a href="http://www.adfc-muenchen.de/veranstaltungen/kurse.html" target="_blank">Technikkurse</a></li><li> <a href="http://www.adfc-muenchen.de/adfc-muenchen/arbeitsgruppen/info.html" target="_blank">Infostände</a></li><li> <a href="http://www.adfc-muenchen.de/service/selbsthilfewerkstatt.html" target="_blank">Selbsthilfewerkstatt</a></li><li> <a href="http://www.adfc-muenchen.de/radverkehr.html" target="_blank">Radverkehr</a></li><li> <a href="http://www.adfc-muenchen.de/service/rechtsberatung-fuer-mitglieder.html" target="_blank">Rechtsberatung</a></li></ul></div><div><p> Interesse? Dann schnell Mitglied werden. Schauen Sie auf unsere Webseite, auf Facebook und erfahren Sie mehr, was der ADFC München alles macht für ein lebenswertes und fahrradfreundliches München.</p></div></div>',

  STATION_01: '<h1>Station werden</h1><div class="grid grid-2"><p class="align-justify"> daniel zieht alle paar Wochen von einer Station zur nächsten. Und ist sicher auch bald in deiner Nähe. Die Stationen sind Cafés, kleine Läden, Stadtteilbüros, soziale Einrichtungen, Büros, Schulen, Kindergärten usw. Danke, dass ihr daniel unentgeltlich beherbergt und verleiht! Aktuelle und kommende Stationen sind orange hinterlegt, vergangene Stationen blau.</p><p class="align-justify"> daniel-Station werden! Wir brauchen dich! Hast du ein Café, einen Laden, wohnst in einer WG oder arbeitest in einer sozialen Einrichtung, in einem Büro, in einer Schule oder in einem Kindergarten? Tu was für die Umwelt, die Mobilität in deiner Stadt und setze ein Zeichen für ein lebenswertes München! Erkläre dich bereit, „daniel – Dein Lastenrad für München“ für ein paar Wochen zu beherbergen und daniel zu verleihen. Unterstütze unser Projekt und werde Teil unserer Bewegung für ein fahrradgerechtes München. Gleichzeitig werden interessierte, aufgeschlossene Menschen auf dich aufmerksam – sowohl direkt beim Ausleihen als auch über unsere Website.</p></div>',
  STATION_02: '&nbsp;',
  STATION_03: '<div><h1>Station werden ist nicht schwer...</h1><ol><li> Die Ausleihenden buchen daniel ausschließlich über die Website – Kein Aufwand für dich!</li><li> Wir bringen dir daniel vorbei und erklären, wie alles funktioniert.</li><li> Die Ausleihenden holen dann daniel zu den von dir festgelegten Öffnungszeiten ab.</li><li> Ist der Ausleihende da, musst du lediglich die Daten auf dem Ausleihformular mit dem Personalausweis überprüfen und dann eine kurze Übergabe machen – fünf Minuten Aufwand pro Buchung.</li><li> Die Ausleihenden bringen daniel danach einfach zurück und du nimmst den Schlüssel wieder entgegen. Fertig!</li><li> Sollten dir Mängel auffallen, dann kommen wir vorbei zum Reparieren.</li><li> Am Ende des Zeitraums, in dem du daniel beherbergt hast, holen wir ihn wieder bei dir ab.</li></ol></div><div><h1>...es zu sein auch nicht sehr</h1><ul><li> Maximal eine Buchung pro Tag, fünf bis sechs pro Woche.</li><li> Die Buchung, weitere Informationen, Rückfragen übernehmen wir bzw. die Webseite.</li><li> Es wäre schön, wenn du einen Blick darauf hast, ob daniel unbeschadet zurückgekommen ist und andernfalls kurz Bescheid gibst.</li><li> Während der Zeit der Ausleihe steht bei dir auch eine Spendendose. Wir freuen uns, wenn sie gut gefüllt zurückkommt.</li></ul><p> Du willst mitmachen? Schreib uns einfach oder rufe an: <a href="mailto:daniel@lastenrad-muenchen.de" target="_blank">daniel@lastenrad-muenchen.de</a> oder 089 461 33 830. Auch bei Fragen kannst du uns immer gerne kontaktieren.</p></div>',

  BOOK_01: '<h1>Einfach buchen</h1> <p> Auf dieser Seite kannst du daniel buchen:<br>Durch Klick auf den Kalender wählst du den Zeitraum aus (maximal 2 Tage, Wochenende oder Feiertag darfst du hinzunehmen).<br>Wie es danach weitergeht, erfährst du auf der Seite <a class="btn small light outline" [routerLink]="\'/how-it-works\'">So funktioniert\'s</a><br>Findest du keinen Termin oder ist dir der aktuelle Standort zu weit entfernt?<br>Dann schau doch mal nach bei freie-lastenradler.de - dort kannst du auch kostenlos ausleihen.<br><b>Buchen</b> geht nicht? Oder anderes <b>Problem?</b> Schreibe uns an <a href="mailto:daniel@lastenrad-muenchen.de" target="_blank">daniel@lastenrad-muenchen.de</a>. <br>Viel Spaß, dein <span class="daniel">daniel</span>-Team. </p>',

  HOW_IT_WORKS_01: '<h1>So funktioniert\'s</h1><p>So leihst du daniel aus:</p><p>Das wichtigste vorweg:</p><ol><li>daniel ist kostenlos und lebt von Spenden</li><li>daniel lebt vom Vertrauen und davon, dass man ihn gut behandelt und den Service wertschätzt</li></ol><p> Für deine Anmeldung brauchen wir eine Handvoll Daten. Deshalb musst du dich registrieren. Wir geben deine Daten aber niemals weiter.</p>',
  HOW_IT_WORKS_02: '&nbsp;',
  HOW_IT_WORKS_03: '<h1>Registrieren</h1><p> Bevor du daniel das erste Mal nutzen kannst, musst du dich <a class="btn small light outline">Registrieren</a>, danach meldest du dich mit deinem Nutzernamen und deinem Passwort an. Bitte gib deinen Namen, deine Telefonnummer und deine Adressdaten wie auf deinem Personalausweis an.</p>',
  HOW_IT_WORKS_04: '&nbsp;',
  HOW_IT_WORKS_05: '<h1>Buchen</h1><ol><li> Melde dich mit deinem Nutzernamen und deinem Passwort an.</li><li> Unter <a class="btn small light outline" routerLink="/book">Buchen</a> siehst du, wo daniel gerade und in Zukunft seine Ausleihstation hat, und welche Tage noch frei sind.</li><li> Markiere durch Klick auf den Kalender maximal zwei zusammenhängende Tage und klicke auf Ausleihen.</li><li> Es gibt grundsätzlich keine Beschränkung der Buchungen pro Nutzer. Bitte buche daniel aber nicht mehr als 1-2 Mal pro Monat, damit er auch von anderen Nutzern ausgeliehen werden kann.</li><li> Bestätige deine Buchung.</li><li> Wichtig: Bitte buche daniel nur über die Website. Individuelle Absprachen können leider nicht berücksichtigt werden.</li></ol>',
  HOW_IT_WORKS_06: '&nbsp;',
  HOW_IT_WORKS_07: '<h1>Abholen</h1><ol><li> Zu welcher Uhrzeit am reservierten Abholtag du daniel in Empfang nehmen kannst, hängt von der jeweiligen Station ab. Die Öffnungszeiten siehst du im Kalender und erhältst du per E-Mail in deiner Buchungsbestätigung. Zusätzlich erhältst du mit der Bestätigungsmail ein Ausleihformular, das du bitte im Format DIN A4 (einseitig!) ausdruckst und ausfüllst.</li><li> Bitte bringe zur Abholung von daniel deinen Personalausweis und das ausgefüllte und unterschriebene Ausleihformular mit.</li><li> Deine Daten werden mit dem Personalausweis abgeglichen und du erhältst eine kurze Einweisung – und schon kannst du langsam deine ersten Runden drehen.</li></ol>',
  HOW_IT_WORKS_08: '&nbsp;',
  HOW_IT_WORKS_09: '<h1>Fahren</h1><ol><li> Bevor du daniel belädst, übe erst einmal vorsichtig auf einer wenig befahrenen Straße. Vor allem Lenken und Bremsen sind gewöhnungsbedürftig.</li><li> Generell: daniel mag`s gemütlich. Fahre eher langsam als schnell – dann hast du das Rad besser unter Kontrolle.</li><li> Fahre niemals einen Bordstein rauf oder runter. daniels Räder halten zwar viel Gewicht aus, sind aber sehr empfindlich, wenn man damit irgendwo dran stößt.</li><li> Vermeide Straßenbahnschienen. Mit drei Rädern gerätst du schnell in eine Schiene. Plane deine Route vorher sorgfältig. Lieber ein paar Meter Umweg als eine teure Reparatur.</li><li> Schließe daniel immer an einen festen Gegenstand (z.B. Laternenpfahl, Fahrradständer, stabilen Zaun etc.). Nutze dazu nur das daniel- Fahrradschloss. Anschließen bitte auch bei kurzer Abwesenheit.</li><li> Generell: Du bist als Fahrer verantwortlich für die Sicherheit und eventuelle Schäden. Fahre vorsichtig und kontrolliere daniel vor Fahrtantritt auf Mängel. Beachte bitte auch die leider notwendigen, aber wichtigen daniel AGBs.</li><li> Bei einem Unfall kontaktiere bitte sofort das daniel-Team telefonisch unter 089 461 33 830.</li></ol>',
  HOW_IT_WORKS_10: '&nbsp;',
  HOW_IT_WORKS_11: '<h1>Rückgabe</h1><ol><li> Bring daniel, wie mit der Station vereinbart, zurück: Kette daniel ordentlich an einen festen Gegenstand an und übergib daniel persönlich.</li><li> Bitte melde der Station oder uns alle Schäden! Auch wenn sie noch so klein sind: ein lockeres Teil, ein Quietschen etc.</li><li> Wir freuen uns sehr über deine Geschichte mit daniel und auch über schöne Fotos.</li></ol>',
  HOW_IT_WORKS_12: '&nbsp;',
  HOW_IT_WORKS_13: '<h1>Korrektur / Storno</h1><ol><li> Hast du dich mit dem Buchungstermin oder Buchungszeitraum vertan oder ist dir etwas dazwischen gekommen, kannst du die Buchung stornieren, also löschen.</li><li> Du gehst im Buchungskalender auf den betreffenden Tag. Dieser wird dann rot eingefärbt.</li><li> Du klickst auf diesen Tag.</li><li> Du wirst gefragt: "Möchtest Du diese Buchung wirklich stornieren?"</li><li> Du klickst auf "löschen".</li><li> Du erhälst die Meldung: "Die Buchung wurde erfolgreich storniert."</li><li> Du klickst "Ok". - Fertig! Der Tag ist wieder "Frei".</li><li> Hattest du daniel für einen weiteren Tag reserviert, wiederholst du die Aktion ab Punkt 2.</li><li> Du vernichtest die Buchungsbestätigung. Über das Storno brauchst du niemanden zu informieren.</li><li> Willst du nun anders buchen, gehst du einfach zur Funktion "Buchen" zurück.</li></ol>',

  DONATIONS_01: '<h1>Die Spender</h1><p class="align-justify"> Ende Februar 2014 hatten wir vom ADFC die Idee zu einem damals mehr als ungewöhnlichen Projekt und in weniger als drei Monaten hatten wir genug Spenden zusammen, um „daniel – Dein Lastenrad für München“ zu starten. Inklusive Aufbau einer kompletten Webseite und einem Netz an Stationen. Ohne die vielen kleinen und großen Spenden wäre das nicht möglich gewesen. Vor allem durch eine richtig große Spende von RadlBauer in Höhe von fast 2.000 Euro ist „daniel – Dein Lastenrad für München“ in dieser Form erst gestartet. RadlBauer beriet uns dabei immer fair und professionell, schenkte uns ein komplett neues Lastenrad und erfüllte uns auch fast alle Extrawünsche. Wir sagen RadlBauer, wir sagen allen Spendern: Vielen, vielen Dank!</p><div> <img src="https://lastenrad-muenchen.de/core/img/donations.png"></div><p class="small align-left"> Namentliche Nennung nach Spendenhöhe</p><p class="small align-left"> Einen besonderen Dank an das Unternehmen RadlBauer</p><p> Gleichzeitig danken wir vielen Menschen, die uns bei der Umsetzung der Idee tatkräftig unterstützt haben und uns auch weiterhin helfen. Vor allem unserem Vorbild Kasimir in Köln und dem dortigen Verein "Wie wir leben wollen" haben wir nicht nur die Idee, sondern die komplette Unterstützung beim Aufbau des Projekts „daniel – Dein Lastenrad für München“ zu verdanken. Ihr da oben am Rhein, Ihr seid schon was ganz Besonderes : )</p>',
  DONATIONS_02: '&nbsp;',
  DONATIONS_03: '<h1>Vielen Dank RadlBauer</h1><p class="align-justify"> Nach ausführlichen Tests und guter Beratung waren wir uns sicher: Das dreirädrige Babboe Dog von RadlBauer ist das richtige Lastenrad für uns.</p><p class="align-justify"> Beim Fahrradkauf empfiehlt sich vorher immer ein ausführlicher Fahrradtest. So lange, bis man auch wirklich zufrieden ist, denn schließlich möchte keiner den Kauf nach einigen Wochen bereuen. Davon hätte auch der ADFC nichts. Denn wenn das neue Radl schnell wieder in der Ecke verschwindet, dann wird es nichts mit der Verkehrswende in München. Besonders prima ist es natürlich, wenn innerhalb des Fahrradgeschäfts selbst ein eigener Parcours ist, so wie bei RadlBauer am Westkreuz. Die Teststrecke haben wir als Projektgruppe auch ausgiebig genutzt, als es darum ging, für „daniel – Dein Lastenrad für München“ das richtige Lastenrad auszusuchen. Es wurde dann ein Babboe Dog, mit drei Rädern und vorne einer Klappe. Doch bis es soweit war, hatten wir noch einige Fragen zu klären. Soll es ein zwei- oder ein dreirädriges Lastenrad sein? Welche Schaltung ist sinnvoll und wie bekommt man alle Kinder und zusätzlich den Einkauf unter? Brauchen wir eine Abdeckplane („Ja, ist sinnvoll, damit man bei mehreren Einkaufsstationen den Einkauf nicht umständlich mit in das zweite und dritte Geschäft nehmen muss oder sie geklaut werden“) und wie schafft man es, dass die Beleuchtung auch wirklich hell ist und der vordere Kasten nicht die Hälfte der ausgeleuchteten Fläche verdeckt? Auf alle Fragen erhielten wir eine kompetente Antwort und viele praxisorientierte Erklärungen. Da fühlten wir uns gut beraten und sehr sicher, als die Bestellung dann kurz vor Ostern auf den Weg ging.</p><p class="align-justify"> Übrigens, auch kritische Nachfragen wurden beantwortet. So reparieren viele Fahrradhändler im Sommer nur die Fahrräder, die man dort gekauft hat, und das auch meist erst nach längerer Wartezeit. RadlBauer fällt da positiv auf. Die reparieren das Radl auch dann, wenn es von einem anderen Händler kommt. Eigentlich eine Selbstverständlichkeit, doch leider immer noch eine Besonderheit.</p><p class="align-justify"> Noch ein Gedanke vom Schreiber dieser Zeilen: Logisch kannte ich RadlBauer. Wer kennt die nicht. Ich erinnerte mich immer an die großen Anzeigen in der Süddeutschen Zeitung und wusste, dass die günstige Preise haben. Als Münchner Neubürger, in Köln würde man Imi sagen, war ich aber bisher nie in einer Filiale gewesen. Als ich nun das erste Mal eine betrat, war ich doch überrascht über die Auswahl. Ein so breites Sortiment hatte ich nicht erwartet. Auch die kompetente Beratung hat mir gefallen. Wenn also die ganze Arbeit mit daniel bald etwas weniger wird, dann sollte ich auch einmal an ein neues Radl für mich selbst denken.</p>',

  PRESS_01: '<h1>Presse</h1> <p> Herzlich willkommen auf der Presseseite von „daniel – Dein Lastenrad für München“ des ADFC München. </p><p> Für weitere Informationen zu unseren Veröffentlichungen stehen wir Ihnen gerne zur Verfügung. Schreiben Sie uns eine Nachricht per Mail an <a href="mailto:presse@adfc-muenchen.de" target="_blank">presse@adfc-muenchen.de</a>. </p>',
  PRESS_02: '<h1>Presseinformationen</h1> <iframe id="viewer" src="https://www.lastenrad-muenchen.de/assets/Viewer.js/#/core/files/PresseinfoAnschubhilfeDaniel-DeinLastenradfuerMuenchenMaerz2014.pdf" width="100%" height="450" allowfullscreen="" webkitallowfullscreen=""></iframe> <iframe id="viewer" src="https://www.lastenrad-muenchen.de/assets/Viewer.js/#/core/files/PresseinfoStartVonDaniel-DeinLastenradfuerMuenchenMai2014.pdf" width="100%" height="450" allowfullscreen="" webkitallowfullscreen=""></iframe>',
  PRESS_03: '&nbsp;',
  PRESS_04: '<h1>Pressespiegel</h1> <iframe id="viewer" src="https://www.lastenrad-muenchen.de/assets/Viewer.js/#/core/files/DieRueckkehrDerLastenraeder-SZ.pdf" width="100%" height="450" allowfullscreen="" webkitallowfullscreen=""></iframe>',
  PRESS_05: '&nbsp;',
  PRESS_06: '<h1>Offizielles Bildmaterial</h1> <div class="grid grid-4"> <div *ngFor="let photo of photos"> <a [href]="photo" target="_blank"><img [src]="photo"></a> </div></div>',

  IMPRINT_01: '<h1>Impressum</h1><p>Angaben gemäß § 5 TMG</p> <address><p title="name">Allgemeiner Deutscher Fahrrad-Club (ADFC) Kreisverband München e. V.</p><p title="strasse">Platenstrasse 4 (Radlerhaus)</p><p title="ort">80336 München</p> </address><p>Vertreten durch</p><p title="name">Martin Ganz</p><h2>Kontakt</h2><p title="telefon">Telefon: 089 / 773 429</p><p title="telefax">Telefax: 089 / 778 537</p><p title="email">info@adfc-muenchen.de</p><h2>Registereintrag</h2><p> Eintragung im Vereinsregister.<br> Registergericht: Amtsgericht München<br> Registernummer: VR 16930<br></p><h2>Umsatzsteuer-ID</h2><p> Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br> DE 212021784<br></p><h2>Quellenangaben für die verwendeten Bilder und Grafiken:</h2><p> <a href="http://www.subtlepatterns.com/" target="_blank">http://www.subtlepatterns.com/</a> (Hintergrundgrafik)</p>',
  IMPRINT_02: '<h1>Haftungsausschluss (Disclaimer)</h1><h2>Haftung für Inhalte</h2><p class="align-justify"> Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p><h2>Haftung für Links</h2><p class="align-justify"> Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p><h2>Urheberrecht</h2><p class="align-justify"> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>',
  IMPRINT_03: '<div class="grid grid-2"> <a routerLink="/terms-of-use" class="btn big light outline">Nutzungsbedingungen</a> <a routerLink="/data-protection" class="btn big light outline">Datenschutz</a></div>',

  TERMS_OF_USE_01: '<h1>Nutzungsbedingungen</h1> <p class="align-justify"> Allgemeine Geschäfts- und Nutzungsbedingungen für “daniel – Dein Lastenrad für München”, ein Service des Allgemeinen Deutschen Fahrrad-Clubs (ADFC) Kreisverband München e.V. </p><h2>Das Vorwort zum Kleingedruckten:</h2> <p class="align-justify"> “daniel – Dein Lastenrad für München” ist ein kostenloses Angebot des ADFC München e.V., welcher keine kommerziellen Zwecke verfolgt. Der ADFC München e.V. will Mobilität in der Stadt ohne Auto ermöglichen. Als Beitrag hierzu stellt der ADFC jeder Person daniel zur Verfügung. Wir bitten dich, so sorgsam wie möglich mit daniel umzugehen, damit daniel so lange und so vielen Menschen wie möglich zur Verfügung steht. Nachfolgend die Nutzungsbedingungen. </p><h2>Allgemeines: </h2> <p class="align-justify"> • Die hier genannten Bedingungen gelten für die Leihe eines Lastenfahrrads (im Weiteren “Fahrrad” genannt) von dem eingetragenen Verein mit dem Namen Allgemeinen Deutschen Fahrrad-Clubs Kreisverband München e.V., Registereintrag: VR 16930 beim Amtsgericht München (im Weiteren als “Anbieterin” bezeichnet) an registrierte Nutzerinnen und Nutzer (im Weiteren als “Nutzer” bezeichnet). Hierin werden die Grundsätze dieser Leihe geregelt. Abweichende Regelungen sind in gegenseitigem Einvernehmen möglich.<br><br>• Mit der Inanspruchnahme der Leihe des auf der Homepage unter dem Projekt “daniel – Dein Lastenrad für München” genannten Fahrrades erklärt sich der Nutzer für die vereinbarte Dauer der Ausleihe mit den hier genannten Geschäfts- und Nutzungsbedingungen einverstanden.<br><br>• Zu keiner Zeit erwirbt der Nutzer Eigentumsrechte an dem Fahrrad.<br><br>• Die bei der Registrierung vom Nutzer geforderten persönlichen Daten hat er wahrheitsgemäß auszufüllen. Alle erhobenen Daten werden lediglich innerhalb des Service verarbeitet und genutzt und nicht an Dritte weitergegeben. </p><h2> Benutzungsregeln:</h2> <p class="align-justify"> • Der Nutzer ist während der Dauer der Ausleihe für das Fahrrad verantwortlich. Dies gilt auch, wenn er das Fahrrad an Dritte weiterverleihen sollte.<br><br>• Die Anbieterin übernimmt keine Gewährleistung für einen ordnungsgemäßen, verkehrstauglichen Zustand des Fahrrades.<br><br>• Die Fahrtauglichkeit und Verkehrstauglichkeit des Fahrrades ist vor Fahrtbeginn durch den Nutzer zu prüfen. Dies beinhaltet bei Dämmerung bzw. Dunkelheit auch die Überprüfung des Lichtes. Sollte das Fahrrad einen Mangel aufweisen, welcher die Verkehrssicherheit beeinflusst, ist dies der Anbieterin unverzüglich mitzuteilen. Das Fahrrad darf in diesem Fall nicht genutzt werden.<br><br>• Das Fahrrad wird von der Anbieterin kostenlos zur Verfügung gestellt. Eine entgeltliche Weitervermietung durch den Nutzer ist nicht gestattet.<br><br>• Der Nutzer ist verpflichtet, das Fahrrad ausschließlich sachgemäß zu gebrauchen (vgl. § 603 BGB und siehe Praktische Hinweise) und insbesondere die geltenden Straßenverkehrsregeln zu beachten.<br><br>• Das Fahrrad ist während des Nichtgebrauchs mit dem bei der Ausleihe mit ausgeliehenem Schloss gegen die einfache Wegnahme zu sichern. D.h. es ist an einen festen Gegenstand anzuschließen. </p><p class="align-justify"> Es ist dem Nutzer untersagt, Umbauten am Fahrrad vorzunehmen. </p><h2>Haftung: </h2> <p class="align-justify"> • Die Haftung der Anbieterin für die Nutzung des Fahrrads ist auf grobe Fahrlässigkeit und Vorsatz begrenzt (vgl. § 599 BGB). Dies gilt nicht für Schäden aus Verletzung von Leben, Körper und Gesundheit, die auf einer fahrlässigen Pflichtverletzung der Anbieterin oder einer vorsätzlichen oder fahrlässigen Pflichtverletzung eines gesetzlichen Vertreters oder Erfüllungsgehilfen der Anbieterin beruhen.<br><br>• Der Nutzer haftet für alle Veränderungen oder Verschlechterungen am Fahrrad, sofern diese auf nichtvertragsgemäßem Gebrauch beruhen. Darüber hinaus haftet der Nutzer auch für Verlust und Untergang des Fahrrades oder einzelner Teile davon. </p><h2>Kontakt: </h2> <p class="align-justify"> Sollte es etwas geben, von dem du als (potenzieller) Nutzer glaubst, dass wir als Anbieterin es wissen sollten (Schäden am Fahrrad, Probleme bei der Ausleihe, tolle Erfahrungen, Probleme mit diesen Allgemeinen Bedingungen o.ä.), dann ruf uns doch bitte an unter Tel. 0174.3341111 oder schreib uns eine Mail an daniel@lastenrad-muenchen.de Wir sind sehr daran interessiert, dieses Angebot so angenehm wie möglich zu gestalten. </p><h2>Vorbehalt: </h2> <p class="align-justify"> Die Anbieterin behält sich vor, ohne Angabe von Gründen das System der Ausleihe einzustellen. Der Anbieterin ist gestattet, einzelnen Nutzern ohne Angabe von Gründen die künftige Leihe zu beschränken und/oder zu untersagen. </p>',
  DATA_PROTECTION_01: '<h1>Datenschutzerklärung:</h1><h2>Datenschutz</h2><p class="align-justify">Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.</p><p class="align-justify">Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p><p class="align-justify">Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</p><h2>Datenschutzerklärung für die Nutzung von Facebook-Plugins (Like-Button)</h2><p class="align-justify">Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook (Facebook Inc., 1601 Willow Road, Menlo Park, California, 94025, USA) integriert. Die Facebook-Plugins erkennen Sie an dem Facebook-Logo oder dem "Like-Button" ("Gefällt mir") auf unserer Seite. Eine Übersicht über die Facebook-Plugins finden Sie hier: <a href="http://developers.facebook.com/docs/plugins/" target="_blank">http://developers.facebook.com/docs/plugins/</a>.<br/> Wenn Sie unsere Seiten besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Wenn Sie den Facebook "Like-Button" anklicken während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte unserer Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von facebook unter <a href="http://de-de.facebook.com/policy.php" target="_blank"> http://de-de.facebook.com/policy.php</a></p><p class="align-justify">Wenn Sie nicht wünschen, dass Facebook den Besuch unserer Seiten Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto aus.</p><h2>Datenschutzerklärung für die Nutzung von Google Analytics</h2><p class="align-justify">Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. ("Google"). Google Analytics verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Im Falle der Aktivierung der IP-Anonymisierung auf dieser Webseite wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.</p><p class="align-justify">Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.</p><p class="align-justify">Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="http://tools.google.com/dlpage/gaoptout?hl=de">http://tools.google.com/dlpage/gaoptout?hl=de</a>.<h2>Datenschutzerklärung für die Nutzung von Google Adsense</h2><p class="align-justify">Diese Website benutzt Google AdSense, einen Dienst zum Einbinden von Werbeanzeigen der Google Inc. ("Google"). Google AdSense verwendet sog. "Cookies", Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website ermöglicht. Google AdSense verwendet auch so genannte Web Beacons (unsichtbare Grafiken). Durch diese Web Beacons können Informationen wie der Besucherverkehr auf diesen Seiten ausgewertet werden.</p><p class="align-justify">Die durch Cookies und Web Beacons erzeugten Informationen über die Benutzung dieser Website (einschließlich Ihrer IP-Adresse) und Auslieferung von Werbeformaten werden an einen Server von Google in den USA übertragen und dort gespeichert. Diese Informationen können von Google an Vertragspartner von Google weiter gegeben werden. Google wird Ihre IP-Adresse jedoch nicht mit anderen von Ihnen gespeicherten Daten zusammenführen.</p><p class="align-justify">Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.</p><h2>Datenschutzerklärung für die Nutzung von Google +1</h2><p class="align-justify"><i>Erfassung und Weitergabe von Informationen:</i><br/> Mithilfe der Google +1-Schaltfläche können Sie Informationen weltweit veröffentlichen. Über die Google +1-Schaltfläche erhalten Sie und andere Nutzer personalisierte Inhalte von Google und unseren Partnern. Google speichert sowohl die Information, dass Sie für einen Inhalt +1 gegeben haben, als auch Informationen über die Seite, die Sie beim Klicken auf +1 angesehen haben. Ihre +1 können als Hinweise zusammen mit Ihrem Profilnamen und Ihrem Foto in Google-Diensten, wie etwa in Suchergebnissen oder in Ihrem Google-Profil, oder an anderen Stellen auf Websites und Anzeigen im Internet eingeblendet werden.<br/> Google zeichnet Informationen über Ihre +1-Aktivitäten auf, um die Google-Dienste für Sie und andere zu verbessern. Um die Google +1-Schaltfläche verwenden zu können, benötigen Sie ein weltweit sichtbares, öffentliches Google-Profil, das zumindest den für das Profil gewählten Namen enthalten muss. Dieser Name wird in allen Google-Diensten verwendet. In manchen Fällen kann dieser Name auch einen anderen Namen ersetzen, den Sie beim Teilen von Inhalten über Ihr Google-Konto verwendet haben. Die Identität Ihres Google-Profils kann Nutzern angezeigt werden, die Ihre E-Mail-Adresse kennen oder über andere identifizierende Informationen von Ihnen verfügen.<br/> <br/> <i>Verwendung der erfassten Informationen:</i><br/> Neben den oben erläuterten Verwendungszwecken werden die von Ihnen bereitgestellten Informationen gemäß den geltenden Google-Datenschutzbestimmungen genutzt. Google veröffentlicht möglicherweise zusammengefasste Statistiken über die +1-Aktivitäten der Nutzer bzw. gibt diese an Nutzer und Partner weiter, wie etwa Publisher, Inserenten oder verbundene Websites.</p><h2>Datenschutzerklärung für die Nutzung von Twitter</h2><p class="align-justify">Auf unseren Seiten sind Funktionen des Dienstes Twitter eingebunden. Diese Funktionen werden angeboten durch die Twitter Inc., Twitter, Inc. 1355 Market St, Suite 900, San Francisco, CA 94103, USA. Durch das Benutzen von Twitter und der Funktion "Re-Tweet" werden die von Ihnen besuchten Webseiten mit Ihrem Twitter-Account verknüpft und anderen Nutzern bekannt gegeben. Dabei werden auch Daten an Twitter übertragen.</p><p class="align-justify">Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Twitter erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Twitter unter <a href="http://twitter.com/privacy" target="_blank">http://twitter.com/privacy</a>.</p><p class="align-justify">Ihre Datenschutzeinstellungen bei Twitter können Sie in den Konto-Einstellungen unter <a href="http://twitter.com/account/settings" target="_blank">http://twitter.com/account/settings</a> ändern.</p>',

  OFFLINE: '<div class="page-header__container"> <i class="far fa-frown fa-10x"></i> <h1>This site is offline</h1> <h2>Due to active work on our privacy policy this site is down for maintenance.</h2> </div>',

  NOT_FOUND: '<div class="page-header__container"> <i class="far fa-question-circle-which-does-not-exist fa-10x"></i> <h1>404</h1> <h2>The requested site does not exist.</h2> </div>',
};*/


interface IContentResponse {
  id: string;
  identifier: string;
  creation_time: string;
  modification_time: string;
  content: string;
}


@Injectable({providedIn: 'root'})
export class ContentService {

  public content: BehaviorSubject<IContent> = new BehaviorSubject<IContent>(null);
  public originalContent: BehaviorSubject<IContent> = new BehaviorSubject<IContent>(null);
  public editMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public modified: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private backendURI: string = 'https://lastenrad-muenchen.de/core/php/backbone.php';

  constructor(
    private http: HttpClient,
    private userSrv: UserService,
    private modalSrv: ModalService,
  ) {
  }

  public mutate(newContent: IMutableContent) {
    let oldContent = this.content.value;
    let modified = false;
    if (this.content.value) oldContent = this.content.value;

    for (let key in newContent) {
      if (oldContent.hasOwnProperty(key)) {
        if (oldContent[key] != newContent[key]) {
          oldContent[key] = newContent[key];
          modified = true;
        }
      }
    }

    this.modified.next(modified);
    this.content.next(oldContent);
  }


  saveContent(ID: string, content: string) {
    const newContent: IMutableContent = {};
    newContent[ID] = content;
    this.mutate(newContent);
  }


  loadContent() {
    this.http.get(this.backendURI + '?cmd=getContent')
      .subscribe((response: any) => {
        if (!response || response.error) {
          this.modalSrv.addModal({
            heading: 'Fehler',
            content: response ? response.error.message : 'Leider ist der Server aktuell nicht erreichbar.',
            type: 'ERROR',
            size: 'SMALL',
            actions: [
              {
                text: 'Schließen',
                type: 'ERROR',
                action: () => {
                  this.modalSrv.closeModal();
                },
              },
            ],
          });
        } else {
          const newContent: any = {};

          response.success.map((value: IContentResponse) => {
            value.content = value.content.replace(/&lt;/gi, '<');
            value.content = value.content.replace(/&gt;/gi, '>');
            value.content = value.content.replace(/&amp;/gi, '&');
            newContent[value.identifier] = value.content;
          });
          this.originalContent.next(newContent);
          this.content.next(newContent);
        }
      });
  }

  applyContent() {
    this.originalContent.next(this.content.value);
    this.editMode.next(false);
    this.modified.next(false);

    let data = {content: this.content.value};

    this.http.post(
      this.backendURI + '?cmd=applyContent&uid=' + this.userSrv.getUID(), data)
      .subscribe((response: any) => {
        if (!response || response.error) {
          this.modalSrv.addModal({
            heading: 'Fehler',
            content: response ? response.error.message : 'Leider ist der Server aktuell nicht erreichbar.',
            type: 'ERROR',
            size: 'SMALL',
            actions: [
              {
                text: 'Schließen',
                type: 'ERROR',
                action: () => {
                  this.modalSrv.closeModal();
                },
              },
            ],
          });
        } else {
          this.loadContent();
        }
      });
  }

}
