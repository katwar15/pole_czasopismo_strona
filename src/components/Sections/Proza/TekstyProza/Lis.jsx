import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";
import foks_img from "../../../../assets/foks.jpg";
import ruiny from "../../../../assets/ruiny.jpg";
import front from "../../../../assets/front.png";
import antonina from "../../../../assets/antonina.jpg";
import czarnadziura from "../../../../assets/czarnadziura.jpg";
import grazyna from "../../../../assets/grazyna.jpg";
import dante from "../../../../assets/dante.jpg";
import przemysl from "../../../../assets/przemysl.jpg";
import grabowski from "../../../../assets/grabowski.jpg";
import mrowka from "../../../../assets/mrowka.jpg";
import grabowski2 from "../../../../assets/grabowski2.jpg";
import grabowski3 from "../../../../assets/grabowski3.jpg";
import grabowski4 from "../../../../assets/grabowski4.jpg";

const Lis = () => {
  return (
    <div className="wstep">
      <Link to="/proza" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h1 className="h1_wstep_autor">Roman Lis</h1>
      </div>

      <div className="content_wstep">
        <h2 className="h1_wstep_tytul">
          Żołnierz strzegący mrowiska koło Ustrzyk Górnych
        </h2>
        <h3 className="h1_wstep">(wspomnienie)</h3>
        <h2 className="h2_wstep_right"> Dla Piotrka i Kasi</h2>
        <p className="h2_non_indent">spis treści:</p>
        <p className="h2_non_indent">
          [1 Podczas kilkudniowego pobytu w szpitalu…] <br></br>
          [2 try ode mnie…] <br></br>
          [3 Cztery następujące po sobie wpisy w dzienniku…]<br></br>
          [4 Baydała Oszczecirski… ] <br></br>
          [5 Co chciałaś powiedzieć, mówiąc, że mrówki zachowują się podobnie?]{" "}
          <br></br>
          [6 Nasza rozmowa miała sens inny… ] <br></br>
          [7 Poczucie obowiązku, żeby nie upiększać swoich wspomnień…]<br></br>
          [8 Muszę się przyznać… ] <br></br>
          [9 Opowieść moja zatacza coraz szersze kręgi…]<br></br>
          [10 Częściowe wyjaśnienie… ] <br></br>
          [11 Fotograf Bogdan Konopka… ] <br></br>
          [12 Gdybym był osiem lat temu wbrew sobie dokończył tę opowieść… ]{" "}
          <br></br>
          [13 A jednak jeszcze raz muszę to zrobić…]<br></br>
          [14 Członkowie naszej sekty…]<br></br>
          [15 Słońce smoków] <br></br>
          [16 Nigdy nie skończyłem powieści „Słońce smoków”…] <br></br>
          [17 To nie jest donos] <br></br>
          [18 W naszej sekcie… ] <br></br>
          [19 Wstyd mi…]<br></br>
          [20 Siedem miliardów Arturów] <br></br>
          [21 Kok] <br></br>
          [22 Pierwsza wzmianka o szkole emocji] <br></br>
          [23 Montrouge, 4 XI 2022 (z dziennika)] <br></br>
          [24 Decyzje pisarskie zapadają w podświadomości…]<br></br>
          [25 Sam już nie wiem…]<br></br>
          [26 Po obudzeniu się… ] <br></br>
          [27 Były czasy…]<br></br>
          [28 Montrouge, 10 XI 2022 (z dziennika)] <br></br>
          [29 I po wspomnieniu… ] <br></br>
          [30 „Co jednakie jest w łóżku albo na tapczanie!”] <br></br>
          [31 Po cóż mi ta mądrość…]<br></br>
          [Od autora]
        </p>
        <h2 className="h1_wstep">1</h2>
        <p className="h2_wstep">
          Podczas kilkudniowego pobytu w szpitalu w Sanoku, po opisanej niżej
          przygodzie, próbowałem opowiedzieć lekarzom o tym, czego
          doświadczyłem, ale prawdopodobnie uznano, że ciągle mam gorączkę, nikt
          bowiem nie traktował mojej opowieści zbyt poważnie. Nie nalegałem
          jednak bardzo, aby mi uwierzono, wiedząc, że często historie takie
          kończą się w tzw. domu bez klamek, a ja byłem tuż przed rozpoczęciem
          pisania powieści autobiograficznej „Jego wielebność Lilia” i nie
          chciałem z tą pracą zwlekać. Uznałem w końcu, że będzie może nawet
          lepiej, jeśli przedstawię to zdarzenie na zasadzie wspomnienia z innej
          planety albo snu, tak jak to dzisiaj jest w modzie. Obecnie myślę, że
          przecież nie ma to najmniejszego znaczenia, czy napiszę o tym w w/w
          powieści, czy też gdziekolwiek bądź indziej…
        </p>
        <p className="h2_wstep">
          Właśnie dlatego, że Bieszczady odgrywają w moim życiorysie ogromną
          rolę, postanowiłem doświadczyć cieleśnie pobytu w owym zakątku Karpat
          i pojechałem tam po 26 latach zamieszkiwania za granicą. Chciałem
          dostarczyć swojej świadomości mocnego uderzenia i prosto z marszu,
          zostawiając na potem zaznajomienie się z tym obcym mi obecnie krajem,
          udałem się samochodem z Paryża w okolicę Ustrzyk Górnych i tam kazałem
          kierowcy oddalić się do Przemyśla, aby czekał na dalsze decyzje w
          tamtejszym hotelu Gromada.
        </p>
        <p className="h2_wstep">
          Sam zaś, z ogromnym plecakiem typu komin, w którym był namiot, śpiwór,
          kocher itp. utensylia, niezbędne do życia na takim odludziu, ruszyłem
          w kierunku Tarnicy, aby na jej szczycie wypić butelkę wina, bo tak to
          sobie obiecywałem od lat. Miałem z sobą w ogóle trzy butelki wina
          [francuskiego], każdą przeznaczoną na inną okazję<sup>1</sup>{" "}
          (przypisy są na końcu – rl), niestety, udało się zrealizować tylko
          pierwszy z tych moich zamiarów, a to na skutek owych nieprzewidzianych
          dziwnych zdarzeń. Szczególnej pikanterii koincydencjalnej dodaje tej
          sprawie fakt, że miałem w moim plecaku także [jedną] książkę,
          przesłaną mi przez przyjaciółkę z FB [Signe Jukka] w dniu wyjazdu z
          Paryża, którą wziąłem z sobą, aby przeczytać w podróży. Była to
          „Synchroniczność” Josepha Cambraya, ekscytująca nowość na polskim
          rynku wydawniczym [„o naturze i psyche we wszechświecie wzajemnych
          połączeń”], którą pochłonąłem jednym tchem, odnajdując potwierdzenie
          wielu własnych intuicji, zwłaszcza tych dotyczących zachowywania się
          owadów. Wielokrotnie w życiu obserwowałem np. stada komarów,
          zmieniających równocześnie kierunek lotu w ciągu ułamka sekundy, mimo
          że między najdalszymi od siebie osobnikami [stada] było parę metrów. W
          dzieciństwie robiłem doświadczenia z karaluchami, stonką i mrówkami,
          podejrzewając je wszystkie o umiejętność myślenia.
        </p>
        <p className="h2_wstep">
          Na Tarnicę wszedłem od strony Szerokiego Wierchu po pięciu godzinach
          marszu. Ci, co myślą, że mam dwadzieścia lat, bardzo się mylą, ale nie
          jest ze mną znowu aż tak źle, żebym nie miał czasem tzw. grzesznych
          myśli, więc gdy na tle gór zobaczyłem rudą turystkę, idącą jak ja
          czerwonym szlakiem, w sukience mini na szelkach, poczułem mocniejsze
          bicie serca. Fakt ten jednak zdziwił mnie trochę, jako że na co dzień
          [w Paryżu] mam na ulicy podobne widoki na wszystkie rasy świata, a
          równie mocnego pobudzenia libido nie doznaję. W tym momencie nie
          wiedziałem jeszcze, że jest to wstępna oznaka połączenia z psyche
          innej istoty, której czar miał mną owładnąć aż do utraty przytomności,
          w feerii doznań orgazmicznych sensu cosmico.
        </p>
        <p className="h2_wstep">
          Po wypiciu całej butelki wina i próbie zobaczenia na horyzoncie Wawelu
          <sup>2</sup>, ogarnęła mnie przemożna senność, co nie zdziwiło mnie
          wcale po dokonanym wyczynie. Pamiętam, że gdy ostatni raz spojrzałem
          na ekran mego iPhone’a 5S, była godzina 11.57, czyli pora
          najodpowiedniejsza na połączenie się myślami ze współpartycypantami
          Czarnej Dziury<sup>3</sup>. Przez trzy następne minuty wysyłałem we
          wszystkie strony świata fale emocji miodowych, po czym upadłem na
          rozłożony śpiwór i natychmiast straciłem zmysły i pamięć.
        </p>
        <p className="h2_wstep">
          Obudziłem się nocą, zziębnięty, leżąc na plecach, nie wiedziałem,
          gdzie jestem. Na niebie nie było Księżyca, gwiazdy iskrzyły się także
          poniżej poziomu, na którym leżałem, a pierwszą rzeczą, którą
          rozpoznałem, była Droga Mleczna. To uczucie, którego doznałem w tym
          momencie, musi być znane wszystkim Kosmitom. Nagle nieboskłon
          przecięły błyski perseidów, a wraz z ich pojawieniem się wszystko inne
          też stało się jasne: w tzw. mgnieniu oka spadające gwiazdy wywołały
          przed kamerami mojej duszy stos guzików na okładce książki „Gwiazda
          spada”<sup>4</sup>, potem niebieskie oczy jej autora, z którym
          rozmawiam dwadzieścia lat po lekturze [tej powieści], miejsce, gdzie
          to się dzieje, miasto wokół nas, moje ówczesne życie i równocześnie te
          późniejsze jego meandry, doprowadzające mnie aż do owej chwili leżenia
          na plecach na Tarnicy. I choć już rozumiem, po co tam jestem, sen
          jeszcze ciągle trwa i jakaś inna część mojej osoby mówi do Jalu Kurka
          jego własnymi słowami: „Wszystko umiera – nawet ciała niebieskie i
          tylko marzenia są nieśmiertelne”. Opowiadam mu też, że był pierwszym
          pisarzem, który trzynastolatkowi [mnie] dał pierwszą literacką lekcję
          wychowania seksualnego!
        </p>
        <p className="h2_wstep">
          Jak żałosna królowa idąca na gilotynę prowadzę moje wspomnienia na
          ścięcie<sup>5</sup>. Wprawdzie żyję i pozwalam sobie na ten żart
          cytowania bez użycia cudzysłowu, ale być może ciągle jeszcze nie
          doszedłem do siebie po doznanej traumie. Syndrom pourazowy objawia się
          w różny sposób [np. ucieczką w alkoholizm], ale chyba jednak nie
          spowodował we mnie wzrostu wyobraźni, na brak której nigdy nie
          cierpiałem, no ale przepraszam [fragment nieczytelny]<sup>6</sup>…
        </p>
        <p className="h2_wstep">
          Smartfon wyładował się jeszcze tej samej nocy, co okazało się, gdy
          postanowiłem wejść na FB, aby napisać post o swojej sytuacji.
          Zgrzytnąłem zębami i pomyślałem o głupocie pozostawienia w domu
          normalnej komórki, która trzyma energię przez parę dni<sup>7</sup>.
          Rano, bez ociągania się, zacząłem schodzić ze szczytu, kierując się ku
          Ustrzykom Górnym. Jeszcze tego dnia zamierzałem dotrzeć do ruin cerkwi
          w Krywem . Chwili, w której wszystkie moje myśli i wyobrażenia o
          świecie dokonały całkowitej przemiany, jakby przewracając się na swą
          lewą stronę, nie pamiętam. Ludzie z tych rejonów Karpat mówią o
          takich: „Błąd się go czepił!”
        </p>
        <img className="img_text" src={ruiny}></img>
        <h2 className="h2_podpis_img">Ruiny cerkwi w Krywem.</h2>
        <p className="h2_wstep">
          Dwa dni później uświadomiłem sobie, że minęły dwa dni, odkąd zszedłem
          z Tarnicy. W tym czasie zachowywałem się tak, jakby było to zupełnie
          normalne, że z braku kompasu idę w kierunku słońca, a wieczorem
          rozpalam ognisko, jem, śpię, a następnego dnia robię to samo. Po
          drodze złowiłem pstrąga w potoku, wkładając ręce pod korzenie, którego
          zjadłem na surowo, choć nie jestem jakimś szczególnym miłośnikiem
          sushi, a w plecaku ciągle miałem pełno jedzenia. Było dla mnie
          oczywiste, że muszę iść, ale przeszłość i przyszłość jakby zniknęły z
          mojej świadomości: maszerowałem więc z uporem i zadowoleniem, nie
          myśląc, co niesie los.
        </p>
        <p className="h2_wstep">
          Zrozumiałem, że jest ze mną bardzo źle, gdy przed wieczorem drugiego
          dnia doznałem olśnienia: marsz w kierunku słońca oznaczał, że rano
          szedłem na wschód, zaś po południu na zachód, czyli zataczałem w
          terenie półkola. Poczucie, że wpadłem w obłęd, nie zostało mi
          oszczędzone. W jednej chwili zwątpiłem w realność otoczenia. Być może
          zacząłbym krzyczeć oraz nawet tańczyć, jak standardowy wariat w takiej
          sytuacji, ale w tym momencie z pobliskiego lasu wyszedł żołnierz z
          pistoletem maszynowym i jął przybliżać się ku mnie.
        </p>
        <p className="h2_wstep">
          Był już lekki zmierzch, ale widziałem go wyraźnie. Z palcem na języku
          spustowym pistoletu, z lufą skierowaną ku ziemi, nie spuszczając ze
          mnie oczu, szedł sprężystym krokiem młodości, jakby spacerował albo
          był na scenie. Odruchowo podniosłem ręce do góry, mając pewność, że
          zaraz zginę<sup>9</sup>. Jednak w odpowiedzi żołnierz zatrzymał się
          jak wryty i wykrzyknął, zaskoczony:
        </p>
        <p className="h2_wstep">– No nie! Proszę opuścić ręce!</p>
        <p className="h2_wstep">
          Był już parę metrów ode mnie, widziałem jego śmiejące się oczy.
          Wyglądał dokładnie tak, jak powinien wyglądać ktoś rozbawiony i
          strapiony równocześnie, ale moje przerażenie nie mijało: w tej
          sytuacji było coś, co wykraczało poza znane mi pojęcia normalności.
          Obraz, jaki oglądałem przed sobą, nie zawierał ani jednego elementu,
          który mógłby mnie czymś szokować, ale oglądana całość była mi
          mentalnie obca. Żołnierz miał czarną skórę, a spod rogatywki spadały
          mu na ramiona loki długich, płomieniście rudych włosów.
        </p>
        <p className="h2_wstep">
          – Proszę opuścić ręce! – powtórzył. – Nie trzeba!
        </p>
        <p className="h2_wstep">
          Czarny żołnierz w Paryżu to normalny akcent w krajobrazie, ale czarny
          żołnierz w polskim mundurze z orzełkiem w koronie, nie, tego
          przewidzieć nie mogłem!<sup>10</sup>. Z wrażenia ręce opadły mi jakoś
          tak same z siebie…
        </p>
        <p className="h2_wstep">
          Przybysz zdjął palec ze spustu, przełożył broń do lewej ręki, prawą
          zaś uderzył w daszek swej rogatywki.
        </p>
        <p className="h2_wstep">
          – Kapral Weronicz! – przedstawił się. – Pozwolę sobie poinformować, że
          znajduje się pan na terenie ścisłej ochrony mrówek! Proszę o
          opuszczenie tego terenu!
        </p>
        <p className="h2_wstep">
          Prośba została podana tak dźwięcznym tonem, że po plecach przebiegł mi
          mimowolny dreszcz, a krańcowa trwoga sprzed paru chwil przemieniła się
          w nagłą błogość. Poczułem bezgraniczną wdzięczność [jak] za uratowanie
          [życia], chciałem wyjaśnić całą [tę] sytuację, ale tylko westchnąłem
          jak po ogromnym wysiłku i szepnąłem:
        </p>
        <p className="h2_wstep">
          – Przepraszam, panie kapralu!… Nie wiedziałem!…
        </p>
        <p className="h2_wstep">
          Czarnoskóry żołnierz zbliżył się na odległość wyciągniętej ręki i z
          uwagą popatrzył mi w oczy. W tym momencie poczułem falę fizycznej
          słabości, tak wielką, że aż się zachwiałem. Stało się to jakby tylko
          po to, żeby kapral Weronicz mógł mnie pochwycić w swe mocne ramiona i
          ułożyć na trawie. Gdy mnie obejmował, poczułem oszałamiający zapach
          nieznanych perfum, lekko kwaśny, coś jakby kwas mrówkowy poddany
          niezwykłemu uszlachetnieniu. Pamiętam, jak zdziwiło mnie to
          przelotnie, jako że instynktownie nastawiłem się na słodkawy zapach
          [jaki wydziela czarna rasa ludzi]. Jak jedwab miękki był czerwonawy
          kosmyk jego włosów, który musnął mnie delikatnie w policzek.
        </p>
        <p className="h2_wstep">
          – Czy ma pan z sobą apteczkę? – zapytał kapral, gdy już leżałem, nie
          mogąc ochłonąć z wszystkich tych nagłych wrażeń. – Radzę wziąć procha
          na wzmocnienie!
        </p>
        <p className="h2_wstep">
          Pomyślałem, że to dobry pomysł i pokazałem na leżący obok plecak.
          Poprosiłem, żeby żołnierz go otworzył i wyjął wszystkie rzeczy, bo nie
          miałem pewności, gdzie jest apteczka. Ów najpierw nagłym ruchem zdjął
          z siebie drelichową bluzę, rozłożył ją na trawie i jął układać na niej
          wyjmowane z plecaka przedmioty. W istocie: lekarstwa były na samym
          dnie. Postanowiłem jednak wziąć tylko magnez B6 i tabletkę
          paracetamolu, bo po upływie parunastu sekund znów czułem się dobrze.
          Kapral pochwalił tę decyzję i dodał:
        </p>
        <p className="h2_wstep">
          – I tak musiałbym panu zrobić rewizję! Został pan zatrzymany na
          terenie ścisłej ochrony mrówek, niestety! Dokumenty także proszę,
          łaskawy panie!
        </p>
        <p className="h2_wstep">
          Oczywiście nie miałem nic przeciwko temu, zwłaszcza że uprzejmość
          przedstawiciela władzy była tak ujmująca! Natychmiast ochoczo wyjąłem
          paszport, aby nie zwlekać z ujawnieniem tożsamości, jednak takiej
          niezwykłej reakcji nie spodziewałem się:
        </p>
        <p className="h2_wstep">
          – Citoyen de la République Française! Quelle surprise!<sup>11</sup> –
          wykrzyknął nagle żołnierz po francusku z nieukrywaną radością. I
          spojrzał na mnie jak na jakiś cud, rozciągając w uśmiechu swe
          soczyste, czarne wargi.
        </p>
        <p className="h2_wstep">
          – Comme vous voyez, monsieur!<sup>12</sup> – odpowiedziałem z prostotą
          i wstałem, żeby uścisnąć wyciągniętą ku mnie dłoń. Czarnoskóry
          uścisnął moja prawicę, zaś lewą rękę zarzucił mi na szyję i ucałował w
          policzki cztery razy [po parysku!]. Nic z tego nie rozumiałem, ale
          emanująca z niego radość udzieliła się i mnie.
        </p>
        <p className="h2_wstep">
          – Proszę wybaczyć mi tę poufałość! – wyjaśnił mi zaraz mój nowy
          znajomy, uderzając raz po raz z szacunkiem w daszek swej rogatywki. –
          Mój ojciec pochodził z Paryża! Moja matka też tam mieszkała! Ja zaś
          urodziłem się w Polsce! Cóż, nie będę przed panem ukrywał, ale nigdy
          mego ojca nie widziałem! Jestem dzieckiem nieślubnym! Zostałem poczęty
          przy bulwarze Barbès w Paryżu! Proszę wybaczyć mi te nagłą spowiedź,
          mój drogi panie! Ale to tak nagle się stało, nie spodziewałem się
          spotkać dziś paryżanina, naprawdę!{" "}
        </p>
        <p className="h2_wstep">
          Rozłożyłem ręce w bezradnej radości, pozwalając rozgorączkowanemu
          żołnierzowi zwierzać się mi nadal:
        </p>
        <p className="h2_wstep">
          – Vous êtes parisien! Merveilleusement!<sup>13</sup> – cieszył się ów
          ekstatycznie, a ja wraz z nim, w empatycznej komitywie. – Zawsze
          chciałem spotkać kogoś, kto mieszka w tym wspaniałym mieście, chłonąć
          emanacje jego osoby, nauczyć się rozumieć Paryż bez słów! Proszę nie
          myśleć, że kłamię, gazety o tym nawet pisały!
        </p>
        <p className="h2_wstep">
          Chciałem wyrazić zdziwienie tym wyznaniem, zgoła niezrozumiałym, ale
          kapral ubiegł moje pytania:
        </p>
        <p className="h2_wstep">
          – Ja od razu zrozumiałem, kiedy pan podniósł ręce, że coś nie gra! Bo
          mnie wszyscy Polacy znają, występowałem w telewizji, jestem jedynym
          czarnoskórym żołnierzem w polskim wojsku! W wywiadach wielokrotnie
          mówiłem, że pragnę spotkać malarza z Paryża! Proszę nie mówić, że nie
          jest pan malarzem! Mam po przodkach częściowy dar jasnowidzenia! Je
          suis voyant comme mon père!<sup>14</sup> Widzę pana z pędzlem w dłoni!
          Ale mego ojca to ja jeszcze kiedyś spotkam! Ja go spotkam!
        </p>
        <p className="h2_wstep">
          Przyznam się, że zaniemówiłem, słysząc, że jestem malarzem. Mój Boże,
          pomyślałem, ten facet chyba naprawdę mnie widzi, bo skąd by wiedział,
          że co najmniej kilkanaście lat w życiu trzymałem pędzel w ręku!
        </p>
        <p className="h2_wstep">
          – Je suis peintre! Mais, moi, je suis peintre en bâtiment!
          <sup>15</sup> – próbowałem się bronić, choć sam nie wiedziałem przed
          czym [szło wszak jeno o wizje pędzla]. Ale żołnierz jakby nie słyszał
          moich słów, sięgnął do kieszonki na rękawie swej koszuli i wyjął
          stamtąd skręta [poznałem to od razu po kształcie stożka], mrużąc oko.
        </p>
        <p className="h2_wstep">
          – Zapalimy? – zapytał, jakbyśmy się znali od lat, po czym zaśmiał się
          głosem tak perlistym, jaki tylko wydają z siebie niektóre niewiasty w
          momencie erotycznej gry. Ciałem moim znów wstrząsnął dreszcz,
          jakkolwiek nie mam żadnego zainteresowania płcią męską [jam nie gej!].
        </p>
        <p className="h2_wstep">
          Zapach palonej marihuany doleciał do mnie po chwili i gdy zobaczyłem
          rękę podającą mi skręta, uznałem to za rzecz naturalną i wziąłem
          głębokiego macha. Nie paliłem już parę ładnych lat, ale poddałem się z
          jakąś radosną uległością logice zdarzeń i ich tajemnicy.
        </p>
        <p className="h2_wstep">
          Już po parunastu sekundach odczułem, że tak dobrego zioła chyba nigdy
          w życiu nie paliłem: odbiór moich zmysłów wyostrzył się do jakości
          żyletki, a parametry trzeźwości wzrosły do najwyższych rejestrów.
          Fakt, że polski żołnierz ma czarną skórę i broni pogranicza Unii
          Europejskiej wydał mi się symbolem sprawiedliwości dziejowej. Ale
          najważniejsze było to, że uniknąłem obłędu, który zaczynał otaczać
          moje myśli.
        </p>
        <p className="h2_wstep">
          Tymczasem wieczór zapadł, jakby za przekręceniem kontaktu, albo ja tak
          nagle [ten zmierzch] zauważyłem. Zanim zdążyłem na to zareagować,
          kapral Weronicz wyjął z kieszeni krótkofalówkę i zaczął przemawiać do
          kogoś w eterze, jak na dawnych filmach wojennych:
        </p>
        <p className="h2_wstep">
          – Tu brzoza! Tu brzoza! Jak mnie słyszysz? Odbiór?
        </p>
        <p className="h2_wstep">
          W eterze dały się słyszeć najpierw krótkie trzaski, po nich zaś
          służbisty głos wyjaśnił, że jest olchą i także zapytał, jak jest
          słyszany. Sam już w tej chwili nie wiem, po co to wszystko opisuję,
          skoro i tak nikt nie chce mi wierzyć, gdy opowiadam, co nastąpiło
          później. Nie mogę też powiedzieć, że wspominam jakiś sen, bo nie
          pamiętam momentu, w którym usnąłem, ani miejsca, w którym to się
          stało. Chyba że także śnię w obecnej chwili [w co zapewne też nikt by
          mi nie uwierzył]!… Ale niech się dzieje, co chce! I nieważne, komu to
          opowiadam!…
        </p>
        <p className="h2_wstep">
          Kapral Weronicz zawiadomił swoich przełożonych, że spotkał
          zagranicznego turystę, który jest u kresu sił i musi zostać
          przetransportowany do szpitala. Czy helikopter może natychmiast
          przylecieć? Niestety, okazało się, że jeśli turysta nie jest
          umierający, musi poczekać do świtu albo podejść do najbliższej szosy,
          dokąd mogłoby dotrzeć pogotowie ratunkowe. Zapytany o decyzję,
          odpowiedziałem, że chodzenie po górach w ciemnościach przekracza moje
          możliwości, a wtedy żołnierz zgodził sie bez problemu dotrzymać mi
          towarzystwa aż do przybycia medycznej pomocy.
        </p>
        <p className="h2_wstep">
          Zaraz też zaczęliśmy się krzątać razem, rozbijając namiot i znosząc z
          lasu gałęzie, przy czym oświetlaliśmy sobie teren latarkami na
          baterie. Parę chwil później ognisko już płonęło, kolejny skręt krążył
          pomiędzy nami, zaś na znalezionym płaskim kamieniu stały dwa
          plastikowe kubki z winem, którego butelkę otworzyłem, aby uczcić nową
          znajomość. Mimo dużej różnicy wieku zaproponowałem wypicie
          bruderszaftu, na co żołnierz zareagował z entuzjazmem. Podczas drugiej
          tego dnia ceremonii całowania się z tym człowiekiem doznałem znowu
          mocnej ekscytacji erotycznej, tym razem uświadamiając sobie, co było
          jej przyczyną. Otóż gdy kapral Weronicz przylgnął ku mnie swą piersią,
          poczułem na swoim ciele piersi młodej kobiety. Było to samo w sobie
          zdumiewające i zaparło mi oddech, jakkolwiek największym wstrząsem
          było dla mnie to, co odczułem w sposób bezpośredni: kobieta ta była w
          stanie całkowitego pobudzenia seksualnego. To właśnie było [w tym
          zdarzeniu] najbardziej niewiarygodne.
        </p>
        <p className="h2_wstep">
          Wypadki te toczyły się w ułamkach sekundy. Od każdego odkrycia nie
          było już odwrotu [jak od „zamrożonych przypadków”<sup>16</sup>]:
          najpierw zrozumiałem, że jest to istota dysponująca zapalonym ogniem
          kundalini, potem, że byłem przez nią w jakimś celu śledzony i zwabiony
          w to miejsce, a na końcu, że nie mam żadnych szans na ucieczkę. Gdy
          puściła mnie z objęć i odchyliła głowę ku tyłowi, czekało mnie jednak
          jeszcze jedno [hiper]zaskoczenie. Przedstawił[a] się:
        </p>
        <p className="h2_wstep">– Maria-Magdalena!</p>
        <p className="h2_wstep">
          Dygnęła lekko całym ciałem, patrząc mi słodko w oczy. Musiałem mieć we
          wzroku jakieś szaleństwo większego kalibru, bo cofnęła się o krok i
          dodała tonem lekkiej pretensji, z dziewczęcą kokieterią:
        </p>
        <p className="h2_wstep">– Myślałam, że się domyślasz!</p>
        <p className="h2_wstep">
          Nikt nie chce mi wierzyć, że nie mogłem głosu z siebie dobyć! Czy to
          dziwne? Moje myśli wykonywały w tej chwili różnego rodzaju salta
          <sup>17</sup>, ale i tak nic z tego nie wynikało. Głównym pytaniem
          było: czy jest to osobnik obojga płci? Bo wszystko stało mi się
          obojętne, oprócz tej myśli. Nie jestem ani gejem [jak rzekłem], ani
          biseksualistą, tym bardziej to, co odczuwałem, było nieprawdopodobne:
          ogień kundalini<sup>18</sup>
          miał wszelkie znamiona pochodzenia kobiecego (a ja nie byłem nigdy w
          podobnych sytuacjach z mężczyznami)!<sup>19</sup> Ale po cóż kłamać?
          Gdy odczułem energetyczny wymiar kapral Weronicz, stało mi się
          obojętne, czy jest to spadła z gwiazd osiemnastometrowa mrówka w
          kapeluszu, czy bieszczadzka prostytutka udająca czarnoskórą żołnierkę
          w rogatywce z orzełkiem. Najgorsze jednak było to, że poczułem się
          głupio, że tak źle określiłem płeć żołnierza. Jakim musiałem się
          wydawać zacofanym ramolem w tych młodych oczach! „Kobiety służą
          przecież w tylu armiach świata!”, ubolewałem nad swoją naiwnością.
          Jakby wyczuwając moje skonfundowanie, kapral podeszła do mnie chyżo,
          wzięła mnie za rękę i wesołym głosem poprosiła:
        </p>
        <p className="h2_wstep">– Chodź, pokażę ci coś ciekawego!</p>
        <p className="h2_wstep">
          I oświetlając sobie drogę latarką, pociągnęła mnie w kierunku lasu.
          Bez oporu dałem się jej prowadzić, nie czułem żadnego lęku. Ale
          niewiasta już po paru krokach zatrzymała się nagle i nieomal
          wykrzyknęła:
        </p>
        <p className="h2_wstep">– Ale ty przecież chcesz gdzieś zadzwonić!</p>
        <p className="h2_wstep">
          Zanim uświadomiłem sobie, że właśnie tego akurat chcę, już miałem
          komórkę w ręce i mogłem wystukać numer. Wtedy uświadomiłem sobie, że
          wszystkie numery mam w smartfonie, a aparat przecież nie działa.
          Wróciliśmy więc w okolicę ogniska, gdzie był mój plecak, abym mógł
          sprawdzić, czy mam w nim swój notes, ale wątpiłem w to bardzo. Gdy
          przeszukiwałem liczne kieszonki, kapral Maria Magdalena Weronicz
          klęczała przy ognisku i wertowała książkę, tę jedyną, jaką miałem z
          sobą, którą po raz drugi tego dnia wyjąłem z plecaka z pozostałymi
          rzeczami. Kątem oka przyglądałem się czarnoskórej piękności, a uczucie
          zachwytu mnie nie opuszczało. Byłem już na dobrym haju, dlatego wcale
          mnie nie zdziwiło, gdy dziewczyna zaczęła chichotać i powiedziała:
        </p>
        <p className="h2_wstep">
          – Posłuchaj, co oni tu piszą! „Setki pasożytujących, maleńkich larw
          chrząszczy z rodziny oleicowatych grupują się, aby naśladować kształt
          i kolor pszczoły. Kiedy uwiedziony przez nie truteń próbuje z nimi
          spółkować, chwytają się one włosków porastających jego tułów i są
          przez niego przenoszone. Gdy ów truteń próbuje później kopulować z
          prawdziwą pszczołą, larwy przenoszą się na jej odwłok i zostają
          przetransportowane do gniazda, w którym raczą się pyłkiem kwiatowym.
          Tego rodzaju współpraca była praktycznie nieznana w świecie owadów, z
          wyjątkiem pszczół i mrówek. Z raportu wynika także, że skupiska larw
          chrząszczy muszą także pachnieć jak pszczoła, ponieważ pomalowane
          modele nie wprowadzają trutni w błąd”<sup>20</sup>. Koniec cytatu! Ty
          rozumiesz? Cha! Cha! Cha! Zajebiście! Zajebiście!
        </p>
        <p className="h2_wstep">
          Tu kobieta upadła na plecy i bijąc pięściami trawę obok swych bioder
          śmiała się nadal głosem perlistym, rozszerzywszy nogi, ubrane w
          żołnierski drelich. Działo się to po drugiej stronie ogniska, dwa me{" "}
        </p>
        <h2 className="h1_wstep">2</h2>

        <p className="h2_wstep">
          try ode mnie – zamierzałem chyba napisać w ciągu dalszym, ale nie mam
          teraz zupełnej pewności, bo działo się to dokładnie – już niestety –
          osiem lat temu!…
        </p>
        <p className="h2_wstep">
          Z przypisów wynika, że pisało mi się to wspomnienie coraz gorzej i
          zapewne w końcu podzieliłoby ono losy wielu innych początków moich
          powieści, gdyby nie to, że zamieściłem je w tamtych dawnych czasach na
          blogu w internecie, gdzie jakimś cudem dotrwało do naszych dni i
          zostało odnalezione przez pewnego smakosza mojej prozy. Naprawdę, w
          liście do mnie podpisał się on per „smakosz”, co tak mnie zachwyciło,
          że postanowiłem go zadowolić, czyli dokończyć tę opowieść [choć tak
          niewiele przecież do końca zostało].
        </p>
        <p className="h2_wstep">
          Czytelnika może dziwić, że odległość między Marią Magdaleną a mną
          wynosiła wtedy tylko dwa metry, przy czym przecież samo ognisko
          musiało zajmować metr, ale proponuję uznać to za nieścisłość pisarską,
          którą zachowuję dla rzetelności wobec oryginalnego tekstu, a nie
          rzeczywisty wymiar, który mierzyłem przecież na oko. Młoda,
          najwyraźniej podniecona seksualnie kobieta leżała w pobliżu również
          owładniętego podobnym samopoczuciem starszego pana, jakim byłem
          jeszcze osiem lat temu, nad nami trwał letni wieczór, mieliśmy świetne
          humory. Przeczytany przez nią fragment książki, którą niechcący
          zabrałem z sobą w podróż, pasował do okoliczności: mówił o kontakcie
          seksualnym trutnia ze sztuczną pszczołą, pachnącą jak pszczoła
          prawdziwa. Czy to w ogóle może być dziwne, że zanim doszło do naszego
          zbliżenia w tych pięknych okolicznościach przyrody, zaczęliśmy
          machinalnie mówić o seksie i rozkoszy, przygotowując się pod każdym
          względem, aby rzucić się na siebie w tym większym szale naturalnej
          potrzeby?
        </p>
        <p className="h2_wstep">
          – Muszę przeczytać tę książkę! – powiedziała nagle moja przyszła
          partnerka seksualna. – To cienka książka, zdążę przeczytać rano, przed
          przyjazdem karetki pogotowia! Ciekawi mnie, czy te chrząszcze
          oleicowate wytwarzają też, oprócz zapachu, odpowiednią atmosferę
          emocyjną?
        </p>
        <p className="h2_wstep">
          W tym momencie zrozumiałem, że Maria Magdalena jest także moją
          partnerką intelektualną. Interesowały mnie emocje owadów i właśnie
          dlatego ta książka znalazła się w moich rękach. W moim dzienniku,
          który często ogłaszam na fejsie, aż roi się od zapisów na temat owadów
          : wielokrotnie w życiu obserwowałem z wielkim zainteresowaniem chmary
          komarów, krążące wokół własnego centrum. Byłem zdumiony, że kobieta w
          stopniu podoficerskiem może się tym interesować.
        </p>
        <p className="h2_wstep">
          – Mrówki zachowują się podobnie! – wyjaśniła mi z szacunkiem [którego
          zrazu nie zrozumiałem, nie wiedząc, czy chodzi jej o autora książki,
          czy o mrówki].
        </p>
        <p className="h2_wstep">
          Dlatego zapytałem o to wprost, przybliżając się do Marii Magdaleny i
          przyjmując pozycję leżącą tuż obok niej. Ale nie dotykaliśmy się, bo
          instynktownie czułem, że jeszcze nie nastał odpowiedni czas, musiał
          wpierw nastąpić [jakiś] wstęp.
        </p>
        <h2 className="h1_wstep">3</h2>

        <p className="h2_wstep">
          Cztery następujące po sobie wpisy w dzienniku, które cytuję poniżej
          [słowo w słowo, i czasem z dwoma kalendarzami [59 i 2013]], powstały
          prawie rok przed opisaną wyprawą, zaś przypisy do tychże około trzy
          miesiące po niej. Dziwi mnie, dlaczego tak mało uwagi poświęcam w tych
          komentarzach ich związkom z samą przygodą, ale prawdopodobnie jeszcze
          wtedy zamierzałem wspomnienie dokończyć [publikując jego początek w
          postaci rozdziału 1 wraz z dziennikiem w tym samym blogu]. Zamieszczam
          je tutaj teraz, żeby poszerzyć spektrum faktów o te inne szczegóły z
          mego życia i wyjaśnić, że powstanie nowej ery wiąże się ściśle ze
          wspomnianą wioską Krywe. Obecnie, z odległości kilku lat zobaczyłem to
          zdarzenie w całkowicie innym świetle, a bywają chwile, gdy nadaję mu
          sens już to dosłownie nadprzyrodzony, jako kontakt z istotą z
          zaświatów, już to jako żart, zrobiony mi celowo przez partycypantów
          sekty [może nawet w ramach jakiegoś szkolenia, które mam zrozumieć bez
          niczyjej pomocy w jakimś przyszłym momencie, zależnym od moich
          ogólnych zdolności [to też jest właśnie jedna z tych moich myśli
          szalonych na ten temat]]. Przede wszystkim, w ramach porządkowania
          tego galimatiasu, powiem na początek, że mój „szofer”, który pozostał
          w hotelu Gromada, aby czekać na moje dyspozycje, to znany działacz
          naszej sekty, Baydała Oszczecirski, który z takiej oto podrzędnej roli
          drugorzędnej postaci opowiadania wyrasta nagle na głównego
          podejrzanego [w świecie tu przedstawionym]. Jednak powód, że to moje
          podejrzenie w ogóle się pojawiło, powstał dopiero pięć lat po owym
          naszym wspólnym przebyciu samochodem drogi z Paryża w Bieszczady,
          podczas której przeczytałem mu na głos całą ową „Synchroniczność”.
          [Czyli już prawie trzy lata temu]. Właściwie to opowiadanie niniejsze
          nie powinno zaistnieć, jako że im bliżej do dnia dzisiejszego, tym
          bardziej każda informacja w nim jest coraz mniej pewna. Coraz też
          więcej bieżących wydarzeń codziennych zdaje się mieć związek z tamtą
          historią, a ostatecznie nawet list owego „smakosza” do takich faktów
          zaliczyłem, bo jest on być może jedynie czyjąś prowokacją. Nie mogę
          też ukrywać, że, mimo że przestałem kontynuować pisanie tego
          wspomnienia już prawie osiem lat temu [częściowo pod wpływem kpin
          Baydały Oszczecirskiego na temat realności Marii Magdaleny Weronicz],
          to moje przeżycia, związane z nią w ówczesną piękną noc, były później
          jeszcze bardzo długo częstym tematem naszych zażartych rozmów. Zaś
          obecnie, gdy mógłbym skierować ku niemu szereg nowych pytań, które
          narodziły się we mnie dopiero ostatnio, nie mogę tego zrobić z tej
          prostej przyczyny, że nie wiem, gdzie ów człowiek teraz jest.
        </p>
        <h2 className="h1_wstep">Fontenay-Aux-Roses, 3 XII 59, godz. 14.57</h2>

        <p className="h2_wstep">
          Słońce świci na mur, pod którym rosną cztery drzewka figi, werwena
          tudzież winograd. Od około pół godziny obok tych drzewek latała
          gromada dużych komarów, a może były to inne stworzenia. Taka gromada
          komarów zdaje się tworzyć jeden organizm: ruchy poszczególnych
          osobników są niby chaotyczne, ale żaden nie wylatuje poza przestrzeń
          chmurki, chyba że całość przesunie się w inne miejsce.
        </p>
        <p className="h2_wstep">
          Od razu pomyślałem o komarach widzianych wczesną jesienią 1983 r. w
          Krywem, ale tam padał śnieg, zaś komarów były miliardy, a tu jest
          tylko duży chłód [pobliski dach pokryty jest szadzią po stronie bez
          słońca].
        </p>
        <p className="h2_wstep">
          Pomyślałem, żeby wyjść przez okno, jak to zwykle robię, gdy wychodzę
          narwać fig lub tp., aby złapać jednego egzemplarza tańcujących
          skrzydlaków, ale one z odległości około 5 m odebrały moją emocję
          zainteresowania nimi i wyniosły się gdzieś indziej.
        </p>
        <p className="h2_wstep">
          <b>
            PRZYPIS w blogu „Front” [prawdopodobnie z 11 XII 2014]: Przygodę w
            Krywem opisywałem wielokrotnie, ale z żadnej z powstałych wersji nie
            jestem zadowolony. Wiele by mówić… W roku 2000 zostałem okradziony
            niemal z całego dorobku literackiego, pośród którego znajdował się
            utwór w całości poświęcony temu zdarzeniu. Jeden z zachowanych
            opisów posłużył za paragraf 11 manifestu Partii Stworzycieli Nowego
            Boga [nosi pieczęć gen. Adama Pstrąga: drukować]
          </b>
          . [Dopisek niniejszy był użyty przy publikacji tego fragmentu
          dziennika gdzie indziej].
        </p>
        <img className="img_text" src={front}></img>
        <h2 className="h2_podpis_img">
          Winietka gazetki Front, rys. Tadeusz Nuckowski.
        </h2>
        <h2 className="h1_wstep">Fontenay-Aux-Roses, 14 XII 59, godz. 14.51</h2>

        <p className="h2_wstep">
          Na lewo od drzewek figowych, w pełnym słońcu pojawiło się dwa metry
          nad ziemią, pokrytą jeszcze większą niż wczoraj ilością spadłych z lip
          ich płaskich żółtolicych przedstawicieli, stadko komarów albo czegoś
          podobnego, złożone może z dwudziestu osobników i dalejże wirować wokół
          jakiegoś własnego, acz ruchomego centrum. Ha, pomyślałem, opiszę ci to
          zjawisko. Ale zanim przygotowałem tabliczkę i rylec [zeszyt i pióro],
          ustaliłem datę i godzinę, ta istota złożona z mniejszych całości
          raczyła się ulotnić w niewiadomym kierunku.
        </p>
        <p className="h2_wstep">
          Klnę się, żem nie śnił, bo oto teraz jeszcze jakaś mucha uderzyła
          głową w szybę okna od ogrodu (na szczęście tak słabo, że jeszcze mogła
          o własnych siłach odlecieć…).
        </p>
        <p className="h2_wstep">
          <b>
            PRZYPIS PÓŹNIEJSZY [prawdopodobnie z 11 XII 2014]: „Ha, pomyślałem,
            opiszę ci to zjawisko” [!], pozwolę sobie zacytować samego siebie.
            Stwierdziłem bowiem dzisiaj, że wśród moich zapisków z ostatnich
            dwóch lat wiele dotyczy małych zwierzątek, typu komary, mrówki i
            pająki. Wszystkie one antycypowały moją przygodę, jaką miałem tego
            lata, a którą usiłuję opisać we wspomnieniu „Żołnierz strzegący
            mrowiska koło Ustrzyk Górnych”. Po raz któryś w życiu przekonałem
            się, że pisanie dzienników ma sens: radzę wszystkim rejestrować
            szczegóły nawet absurdalnych myśli, mogą one być dowodem, że jednak
            bywa się prorokiem (choćby na skalę indywidualną)
          </b>
          . [Tekst towarzyszył innej publikacji tego fragmentu dziennika].
        </p>
        <h2 className="h1_wstep">Fontenay-Aux-Roses, 29 XII 59, godz. 14.44</h2>

        <p className="h2_wstep">
          Co to za grupa insektów latających nad trawą ogródka się pojawiła,
          zbyt daleko, żeby rysy poszczególnego osobnika zobaczyć? W słońcu,
          które tam jeszcze padało przed momentem, około setki tych istot
          pojawiło się, igrając w obrębie grupy we wszystkich kierunkach, ku
          memu naturalnemu chyba zdumieniu.
        </p>
        <p className="h2_wstep">
          Ciągle tam są (bo przez chwilę chmura słońce kryła, to i one gdzieś w
          trawach albo krzakach się zatrzymały), znów podskakujące w radości,
          krążące wokół siebie samych nad trawą i kamiennymi schodkami…
        </p>
        <p className="h2_wstep">
          <b>
            PRZYPIS z 14 XII 2014 [w blogu „Front”]: Dla mieszkańców Polski może
            być egzotyczne, że pod koniec grudnia latają komary [a 14 grudnia
            uderza w okno mucha – patrz poprzedni cytat z dziennika]*. Wyjaśniam
            więc, że choć Paryż i [np.] Przemyśl są w podobnej odległości od
            bieguna północnego, to klimaty w tych miastach różnią się znacznie.
            Pamiętam, że w dzieciństwie zawsze mnie dziwiło, gdy słyszałem, że
            przedwojenna arystokracja wyjeżdżała na zimę do Paryża, ale
            przekonałem się, że nie był to snobizm zepsutej klasy społecznej,
            tylko praktyczna strona posiadania kaski
          </b>
          .
        </p>
        <p className="h2_wstep">
          <b>
            Paryż może zadziwić normalnego Polaka także pod wieloma innymi
            względami. Powyżej przedstawiam zdjęcie zrobione o północy 14/15 XI
            br. na Champs Elysées. Przed chwilą wyszedłem z koncertu i
            postanowiłem kupić butelkę wina, bo uzmysłowiłem sobie, że barek w
            domu mam pusty. Ale okazało się, że ostatni sklep zamknięto właśnie
            przed chwilą. Mogłem pojechać do znajomego „Araba” w Paryżu XVIII,
            ale na pewno spóźniłbym się na ostatnie metro do domu…
          </b>
        </p>
        <p className="h2_wstep">
          <b>Czy ktoś w Polsce ma problemy z kupieniem wina o tej porze ?</b>
        </p>
        <p className="h2_wstep">
          * Ostrzegam, że łatwo tu o nieporozumienie, ponieważ przypis ten
          powstał też w grudniu, jakkolwiek rok później niż opis latających
          wyżej insektów [59/2013].
        </p>
        <h2 className="h1_wstep">Fontenay-Aux-Roses, 3 II 2014, godz. 14.05</h2>

        <p className="h2_wstep">
          Dwie duży muchi siedzi na murzy. Słońcy na nich mocnu świci. Muchi są
          duży jak trzy muchi dumowy każda. Moży to są królowy much? Moży
          spycyjalni budzą si rańsze, żyby zubaczyć, czy już można jajka niść?
        </p>
        <p className="h2_wstep">O, gdy żym to pisał, ubydwi znikli.</p>
        <p className="h2_wstep">godz. 15.50</p>
        <p className="h2_wstep">
          Ni można upisywać muchi i jidnucześni ją ubsyrwować. [Tyoria
          niuznaczuności Hajzynberga].
        </p>
        <p className="h2_wstep">
          <b>
            DOPISEK z 18 XII 2014 [dla bloga „Front”:] „Rańsze” znaczy wcześniej
            (od: rano). Robię przypis do tego słowa, bo jako jedyne w niniejszym
            tekście może być niezrozumiałe dla Polaków spoza [przedwojennego]
            Lwowa (obecnie używa się go w okolicy Przemyśla, ale nie wiem, czy
            też gdzieś indziej). W redakcji „Frontu” mówimy czasem gwarą ta–joj
            półżartem, a zwłaszcza podczas [coraz rzadszych] wizyt gen. Adama
            Pstrąga [którego przodkowie wywodzą się ze Lwowa]. Zauważyłem, że
            coraz częściej w rozmowach z sobą używam tego języka, co niekiedy
            zdarza mi się też w pisaniu.
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Co do owadów, to jest jeszcze wiele innych zapisków w moim
            dzienniku, które wskazywały proroczo, że przygoda z czarnoskórym
            żołnierzem płci żeńskiej czekała na mnie tegoż [minionego już] lata
            [patrz: „Żołnierz strzegący mrowiska koło Ustrzyk Górnych”, rozdział
            XIII]*.
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Być może okaże się w przyszłości [w trakcie rozwoju psychologii], że
            profetyczność ludzkiej świadomości jest jej cechą naturalną, zaś
            sama przyszłość istnieje w teraźniejszości w postaci „cienia”
            rzucanego przez zdarzenia, które dopiero nastąpią. (Pojęcie cienia
            wyjaśniam gdzie indziej).
          </b>
        </p>
        <p className="h2_wstep">
          * Rozdział 1 niniejszego wspomnienia był częścią innej powieści, w
          której wchodził w skład jej rozdziału XIII. rl
        </p>
        <h2 className="h1_wstep">4</h2>

        <p className="h2_wstep">
          Baydała Oszczecirski był od zawsze w naszej sekcie specjalistą od
          stanów emocyjnych, ze szczególnym uwzględnieniem „kobiecego ognia
          kundalini”, pisywał o tym felietony w naszej gazetce <i>Front</i>.
          Powiedziałem, że nasze rozmowy na temat owej przygody były „zażarte”,
          ale bynajmniej nie szło wtedy w ogóle o konkretnie moje emocje w
          związku z osobą pięknej żołnierki, ponieważ Baydała od początku
          traktował ją jako moje urojenie albo celowe ukrywanie jakichś innych
          zdarzeń, które mogłyby być moim kamuflażem tego, co tej nocy robiłem.
          Tego, że mój przyjaciel może być zdolny do czynów wykraczających
          daleko poza granice przyjaźni, a nawet prawo, dowiedziałem się dopiero
          pięć lat później: było to bardzo ostre spięcie między nami o podłożu
          seksualnym [w sensie bardzo nietypowym], lecz nawet i ono długo
          jeszcze nie skierowało mych myśli w tę konkretną stronę. W literalnym
          sensie nasze różne stanowiska były dla nas wzajemnie absurdalne: on
          mnie pytał, dlaczego nie skorzystałem z radiostacji wojskowej, żeby
          dotrzeć na informację pocztową i poprosić o numer hotelu Gromada w
          Przemyślu, a ja twierdziłem, że tak byłem podniecony Marią Magdaleną,
          że o tym nie pomyślałem.{" "}
        </p>
        <p className="h2_wstep">
          Powtarzam teraz to samo, co mówiłem wtedy, że prawdopodobnie pod
          wpływem marihuany i niezwykłej osobniczej subtelności emocji miodowej
          tej niewiasty wpadłem w stan, który wykluczał myślenie na takie
          tematy. Nie jest w ogóle możliwe do ustalenia, jak przebiegłby ciąg
          dalszy tych zdarzeń, gdybym jakimś cudem wpadł na pomysł użycia
          radiostacji; według mego adwersarza nie mogło to jednak zdarzyć się
          wcale, jako że Maria Magdalena była tylko moim „pięknym urojeniem”.
          Pamiętam, że gdy Baydała pierwszy raz tak bezczelnie podsumował moje
          wyznanie [podobnie zresztą jak wielu innych, którym to opowiadałem],
          żachnąłem się z bezsilnością [domyślam się, że komiczną]:
        </p>
        <p className="h2_wstep">
          – Gdybym miał milion dolarów, to bym NASA zapłacił, żeby zbadali to
          miejsce, tam musi być ciągle moja sperma!
        </p>
        <p className="h2_wstep">
          Wcześniej go oczywiście przekonywałem, że na tamtejszym podleśnym mchu
          miałem w ciągu tej sławetnej nocy co najmniej dziesięć orgazmów. NASA
          pojawiała się wśród nas nie bez powodu, ponieważ miałem okazję poznać
          kiedyś w życiu młodego botanika, który w tej instytucji pracował i w
          chwilach braku argumentów lubiłem się uciekać do jego wyimaginowanej
          pomocy. Tym razem, pamiętam dobrze, nasz spec od ognia kundalini
          zakpił ze mnie tonem Sherlocków Holmesów:
        </p>
        <p className="h2_wstep">
          – Hmm! Czarnoskóra? Czerwonowłosa? Z plemienia Dogonów? Hmm!{" "}
        </p>
        <p className="h2_wstep">
          Zamierzałem ominąć cały ten aspekt opowieści związany z tym naszym
          byłym rzecznikiem prasowym, którego na początku nazwałem „kierowcą”,
          bo historia sama w sobie była dostatecznie fantastyczna, ale trzy lata
          temu zmieniłem punkt widzenia, a teraz nie potrafiłem już tej nowej
          perspektywy pominąć. Na razie powiem tylko, że w czasie, gdy ja
          penetrowałem uroczą głębię fizyczną poznanej tego dnia obrończyni
          granic Unii Europejskiej, Baydała Oszczecirski przebywał w niedalekim
          Krywem, pijąc wódkę z mieszkańcem tego sioła, p. Majsterkiem, któremu
          towarzyszyła jego żona, p. Antonina. Baydała znał to małżeństwo z
          dawnych czasów, ale tego dnia dowiedział się, że są oni małżeństwem
          dopiero od trzech lat, jakkolwiek mieszkali tam razem od 1971 roku.
          Nie wiedział on jednak, że p. Antonina umrze nagle za rok i zostanie
          pochowana na pobliskim cmentarzu, który był jednym z celów mojej
          wyprawy. Dlaczego Baydała znalazł się owej nocy u państwa Majsterków?
          Otóż, gdy minęły trzy dni, po których miałem dać znak telefoniczny,
          znający [ten] mój plan Baydała [że już od dwóch dni powinienem być w
          Krywem], pojechał tam bezpośrednio. Samochód zostawił u starego hipisa
          „Prezesa” w Chmielu [na Sanie był tylko most dla pieszych], po czym
          ostatnie pięć kilometrów przeszedł piechotą.
        </p>
        <img className="img_text" src={antonina}></img>
        <h2 className="h2_podpis_img">
          Grób Antoniny Majsterek znajduje się koło ruin cerkwi w Krywem, pow.
          Lesko.
        </h2>
        <h2 className="h1_wstep">5</h2>
        <p className="h2_wstep">
          – Co chciałaś powiedzieć, mówiąc, że mrówki zachowują się podobnie? –
          zapytałem moją cudowną współtowarzyszkę, gdy już ległem obok niej
          <sup>22</sup> [nie spodziewając się bynajmniej, że przeprowadzę teraz
          najdziwniejszą w życiu słowną gierkę wstępną przed{" "}
          <i>immissio penis</i>]!
        </p>
        <p className="h2_wstep">
          – Mrówki potrafią wytwarzać zapach! – odpowiedziała i odwróciła się ku
          mnie, wspierając się na łokciu. – Nie dziw się, jestem specjalistką od
          mrówek, wysoko kształconą! Czy myślisz, że inaczej dostałabym pracę w
          polskim wojsku, gdybym nie znała się na tym? Jestem myrmekolożką,
          całkiem po prostu!
        </p>
        <p className="h2_wstep">
          Noc tamta była pełna cudów, a moje zadziwienie osobą Marii Magdaleny
          Weronicz wzrastało z minuty na minutę: zaskakiwała mnie pod każdym
          względem, tak intelektualnie, jak i organoleptycznie.{" "}
        </p>
        <p className="h2_wstep">
          – Wojsko polskie zajmuje się mrówkami? – zdziwiłem się.
        </p>
        <p className="h2_wstep">
          – O, nie tylko polskie! We wszystkich armiach NATO istnieją komórki do
          spraw mrówek! A entomologia w ogóle… ale nie będziemy chyba tu
          wspominać tych biednych warszawianek z czasów drugiej wojny…?{" "}
        </p>
        <p className="h2_wstep">
          Tu żołnierka wyjaśniła mi, że jej babcia po stronie matki była taką
          warszawianką, która ze zwykłej biedy pracowała za okupacji niemieckiej
          jako „karmicielka wszy”, które potem zarażano tyfusem i
          rozprzestrzeniano na tereny armii wrogów Hitlera. Wyobraź sobie, ja
          dlatego zostałam żołnierką! – zakończyła.
        </p>
        <p className="h2_wstep">
          Miałem jej twarz tuż przed sobą i całą siłą woli powstrzymywałem się,
          żeby jej nie objąć. Zapomniałem, że jestem już starym człowiekiem, bo
          nie widziałem w jej oczach tego, co ma tam zwykle laska patrząca na
          starca. Widziałem jej fascynację mną, ale nie czułem żadnego lęku na
          myśl, że jest to sytuacja nienormalna, ze snu.{" "}
        </p>
        <p className="h2_wstep">
          – A czyj zapach mrówki naśladują? – zapytałem szeptem [nie wiedząc
          czemu].
        </p>
        <p className="h2_wstep">
          – To zależy kogo chcą upolować! – zaśmiała się perliście moja słodka
          warszawsko-dogońska piękność. – Jeśli jest to łatwe dla oleicowatych,
          to cóż tu mówić o mrówkach! Uwadze mrówek nie uszłoby to, czy truteń
          odbiera też emocje, aby tym bardziej go omotać i wykorzystać…
        </p>
        <p className="h2_wstep">
          – Czyli zapalałyby też swoje mrówcze ognie kundalini?
        </p>
        <p className="h2_wstep">
          – Tak by właśnie było! Oczywiście, gdyby szło o trutnia! Bo gdyby w
          grę wchodził człowiek, nie mogłyby sobie pozwolić na podniecanie go do
          granicy orgazmu, bo same w momencie orgazmu człowieka straciłyby
          przytomność!
        </p>
        <p className="h2_wstep">– O, dlaczego tak?</p>
        <p className="h2_wstep">
          – Nauka odkryła to stosunkowo niedawno, a prawdę mówiąc ciągle jeszcze
          rzecz jest traktowana jako tania sensacja. Jak zwykle, gdy coś jest
          niezrozumiałe. Odkrycia dokonano zupełnie przypadkowo, wyobraź sobie –
          tu kobieta położyła palec na ustach i rozejrzała się ze strachem – gdy
          para myrmekologów oddała się harcom seksualnym w laboratorium z
          mrówkami. Po doznanych orgazmach okazało się, że wszystkie mrówki leżą
          jak martwe. Para miłośników uznała, że podczas gdy oni zabawiali się
          sobą, włączyli niechcący jakieś urządzenie, które uśmierciło mrówki.
          Nic nikomu nie mówiąc, zamknęli laboratorium, postanawiając następnego
          dnia przyznać się do winy, ale gdy wrócili rano do pracy, okazało się,
          że wszystkie mrówki żyją…
        </p>
        <p className="h2_wstep">
          – Straciły przytomność podczas ich orgazmu! – domyśliłem się.{" "}
        </p>
        <p className="h2_wstep">
          – Jak przystało na naukowców, myrmekologowie ci powtórzyli rychło swój
          spektakl miłosny, a wtedy mrówki znów straciły przytomność, nie śmiej
          się!
        </p>
        <p className="h2_wstep">
          Zrozumiałem, że czarnoskóra podoficer ma też niezwykłe poczucie humoru
          i bynajmniej nie chciałem jej ograniczać w jego eksponowaniu.
          Wiedziony zwykłą ciekawością, jak i też potrzebą przedłużenia tematu
          seksualnego, zapytałem o szczegóły doświadczenia owych myrmekologów
          [można rzec, że coś mnie tknęło].
        </p>
        <p className="h2_wstep">
          – Twoja ciekawość mnie zachwyca! – zauważyła żołnierka. – Chyba znasz
          ten eksperyment i dlatego wpuszczasz mnie w maliny!{" "}
        </p>
        <p className="h2_wstep">
          – Nie, naprawdę, nie znam, Marysiu! – szepnąłem znów [bo głos sam z
          siebie przybierał postać szeptu, a usta bezwiednie wyrzekły imię
          rozpostartej obok panny].
        </p>
        <p className="h2_wstep">
          – Bo w rzeczywistości tymi myrmekologami byli dwaj panowie! Gdy rano
          panowie zrozumieli, że być może fala orgazmiczna spowodowała utratę
          przytomności mrówek, powstało przy okazji pytanie, czy jest to może
          właściwość tylko orgazmów gejowskich! Może są one mocniejsze? Spróbuj
          sobie wyobrazić, jaki nietypowy problem musieli rozwiązać owi gejowie,
          żeby doprowadzić do kopulacji mężczyzny i kobiety w ich laboratorium,
          ponieważ sami oni nie cierpieli kobiet! Podniecona kobieta wydaje
          odpowiedni zapach, który dociera do mężczyzny na wszystkich piętrach,
          także podprogowo. Na mężczyznę nie-geja działa on atawistycznie, stąd
          taki rozwój obecnie miłości francuskiej: jak kot za walerianą, tak
          mężczyzna pójdzie za zapachem kobiecego sromu na koniec świata!
          Przecież nigdy nie uwierzę, jeśli powiesz, że nigdy nie miałeś w
          ustach łechtaczki! Nasi gejowie jednak do takich samców nie należeli i
          musieli prosić o przysługę kolegów!
        </p>
        <p className="h2_wstep">
          – A jaki jest zasięg takiej energii orgazmicznej, zdolnej doprowadzić
          mrówki do tak wielkiego szoku? Bo domyślam się, że w końcu okazało
          się, że orgazm gejów ma takie same parametry jak nie-gejów, inaczej
          przecież być nie może!
        </p>
        <p className="h2_wstep">
          – Około osiemnaście metrów! Tyle samo mniej więcej co aura
          statystycznego człowieka! Oczywiście informacja o stanie emocyjnym
          człowieka dociera na odległości, których ustalić się nie da, zwłaszcza
          jeśli należą one do stanów splątanych, ale ta struktura auralna
          człowieka ma ten zasięg! Można powiedzieć, że człowiek ma w pewnym
          sensie około 20 metrów, jeśli uznać aurę za naszą część biologiczną,
          bo można tak powiedzieć! Niestety, aura jest widzialna tylko przez
          nielicznych, ponieważ ten zmysł widzenia materii subtelnej dopiero się
          wykształca ewolucyjnie! Jesteśmy momentem rozwoju człowieka, nie jego
          efektem końcowym!
        </p>
        <p className="h2_wstep">
          – Wyobraź sobie, że też tak myślę! – ucieszyłem się. – Psychologia
          współczesna tak się nam rozjechała we wszystkich kierunkach, że nie
          wiadomo, komu wierzyć, ale ja uznaję, że najlepiej wierzyć sobie
          samemu oraz artystom! Filozofowie pieprzą o końcu sztuki, a natura
          człowieka jest jeszcze bardziej nieznana niż tysiąc lat temu, chyba
          zgadzasz się ze mną? Był taki francuski aktor, reżyser, a przede
          wszystkim mądry człowiek, Jean-Luis Barrault, który niektóre utwory
          odgrywał w malutkim pomieszczeniu, tak, aby wszyscy widzowie
          znajdowali się w tej idealnej odległości, właśnie około 18 metrów… – a
          gdy mówiłem te słowa, zauważyłem, że czarna laska w rozchełstanym
          mundurze patrzy we mnie jak w tęczę, z zachwytem.
        </p>
        <p className="h2_wstep">
          – Waść sprawiasz mi wielką radość! – rzekła z emfazą, jak aktorka na
          scenie.
        </p>
        <h2 className="h1_wstep">6</h2>

        <p className="h2_wstep">
          Nasza rozmowa miała sens inny niż wymiana zdań logicznych na jakiś
          konkretny temat. Bawiło nas mówienie w ogóle z odległości
          kilkudziesięciu centymetrów od ust do ust. Oczy Marii Magdaleny
          Weronicz błyszczały jak oczy spragnionej rozkoszy szczerej niewiasty,
          która nie ukrywa swych potrzeb. Śmieszył nas nasz dialog jak najlepsza
          komedia, która rozwijała się sama z siebie, ku naszej radości.
        </p>
        <p className="h2_wstep">
          – Jeśli mrówki odczuwają ludzką rozkosz, to powinny lubić mieszkać w
          naszych domach, a przecież nie jest to częste! – powiedziałem
          zaczepnie.
        </p>
        <p className="h2_wstep">
          – To nie jest takie proste! – odpowiedziała bez zastanowienia moja
          nocna towarzyszka. – One celowo unikają ludzi! Duch mrowiska zabrania
          im tego, choć oczywiście czasem to robią! Jeśli nie wierzysz, złap
          kiedyś mrówkę, zawieź ją do domu i trzymaj w pudełeczku w sypialni
          albo gdzie tam kopulujesz z żoną!
        </p>
        <p className="h2_wstep">
          Odpowiedziałem, że nie jestem żonaty, na co pani podoficer wyjaśniła
          mi, że wie o tym, ponieważ jest także czarownicą i miewa wizje. Nic
          mnie już nie dziwiło, także to, że mrówki są kosmitami, którzy
          traktują Ziemię jako „planetę wakacyjną”. Każde mrowisko reprezentuje
          jednego osobnika, zaś poszczególne mrówki są odpowiednikami komórek
          ludzkiego organizmu. Ogólnie mówiąc – tłumaczyła, puszczając ku mnie
          oczko – jako że jedna mrówka to jakby milion ludzkich komórek: chodzi
          o trochę różne rozwiązanie biologiczne. Świadomość mrówki jest tak
          zbudowana, że jako jednostka nie mogłaby zbyt długo pożyć w oderwaniu
          od mrowiska. Ma zresztą zakodowane posłuszeństwo wobec swego wyższego
          ja stadnego. Mrówki przylatują na Ziemię od ponad 200 milionów lat,
          mają tego różne powody, musiałabym to opowiedzieć szczegółowo, a to
          nie jest proste! – śmiała się.{" "}
        </p>
        <p className="h2_wstep">
          – Ale pamiętaj, jeśli zrobisz takie doświadczenie, musisz potem
          przenieść tę mrówkę na to samo miejsce, gdzie ją złapałeś! Bo inaczej
          będę musiała cię nimi poszczuć! – tu pogroziła mi, dorabiając sobie
          palcami koło ust dwa straszne kły.
        </p>
        <p className="h2_wstep">
          – Tu gdzieś musi być mrowisko, którego pilnujesz? – zapytałem z głupia
          frant.
        </p>
        <p className="h2_wstep">
          – I to niejedno! Mogłabym dać ci dokładną liczbę osobników każdego
          gatunku na podległym mi terenie! A tych gatunków jest kilka… to
          tajemnica zawodowa!
        </p>
        <p className="h2_wstep">
          – I gdyby osiemnaście metrów w promieniu od naszego miejsca doszło do
          orgazmu, wszystkie mrówki straciłyby przytomność?
        </p>
        <p className="h2_wstep">
          – Jako świadoma i nowoczesna myrmekolożka nie mogłabym nigdy do tego
          dopuścić! – wykrzyknęła kpr. Weronicz i groźnie spojrzała w kierunku,
          gdzie oparty o jałowiec sterczał ku niebu jej kałasznikow.
        </p>
        <p className="h2_wstep">
          Z wrażenia przełknąłem ślinę, a minę musiałem mieć podobną, jak w
          momencie, gdy ten kałasznikow zobaczyłem pierwszy raz [tak niedawno,
          nie do wiary!]. Lecz po sekundzie lodowatej ciszy, Marysia Magdalenka
          zaśmiała się znów perliście, jak już tyle razy od naszego zapoznania
          się, po czym spokojnie wyjaśniła:
        </p>
        <p className="h2_wstep">
          – To bardzo często się zdarza! Mimo że stosunkowo dużo takich
          wojskowych jak ja krąży w okolicy, aby wypłoszyć ewentualne pary,
          które chcą przeżyć orgazm w bieszczadzkiej przyrodzie! Jednak, żeby
          samemu przyczynić się do cierpienia biednej mrówki, tego się po mnie
          nie spodziewaj, drogi artysto!
        </p>
        <p className="h2_wstep">
          – Jakich cierpień, Marysiu? – nie mogłem zrozumieć. – Przecież cały
          czas twierdzisz, że przeżywają one orgazm tak mocno, gdzież w tym
          cierpienie?
        </p>
        <p className="h2_wstep">
          – Byle pająk pożre bezbronną mrówkę! – odparowała strofująco. – Ten
          stan odurzenia trwa kilka godzin, a wokoło czyha na nią tysiąc
          nieszczęść, nie znasz lasu!
        </p>
        <p className="h2_wstep">
          – Nie pomyślałem o tym! – wyszeptałem i po raz pierwszy zrozumiałem,
          że moje podniecenie może okazać się daremne. Nie mogłem się z tą myślą
          pogodzić. Desperacko rzuciłem się ku plecakowi, żeby wyjąć ostatnią
          butelkę wina, aby choć częściowo stłumić trawiącą mnie żądzę; bałem
          się, że mogę tę czarną laskę zgwałcić.
        </p>
        <p className="h2_wstep">
          – Na ich planetach mrówki używają ludzi jako najwspanialszego
          narkotyku – powiedziała uspokajająco kpr. Weronicz. – Sam musisz
          przyznać, że byłoby lepsze dla nas, gdybyśmy nie musieli palić zioła,
          a równocześnie doznawać jego boskiego działania. Każdy mieszkaniec ich
          planet jest na tyle bogaty, że dysponuje kilkoma parami ludzi [i to
          niekoniecznie dwupłciowymi!], żeby móc w każdej chwili sprowokować ich
          kontakt seksualny, którego orgazm dostarcza im kopa na długie godziny!
          Nie wprowadzając do organizmu ani grama trującej substancji. Nic
          dziwnego, że człowiek jest tam uznawany za rodzaj cudu nie mającego
          sobie równego. Na niektórych planetach rozegrano to jeszcze lepiej,
          jako że ludzie są za darmo w ramach opieki społecznej, w dowolnej
          ilości. Ludziom zapewnia się piękne domy, wysokie wykształcenie,
          dostęp do osiągnieć sztuki ziemskiej, a jedynym ich obowiązkiem jest
          uprawiać życie seksualne, możliwie jak najczęściej.
        </p>
        <p className="h2_wstep">
          – Ale dlaczego nie podbiły one Ziemi i tu nie ofiarowują ludziom tych
          dóbr?
        </p>
        <p className="h2_wstep">
          – Wszystko chciałbyś od razu wiedzieć! – wykrzyknęła czerwonowłosa
          panna. – Mrówki są tu tak długo, że gdyby chciały, władałyby Ziemią
          już przed dinozaurami! Może kiedyś wyjaśnię ci te tajemnice, bo widzę,
          że jesteś pojętnym uczniem… – dokończyła, układając swe soczyste usta
          w ciup, jak do pocałunku.
        </p>
        <p className="h2_wstep">
          Mimowolnie zbliżyłem ku niej własne usta i na ułamek sekundy
          złączyliśmy się cieleśnie, co było jak bezgłośny piorun, jeśli
          musiałbym użyć metafory. Przeszyła mnie zgroza rozkoszy, nigdy czegoś
          podobnego dotąd nie przeżyłem [słów mi brak]! Ale zauważyłem, że i
          Maria Magdalena odczuła mocno ten styk, co mnie zachwyciło. Nie
          omieszkałem jednak zapytać [co zaświadcza, że przytomności nie
          straciłem]:
        </p>
        <p className="h2_wstep">
          – I to wszystko, co mi opowiadasz, nauczyłaś się na wydziale
          myrmekologi?
        </p>
        <p className="h2_wstep">
          – Ależ gdzie tam! Straciłam przy tobie głowę i zdradzam ci tajemnice
          międzygalaktyczne, za które może zapłacę głową! – wykrzyknęła kobieta
          głosem rozpaczy. – Na uniwersytecie dowiedziałam się naprawdę niewiele
          w stosunku do tego, co wiem! Spróbuj się na przykład dowiedzieć,
          dlaczego państwa NATO wprowadziły ten podział na tereny ochrony
          mrówek, jak na przykład ten! I czego się dowiesz? Same bzdury o
          ochronie mrówek, jako ewentualnych sojuszników do walki z owadami,
          których wrogowie mogą użyć przeciwko nam! I ani słowa o tym, że
          cywilizacja mrówek wymusiła to na rządach ziemskich pod groźbą
          przekształcenia Ziemi w swoją kolonię, czyż nie możesz się tego sam
          domyślić?
        </p>
        <h2 className="h1_wstep">7</h2>

        <p className="h2_wstep">
          Poczucie obowiązku, żeby nie upiększać swoich wspomnień, towarzyszy mi
          całe pisarskie życie. W tym wypadku nie było to bynajmniej potrzebne,
          ponieważ poznana tego dnia kobieta opisywała mi tak barwnie życie
          mrówek na ich planetach, że osobiście nigdy bym czegoś podobnego nie
          wymyślił. Sam fakt, że ludzie mogliby być niewolnikami tych zwierzątek
          świadczył o niezwykłej wyobraźni tej kobiety. Po prostu cieszyłem się,
          że już odtąd będę znał kogoś o tak ciekawej wyobraźni, mechanicznie
          traktowałem ją jako przyszłego wspólnika wymyślanych fabuł opowiadań
          science fiction. Ciekawe, że gdy niedawno założyłem na chwilę, że kpr.
          Weronicz była jednak moim urojeniem, to stwierdziłem, że nie umiałbym
          odpowiedzieć, skąd w moim opowiadaniu o sztucznym piekle w głębokim
          kosmosie [które napisałem rok po owym pobycie w Bieszczadach] wzięła
          się tam wzmianka o Rzece Erydan i Wielkiej Pustce<sup>23</sup>, o
          których dowiedziałem się właśnie wtedy?
        </p>
        <p className="h2_wstep">
          – Nie wiem, czy znane ci jest pojęcie Wielkiej Pustki, wielkiej w
          sensie kosmicznym? – odezwała się Marysia w pewnej chwili łagodnie i
          cicho, jakby czując, że moje libido trochę zmalało. – Jest to
          gigantyczny obszar przestrzeni o średnicy około 1 miliarda lat
          świetlnych, na niebie znajdujący się w okolicy konstelacji Oriona i
          Rzeki Erydan. Jest to struktura będąca pustką, czyli obszarem
          praktycznie pozbawionym materii świecącej, a także ciemnej. Można
          uznać, że jest to już inna metagalaktyka, nie ta, w której jest nasza
          Droga Mleczna. Tam właśnie jest najwięcej planet mrówczych. Jeśli
          powiem, że miliardy, to cię okłamię, bo dużo więcej. Ale dla ludzi
          [którzy to wiedzą] najbardziej dziwne jest to, że prawie każda z tych
          planet jest zasiedlona przez innych ludzi: wszyscy mężczyźni i
          wszystkie kobiety wyglądają inaczej na każdej planecie, są to bowiem
          klony dawnych egzemplarzy, które odtwarza się non stop od tysięcy lat,
          czyli tych wywiezionych stąd na początku funkcjonowania tego
          procederu. Na każdej planecie wszyscy wyglądają tak samo. Musiałbyś
          wpierw dowiedzieć się dużo więcej, żeby zrozumieć, dlaczego jest tak,
          że jedne mrówki mają prawo dyktować Ziemi warunki i używać naszej
          planety do wywczasów, a inne muszą się trzymać od niej tak daleko i
          korzystać u siebie z narkotyku słabszego, albowiem klony ludzkie
          doznają orgazmów słabszych, z powodów nieznanych. Gdyby twoje plemniki
          dostały się w ich ręce, sprzedano by je kolejnej planecie, a za
          niedługo mieliby oni kolejną kolonię wielomilionową! Czy możesz
          wyobrazić sobie planetę, ba, cały układ planetarny albo kilka układów
          złożonych z twoich sobowtórów? Może kiedyś ci to wyjaśnię, w jaki
          sposób transportuje się plemniki z Ziemi w rejony Wielkiej Pustki,
          teraz chciałabym się jeszcze napić wina, bo jest ono super dobre, masz
          naprawdę niezły gust! – mówiła tak lub podobnie [ale zawsze przecież
          jakiś mały procent fikcji we wspomnieniu jest!].
        </p>
        <img className="img_text" src={czarnadziura}></img>
        <h2 className="h2_podpis_img">
          Logo performansu Czarna Dziura [nazwa sanskrycka: czurna czhidra],
          zwanego też sektą czarnodziurską.
        </h2>
        <h2 className="h1_wstep">8</h2>

        <p className="h2_wstep">
          Muszę się przyznać, że powodem głównym, żeby uwiecznić ten jeden z
          wielu aktów miłosnych, jakie w życiu przeżyłem, była intensywność
          doznań, jakich mi dostarczył. To dlatego w pisaniu kluczyłem coraz
          bardziej, unikając konkretów, gdy zbliżyłem się do opisu momentu
          naszych pierwszych pieszczot, aż ostatecznie rzuciłem kajet w kąt,
          gdzie przeleżał owe osiem lat. Teraz widzę to zdarzenie z innej
          strony, więc wystarczyła ta mała zachęta wspomnianego „smakosza”, żeby
          wrócić do tematu. Wprawdzie musiałem się zgodzić z tym już kilka dni
          po przygodzie, że Maria Magdalena Weronicz nigdy nie istniała jako
          żołnierz [jako że nie ma w wojsku polskim służby ochrony mrówek, ani
          nie służą w nim czarnoskórzy], ale przecież nigdy nie zgodziłem się z
          tym, że nie istniała ona w ogóle. W naszej sekcie nie miałem na pewno
          takich wrogów, ale poza sektą istniały na pewno siły, które tylko
          czyhały na to, abym stracił zaufanie, jakim cieszyłem się u naszego
          szefa, gen. Pstrąga, a może nawet żebym został uznany za zwykłego
          czuba. Istniała wprawdzie kiedyś w sekcie tzw. „afera spray”, w którą
          częściowo byłem zamieszany, ale bynajmniej nie spodziewałem się
          jakichś powiązań z tą dawno minioną historią. I teraz też jednak nie
          mam tej pewności.
        </p>
        <p className="h2_wstep">
          Czy było więc dziwne, że usłyszawszy zachętę Marysi do wypicia drugiej
          butelki wina, ucieszyłem się złośliwie pod adresem losu, że to dobrze,
          że została tylko ta jedna butelka? Otóż znałem bardzo dobrze moją
          własną zdolność seksualną po wypiciu butelki wina na głowę! Ciągle
          bowiem byłem jako samiec nastawiony na bezwarunkowe ugaszenie tego
          ognia kundalini, który płonął obok, jednoznacznie ze względu na mnie,
          zaś powyżej tej ilości alkoholu mogło to być dosyć wątpliwe.
        </p>
        <p className="h2_wstep">
          Nie mogę tu opuścić pewnego epizodu, który nastąpił zaraz po tym
          życzeniu mojej uroczej partnerki, bo obecnie daje mi on wiele do
          myślenia. A zwłaszcza gdyby jednak cała ta przygoda była żartem, a
          czarnoskóra dziewczyna odegrała swą rolę jako nie znana mi osobiście
          aktorka tego samego teatrzyku naszej sekty, w którym grywałem przed
          dwudziestu laty [obecnie zajmuję się w sekcie sprawami innymi,
          mniejsza z tym]. Otóż okazało się, że gdzieś się zapodział wyrwicz.
          Użyłem tego słowa, szukając dłonią w trawie wokół plecaka, a Marysia
          zapytała, co to jest wyrwicz.
        </p>
        <p className="h2_wstep">
          – Mon tire-bouchon<sup>24</sup>! – odpowiedziałem po francusku.{" "}
        </p>
        <p className="h2_wstep">
          Na co ona, nie czekając na tzw. resztę, wyrwała mi w tym momencie
          butelkę z dłoni i jednym uderzeniem jej dnem o podłoże naszej łączki
          wysłała korek ku gwiazdom. Nie usłyszałem nawet, gdzie spadł [korek
          ten potem nieraz był wspominany, jako ewentualny dowód… „dowód na to,
          że tam wypiłeś wino!” – kpili potem wielokrotnie słuchacze mojej
          opowieści]. Taki piękny pokaz opanowania zawodu żołnierza, jak
          otwarcie butelki w terenie, wymagał, abym zań podziękował, pozwoliłem
          więc sobie złożyć pocałunek na czole mojej cudownej towarzyszki.
        </p>
        <p className="h2_wstep">
          – Nie znałam tego słowa, moja mama mówiła korkociąg!{" "}
        </p>
        <p className="h2_wstep">
          – Korkociąg, trybuszon, wyrwicz – wyjaśniałem zaciekawionej lasce,
          czując ponowny wzrost libido. – To ostatnie pochodzi od nazwiska
          pewnego hrabiego, który bywał na obiadach u króla Stasia, czy wiesz
          coś o tych obiadach? – spytałem.
        </p>
        <p className="h2_wstep">
          – Jeśli u króla, to na Wawelu! Ale… – zawahała się, ale okazało się
          jednak, że nic więcej o tym nie wie. Wiedziałem, że w Polsce nauczają
          w szkołach głównie historii i religii, lecz trochę to mnie wtedy
          zdziwiło, że może istnieć jakiś Polak, który nie wie o obiadach
          czwartkowych. Potem przez osiem lat moment ten był nieobecny w mojej
          pamięci, a obecnie znów się pojawił. To jeden z punktów mojej
          wątpliwości. Przecież pamiętam to jej żywe zainteresowanie, z jakim
          słuchała mego wyjaśnienia. Oprócz tego: Wawel! Wawel pojawił się już
          dwa dni po tym, gdy próbowałem dojrzeć go ze szczytu Tarnicy, to
          naprawdę było dziwne! Tymczasem wyrwicz odnalazł się, gdy nie był już
          potrzebny, a przy tej okazji podałem Marysi kilka znanych wszystkim
          dzieciom polskim informacji, które powinna była też znać: o tym, jak
          to podczas wspomnianych obiadów dwaj hrabiowie perorowali, żeby nie
          wprowadzać do polszczyzny słów z języków obcych. Hrabia Potocki
          twierdził, że po polsku o wiele lepiej niż trybuszon brzmi wyrwicz, a
          hrabia Wyrwicz dowodził, że ładniej niż kurwa brzmi potocka. Marysia
          podziękowała uprzejmie za te wyjaśnienia, jakby słyszała je pierwszy
          raz, atoli jednak na koniec szepnęła mi złośliwie do ucha:
        </p>
        <p className="h2_wstep">
          – Powiem mamie, że mówiłeś przy mnie brzydkie słowa!
        </p>
        <h2 className="h1_wstep">9</h2>

        <p className="h2_wstep">
          Opowieść moja zatacza coraz szersze kręgi, ale chcę po prostu
          odzwierciedlić prawdę faktów w miarę wnikliwie. „Afera spray” miała
          związek z pewną moją dawną partnerką życiową, która zginęła tragicznie
          w wypadku samochodowym; jej śmierć uniemożliwiła zrozumieć do końca
          wszystkie wątki tej afery, które zmarła zabrała do grobu. Chodzi o
          Sarah E., o której wspominam często w swoich pismach, zawsze bez
          podania nazwiska [nie podam go też i teraz]. Przeżyłem z nią piękny
          romans, mimo że mogłaby być moją córką [ale cóż to znaczy dziś 20 lat
          różnicy!], jednak nie było mi dane dokonać żywota w towarzystwie
          Rozumnej Dziewczyny, jak ją może nazbyt sentymentalnie nazywałem. Na
          okładce mojej powieści o naszej sekcie „Instytut Hegemonii Człowieka”
          cytuję fragment [tej powieści], w którym wspominam o początku
          znajomości z nią, trzydziestoletnią Francuzką pochodzenia częściowo
          izraelickiego. Widzę to obecnie jak jakieś fatum, że fragment ten
          ukazał się wówczas w piśmie naszej sekty <i>Front</i>, którego
          redaktorem naczelnym był nie kto inny, jak tyle już razy wymieniony tu
          Baydała Oszczecirski. Dodam też, że poniższy urywek dialogu różni się
          nieco od tego, który zamieściłem na okładce w/w powieści:
        </p>
        <p className="h2_wstep">
          – Sarah była pół-Żydówką, pół-Polką. Dawałem jej lekcje naszego
          języka. „Czy wiesz, że aniołowie mówią albo po hebrajsku, albo po
          polsku?” – zapytałem Sarah. Nie wiedziała. Wyjaśniłem jej więc, że
          według chasydów aniołowie używają hebrajszczyzny, a przekonanie to
          jest rozpowszechnione wśród mistyków. Z polskiej strony prawdę tę
          przekazał Bolesław Leśmian, jeden z największych poetów wszechczasów,
          jeszcze bardziej polski w poezji niż Chopin w muzyce. „Bolesław
          Leśmian był pełnokrwistym Żydem”– mówiłem. „Nie wiem, czy znał
          hebrajski, ale jego utwory pisane po polsku są nieprzetłumaczalne na
          obce języki. Ale nawet jeśli aniołowie dyktowali mu po hebrajsku, to
          wybrał on język polski, aby nas o tym zawiadomić. Byłoby wspaniale,
          gdybyś nauczyła się polskiego, bo poprzez Leśmiana, ze swą żydowską
          naturą, miałabyś większy kontakt ze mną”.
        </p>
        <p className="h2_wstep">
          „To znaczy, że ten Leśmian wam powiedział, że aniołowie mówią po
          polsku?” – zapytała Sarah (zawsze szczerze zainteresowana
          niesamowitościami). „Och, Pies [tak mnie nazywała], w wyższych sferach
          Paryża mówi się teraz o bytach subtelnych, a ja nic z tego nie
          kapuję!”
        </p>
        <p className="h2_wstep">
          Musiałem jej więc wyjaśnić, że Leśmian nie powiedział tego wprost, ale
          [że] powiedział tylko, że język polski będzie językiem Sądu
          Ostatecznego. Był to zresztą mój największy argument, że polskiego
          uczyć się warto. Sarah podjęła lekcje natychmiast, a odtąd nasza
          wspólna obecność charakteryzowała się wysokim współczynnikiem
          miodowości. Ale, zaraz, czy pan w ogóle wie, że to, co w Polsce nazywa
          się Sądem Ostatecznym, we Francji nazywa się Wyższą Wizytą?
        </p>
        <p className="h2_wstep">– A gdzie Pan to u Leśmiana przeczytał?</p>
        <p className="h2_wstep">
          – Daję słowo, że czytałem to zdanie u Leśmiana, a nawet zacytowałem je
          gdzieś w swoich pismach. Ostatecznie uznałem, że sprawdzę to w
          przyszłości, ale jeśli nawet to zdanie mi się przyśniło, to niewiele
          to zmienia: dla mnie zawsze było oczywiste, że sam tego nie
          wymyśliłem.
        </p>
        <p className="h2_wstep">
          Sprawa komplikuje się tu o tyle, że przed moim romansem z Sarah była
          ona w bliskich kontaktach z innym czarnodziurcą, jednym z dostojników
          naszej sekty, Romanem Y. Kukurą, a „afera spray” dotyczy właśnie
          głównie ich obojga, co przedstawił on sam częściowo w swoim
          opowiadaniu pod tytułem „Ostatnie zdjęcie w Paryżu”, którego fabuła ma
          związek z Krywem, ku któremu właśnie zmierzałem.{" "}
        </p>
        <p className="h2_wstep">
          Na cmentarzu w tymże siole Krywe ów mój dawny rywal ma swój
          symboliczny grób, który chciałem przy tej okazji też odwiedzić.
          Oczywiście, nie chciałem go odwiedzić w związku z kpr. Weronicz,
          której wtedy przecież nie znałem; niemniej obecnie widzę w tym bardzo
          wielki sens, jako że od pewnego czasu biorę pod uwagę w swoim
          rozumowaniu, że spotkana czarnoskóra nieznajoma mogła być fantomem
          postaci Sarah E., która ukazała się wówczas moim zmysłom na pamiątkę
          tego, że ongiś odegraliśmy w lesie obok Krywego „scenę z mrówkami” [z
          V księgi „Pana Tadeusza” Adama Mickiewicza], znaną każdemu polskiemu
          dziecku.
        </p>
        <h2 className="h1_wstep">10</h2>

        <p className="h2_wstep">
          Częściowe wyjaśnienie tego fałszywego grobu Romana Y. Kukury nastąpi w
          zacytowanym niżej fragmencie dokumentu. Wyznam szczerze, że pod
          wpływem pisania dalszego ciągu tego wspomnienia odczuwam coraz większy
          obowiązek wyjaśnienia przynajmniej niektórych zdarzeń, które wiążą się
          z tym najważniejszym. Nie takie rzeczy robiono w imię żartu, a nasza
          sekta ma wielu wrogów, którzy chcieliby ją ośmieszyć, dlatego muszę
          przedstawić przynajmniej kilka znaczących argumentów, że agregat tych
          zdarzeń trzyma się pewnego wspólnego sensu.
        </p>
        <p className="h2_wstep">
          W tym, że Sarah rzuciła w tamtych dawnych czasach Romana Y. Kukurę dla
          mnie, nie było żadnej mojej winy, dlatego nigdy jej osoba nie była
          przeszkodą w naszych przyjacielskich relacjach także poza sektą [aż do
          dziś]. W stenogramach publicznej spowiedzi Romana Y. Kukury [odbywamy
          takie w sekcie] zachowała się relacja Baydały Oszczecirskiego
          [pełniącego w tej spowiedzi rolę jego adwokata] na temat pobytu Sarah
          E. w Krywem w związku z jego rzekomą śmiercią [w czasach ich bliskich
          stosunków, a więc jeszcze w XX w.]. Tekst podaję według zapisu
          archiwalnego [z 3/4 XII 2000 r.], za pozwoleniem penitenta [zwanego tu
          spytkiem]:{" "}
        </p>
        <p className="h2_wstep">
          <b>MĄŻ W MASCE ARNO RAFAELA MINKKINENA:</b> Nazywam się Arno Rafael
          Minkkinen. Jestem amerykańskim fotografem, pochodzenia finlandzkiego.
          Urodziłem się w Japonii w roku wybuchu pierwszej bomby atomowej.{" "}
          <br></br>
          <b>OBROŃCA</b>: Sprzeciw! <br></br>
          <b>SĘDZIA: </b> Przyjęty. Proszę, aby świadek nie używał metafor.
          Wszyscy wiedzą, w którym roku wybuchła pierwsza bomba... <br></br>
          <b>OSKARŻYCIEL: </b> Gdzie świadek zrobił to zdjęcie? <br></br>
          <b>MĄŻ W MASCE ARNO RAFAELA MINKKINENA: </b> W Norwegii. Widząc, że z
          łatwością chodzę po wodzie, nastawiłem na brzegu aparat z opóźnioną
          migawką, która włączyła się, gdy wracałem ze spaceru i byłem już
          blisko brzegu. Dlatego widać tylko nogi. <br></br>
          <b>OSKARŻYCIEL: </b> Jaki charakter mają inne zdjęcia świadka?{" "}
          <br></br>
          <b>MĄŻ W MASCE ARNO RAFAELA MINKKINENA: </b> Na wszystkich innych
          także występuję nago. Są to wyłącznie moje autoportrety. Fotografia
          jest dla mnie sztuką obnażania się w dosłownym sensie. Szkieletowaty
          wygląd nie wzbudza, mam nadzieję, żadnych skojarzeń z pornografią. Oh,
          bref, jestem swoim własnym bogiem i wstydu nie mam. <br></br>
          <b>OSKARŻYCIEL: </b> Jak świadek myśli, dlaczego spytek odciął górną
          część tego zdjęcia, skracając w ten sposób nogi świadka, podczas
          wieczoru „Czarnej Dziury” w kawiarni „Pol-Club” w Paryżu 27 lutego
          1999 roku? <br></br>
          <b>MĄŻ W MASCE ARNO RAFAELA MINKKINENA: </b> Tego dnia wracałem z
          Rouen, gdzie miałem wystawę, a nad ranem miałem samolot do NY. W nocy
          byłem na obiedzie u Bogdana Konopki. Był bigos z grzybami z lasów
          karpackich. O północy zadzwonił spytek i chciał ze mną rozmawiać, ale
          gospodarz nie przekazał mi słuchawki. Powody tego wyjaśnił prosto i
          logicznie: zaproszenie spytka do grona spowodowałoby ogromną awanturę,
          której chciał uniknąć. Pomiędzy gośćmi wieczoru była osoba, której
          spytek poszukiwał od dawna, chcąc ją publicznie zaatakować i obrazić.
          Jednak z listu spytka do mnie wynika, że nie chciał wprosić się na ten
          obiad, lecz że to on mnie chciał zaprosić na spektakl „Czarnej
          Dziury”. Podczas owego wieczoru autorskiego spytek odciął mi na
          zdjęciu część górną nóg. Lecz dlaczego? Tego nie wiem. <br></br>
          <b>OSKARŻYCIEL: </b> Czy osobą poszukiwaną przez spytka u Bogdana
          Konopki była kobieta? <br></br>
          <b>OBROŃCA: </b> Sprzeciw! <br></br>
          <b>SĘDZIA: </b> Nie przyjęty. Świadek odpowie, jeśli łaska. <br></br>
          <b>MĄŻ W MASCE ARNO RAFAELA MINKKINENA: </b> Oczywiście, że kobieta.
          Poznałem ją właśnie owego wieczoru, ponieważ przybyła tam ze względu
          na mnie. Przyniosła wszystkie moje albumy, abym podpisał. Okazało się,
          że robi zdjęcia samej siebie, dokładnie tak jak ja. Wyjaśniła, że
          zdaje sobie sprawę, że jest zwykłą epigonką mojej osoby, ale
          wewnętrzny przymus każe jej to robić. Odpowiedziałem, że nie gniewam
          się nigdy za naśladowanie mojej osoby, jeśli tylko nie sprawia to zła
          innym. Robienie zdjęć samemu sobie, a cóż w tym złego? <br></br>
          <b>OSKARŻYCIEL: </b> Co według świadka łączyło spytka z tą kobietą?{" "}
          <br></br>
          <b>MĄŻ W MASCE ARNO RAFAELA MINKKINENA: </b> Nie wiem nic więcej, niż
          czytamy w opowiadaniu spytka „Ostatnie zdjęcie w Paryżu”. Podczas
          obiadu u Bogdana Konopki nie poświęcaliśmy osobie spytka tak wiele
          uwagi, jak by to wynikało z tego opowiadania. Fakt, że jestem
          narratorem tego utworu, jest dowodem złośliwości autora wobec mnie,
          choć nie pierwszym, ale oby ostatnim. <br></br>
          <b>OSKARŻYCIEL: </b> Z opowiadania wynika, że kobieta nazywała się
          Sarah. Skądinąd wiemy, że aktorka o tym imieniu była ongi przyjaciółką
          spytka, której proponował główną rolę w filmie „Krywe”, nigdy nie
          nakręconym w całości. Spytek opuścił tę kobietę nagle, z dnia na
          dzień. Nieszczęśliwa tydzień później otrzymuje list z Polski, pisany w
          miejscowości Krywe koło Dwernika, że spytek popełnił samobójstwo.
          Powiesił się w Krywem w ruinach cerkwi. Znaleziono przy nim jej adres
          i prośbę, aby ją zawiadomić. Biedna kobieta natychmiast bierze samolot
          do Warszawy, a potem pociąg do Zagórza koło Sanoka, skąd już wynajmuje
          taxi. Na miejscu śmierci ukochanego pojawia się nocą. Prowadzą ją tam
          jedyni mieszkańcy Krywego, bezdzietne małżeństwo w średnim wieku, do
          których udała się zasięgnąć języka. Ruiny cerkwi nie mają dachu, ale
          na suficie świecą gwiazdy. Malutki cmentarz jest tuż obok, a grób jest
          świeży i z drewnianym tymczasowym krzyżem. Bezdzietne małżeństwo
          pozwala wypłakać się do woli przybyłej cudzoziemce, a następnie
          zaprasza ją na nocleg. Porozumiewają się łamanym językiem polskim,
          który Sarah poznała częściowo w dzieciństwie, a dokształciła w
          kontaktach ze spytkiem. (Jakkolwiek sam spytek pisze w swych dziełach,
          że porozumiewał się z kobietami najczęściej językiem emocyjnym).{" "}
          <br></br>
          <b>OBROŃCA</b> : Sprzeciw. <br></br>
          <b>SĘDZIA: </b> Przyjmuję. Proszę nie używać metafor. I co znaczy „w
          swych dziełach”? <br></br>
          <b>OSKARŻYCIEL: </b> Przepraszam. Jednak ciąg dalszy jest taki, że
          spytek serwuje Sarah czysty horror. Bezdzietne małżeństwo najpierw
          dużo opowiada o szczegółach odnalezienia zwłok, a potem schodzi na
          temat duchów. Wypijają przy tym butelkę mocnej polskiej wódki.
          Mieszkanka Krywego opowiada, że nieraz nocą widzi otwierające się
          groby, z których wychodzą ludzie i przy świetle księżyca błądzą po
          polu. Sarah mało daje temu wiary, ale kobieta pokazuje jej wojskowy
          noktowizor, kupiony od „ruskich sołdatów”. Oto przyrząd – twierdzi –
          który otworzył jej oczy na życie pozagrobowe. Nastawiają okular w
          stronę cmentarza i razem na zmianę oglądają. Dokładnie o północy
          otwiera się grób spytka i wychodzi z niego postać, którą Sarah
          rozpoznaje po ruchach jako jego samego. Postać zbliża się do domu
          bezdzietnego małżeństwa. Nagle zaczynają wyć wilki, miliony wilków.
          Oczywiście teraz wiemy, że głosy wilków były nagrane i
          zwielokrotnione, zaś potężne kolumny ustawione na pobliskich wzgórzach
          dawały ambians zajebistego strachu. Równocześnie mieszkance Krywego
          wyrastają nagle rogi, a jej mężczyzna wkłada sobie do ust dłoń i
          odgryza trzy palce. Krew spływa mu po brodzie, gdy z zadowoleniem
          miażdży zębami własny kęs. W tym momencie spytek ukazuje się w oknie i
          uśmiecha się smutno do Sarah, obnażając kły wampira. Są to sztuczne
          kły, ale przecież aktorka o tym nie wie. Nie wie też o tym, że cała ta
          scena jest filmowana z ukrytych kamer, a bezdzietne małżeństwo zostało
          zaangażowne jako aktorzy. Sarah traci przytomność, gdy spytek nachyla
          się do jej ucha i pyta: „Czy wierzysz w życie po życiu?” Jak świadek
          myśli, czy to była ta sama kobieta, którą poznał u Bogdana Konopki?{" "}
          <br></br>
          <b>MĄŻ W MASCE ARNO RAFAELA MINKKINENA: </b> Bez wątpienia. Znam tę
          sprawę z paru ust, nazwisk nie podam, wszyscy mocno potępili ten czyn
          spytka. Z wielką ciekawością oglądnąłbym ten film, aby mieć jednak
          swoje zdanie na temat takiego... „eksperymentu emocjonalnego”.{" "}
          <br></br>
          <b>OBROŃCA: </b> Proszę o głos! <br></br>
          <b>SĘDZIA: </b> (kiwa głową). <br></br>
          <b>OBROŃCA: </b> Mój klient nie opuścił terenu Francji od 1991 roku.
          Według naszych pewnych, sprawdzalnych informacji zerwanie kontaktów z
          Sarah miało miejsce wiosną 1996 roku. Film mógł być nakręcony w noc
          świętojańską tegoż roku. Z zarejestrowanych obrazów wynika, że chodzi
          o rzeczywistą wieś Krywe w Bieszczadach. Jakim cudem mój klient mógł
          przebywać równocześnie w dwóch miejscach? Odpowiedź jest prosta: na
          filmie postać mego klienta ktoś odgrywa. Jest w masce, tak samo jak
          obecnie większość na tej sali. Film jest falsyfikatem dowodu na
          nienormalność mego klienta, co do tego nie mam żadnych wątpliwości.
          Proponuję obejrzeć wspólnie ten obraz, aby skończyć z tym zastępczym
          tematem dzisiejszej gry. <br></br>
          <b>SĘDZIA: </b> (kiwa głową). <br></br>
          <b>OBROŃCA: </b> Nie będę wysoki sąd absorbował całością filmu, np.
          nużącymi scenami lamentu na cmentarzu, ani też odgryzaniem sobie dłoni
          przez pijanego wampira, nie spotykamy się też tu po to, aby oceniać
          kunszt aktorski mademoiselle Sarah. Oto tylko ostatnia scena, gdy mój
          klient ukazuje się w oknie (włącza ekran). Proszę zwrócić uwagę, o, na
          ten moment. O, proszę, mój kient odwraca się i nachyla nad uchem
          zamarłej w udanym stuporze katatonii aktorce i reżyserce w jednej
          osobie, a na jego plecach co widać? Co wystaje spod kołnierzyka?
          Tasiemki od maski. A tak, proszę zobaczyć... (zatrzymuje obraz i
          trzymaną w ręku trzcinką wskazuje na ekranie właściwy detal). To dowód
          główny. A w ogóle bezdzietne małżeństwo z Krywego to nie są postacie
          autentyczne, to dowód dodatkowy. <br></br>
          <b>SĘDZIA: </b> Czy obrona posiada ten dowód dodatkowy w realnej
          postaci pozasłownej? <br></br>
          <b>OBROŃCA: </b> Kadry z filmu, na którym dobrze widać aktorów
          odgrywających małżeństwo (on do niej zwraca się per Antośka, a ona do
          niego per Majsterek), wysłałem faxem pani Izie Cichy z Chmiela, gmina
          Dwernik. Jest to była hipiska, która tam się osiedliła; większość
          hipisów utrzymuje dawne kontakty. (Przy okazji proszę wszystkich
          hipisów, do których dotrą moje słowa, aby podali namiary). Pani Iza
          Cichy zna mieszkańców Krywego osobiście. Zaprzecza, jakoby byli to
          państwo Antośka i Majsterek. Nam ten dowód wystarcza, mimo że jest
          tylko słowny. Wierzymy pani Izie Cichy. <br></br>
          <b>SĘDZIA: </b> Uwierzę i ja! Biała iskra rozbłysnęła nad linią mego
          wzroku, trochę na lewo, a to zawsze jest dla mnie znakiem, żebym się
          zgodził. Czy prokurator Workowitz mimo to będzie nurzał się nadal w
          tym bagnie podejrzeń, jakoby spytek straszył rzeczoną damę? <br></br>
          <b>OSKARŻYCIEL: </b> Tymczasowo nie mam żadnych pytań. <br></br>
        </p>
        <p className="h2_wstep">
          PS [dopisek z 11 V 2023 r.]: Jeśli opowiadanie to będzie publikowane w
          formie książkowej, proszę, aby przypisy następowały na stronach,
          których dotyczą. Oprócz treści zabawowych utwory literackie często
          stają się po latach jedynymi dowodami historycznymi pewnych zdarzeń,
          co w tym konkretnym wypadku zobowiązuje mnie do wprowadzenia
          niniejszego wyjaśnienia. Powyższy tekst był publikowany w miesięczniku
          „Korespondent Paryski” [2001] jako fragment większej całości, zaś
          egzemplarz tego pisma został dostarczony przez przedstawiciela naszej
          organizacji czarnodziurskiej do rąk własnych p. Antośki Majsterek z
          Krywego [wspominanej w tekście]. W mojej opisywanej wyprawie nie
          dotarłem do owego sioła, gdzie mieszkała ona wraz z mężem Stanisławem,
          którego poślubiła 13 VIII 2011 r., choć był to jeden z celów mojej
          wyprawy. Pani Antośka zmarła tragicznie 9 IX 2015 r.{" "}
        </p>
        <img className="img_text" src={grazyna}></img>
        <h2 className="h2_podpis_img">
          Grażyna Zarzecka, „Androgyn” [nazwa obrazu używana przez partycypantów
          perfirmansu Czarna Dziura].
        </h2>
        <h2 className="h1_wstep">11</h2>

        <p className="h2_wstep">
          Fotograf Bogdan Konopka zerwał kontakty z naszym kronikarzem i szefem
          sztabu narracyjnego sekty [czyli skrybą Romanem Y. Kukurą] na
          podstawie podejrzenia, że ów zniszczył błonę fotograficzną, na której
          zarejestrowany był pewien domek na Montmartre, z jakichś powodów
          pomalowany w całości na różowo [fasada, dach, samochód na podwórku i
          nawet stary dywan wiszący na gałęzi drzewa rosnącego obok]. W pobliże
          tej budowli zaprowadził artystę sam nasz główny narrator,
          jednoznacznie w celu zrobienia dobrego zdjęcia [sam nie zrobił, bo
          aparatu nie miał, a smartfonów jeszcze nie było], a gdy wrócili do
          domu, okazało się, że film został w całości prześwietlony. Było to w
          dzień urodzin Konopki, którego odwiedził z tej okazji kwiat paryskich
          fotografów. W nocy ustalono, że rano wszyscy pojadą tam znów i zrobią
          każdy sobie zdjęcie różowej willi. Ale rano okazało się, że obiekt nie
          jest już różowy, tylko szary, a wokoło leżą buteleczki po sprayu tego
          samego koloru.
        </p>
        <p className="h2_wstep">
          Mąż w masce Arno Rafaela Minkkinena zna opowiadanie „Ostatnie zdjęcie
          w Paryżu”, w którym to zdarzenie jest opisane, ponieważ autorem jego
          jest Roman Y. Kukura; zaś sama spowiedź powyższa odbyła się około pięć
          lat później . Jako autor opowiadania nasz skryba celowo przeinacza
          fakty w swoim utworze i, wspominając o Sarah, twierdzi, że jej nie ma
          na obiedzie u Konopki [tym opisywanym]. Całe opowiadanie jest raczej
          żartem [literackim], który nawet nie kwalifikuje się do rozprawy
          sądowej [gdyby taką Minkkinem chciał Kukurze wytoczyć], bo można by je
          uznać za reklamę jego twórczości. Moje osobiste i bliskie kontakty z
          Sarah nastąpiły znacznie później, a wspominam tu o nich pod wpływem
          ostatnich rozmyślań. Jako że w ogóle wierzę w kontakty z zaświatami,
          pomyślałem, że to duch Sarah mógł mnie opętać w drodze z Tarnicy do
          Krywego, ukazując mi się w postaci ciemnoskórej laski. To upodobanie
          Sarah do czerni i szarości sprawiło, że była ona za życia członkiem
          grupy artystycznej działającej na Montmartrze, której członkowie na
          swych występach publicznych malowali sobie twarze na czarno
          [ostatecznie grupa została zlikwidowana jako rasistowska au rebours, a
          po śmierci Sarah przestała istnieć]; chyba też dlatego, że zacząłem
          znów rozmyślać nad „aferą spray”, roje myśli polsko-hebrajskich na jej
          temat zawiodły mnie w zaświaty.
        </p>
        <p className="h2_wstep">
          PS [dopisek z 11 V 2023 r.]: W powyższym rozdziale istnieje odnośnik
          do przypisu 26, który dotyczy innego bohatera tekstu zamieszonego ongi
          w <i>Korespondencie Paryskim</i>, Jerzego Olka. Z żyjącymi osobami,
          które występują w moich relacjach prozą [sensu largo] staram się
          zawsze ustalić, o czym mogę napisać [zgodnie z prawem autorskim],
          jednak nie zawsze jest to możliwe. Kilka miesięcy temu zwróciłem się
          do redakcji pisma <i>Twórczość </i> o mail Jerzego Olka, który nie
          reagował na pocztę papierową. Pani Aneta Wiatr obiecała pomóc, ale
          dzień później oboje znaleźliśmy na fejsie informację o jego śmierci.
          Ostatecznie nawiązałem kontakt z Żoną zmarłego, ale jak dotąd nie
          zdołałem ustalić, czy mogę użyć jego słynnego autoportretu [zdjęcia]
          oraz wypowiedzi, jakiej ktoś udzielił w jego imieniu podczas jednej z
          naszych spowiedzi. Mam nadzieję wyjaśnić tę sprawę niebawem.{" "}
        </p>
        <h2 className="h1_wstep">12</h2>

        <p className="h2_wstep">
          Gdybym był osiem lat temu wbrew sobie dokończył tę opowieść, nie
          martwiąc się, czy ją czytelnik uzna za science fiction, nie musiałbym
          teraz wciągać na jej orbitę tych innych skojarzeń, których wtedy nie
          mógłbym był nawet mieć. Bogdan Konopka zmarł dopiero cztery lata
          później, a teraz nie mogę tu nie wspomnieć, że w naszej sekcie był on
          traktowany niemal jak kapłan [prototypu religii podróży w czasie
          [mieszek aparatu fotograficznego to mały grób, zawierający moment
          minionej chwili, którą zawsze można wywołać, dzięki zarejestrowanemu
          na kliszy światłu]]. Bogdan Konopka był za życia w paryskich gazetach
          artystycznych opisywany jako mistrz świata w szarościach. O jego
          śmierci dowiedziałem się kilka miesięcy po fakcie, gdy zadzwoniłem,
          aby opowiedzieć mu sen o nim, jaki chwilę przed tym miałem. Telefon
          odebrała jego żona [osobną rzeczą jest to, że nie zawiadomiła mnie ona
          o pogrzebie], która także w tym śnie wystąpiła. Szczegółem, który
          szczególnie mnie uderzył niedawno w moich rozmyślaniach na ten temat,
          było to, że był to jeden z nielicznych moich snów, w którym tylko
          niektóre elementy były kolorowe, inne zaś szare. Rzecz działa się w
          moim mieszkaniu w Fontenay-Aux-Roses, gdzie za oknem miałem ogromny
          krzew czerwonych róż. Róże kwitły w tym śnie w swoim naturalnym
          kolorze. Wino w butelce, którą otworzyłem, żeby uświęcić tę
          uroczystość naszego spotkania, też było czerwone [goście nigdy nie
          byli u mnie w tym mieście].
        </p>
        <p className="h2_wstep">
          Miałem zamiar rozlewać wino do szklanic, gdy Bogdan rzekł wesoło:
        </p>
        <p className="h2_wstep">– Ale my tego wina nie wypijemy!</p>
        <p className="h2_wstep">
          Zdziwiłem się tym słowom, ale odpowiedziałem podobnym tonem:
        </p>
        <p className="h2_wstep">– Ale dlaczego?</p>
        <p className="h2_wstep">
          Tu Bogdan Konopka rozłożył bezradnie ręce [jakby mówił: nie wiem!]. W
          jego twarzy widziałem wyraźnie jakąś tajemnicę, której sensu nie chce
          mi chwilowo wyjawić [miał ten żart w oczach]. W tym momencie jego żona
          wstała od stołu i podeszła do otwartego okna, biorąc ze stołu butelkę.
          Ustawiając się bokiem do nas, może ażeby nie zasłaniać sobą widoku
          tego, co robi, jęła wylewać wino do ogrodu, trzymając butelkę ukośnie
          w dół. Struga przeźroczystej czerwieni wypływała z butelki tuż obok
          róż, a ja tylko patrzyłem na to [widząc fotografa od tyłu po lewej].{" "}
        </p>
        <h2 className="h1_wstep">13</h2>

        <p className="h2_wstep">
          A jednak jeszcze raz muszę to zrobić [czyli znów rozszerzyć spektrum
          zdarzeń], tym bardziej, że już na samym początku mojej relacji
          wspomniałem o tej dawnej przygodzie w Krywem. Wtedy nawet jeszcze nie
          znałem Sarah ani tym bardziej jej wcielenia w piękną Marię Magdalenę,
          która przybrała tę opisywaną wyżej czarną cielesną postać [dającą się
          dotknąć, emanować rozkoszą i nawet proszącą, aby ją zapłodnić [jak to
          już wyznałem chyba, więc nie będę się wypierał]]. To opisane zdarzenie
          weszło w skład manifestu Partii Stworzycieli Nowego Boga, ale gdyby
          ktokolwiek z moich P.T. Czytelników natknął się był już kiedyś na ten
          utwór w innych moich opowieściach, może przecież te kilka stron
          opuścić [udzielam dyspenzy]:
        </p>
        <img className="img_text" src={dante}></img>
        <h2 className="h2_podpis_img">
          Dante na monecie europejskiej, nominał 2 euro.
        </h2>
        <h2 className="h1_wstep">§.11</h2>

        <p className="h2_wstep">
          Jeden z naszych proroków był w młodości miotlarzem. Żył naonczas w
          górach Karpatach, nad brzegiem rzeki San, w siole Krywe, pow. Lesko.
          Osada składała się z dwóch drewnianych domów i ogromnej szopy bez
          ścian, w której latem nocowały krowy, przypędzane tu na wypas z okolic
          pozbawionych traw, zaś zimą trzymano tam siano dla okolicznych żubrów
          i jeleni, podkarmianych na rozkaz władz partii komunistycznej. Zimą
          temperatura spadała nawet poniżej minus 30 C. Codziennie, gdy
          zachodziło słońce, na pobliskim wzgórzu zwanym Wołkowyja zaczynały
          modlić się zbiorowo wilki, setki wilków błagających żarliwie swego
          boga, aby nie karał ich życiem pośród nocy. A kiedy wschodził księżyc,
          wilki wpadały w jeszcze większą rozpacz, biorąc księżyc za słońce i
          lamentując, że już zawsze będzie ono tak upiornie blade. Miotlarz
          rozumiał ich język, ale nie przyznawał się do tego, aby przez
          mieszkańców sioła nie zostać posądzonym o świrstwo. Wraz z nim
          mieszkało w Krywem kilku innych miotlarzy, których głównym zajęciem po
          pracy było picie bimbru, zakładanie wnyków i kopanie w ruinach cerkwi,
          gdzie według legendy zostały ukryte dzwony, gdy wieś wysiedlano pod
          muszką kałasznikowa trzydzieści siedem lat wcześniej, licząc od
          relacjonowanych tu miejsco–momentów.{" "}
        </p>
        <p className="h2_wstep">
          Dzieła swoje tworzyli miotlarze z witek brzozowych. Tzw. drapaczki z
          Krywego miały bodaj najlepszą renomę w Układzie Warszawskim, a ich
          twórcom żyło się dostatnio i nie narzekali na los. Skręcali je drutem
          przy pomocy prostego urządzenia własnej konstrukcji, złożonego z
          metalowego kółka i linki hamulcowej zdezelowanego motocykla. Witki nie
          mogły posiadać liści, praca musiała być wykonywana zimą. Trzeba było
          wstać o świcie, ubrać kożuch, opasać się konopnym powrozem, wsadzić
          zań siekierę i wyruszyć przez zawianą śniegiem dolinę ku ostępom
          brzozowym, w celu uzyskania surowca. Ściętą siekierą brzozę należało
          następnie okrzesać z tych gałęzi, które nadawały się do dalszej
          obróbki. Starannie wyselekcjonowane stosy witek miotlarze krępowali
          powrozami, zarzucali je sobie na plecy i udawali się w drogę powrotną.
          Operacja zajmowała cały dzień i była wstępem do dalszych etapów ich
          trudnej walki o byt. Przyniesione do pracowni, będącej jednocześnie
          pomieszkaniem miotlarzy, witki przemieniały się niebawem w ich rękach
          w przepiękne narzędzia służące do zamiatania dalekich kopalń węgla
          bądź hal hut stali itp. Wpierw jednak trzeba było stworzone
          majstersztyki przetransportować na plecach na drugą stronę Sanu, skąd
          zabierał je samochód wciąż nie nasyconego kontrahenta. Nasz prorok{" "}
          <i>in spe</i> byłby tworzył rzeczone drapaczki zapewne aż do upadku
          komuny, gdyby nie następujące wydarzenie, które nagle odmieniło jego
          los.{" "}
        </p>
        <p className="h2_wstep">
          Onego roku brzozy straciły listowie już pod koniec września, a
          pierwsza partia towaru była gotowa do rzucenia na rynek jeszcze przed
          połową października. Noc poprzedzającą wyprawę za San miotlarze
          spędzili na piciu bimbru i zakąszaniu żubrem z rusztu. Śnieg spadł po
          północy, gdy wszyscy już posnęli snem szczęśliwego kłusownika. O
          świcie okazało się, że przyjdzie brnąć przez metrowej grubości warstwę
          świeżego puchu. Gęsty śnieg padał ciągle nadal, w straszliwej ciszy
          bez wiatru, a jego ogromne płatki wielkości obecnej monety 2€ leciały
          pionowo jak w próżni. Nie znajdując innego wyjścia, miotlarze ruszyli
          na oślep, nie widząc się z odległości dwóch metrów. Do wiszącego na
          stalowych linach mostu dla pieszych mieli dwa kilometry, a dalej
          czekało ich strome podejście na zbocze Otrytu, którym biegła droga
          bita. Po dwóch godzinach osiągnęli most, a nasz prorok wszedł nań jako
          drugi. Zatrzymał się tam, aby odpocząć i zapalić lulkę. Śnieg zelżał
          nieco, a z pokładu mostu dało się widzieć zarysy doliny Sanu do
          najbliższego zakrętu.
        </p>
        <p className="h2_wstep">
          Oparłszy swój zgrzebny wór pełen drapaczek o balustradę mostu, prorok
          nasz grzebał w kożuchu w poszukiwaniu krzesiwek, gdy nagle całą jego
          uwagę zajął obraz absurdu natury. Oto pomiędzy białymi płatkami śniegu
          padał drugi śnieg: szary i o mniejszych płatkach, lecący po przekątnej
          w stosunku do białego. Miliardy szarych płatków leciały poziomo w
          kierunku biegu rzeki, przecinając drogi swych białych braci,
          nieustannie i uporczywie, jakby dwa sprzeczne wszechświaty zderzyły
          się w mózgu schizofrenika. W dodatku całą okolicę zdawał się
          przepełniać jakiś uroczysty szmer niezwykle delikatnego brzęku, jakby
          niezliczone legiony skrzydlatych plemników anioła nieznanej religii
          odbywały próbę przed odlotem na łono anielicy. Trwało to chwilę, ale
          nasz prorok twierdzi, że chwila ta zmierzona od jej środka mogłaby
          trwać i wiek. Nie dziwi nas tedy, iż gdy oglądał on to, co oglądał,
          jego wór pełen drapaczek gibnął mu się przez balustradę i ciężarnie
          plasnął o powierzchnię rzeki. W tym momencie jego współtowarzysz
          miotlarz, którego imię było Zagrodnik, złapał go za połę kożucha i
          zapytał:
        </p>
        <p className="h2_wstep">– Co ty, kurwa, robisz!?</p>
        <p className="h2_wstep">
          Tedy nasz prorok pokazał mu szary śnieg, a współtowarzyszowi temu też
          w tej chwili gibnął się wór z drapaczkami. I oto wówczas obaj
          miotlarze znieruchomieli przed sobą na środku mostu, a ich oczy
          połączyła tęcza porozumienia. Te szare płatki to były komary.
          Zaskoczone nagłą zimą. Usiłujące doliną rzeki uciec ku szczęśliwym
          wyspom. Miliardowe armie latających współtowarzyszy, mnogie rzesze
          małych rozumków, które połączył wspólny pomysł lotu w tym jednym,
          jedynym zbawiennym kierunku. Najpierw ku morzu bałtyckiemu: oddalonemu
          o tysiąc kilometrów. A potem: jeszcze dalej. Logika pomysłu była
          jasna. Ale przecież nie miały na to zbyt wielkich szans. Ale przecież
          tylko w to wierzyły. Niektóre dopadał płatek śniegu i pociągał w
          straszną przepaść podmościa. Ale przecież innym udawało się wyrwać z
          białych szponów śmierci i leciały dalej.{" "}
        </p>
        <p className="h2_wstep">
          Struchlały i zdesperowany miotlarz poprosił swego współtowarzysza o
          szklankę, którą ów zawsze z sobą nosił. Zagrodnik, zrozumiawszy prośbę
          po swojemu, podał mu ją napełnioną bimbrem. Nasz prorok miał mglistą
          świadomość, że popełnia jakieś przestępstwo, ale wypił, bo chciał mieć
          szklankę pustą. Następnie zrzucił z siebie kożuch, podwinął lewy rękaw
          koszuli, szklanką zaczerpnął powietrza wraz z przelatującym komarem i
          przytknął ją do obnażonej skóry dnem do góry. Pragnął przynajmniej
          jeden egzemplarz komarzego gatunku nagrodzić za ich wielką wiarę swoją
          własną krwią, dodać mu sił na dalszą drogę. Ciągnące się potem za jego
          osobą pomówienie, jakoby spełniał na moście toast za koniec świata
          komarów, oraz że rozpijał komary lecące na swój sąd ostateczny, jest
          zwykłą kpiną o posmaku świętokradczym. Nakarmiony komar upił się krwią
          zmieszaną z bimbrem i zamiast lecieć dalej, usnął już pod kloszem
          szklanki, skąd trzeba go było przenieść do pudełka po krzesiwkach,
          gdzie niestety wkrótce i tak wyzionął ducha.{" "}
        </p>
        <p className="h2_wstep">
          Tymczasem na most wszedł następny współtowarzysz miotlarz, zwany
          Hanysem, jeden z owych słynnych bieszczadzkich Siedmiu Dziadów, a gdy
          zobaczył szary śnieg i tankowanie komara, on także zapomniał, że
          wsparł wór na krawędzi balustrady, tedy i ten wór się gibnął. I zaraz
          za nim nadszedł miotlarz Świderski, późniejszy burmistrz miasta Kocka,
          któremu też wór się gibnął. A na końcu nadszedł miotlarz Mietek
          Srebrna Szczęka i jemu też na koniec gibnął się wór z drapaczkami. I
          tak wszystkie wory z drapaczkami gibnęły się tego dnia wszystkim
          współtowarzyszom miotlarzom i pochłonęła je woda Sanu.{" "}
        </p>
        <p className="h2_wstep">
          Od tego dnia nasz prorok przestał tworzyć drapaczki. Postanowił
          zrozumieć życie komarów i pojechał w świat na nauki. Odwiedził wiele
          krajów i miast, aż po wielu latach dowiedział się o istnieniu
          Instytutu Hegemonii Człowieka. Wówczas oddał się nam w całości, a swe
          życie poświęcił współtworzeniu Nowego Boga.
        </p>
        <p className="h2_wstep">
          Ponieważ o podobnym rozumie złożonym z małych rozumków wiedzieliśmy
          dotąd tylko z powieści science fiction Stanisława Lema
          “Niezwyciężony”, tereny jego przejawu na Ziemi na tak gigantyczną
          skalę, jeśli idzie o ilość egzemplarzy tej samej populacji, uznaliśmy
          za dobry znak, aby właśnie tam umiejscowić nasze centrum opanowywania
          technologii reinkarnacji.
        </p>
        <h2 className="h1_wstep">14</h2>

        <p className="h2_wstep">
          Członkowie naszej sekty zwracają się do siebie per prorok. Chcieliśmy
          używać słowa towarzysz, ale gen. Adam Pstrąg uznał, że słowo to
          straciło swój sens na skutek nadużycia. Wprawdzie własny paragraf
          manifestu napisałem w osobie trzeciej i nie każdy czytelnik by się
          zorientował, że chodzi o mnie, ale przy okazji mrówek musiałem to
          wyjaśnić. Widać, że komary też opanowały sztukę łączenia się w byty
          wyższe na chwilę podejmowania decyzji, jak np. ta tycząca kierunku
          wspólnego lotu. Można założyć, że na wypadek zagrożenia z kosmosu
          także ludzkość instynktownie przekształci się w jeden organizm i
          zadziała w jakiś logiczny sposób [nie dający się teraz przewidzieć].
          Oprócz tego wierzę, że informacje od ludzi zmarłych docierają do
          ludzkości, co usiłuję udokumentować w moim niniejszym opisie.
        </p>
        <p className="h2_wstep">
          Wspomnieć tu jednak muszę jeszcze raz Baydałę Oszczycierskiego,
          występującego tu na początku jako mój szofer. Nie padło nawet jego
          nazwisko w pierwszym rozdziale, bo osiem lat temu, jak rzekłem, nie
          dostrzegałem tak szczególnej jego roli w mojej przygodzie, zresztą
          dopiero około trzy lata temu zachował się on wobec naszej sekty w
          sposób niezwykle podejrzany, co drastycznie zmieniło moją optykę
          naszych kontaktów. Osobiście człowieka tego mam za rodzaj herosa,
          nadczłowieka, zacząłem nawet pisać o nim książkę, rodzaj panegiryku
          [pisałem ją jeszcze niedawno, ale teraz jednak już nie potrafię, choć
          być może ten stan psychiczny mi przejdzie]. W naszych badaniach nad
          przesyłaniem energii orgazmicznej na odległość wsławił się on w naszej
          sekcie jak mało kto. Jednak, z niewiadomych przyczyn, Oszczecirski
          wykorzystał w jednym z seansów internetowych moją prywatną maskę
          [każdy członek naszej sekty ma maskę, służącą głównie do spowiedzi [w
          spowiedziach wszyscy, oprócz spytka i sędziego, występują w maskach,
          choć niekoniecznie swoich]] i onanizował się na wizji w przytomności
          jednej z naszych adeptek podczas przesyłania „energii rozkoszy”, z
          czego 45 sekund zostało zarejestrowanych, a następnie dostało się do
          sieci, co groziło mi karą za rozpowszechnianie pornografii.
        </p>
        <p className="h2_wstep">
          Szczegóły tego całkowicie niezwykłego incydentu próbujemy zrozumieć
          wszyscy, wraz z gen. Pstrągiem [I sekretarzem naszej Partii
          Stworzycieli Nowego Boga], który pokpiwa ze mnie na ten temat podczas
          prawie każdej rozmowy telefonicznej [dzwoni z Brasílii, gdzie
          mieszka]. Ale mimo że nie każe mi się tym martwić [a to jest dla mnie
          najważniejsze!], niemniej jednak fakt ten bardzo odmienił moją chęć
          pisania wspomnianej powieści. Sam Oszczecirski zniknął niedługo po
          swoim wyczynie, nie wyjaśniając powodów takiego zachowania się ani też
          nie podając miejsca swego obecnego odosobnienia.
        </p>
        <h2 className="h1_wstep">15</h2>
        <h2 className="h1_wstep">SŁOŃCE SMOKÓW</h2>

        <p className="h2_wstep">
          <b>
            Siedziałem w knajpie „Słońce smoków” przy rue de Belleville i
            oddawałem się ponurym rozmyślaniom. Knajpa była chińska, dzielnica
            była arabska, a moje myśli były polskie. Sos rzeczywistości
            naokolnej był natomiast czysto francuski (Paryż północno-wschodni).
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Dzień wcześniej moja żona upadła niebezpiecznie w okolicy naszego
            kominka, uderzając głową w ten metalowy przedmiot obwieszony
            łopatkami, szczypcami i szpikulcami, jakie zwykle przy ognisku
            domowym można spotkać. Na szczęście nic złego się nie stało;
            podniosłem ją i usadowiłem na kanapie, gdzie natychmiast –
            korzystając z chwilowego obejmowania mnie – wymacała w kieszeni
            mojej koszuli resztkę haszyszu. Była prawie kompletnie pijana, a
            jeszcze chciała palić.{" "}
          </b>
        </p>
        <p className="h2_wstep">
          W nocy poprzedzającej ten mój pobyt poranny w tym przybytku rozkoszy
          podniebienia, zabiłem muchę, zwaną przez Francuzów <i>merdeuse</i>.
          (Daje się widzieć na gównie psa, którego na ulicach Paryża pełno) .
          Kiedy nocą wszedłem do sypialni, moja żona obudziła się (drzwi
          skrzypią, co ją jak zwykle budzi i nastraja agresywnie); zaświeciła
          światło i jęła mi się przyglądać z uwagą samicy węszącej zdradę.
          Wówczas zauważyłem ogromną muchę, krążącą przy jej twarzy. Błyszczącą,
          zielono–złotą, smakoszkę psiego gówna.
        </p>
        <p className="h2_wstep">
          Krążąc zygzakowato wzbudzała we mnie wstręt, ale mdłości chwyciły mnie
          w momencie, gdy usiadła nagle na krzyżyku różańca, który moja żona ma
          rozpięty na ścianie przy łóżku. Był to różaniec większy od
          przeciętnych, jakby zakonny, zaś sam krzyżyk był z metalu. Obrzydliwy
          ten stwór usiadł na ciele metalowej postaci ukrzyżowanego, a nagły
          związek tak różnych rzeczywistości w moich myślach sprawił, że nie
          mogłem zaakceptować tego obrazu i instynktownie zamachnąłem się
          porwanym z podłogi pantoflem, aby uderzyć krzyż. Żona spojrzała na
          mnie przenikliwie (oczami więcej, niż mogłaby wyrazić słowami): gotowa
          była jak ja zaakceptować ten mord na krzyżu.
        </p>
        <p className="h2_wstep">
          Lecz tymczasem mucha uciekła, zapewne czując złe. Nie odleciała jednak
          daleko, a nasza wspólna zemsta chciała się zrealizować. Żona
          obserwowała mnie, a ja zabijałem: podszedłszy z pantoflem na palcach
          do ściany, klepnąłem muchę packą podeszwy, aż dał się słyszeć odgłos
          pęknięcia dobrze spasionej ohydy. Pokazałem żonie placek, a ona
          złapała się za usta, chcąc natychmiast wymiotować. Przez zaciśnięte
          zęby powiedziała „wyrzuć to!”{" "}
        </p>
        <img className="img_text" src={przemysl}></img>
        <h2 className="h2_podpis_img">
          Przemysl w Średniowieczu. W działaniach magicznych performansu
          Przemyśl traktuje się jako osobny [inny] Paryż albo jako Paryż XXI.
        </h2>
        <h2 className="h1_wstep">16</h2>

        <p className="h2_wstep">
          Nigdy nie skończyłem powieści „Słońce smoków” i nie wyjaśniłem, że
          głównym aktem naszej religii jest przekonanie, że technologia
          reinkarnacji jest opanowywalna. Kpina moich dawnych przyjaciół oraz
          hejt nawet nie znanych mi osób dziwią mnie bardzo, bo osobiście nie
          widzę różnicy między wiarą w zmartwychwstanie a tym naszym podejściem
          do kołowrotu wcieleń [ostatecznie możemy się przyznać do
          chrześcijańskich korzeni], ale przyzwyczaiłem się, że statystyczni
          wyznawcy dowolnej religii już tak muszą reagować, bo inaczej zawsze
          się im zdaje, że to nie oni, tylko akurat ich adwersarze czegoś nie
          rozumieją. Nazywanie naszych poglądów religią jest w ogóle nadużyciem,
          ponieważ nasza „wiara” w to, co głosimy, jest o tyle ważna, że na
          pewno nie przeszkodzi ona w realizowaniu naszych celów, a nawet może
          niewspółmiernie pomóc. Jeśli jednak ktoś potrafi bez wiary, acz z tak
          wielkim zaangażowaniem, jakim charakteryzuje się tzw. wierzący,
          działać w kierunku zgodnym z naszym planem, może on się nazwać
          wyznawcą naszej religii-nie-religii. O szczegółach katechizmowych [na
          tym etapie będących zresztą ogólnikami] można dowiedzieć się np. z
          prototypu manifestu naszej Partii Stworzycieli Nowego Boga.
        </p>
        <p className="h2_wstep">
          W minionych latach dopisywałem do tej powieści co nieco, zwłaszcza gdy
          jeszcze wierzyłem, że potrafię bez oporu pisać o Baydale Oszczecirskim
          [podam niżej jeszcze kilka stron na zasadzie ciekawostki]. To zdanie
          ostatnie napisałem jednak chyba zbyt bezmyślnie, ponieważ moim ideałem
          byłoby tę powieść o nim napisać w całości, zaś jego czyn wobec mnie mu
          wybaczyć. Jest jasne, że nie mogę mieć żadnej pewności, że moje obecne
          rozumienie przygody ustrzyckiej jest właściwe, i czy któregoś dnia nie
          doznam jeszcze jakiejś dużo większej iluminacji na ten temat.{" "}
        </p>
        <h2 className="h1_wstep">BEZ PAPIERÓW I BEZ ADRESU</h2>

        <p className="h2_wstep">
          <b>
            W mojej sekcie, w której zajmowałem wysoką pozycję niezależnego
            kapłana o randze odpowiadającej biskupowi, był rok 47 nowej ery
            [2001], ale musiałem żyć zgodnie z normami państwa francuskiego na
            początku trzeciego tysiąclecia ery chrystusowej, zadowalając się
            rolą cudzoziemca <i>sans papier et sans domicile fixe</i> [mój
            polski paszport utracił ważność, nowy można było wyrobić w Polsce, a
            ambasada w Paryżu wydawała tylko paszporty zjazdowe, jednorazowego
            użytku]. Imałem się różnych zajęć na czarno, najczęściej pracując
            jako malarz w firmach francuskich, arabskich, portugalskich i
            polskich, a także pracując na własną rękę. Zdarzało mi się odnawiać
            domy znanych francuskich rodzin, np. Citroenów – jeden przy Champs
            Elysées oraz drugi w okolicy Palais Royale – czy Le Pena w
            Saint-Cloud. Z szefem Frontu Narodowego miałem ciekawą przygodę w
            jego własnym salonie, gdy pewnego dnia zostałem dłużej w łazience,
            zaś inni malarze opuścili już domostwo, a on moment później powrócił
            z jakiejś podróży. Le Pen, widząc mnie wchodzącego nagle do salonu z
            łazienki, zdezorientowany podniósł ręce do góry i krzyknął:
          </b>
        </p>
        <p className="h2_wstep">
          <b>– Kim pan jest!?</b>
        </p>

        <p className="h2_wstep">
          <b>
            Skończyło się na obopólnym strachu, bo zdałem sobie sprawę, że mogę
            zostać aresztowany albo natychmiast zastrzelony, ale wyjaśniłem, że
            nie jestem zamachowcem. Z jego córką Marine, wówczas szefową
            młodzieżówki partii, byłem w bardzo dobrej komitywie i kiedyś
            zwierzyłem się jej, że jestem dziennikarzem [miałem legitymację
            związku dziennikarzy polskich na obczyźnie] i chciałbym porozmawiać
            z jej ojcem; zgodziła się uprzejmie zaprosić mnie na kolację i
            ułatwić taką rozmowę w szczerej atmosferze. Niestety, inne przyczyny
            sprawiły, że do tego nie doszło; przestraszyłem się, że nie mam
            odpowiednio opanowanego języka francuskiego, a po drugie: gdy robota
            w Saint-Cloud się skończyła, już po kilku dniach Marine zadzwoniła
            do mnie, żebym przyszedł zrobić poprawki [mieszkała na piętrze ich
            willi, gdzie przeciekał dach], a wtedy okazało się, że pracowałem u
            niej na czarno. Musiałem jej wytłumaczyć to szczegółowo:
          </b>
        </p>
        <p className="h2_wstep">
          <b> – Firma była na biało, ale ja pracowałem w niej na czarno!</b>
        </p>
        <p className="h2_wstep">
          <b>
            {" "}
            W czasie tej pracy zaprzyjaźniłem się z czarnoskórą kucharką Le
            Pena, a ta częstowała mnie wielokrotnie polską żubrówką z jego
            lodówki, a także winem, którego po każdym obiedzie zostawało pół
            butelki, zaś kucharka nie wiedziała, co z nim zrobić [jej mąż, który
            był ogrodnikiem posesji, nie pijał alkoholu]. Co do wina, to Le Pen
            miał dobry gust. Czarnoskóre małżeństwo pochodziło z wyspy St.
            Maurice. Kucharka wielokrotnie kpiła ze swego chlebodawcy,
            podziwiając go równocześnie z wielką emfazą:
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            {" "}
            – Panie, mieszkamy w tym oto domu za darmo! – pokazywała mi przez
            okno mały domek dla służby. – Nasze dzieci za darmo chodzą do
            szkoły! Jedzenie mamy za darmo! Panie, my za kilka lat wrócimy na
            Saint Maurice i będziemy tam żyć jak w bajce! – śmiała się i nie
            mogła się nadziwić, że ktoś może być aż tak naiwnie szczodrobliwy.{" "}
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Żeby dorobić do opłat za czynsz występowałem w metrze z teatrzykiem
            kukiełkowo-kabaretowym. W cztery osoby [wszystkie z sekty]
            potrafiliśmy w minutę rozwiesić kotarę, skryć się za nią i wycelować
            zza niej ku widowni cztery pistolety. Jeden z nas krzyczał:
            „Jesteście aresztowani!” Drugi dodawał: „Słuchajcie, a nic się wam
            nie stanie!” Trzeci cytował Biblię: „Kto ma uszy do słuchania,
            niechaj słucha!”, zaś czwarty przedstawiał nas jako teatr „Obrzezane
            ucho” i podawał tytuł spektaklu [np.]: „Czy pani lubi Golema?”
            Cywilizacja była na etapie łokmenów i trzeba było krzyczeć, bo 90
            procent pasażerów miało słuchawki na uszach…
          </b>
        </p>
        <h2 className="h1_wstep">17</h2>
        <h2 className="h1_wstep">TO NIE JEST DONOS</h2>

        <p className="h2_wstep">
          <b>
            Muszę od razu wyjaśnić, że utwór ten piszę na zapotrzebowanie
            wyższej instancji tej organizacji, o której wspomniałem [oważ
            sekta]: nie podano mi daty doręczenia tekstu, lecz wyraźnie wskazano
            na konkretną osobę, której powinienem poświęcić w swej pracy
            szczególną uwagę. Zrozumiałem od razu, że dano mi okazję do
            spełnienia obowiązku przyjacielskiego wobec jednego z największych
            moich przyjaciół, czyli do napisania panegiryku lub może nawet mitu
            o herosie, za jakiego miałem i mam tego człowieka, z czym też nigdy
            się nie kryłem. Dokonywać czyjejś mitologizacji na siłę byłoby
            rzeczą naganną, ale w tym wypadku obawiałem się raczej, czy sprostam
            zadaniu i czy nie będę się kiedyś wstydził tych swoich
            apologetyczno-epopejskich zapędów. Ale ledwie zacząłem pisać
            powyższy początek pierwszego rozdziału [było to prawie już rok
            temu], gdy nagle ręka losu wytrąciła mi spod nóg taboret, na którym
            równocześnie stałem [mówiąc metaforycznie] i przemawiałem do
            ludzkości, zgodnie z nową modą. Ręka losu, taboret, moda itp.
            określenia służą tylko do podtrzymania napięcia u P.T. Czytelnika, a
            w rzeczywistości siedzę przed laptopem na pięknej czerwonej górze w
            podparyskim miasteczku Montrouge.
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Moim bohaterem jest Baydała Oszczecirski, którego nie muszę
            przedstawiać członkom Instytutu Hegemonii Człowieka, a inni moi
            znajomi znają go z czasów, gdy prowadziliśmy szerokie życie
            towarzyskie pośród Polonii paryskiej oraz zaprzyjaźnionych
            Francuzów. Pod koniec lat dziewięćdziesiątych opublikował on w
            intymnym organie postromantyków polskich <i>Teczka</i> cykl
            felietonów o świadomości kosmicznej, które przyniosły mu niemały
            rozgłos w polskim środowisku. Przez długie lata był redaktorem
            naczelnym pisemka naszej sekty <i>Front</i>. Wszyscy domyślali się,
            że Baydała Oszczecirski to pseudonim literacki, ale nikt nigdy nie
            poznał jego prawdziwego nazwiska. Mimo że kilka lat mieszkaliśmy we
            wspólnej komunie parahipisowskiej, nigdy nie ośmieliłem się zapytać
            go o to, nie wiem też kim byli jego rodzice, z którymi spędził
            dziesięć lat na Syberii, dokąd ich zesłano, gdy on sam miał dwa
            lata.
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Co do owej historii sprzed roku, to ma ona wszelkie parametry fatum,
            zdarzenia z piekła rodem, nieszczęścia obrzydliwego, które zatapia w
            człowieka oczy jak kły. Dlatego bardzo trudno mi jest o niej mówić.
            Nie mogę zacząć od powiedzenia tego wprost, bo mogę nie być
            zrozumiany bez specjalnych wyjaśnień, ale równocześnie nie chciałbym
            niepotrzebnie udawać tragedii, bo ta rzecz w istocie ma także wymiar
            normalności. Wskutek splotu różnych okoliczności, wbrew swoim
            zamiarom życiowym i aspiracjom artystycznym zagrałem w filmie porno,
            onanizując się przed kamerą 45 sekund. Gen. Pstrąg powiedział potem
            przy pierwszym naszym bezpośrednim spotkaniu [na zebraniu wszystkich
            kapłanów sekty] z masakrującą mnie powagą:
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            {" "}
            – Nie jest łatwo zrozumieć: czy pomylił się o tę sekundę, czy zrobił
            to celowo?<sup>28</sup>
          </b>
        </p>
        <p className="h2_wstep">
          Było mi przez chwilę bardzo przykro. Jakkolwiek też przecież
          równocześnie dobrze wiedziałem, że on żartuje, bo oczywiście żartował.
          W ciągu ostatnich ośmiu miesięcy Adam Pstrąg wyraził się
          bagatelizująco na temat tej mojej przygody około stu razy, każdorazowo
          inaczej, już to udając, że nie wierzy w winę Baydały, już to twierdząc
          wręcz, że powinienem być mu wdzięczny, bo w ten sposób przeżyłem to
          tak mocno, jakbym sam to uczynił, więc mam rzecz z głowy. Bynajmniej
          jednak nie od naszego szefa zależał ten mój stan zawieszenia, w którym
          nie mogłem się pozbierać po ciosie, jaki otrzymałem od losu, tylko coś
          we mnie musiało się stać, żebym uznał dzisiaj, że muszę się opamiętać
          i kontynuować ciąg dalszy, jakby nigdy nic. Po prawdzie, to i znajomi
          Polacy z Paryża mi to już wcześniej radzili. Pierwszy z nich,
          Aleksander Cz., stary działacz polskiego związku „Solidarność”, gdy
          jakieś pół roku temu zadzwoniłem do niego i opowiedziałem, że film, na
          którym widać, jak się onanizuję, krąży w sieci web, odpowiedział mi,
          że pewien bardzo znany francuski polityk [nazwisko mi uleciało z
          głowy] robił to samo na oczach telewidzów, „i nie tylko, nie tylko
          on”…
        </p>
        <p className="h2_wstep">
          – A w ogóle: pierdol to! – zakończył po przyjacielsku.
        </p>
        <h2 className="h1_wstep">18</h2>

        <p className="h2_wstep">
          W naszej sekcie, która jest przecież sektą artystyczną [o czym chyba
          wszyscy wiedzą, ale dla pewności powtarzam], a jeszcze ściślej
          zdarzeniem artystycznym [performance], ogłoszonym w Paryżu 22 III 1993
          roku, większość partycypantów to są osoby standardowo złośliwe [jak to
          zwykle bywa pośród artystów]. Każda młoda religia choćby częściowo
          musi się ukrywać pod jakąś maską, także i my jesteśmy narażeni na
          niebezpieczeństwa ataków ze strony centrów innych aksjologii, a w tej
          konkretnej sytuacji celem będzie właśnie nasz stosunek do seksu. Już
          sam fakt, że pierwszy bóg chowu ziemskiego miałby być tworzony
          [tworzony przez ludzi dla ludzi] na bazie energii orgazmicznej, nie we
          wszystkich tzw. wielkich religiach byłby zaaprobowany. Taki incydent
          jak film „45 sekund” zostałby od razu posądzony o wykorzystywanie
          mickiewiczowskiego proroctwa w sposób bluźnierczy. I choć nigdy w
          życiu nie miałem chęci na takie głupie żarty, żeby pojawiać się na
          metahistorycznym koniu, to w tej sytuacji, nawet gdyby gen. Pstrąg
          prosił mnie o to dla tzw. jaj [choć on nigdy nie kpi z żadnej
          religii], musiałbym odmówić, a to ze względu na to odium potomka Onana
          [tak źle odbierane w tej otumanionej Europie]!
        </p>
        <h2 className="h2_wstep_center">„BĄDŹ ZDRÓW! NIE PIERDOL KRÓW!”</h2>

        <p className="h2_wstep">
          <b>
            Powyższymi słowy zaczynał się jeden z naszych spektakli teatrzyku
            „Obrzezane ucho”. Staraliśmy się nie używać wulgaryzmów, ale w
            sytuacji cytowania było to konieczne. Zresztą w metrze nikt nas nie
            rozumiał, bo tę sztukę graliśmy po polsku [niejako dla siebie], a
            gdy zaś wśród pasażerów metra byli Polacy, dostawaliśmy duże brawa i
            duże pieniądze, ponieważ wzbudzaliśmy [tzw.] salwy śmiechu. Sztuka
            ta była w istocie monologiem, który słyszałem wśród kręgów Polonii
            paryskiej, gdy wygłaszał go wiele razy ten sam malarz budowlany na
            prośbę kolegów, podczas pijatyk po pracy na budowie. Zauważyłem, że
            słuchacze chłonęli każde słowo tego artysty, tak jakby słyszeli je
            pierwszy raz. Wyciągnąłem z tego wniosek, że prości ludzie kochają
            teatr, byleby tylko pokazywał on tę sferę rzeczywistości, która ich
            interesuje. Do tekstu monologu dopisywałem francuskie komentarze,
            często po prostu improwizowałem i tłumaczyłem nie to, co aktor
            mówił, ale zwykłe głupoty dla śmiechu i komedii. Żałuję, że nie
            pamiętam całego oryginału, ale poszukam w archiwum sekty, może tekst
            tam jest [?].
          </b>
          <h2 className="h2_wstep_center">
            <b>
              Bądź zdrów! Nie pierdol krów!<br></br> Pierdol barany, chuju
              zajebany!
            </b>
          </h2>
        </p>
        <p className="h2_wstep">
          <b>
            Po tej inwokacji pojawiała się kobieta siedząca na wiadrze, za którą
            przebieraliśmy kogoś, kto akurat nie nosił brody [nakładał też siwą
            perukę]:
          </b>
        </p>
        <h2 className="h2_wstep_center">
          <b>
            Stara baba była, na wiaderku siadła. <br></br> Będziesz wodę piła,
            boś ty mięso jadła!
          </b>
        </h2>
        <p className="h2_wstep">
          Dalej mam lukę w pamięci, a za nią następowała scena edukacji
          seksualnej w rodzinnym kręgu:{" "}
        </p>
        <h2 className="h2_wstep_center">
          <b>
            – Ależ, matuś, miej sumienie, <br></br> On ma końskie przyrodzenie!
          </b>
        </h2>
        <h2 className="h2_wstep_center">
          <b>
            – Przyrodzenie nic nie szkodzi, <br></br> On ci nieraz nim dogodzi!
          </b>
        </h2>
        <p className="h2_wstep">
          <b>
            Dalej to już tylko pojedyncze słowa mogę przytoczyć in extenso,
            lepiej poczekać na odnalezienie oryginału [poleciłem sekretarce].
            Pozwolę sobie tylko zauważyć, że mimo słownej wulgarności sam akt
            prokreacji i towarzyszące temu ekscytacje [w dobrym tego słowa
            znaczeniu] są nieustannie w centrum zainteresowania naszego
            europejskiego narodu, a może nawet nadszedł czas, żeby wreszcie coś
            zrobić z energią tego fenomenu, skierować ją ku jakiemuś wspólnemu
            celowi? Coraz więcej znaków zapytania stawiam, ale to chyba dlatego,
            że mój panegiryk właśnie tego problemu dotyczy.
          </b>
        </p>
        <h2 className="h1_wstep">19</h2>

        <p className="h2_wstep">
          Wstyd mi, nie mogę sam siebie zrozumieć: jak mogłem napisać „poleciłem
          sekretarce”? Wprowadzam chwyty literackie, udaję jakieś urzędnicze
          sfery…?{" "}
        </p>
        <h2 className="h1_wstep">19</h2>

        <p className="h2_wstep_center">MINIPROLOGOMENA DO MITOLOGII SEKTY</p>
        <p className="h2_wstep">
          <b>
            Nie mogę pominąć pewnych faktów bieżących, choć będę je ograniczał
            do niezbędnego minimum, jak na przykład dzisiejszą rocznicę śmierci
            Józefa Hreczanika, pierwszego proroka Instytutu Hegemonii Człowieka,
            która nastąpiła na skutek dobrowolnie przyjętej trucizny. Rzecz
            miała miejsce w więzieniu, gdzie odbywał on karę za rzekome znęcanie
            się nad chorym psychicznie sąsiadem. Po upadku komuny został
            zrehabilitowany i uznany za ofiarę ówczesnej władzy, jednakże
            „dziwnym trafem” dokumenty jego procesu zaginęły. Najstarszy zapis o
            nim w archiwum sekty brzmi:
          </b>
        </p>
        <p className="h2_wstep">
          JÓZEF HRECZANIK, ur. 27 II 1947 r. w Krywem, pow. Przemyśl. W 1964 r.
          debiutuje w prasie jako poeta. W 1967 r. kończy Studium Nauczycielskie
          w Przemyślu. Po śmierci ojca sprzedaje — otrzymane w spadku —
          gospodarstwo, co mu pozwala na lekkie życie. Deprawuje nieletnią,
          Marię Kryk, z którą następnie ma syna. Po wygraniu miliona złotych na
          loterii — w lutym 1971 — kupuje dom w Przemyślu i wydaje własnym
          sumptem tomik wierszy. Kiedy książka ukazuje się, niszczy cały nakład.
          Od stycznia 1970 r. do lipca 1971 r. pracuje jako robotnik w
          Państwowych Kopalniach Gazu Ziemnego. Aresztowany — za umyślne
          spowodowanie śmierci chorego psychicznie człowieka — przez pięć lat
          przebywa w więzieniu, gdzie opanowuje około 10 obcych języków i tworzy
          poematy prozą. 8 IV 1976 popełnia samobójstwo. [z: Archiwum Książka
          Rzymska]
        </p>
        <img className="img_text" src={grabowski}></img>
        <h2 className="h2_podpis_img">
          W Przemyślu rozmowy filozoficzne odbywają się na każdej ulicy. W głębi
          katedra religii katolickiej. Rys. Wojciech Grabowski.
        </h2>
        <p className="h2_wstep">
          <b>
            Historia mojej znajomości z Baydałą Oszczecirskim sięga do owych
            mitycznych czasów, jako że jest on jedynym człowiekiem [spośród
            moich bliskich współtowarzyszy], który znał Józefa Hreczanika za
            życia; po jego śmierci zgłosił się on do naszej organizacji, jako
            jej sympatyk, znający nas tylko z opowieści, był bowiem wychowawcą w
            tym samym w/w więzieniu. Ba, to ładnie brzmi, co napisałem, ale
            przecież przez ostatnie miesiące tysiące razy doświadczałem stanów
            pewności, że Baydała nie jest może w ogóle człowiekiem, a wszystko,
            co o nim wiem, to fikcja! Byłem o krok od obłędu, choć doświadczyłem
            w życiu niejednej upiorności i byle co nie może mnie złamać
            [odpukałem jednak w mój dębowy niemalowany stół na czerwonej górze!]
            : teraz już wiem, że ten obłęd byłby jednak raczej moim błędem…
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Tak czy siak bez Józefa Hreczanika nie byłoby Instytutu Hegemonii
            Człowieka ani mojej znajomości z opisywanym herosem. Gen. Adam
            Pstrąg być może stworzyłby całkiem inną strukturę, w której
            działałbym, ale trudno mi sobie wyobrazić, abym znał wtedy tego
            „fircyka wyfraczonego z gitarą”, jak go nazwał ongiś pewien stary
            hipis. Hipis ten bardzo się pomylił, bo w Baydale nie ma nic z
            pustaka przy bliższym poznaniu, nie jest modny w celu innym, jak
            tylko po to, żeby nie rzucać się w oczy w świecie modnisiów. Bez
            wątpienia nie jest to mężczyzna urodziwy: sam to podkreślał
            wielokrotnie, nie miał kompleksów, a gdy ktoś mu się zbyt natrętnie
            przyglądał, mówił:
          </b>
        </p>
        <p className="h2_wstep">
          <b>– Tak, jestem podobny do mrówki!</b>
        </p>
        <p className="h2_wstep">
          <b>
            Najczęściej zawstydzał tego kogoś, bo wyglądało to, jakby czytał w
            myślach, ale naprawdę był podobny do mrówki i zgadnąć było mu łatwo.
          </b>
        </p>
        <img className="img_text" src={mrowka}></img>
        <h2 className="h2_podpis_img">„Tak, jestem podobny do mrówki!”</h2>
        <h2 className="h1_wstep">20</h2>
        <p className="h2_wstep_center">SIEDEM MILIARDÓW ARTURÓW</p>

        <p className="h2_wstep">
          <b>
            To, że Baydała Oszczecirski może nie być człowiekiem, napisałem w
            afekcie i metaforycznie: ostatecznie wszyscy możemy się okazać
            istotami, które wyobrażały sobie, że są ludźmi, ale ciągle daleko im
            do tego. Zbiorowy obłęd jest możliwy, a w każdym razie według
            niektórych naszych proroków wisi na włosku. Nie nadużywam słowa
            prorok, ponieważ jest to tytuł każdego członka Partii Stworzycieli
            Nowego Boga, która jest jedyną partią w naszej sekcie. Tytuł
            towarzysz byłby mniej trywialny i napuszony, lecz gen. Pstrąg
            zabronił nam tego słowa używać [sens jest już zużyty].{" "}
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Pierwsze zdanie niniejszego rozdziału muszę jednak uściślić:
            zauważyłem, że zbyt często już w czasie pisania konkretnego zdania
            zmieniam nagle jego sens i piszę coś dokładnie odwrotnego, jakbym
            się bał własnej myśli! Ostatecznie wszyscy możemy się okazać
            istotami, które wyobrażały sobie… – i co dalej mógłbym był po tym
            napisać? Że może się okazać, że każdy z nas nie jest sobą?
            Prawdopodobnie tak właśnie było: zamierzałem powtórzyć to stare
            powiedzenie, że my to inni, ale uznałem, że brzmi to już zbyt
            banalnie? Może nawet chciałem powrócić do naszej pierwszej rozmowy w
            Paryżu, gdy przyjechał on tutaj po naszej długiej rozłące?{" "}
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            – Znowu uciekłeś z domu, Baydało? – zapytałem wtedy, nawiązując do
            jego nader częstego przenoszenia się z miejsca na miejsce [od
            Brazylii po Japonię].
          </b>
        </p>
        <p className="h2_wstep">
          <b>– Z Charleville!</b>
        </p>
        <p className="h2_wstep">
          <b>
            W istocie był w Charleville przed przyjazdem do Paryża, bo jechał z
            Holandii i miał po drodze. Reprezentował chyba dla mnie tych siedem
            miliardów, którzy zrozumieli, że są kimś innym [siedem miliardów
            Arturów Rimbaudów, którzy uciekają z Charleville do Paryża]!
            Jakkolwiek znaliśmy się od tamtych wspaniałych czasów, doznałem
            wówczas dogłębnego przeświadczenia, że nie jest to ten sam Baydała
            Oszczecirski, którego znam [choć może brzmi to w słowach jak zgroza
            i patos]…
          </b>
        </p>
        <h2 className="h1_wstep">21</h2>
        <p className="h2_wstep_center">KOK</p>
        <p className="h2_wstep">
          <b>
            Tymczasem w moim życiu [w świecie zewnętrznym wobec opisywanego]
            nastąpiły duże zmiany: wystarczyły cztery miesiące, podczas których
            nie mogłem kontynuować tych zapisków, abym zwątpił totalnie w swoje
            zdolności wyjaśnienia, co mnie spotkało w konsekwencji znajomości z
            Baydałą Oszczecirskim. Oprócz tego jestem zwyczajnie po ludzku chory
            i obawiam się, że mogę nie mieć możliwości wyrażenia wszystkich
            szczegółów tego wielowymiarowego zdarzenia, co pochłania też
            fizyczne siły człowieka [np. siedzieć przy komputerze całymi
            godzinami]. Najgorsze zaś jest to, że o pewnych rzeczach nie mogę
            powiedzieć wprost, bez koniecznych wstępów, ponieważ nie zostanę
            odpowiednio zrozumiany.{" "}
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Jest jasne, że udzielając lekcji rozumienia emocji ludzi, z którymi
            się kontaktujemy, musieliśmy bazować także na energiach seksualnych,
            jako najłatwiej zrozumiałych i odczuwalnych. Problem ten jest w
            społeczeństwie prawie wcale nie zrozumiany, a każde podejście
            „naukowe” wzbudza podejrzenia co do intencji eksperymentatorów.
            Musiałbym więc najpierw wyjaśnić podstawy rozumienia „kobiecego
            ognia kundalini” [kok] , aby stało się jasne, że samo porozumienie
            na odległość na falach emocyjnych nie musi dotyczyć tylko sfery
            seksu. Co do naszych praktyk, trzeba wiedzieć, że działać na
            odległość było jednym z rodzajów eksperymentów, czyli że
            wykorzystywaliśmy internet do podniecania się na odległość,
            natomiast sam fakt takiego podniecenia musiał potwierdzić człowiek
            [empata-kumat]. Byliśmy w kontakcie z wieloma młodymi kobietami
            [adeptkami naszej sekty, czasem na bardzo wstępnych poziomach], z
            którymi dokonywano kontaktów wibracyjnych na znaczne odległości. W
            praktyce działo się to tak, że określony kumat wysyłał impuls
            seksualny do konkretnej kobiety w momencie nie określonym z góry,
            natomiast biorąca udział w eksperymencie miała dać znać
            telefonicznie, że jej ogień kundalini się zapala [oczywiście,
            kobieta musiała być świadoma mechaniki swych energii psychicznych].
            Jeśli kobieta zawiadamiała nas o swoim podnieceniu, gdy impuls nie
            był do niej wysyłany, mogło to znaczyć, że podnieciła się z innych
            powodów, samoczynnie bądź w wyniku zapłonu przez innego mężczyznę.{" "}
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Opowiedziałem to na zasadzie przykładu, bo podobnych sytuacji, o
            bardzo różnych przebiegach zdarzeń, przeprowadziliśmy tysiące, a
            popełnione przez Baydałę przestępstwo ma związek z podobnym
            problemem.{" "}
          </b>
        </p>
        <img className="img_text" src={grabowski2}></img>
        <h2 className="h2_podpis_img">
          Przemyśl – epoka niedawno miniona. Rys. Wojciech Grabowski.
        </h2>
        <h2 className="h1_wstep">22</h2>
        <p className="h2_wstep_center"> PIERWSZA WZMIANKA O SZKOLE EMOCJI</p>
        <p className="h2_wstep">
          <b>
            Podobno naukowcy odkryli, że rozwój umysłowy człowieka zaczął się,
            gdy urodził się mutant, który miał słabiej umocowane mięśnie żuchwy
            do czaszki. Okazało się, że ten mięsień, który ostatecznie decydował
            o sile nacisku na pożywienie [np. kość], gdy został osłabiony,
            pozwolił równocześnie na zwiększenie się czaszki, bardzo tym
            mięśniem wcześniej krępowanej. W ogóle, gdyby ten mięsień pozostał
            nie tracąc mocy, nigdy nie powstałaby mowa ludzka; czaszka uwolniona
            zaczęła się rozrastać, [ale] mózg [jakby w nagrodę] zrekompensował
            słabe kły większą głową.
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Milion lat później w naszej sekcie, a konkretnie w teatrzyku
            „Obrzezane ucho” wyglądało to tak: Żółty Kieł<sup>31</sup> miał
            ogromną głowę, ale tylko jednego zęba, zaś Ali Wo zwracał uwagę swą
            pięknie uformowaną szczęką jak z porcelany, ale głowę nosił osadzoną
            na zbyt długiej szyi, którą potrafił zginać w połowie jak giętki
            patyk, i która chyba właśnie dlatego wydawała się za mała. Żółty
            Kieł był naszym błaznem, zaś Ali Wo konferansjerem. Pierwszy
            rozśmieszał publiczność wyglądem, drugi kojarzył się ze żmiją
            stojącą na ogonie [a czasem ubieraliśmy go dodatkowo w szatę podobną
            do skóry wężowej]. Siebie opisywać byłoby mi głupio, a mego bohatera
            już wcześniej przedstawiłem, mam wrażenie [a jeśli nie, to nadrobię
            to w scenach miłosnych]…
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Golem był naszym motywem stałym w tamtym okresie: straszyliśmy jego
            nadejściem w różnej postaci, czasem nawet pozwalając sobie na
            bezczelne informowania użytkowników metra, że „i tak już jesteście
            częściowo przez niego opanowani, sądząc po tych słuchawkach na
            uszach”. Smartfony jeszcze nie istniały, choć komórki już były,
            jednak przeciętny Europejczyk był jeszcze ciągle tak samo głupi jak
            dziś. Zrozumienie, że ograniczanie wolności będzie rozszerzać się
            poza sferę zewnętrznych praw i fizjologii, nie jest łatwe i
            przeciętny obywatel długo jeszcze nie uzna, że nawet jego myśli mogą
            stać się widzialne dla Golema. A kiedy to nastąpi, będzie oczywiście
            dawno za późno. Musieliśmy używać drastycznych środków, żeby
            zaszczepić motłochowi podejrzenie, że telepatia celowo jest ukrywana
            jako naturalna właściwość psychiki, nie mówiąc o odczuwaniu czyichś
            uczuć [strachu, radości itp.], o czym wiedział już Gustaw Le Bon.
            Dlatego używaliśmy grubych słów i seksualnych podtekstów [oraz i
            tekstów [niestety, głównie polskich, bo chcieliśmy najpierw
            wypróbować rzecz na jednej nacji]]. Jednak dobrze pamiętam, że
            pierwsza wzmianka o szkole nauk emocyjnych pojawiła się podczas
            spektaklu o równouprawnieniu płci, do którego użyliśmy piosenki
            ludowej. [Gdy miałem 12 lat, zaśpiewał mi ją kolega, który w tym
            celu zaprosił mnie do lasu, bo bał się, żeby we wsi nie usłyszał go
            ktoś z dorosłych itd.]. Konferansjerem tym razem byłem ja: zapytałem
            po francusku, czy w przedziale są Polacy, a gdy upewniliśmy się, że
            nie, odważyliśmy się ją zaprezentować [gdyby Polacy byli,
            poprosilibyśmy o dyskrecję i spokój, co często dawało właściwy
            efekt]. Śpiewał Ali Wo, a dwuwiersz chóru wykonaliśmy dziarsko
            wszyscy razem:
          </b>
        </p>
        <p className="h2_wstep_center">
          {" "}
          Antek siedział na jabłoni, <br></br>
          Chujem bębnił, jajem dzwonił, <br></br>A Kasicha pod jabłonią<br></br>
          Zatykała pizdę dłonią!
        </p>
        <p className="h2_wstep_center"> Chór:</p>
        <p className="h2_wstep_center">
          {" "}
          Chuja rozciąć! Pizdę zaszyć! <br></br>
          Nie będą się więcej straszyć!
        </p>

        <p className="h2_wstep">
          <b>
            Następnie Baydała wyjął swoją wielką księgę, którą zawsze mieliśmy z
            sobą, i przeczytał z niej [po francusku] własny tekst, mniej więcej
            to samo, co potem zamieścił w swoim pierwszym felietonie o
            świadomości kosmicznej:{" "}
          </b>
        </p>
        <p className="h2_wstep">
          <i>
            Plan gen. Pstrąga jest taki, żeby zawiadomić wszystkich poetów
            europejskich, że z okazji 200–lecia urodzin Adama Mickiewicza,
            Europejski Ośrodek Regeneracji Sacrum [tzw. EROS] zaprasza ich do
            powtórzenia gestu w/w polskiego proroka, który „uklęknął przed Merem
            Paryża, prosząc o pomoc w ratowaniu ludzkości”. Poeci mieliby klękać
            publicznie, począwszy od Placu Bastylii, a potem w dowolnym miejscu
            Stolicy, zaś zbiorowym merem byłby lud Europy. Zebrane datki
            żebracze posłużyłyby na rozruch głównej idei, jaką jest wspólne
            stworzenie pierwszego w historii języka emocyjnego.<sup>32</sup>
          </i>
        </p>
        <img className="img_text" src={grabowski3}></img>
        <h2 className="h2_podpis_img">
          Przemyśl – epoka niedawno miniona. Rys. Wojciech Grabowski.
        </h2>
        <h2 className="h1_wstep">23</h2>
        <p className="h2_wstep_center">
          <b>Montrouge, 4 XI 2022 (z dziennika)</b>
        </p>
        <p className="h2_wstep">
          Pracę nad kolejnym rozdziałem opowiadania „Żołnierz strzegący mrowiska
          koło Ustrzyk Górnych” skończyłem dziś o wschodzie słońca, które
          powitałem szklanicą wina, po czym zjadłem pajdkę chleba i gomółkę sera
          i już miałem odejść w krainę snu, gdy rzuciwszy okiem na fejsa,
          uradowałem się tekstem, który tam przeczytałem [domyśliłem się, że
          jest to odpowiedź na żądanie ministra edukacji, żeby młodzież polska
          oraz dzieci przestały się onanizować [co przedstawiam na prawach
          cytatu]]:
        </p>
        <p className="h2_wstep">
          <b>
            Ministrze, w odpowiedzi na pytanie, informuję, że młodzi ludzie
            masturbują się masowo, zarówno chłopcy, jak i dziewczęta. Co więcej:
            masturbują się również dorośli i starcy. Także księża.{" "}
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Masturbował się także wielki wychowawca dzieci i młodzieży Hans
            Christian Andersen, który w pamiętnikach zaznaczał chwile kiedy
            dotykał siebie w ten sposób.
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Albo na przykład Roberto Benigni, reżyser i odtwórca Pinokia, który
            wspominał, że onanizując się przypominał sobie frazę „Bóg jest
            wszędzie”, i zastanawiał się zza którego krzaka Bóg patrzy na niego.
          </b>
        </p>
        <p className="h2_wstep">
          <b>A chłopcy w filmie Felliniego „Amarcord”?...</b>
        </p>
        <p className="h2_wstep">
          <b>Trudno.</b>
        </p>
        <p className="h2_wstep">
          <b>
            Masturbacja, ten święty akt niewinnej winy, jest bohaterką wielkiej
            piosenki Lucio Dalli, który aktem tym zamyka dzień strwoniony na
            daremnym poszukiwaniu miłości (nawet lewicująca prostytutka woli
            dyskutować niż kopulować).{" "}
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Oto piosenka Dalli. Wsłuchaj się, Ministrze, w jej charakterystyczny
            rytm:<sup>33</sup>
          </b>
        </p>
        <p className="h2_wstep_center">
          (następuje piosenka)<br></br> DISPERATO EROTICO STOMP
        </p>
        <p className="h2_wstep">
          List ten uznałem za znak od wszechświata wzajemnych połączeń, żebym
          wreszcie przestał robić te skoki w bok i zaczął opisywać pokładzinki z
          kpr. Marysią Weronicz!
        </p>
        <h2 className="h1_wstep">24</h2>

        <p className="h2_wstep">
          Decyzje pisarskie zapadają w podświadomości, czasem po prostu we śnie
          pojawiają się obrazy ciągu dalszego losów opisywanych postaci. Co do
          mnie, zdarza się, że daimonion szepcze mi w głębi głowy, co mam pisać
          dalej. Czasem jednak życie codzienne tak splecie się z realiami
          opisywanymi, że trudno mi rano ustalić, co uznać za sen naturalny, a
          co za formę stwarzanej ad hoc rzeczywistości.{" "}
        </p>
        <p className="h2_wstep">
          I tak na przykład zaraz po zarejestrowaniu owego listu do
          ministra-głupola, na prawach fizjologii świadomości znalazłem się w
          kasynie oficerskim w Przemyślu na ul. Grodzkiej 8 [gdzie teraz jest
          Biblioteka Publiczna im. Ignacego Krasickiego] przy stole z Tadeuszem
          Piekło oraz tymże Ignacym Krasickim. Wiedziałem, że oni obaj nie żyją,
          ale nie dziwiło mnie to. Tadeusz był za życia dziennikarzem wojskowym,
          dlatego jego pobyt w kasynie był dla mnie czymś naturalnym [w
          rzeczywistości to on za życia zaprosił mnie tam pierwszy raz, na
          wódkę, mógł to być 1966 r.], natomiast o biskupie pomyślałem, że na
          pewno zbiera w tej okolicy materiały do „Monachomachii”. Nazywałem się
          Roman Zając, ale czułem się tak, jakbym nazywał się normalnie, zaś
          naturę miałem też taką samą, bo w momencie aktualnym wygłaszałem
          proroctwo:{" "}
        </p>
        <p className="h2_wstep">
          – W tym lokalu nie będzie w przyszłości kasyna! – mówiłem z patosem. –
          Będzie tu biblioteka im. Ignacego Krasickiego! Wypijmy za niezgodę z
          historią!
        </p>
        <p className="h2_wstep">
          W tym momencie zrozumiałem, że mówię za głośno, bo jesteśmy na czyimś
          spotkaniu autorskim, a obok wódki na naszym stole stoi płonąca świeca.
          Jakoż i zaraz odezwał się dyrektor biblioteki, który powitał obecnych
          i głos przekazał pani Agacie P. Równocześnie w tym samym też momencie
          [trwającym już dłuższą chwilę] zrozumiałem, że znamy się wszyscy
          dobrze z dawnych epok. I ciągle w tym momencie doznałem znów
          zaskoczenia, bo oto p. Agata P. powiedziała:
        </p>
        <p className="h2_wstep">
          – Nie mieliśmy wpływu na dobór poetów tego metahistorycznego
          spotkania! Jak państwo wiecie, jesteśmy wszyscy odtworzeni tu na ten
          krótki czas, poza naszą percepcją minęły miliardy lat, nie wiemy kto
          dzierży nas w swojej pamięci lub może w jakiejś innej substancji! I
          może nigdy się tego nie dowiemy? Ale może się dowiemy, nie popadajmy w
          rozpacz, zwłaszcza że to wszystko było tak dawno! Dziś nasze spotkanie
          zaszczycili czterej panowie, niech im ziemia lekką będzie, niech też i
          nam ziemia lekką będzie! Roman Zając, Tadeusz Piekło, Ignacy Krasicki
          i Dante Alighieri wystąpią na tej wyspie czasoprzestrzeni, którą
          pozwoliłam sobie nazwać po swojemu, ale tym też się proszę nie
          turbować, gdyż każdy w tym kasynie może ją nazwać po swojemu, na pewno
          jeszcze piękniej niż ja!
        </p>
        <p className="h2_wstep">
          – Tu było kino „Kosmos”! – krzyknął ktoś z głębi sali, a wszyscy
          zachichotali.
        </p>
        <p className="h2_wstep">
          I tu p. Agata P. wskazała dłonią napis [może tę nową nazwę kina?],
          cytat przez ścianę biegnący, który z dawnych lat pamiętałem [ale
          wiersza pamiętać nie umiałem]:
        </p>
        <p className="h2_wstep_center">
          BOWIEM SEN JEST SZTUKĄ NAJBLIŻSZĄ ŚMIERCI{" "}
        </p>
        <p className="h2_wstep_right"> T. Piekło</p>
        <p className="h2_wstep_center">
          I równocześnie drugą dłonią pokazała przeciwległą ścianę, a na niej
          ten napis:
        </p>
        <p className="h2_wstep_center">
          <b>
            po schodkach <br></br> po zbawienie <br></br>ze schodków
          </b>
        </p>
        <p className="h2_wstep_center">
          <b>
            po schodkach <br></br> po zbawienie <br></br>ze schodków
          </b>
        </p>
        <p className="h2_wstep_center">
          <b>
            chmury i głuche okna <br></br>
            gałąź na nimi mokra
          </b>
        </p>
        <p className="h2_wstep_right">
          {" "}
          T. Piekło<sup>34</sup>
        </p>

        <p className="h2_wstep">
          Lecz oto sam Dante zgoła niespodziewanie zajął miejsce przy naszym
          stole. Przybysz, który wyglądał tak jak na swoich wizerunkach, bez
          słowa rozlał wódkę do czterech kieliszków i gestem zachęcił nas do
          wypicia bruderszaftu, do czego poderwaliśmy się energicznie. Ktoś
          podbiegł i usunął świeczkę, która mogła była przeszkodzić nam w piciu
          i pocałunkach. Stolik był kwadratowy, malutki, acz poręczny do takiej
          kwadrofonicznej ekwilibrystyki, która w końcu przekształciła się w
          małą szamotaninę. Podczas której, gdy usta Dantego znalazły się blisko
          mego ucha, usłyszałem ciche słowa: „Nie bój się, Piekło będzie chciał
          cię przestraszyć!”
        </p>
        <p className="h2_wstep">
          Zaraz po tym poproszono Dantego na mównicę, aby odczytał swój utwór [i
          choć nie powiedziano mi tego, sam wiedziałem, że ja mam czytać jako
          ostatni, ale że i tak do tego nie dojdzie, bo coś mi w tym
          przeszkodzi]; utwór ten zabrzmiał pięknie:{" "}
        </p>
        <p className="h2_wstep_center">
          <b>
            Gdyby istniała tylko jasność, ciemność byłaby plecami naszego umysłu{" "}
            <br></br>i żaden człowiek nie mógłby jej nigdy odkryć. <br></br>
            Być może człowiek nie mógłby wtedy nawet nazwać się człowiekiem.
          </b>
        </p>
        <p className="h2_wstep_center">
          <b>
            Bylibyśmy zatem jak mieszkańcy (to tylko porównanie) czarnej dziury,{" "}
            <br></br>w której nie pada żaden cień: a więc i zegarów by tam nie
            było. <br></br>
            Dlatego odkrycie czasu też nie byłoby wtedy możliwe.
          </b>
        </p>
        <p className="h2_wstep_center">
          <b>
            Ale gdyby człowiek (czyli ta inna istota) posiadał pierwiastek
            stwórczy, <br></br>
            jakim geniuszem musiałby być ten ktoś, kto wynalazłby iskrę mroku,{" "}
            <br></br>
            lampę naftową ciemności, przy której znikaliby wszyscy w jej
            pobliżu?
          </b>
        </p>
        <p className="h2_wstep_center">
          <b>
            Oto największa z tajemnic kosmosu! – słyszeć by się dało ich głosy,{" "}
            <br></br>
            ale widzieć ich, tych zniknionych (oczy tych nie–ludzi) by nie
            mogły. <br></br>
            Pojęcie zimna pojawiłoby się zaś automatycznie jako cud dodatkowy.
          </b>
        </p>
        <p className="h2_wstep_center">
          <b>
            Jest raczej pewne, że ścięto by głowę takiemu odkrywcy, <br></br>a
            jego filozofię nazwano diabelską, dowodząc, że umysł nie posiada
            <br></br>
            pleców, zaś czas jak stał, tak będzie zawsze stał, bo tylko droga
            jest
          </b>
        </p>
        <p className="h2_wstep_center">
          <b>
            ruchoma i nieskończona, zaś te oto kilometry tworzą wieczność, amen.{" "}
            <br></br>
            Chyba już nikt więcej nigdy by się nie ośmielił, <br></br>
            pocierać krzemień myśli o krzemień myśli we wnętrzu jasności
            wiekuistej.
          </b>
        </p>
        <p className="h2_wstep">
          Po wysłuchaniu utworu nagrodziliśmy wszyscy autora niezwykle
          rzęsistymi brawami, wznosząc okrzyki „Geniusz! Geniusz!” Chciałem
          zadać pewne pytanie natury teologicznej, ale pani Agata P. powiedziała
          krótko „Potem!” Domyślałem się, że to dlatego, że oto już Krasicki
          nerwowo gładził rękawki i brał drobne łyczki żytniej z kłoskiem,
          gotując się do swego występu. I gdy tylko Dante opuścił mównicę,
          Ignacy, już wstając, pochylił mi się do ucha i szepnął prędko:
        </p>
        <p className="h2_wstep">– To nie jest wiersz o tobie! Nie myśl tak!</p>
        <p className="h2_wstep">
          I już na mównicy puścił mi oczko, że mówił to poważnie [i zaraz
          przeczytał]:
        </p>
        <p className="h2_wstep_center">
          <b>
            Zajączek jeden młody<br></br>
            Korzystając z swobody<br></br>
            Pasł się trawką, ziółkami w polu i w ogrodzie<br></br>Z każdym w
            zgodzie. <br></br>A że był bardzo grzeczny, rozkoszny i miły,{" "}
            <br></br>
            Bardzo go inne zwierzęta lubiły. <br></br>I on też, używając
            wszystkiego z weselem, <br></br>
            Wszystkich był przyjacielem. <br></br>
            Raz gdy wyszedł w świtaniu i bujał po łące, <br></br>
            Słyszy przerażające<br></br>
            Głosy trąb, psów szczekania, trzask wielki po lesie. <br></br>
            Stanął… Słucha… Dziwuje się…<br></br>A gdy się coraz zbliżał ów
            hałas, wrzask srogi, <br></br>
            Zając w nogi. <br></br>
            Wspojźrzy się poza siebie; aż tu psy i strzelce! <br></br>
            Strwożon wielce, <br></br>
            Przecież wypadł na drogę, od psów się oddalił. <br></br>
            Spotkał konia, prosi go, iżby się użalił: <br></br>
            „Weź mnie na grzbiet i unieś!” <br></br>
            Koń na to: „Nie mogę, <br></br>
            Ale od innych będziesz miał pewną załogę”. <br></br>
            Jakoż wół się nadarzył. „Ratuj, przyjacielu!” <br></br>
            Wół na to: „Takich jak ja zapewne niewielu<br></br>
            Znajdziesz, ale poczekaj i ukryj się w trawie, <br></br>
            Jałowica mnie czeka, niedługo zabawię.
          </b>
        </p>
        <p className="h2_wstep">
          – Jałowica mnie czeka, niedługo zabawię! – powtórzył nagle za poetą
          jakiś spektator, zapominając chyba gdzie jest. Albo może nigdy jeszcze
          tej bajki nie słyszał? Nasza populacja ma w pogardzie poezję! Pani
          Agata P. pogroziła mu tylko palcem, bo co z takim gałganem zrobić? I
          po chwili Ignacy Krasicki znów recytował:
        </p>
        <p className="h2_wstep_center">
          <b>
            Jałowica mnie czeka, niedługo zabawię. <br></br>A tymczasem masz
            kozła, co ci dopomoże”. <br></br>
            Kozieł: „Żal mi cię, nieboże! <br></br>
            Ale ci grzbietu nie dam, twardy, nie dogodzi; <br></br>
            Oto wełniasta owca niedaleko chodzi, <br></br>
            Będzie ci miętko siedzieć”. Owca rzecze: <br></br>
            „Ja nie przeczę, <br></br>
            Ale choć cię uniosę pomiędzy manowce, <br></br>
            Psy dogonią i zjedzą zająca i owcę. <br></br>
            Udaj się do cielęcia, które się tu pasie”. –<br></br>
            „Jak ja ciebie mam wziąć na się, <br></br>
            Kiedy starsi nie wzięli?” – cielę na to rzekło; <br></br>I uciekło.{" "}
            <br></br>
            Gdy więc wszystkie sposoby ratunku upadły, <br></br>
            Wśród serdecznych przyjaciół psy zająca zjadły.
          </b>
        </p>
        <p className="h2_wstep">
          Gdy zaś autor „Przyjaciół” wrócił do stolika, spytałem:
        </p>
        <p className="h2_wstep">
          – Ignaś, nie lepiej tam użyć byka, gdzie wołu wspominasz o jałówce
          marzącym [dla ucha dzisiejszego dużo lepiej brzmiącym]?{" "}
        </p>
        <p className="h2_wstep">
          Lecz on z dziwnym wyrazem oblicza swojego patrzył się na mnie, jak na
          dziwaka jakiego. Wtedy pomyślałem, że razi go zdrobnienie i per Wasza
          Wielebność o toż zagadnienie zapytałem, dodając:
        </p>
        <p className="h2_wstep">– Przecież pilim brudzia!</p>
        <p className="h2_wstep">Ale on chyba pytań nie rozumiał wcale.</p>
        <p className="h2_wstep">
          – Romuś, czekaj! – rzekł krótko i k’mównicy dalej znów pobiegł, dając
          znak, że później rzecz wyjaśni. [Lecz wnet jak reszta odszedł kędy sny
          i baśnie].
        </p>
        <p className="h2_wstep">
          Bo tu nastąpiła zmiana w scenach mojego widzenia…
        </p>
        <p className="h2_wstep">
          PS [dopisek bez daty]: Czasem tak bywa, że sen się przypomina nagle
          jakiś czas później. Otóż właściwie może nie powinienem tego zapisywać,
          bo mogę się narazić władzom grodu Przemyśl, a i też nawet wrogom
          naszej sekty. Podczas tego drugiego wystąpienia z mównicy, Ignacy
          Krasicki wymienił z nazwiska wszystkich poetów grupy literackiej
          „Zniesienie” i nakazał niektóre ulice i place nazwać ich imionami. Na
          sali natychmiast podniósł się gwar, a najwięcej krytycznych głosów
          było w sprawie ul. Franciszkańskiej, dlaczego też i jej nazwa powinna
          być zmieniona. Poetę wręcz zakrzyczano, ale żadną miarą nie mogłem się
          wtrącić do dyskusji, bo to tak jakbym sam domagał się ulicy lub
          pomnika [jakiż obciach]! Wnioskodawca bronił się jak mógł, powtarzając
          raz po raz „Prawdziwa cnota krytyk się nie boi!”, ale obecni na
          imprezie byli nieustępliwi i ostatecznie p. Agata P. nakazała
          zakończyć ten wątek.
        </p>
        <p className="h2_wstep">
          [Co mi się przypomniało, to w skrócie tu zapisałem, przepraszam].
        </p>
        <h2 className="h1_wstep">25</h2>

        <p className="h2_wstep">
          Sam już nie wiem, co zrobić z tym wspomnieniem. Żałuję w ogóle, że
          zacząłem je spisywać 8 lat temu, a jeszcze bardziej, że tak łatwo
          uległem temu komplementowi „smakosza” [może nawet nasłanego przez
          frakcję Baydały Oszczecirskiego, bo w istnienie takiej od pewnego
          czasu wierzę]. Czasem myślę, że może powinienem jeszcze inaczej tę
          przygodę opisać, ale to całkiem inna sprawa, niepotrzebnie znów coś
          wywlekam!…
        </p>
        <p className="h2_wstep">
          Po włączeniu do niniejszego wspomnienia listu z fejsa w obronie
          młodych polskich naśladowców Onana miałem naprawdę sen o Tadeuszu
          Piekle, ale cała reszta była galimatiasem, z którego udało mi się
          wyciągnąć tylko niektóre wątki, muszę się przyznać do tego dla
          świętego spokoju. Tadeusz przyśnił mi się następnie jako olbrzym
          stojący rozkraczony po obu stronach rzeki San, głową sięgający wzgórza
          Zniesienie, owoż dawne kasyno mający trochę powyżej kolan, a zamek
          królewski w okolicach brzucha. Trzymał mnie na dłoni blisko swej
          twarzy, śmiał się ironicznie i mówił:
        </p>
        <p className="h2_wstep">
          – No, mów! Mów teraz! I czemu nic nie mówisz?{" "}
        </p>
        <p className="h2_wstep">
          – Ja… – powiedziałem, ale głos mi się łamał i bałem się, że spadnę do
          Sanu.
        </p>
        <p className="h2_wstep">
          – No mów! – rozeźlił się olbrzym. – Prorokuj teraz!{" "}
        </p>
        <p className="h2_wstep">
          Widziałem tę jego modną fryzurę na jeża, taką samą, jaką miał za
          życia. [Pracował w wojsku, choćby dlatego nie mógłby nosić wtedy
          włosów hipisa, jak ja]. W oczach jednak miał życzliwość, i to w niej
          tylko właśnie miałem teraz nadzieję. Mimo że co chwila groził mi swym
          ogromnym palcem tuż-tuż przed nosem.{" "}
        </p>
        <p className="h2_wstep">
          – Ale co mam prorokować? – pytałem, próbując zyskiwać na czasie.
        </p>
        <p className="h2_wstep">
          – To ty mnie się o to pytasz? – zaśmiał się Tadeusz Piekło głosem tak
          gromkim, jakby to jednak niebo grzmiało nad nami. – Prorokuj, proroku!
          No, na co czekasz?
        </p>
        <p className="h2_wstep">
          A gdy milczałem, zgrzytnął zębami, co wymusiło ze mnie patetyczny
          wrzask:
        </p>
        <p className="h2_wstep">
          – W niedalekiej!! przyszłości!! zostaną w Polsce!! wprowadzone
          obowiązkowo!! pasy cnoty!! dla wszystkich kobiet od 13 roku życia!!,
          zaś klucze do nich!! zostaną zdeponowane!! w siedzibach! rządzącej
          partii!!!{" "}
        </p>
        <p className="h2_wstep">
          Chciałem kontynuować proroctwo, bo nagle przestałem się bać, ale
          Tadeusz Piekło bardzo delikatnie postawił mnie przed wejściem do [w/w]
          kasyno-kino-biblioteki, zaś sam zniknął. Usłyszałem jeszcze tylko głos
          jakby komentatora, dochodzący skądś, który też brzmiał jak burza, ale
          mniejsza, przetaczająca się łagodnie nad Przemyślem:
        </p>
        <p className="h2_wstep">
          – Powiedział prorok, a przez tłum przeszedł dreszcz!
        </p>
        <p className="h2_wstep">
          Nie widziałem jednak tłumu, ani nie rozumiałem nawet kontekstu tego
          zdania.
        </p>
        <p className="h2_wstep">
          Lecz sen bynajmniej się i na tym nie skończył, bo już w następnym
          akcie świadomości byłem w momencie <i>immissio penis</i> z kpr.
          Weronicz, ku niezwykłemu swemu zdziwieniu nazywając się teraz
          Władysław Matuga, mający na sobie mundur kaprala wojska II
          Rzeczpospolitej Polskiej [we śnie zrozumiałem to na zasadzie{" "}
          <i>eo ipso</i>] i słyszący takie oto podniecone głosy co najmniej
          kilku mężczyzn:
        </p>
        <p className="h2_wstep">
          – Brawo, panie kapral!! I w popielnik!! I w te wilgoć!!{" "}
        </p>
        <p className="h2_wstep">
          Przez pół sekundy dziwiłem się niezmiernie, że Marysia jest jednak
          kapralem mężczyzną, ale już w następnym akcie świadomości zrozumiałem,
          że to przecież żołnierze z mojej własnej drużyny [poznałem was,
          żartowniki!] wykorzystują tak oto swe niedzielne przepustki, czyli
          śledzą mnie aż do teraz, i ze wstydu się obudziłem.
        </p>
        <h2 className="h1_wstep">26</h2>

        <p className="h2_wstep">
          Po obudzeniu się nie musiałem jednak wcale zastanawiać się, czemu
          przyśniłem się w środku powieści Mariana Pankowskiego „Matuga idzie”,
          bo ten moment [prawie taki sam] przeżyłem właśnie 8 lat temu w
          rzeczywistości tamtego bieszczadzkiego <i>immissio penis</i>.
          [Jakkolwiek nikt nie krzyczał wtedy „Brawo, panie kapral!”]. Otóż w
          ostatniej chwili [wówczas] przed naszym fizycznym zespoleniem się
          Marysia powiedziała coś o Sanoku. Dotyczyło to, mam wrażenie, jej
          jednostki wojskowej. Ja mieszkałem w młodości dwa lata w tym mieście i
          oprócz przygód, które tam przeżyłem, wspominałem często tamtejszego
          pisarza [który mieszkał wprawdzie za granicą, ale sanoczanie bardzo
          się nim chwalili, i ja też uwielbiałem jego prozę]; gdy więc
          usłyszałem w takim momencie „Sanok”, prychnąłem śmiechem, bo od razu
          przypomniała mi się ta słynna scena, gdy kapral Matuga kładzie się w
          parku na niewiastę w celu doznania rozkoszy, podczas gdy ja kładłem
          się w tym celu niedaleko od Sanoka na „kapralową” [zresztą dojdę do
          tego w opisie sytuacji].{" "}
        </p>
        <h2 className="h1_wstep">27</h2>

        <p className="h2_wstep">
          Były czasy, że próbowałem napisać polską wersję „Boskiej Komedii” [„Bo
          nigdy dość się nie umiera”], a za przykład pobytu w Piekle wziąłem
          Polkę [wychowaną we wstręcie do seksu, do czego jak wiadomo dążą też
          dzisiejsze polskie szkoły], znaną wszystkim arystokratkę z wiersza
          Adama Mickiewicza:
        </p>
        <p className="h2_wstep_center">
          <b>
            Zbrodnia to niesłychana, <br></br>
            Pani zabija pana; <br></br>
            Zabiwszy grzebie w gaju, <br></br>
            Na łączce przy ruczaju, <br></br>
            Grób liliją zasiewa, <br></br>
            Zasiewając tak śpiewa: <br></br>
            „Rośnij kwiecie wysoko, <br></br>
            Jak pan leży głęboko; <br></br>
            Jak pan leży głęboko, <br></br>
            Tak ty rośnij wysoko.”
          </b>
        </p>
        <p className="h2_wstep">
          Piekło [to] umieściłem koło Wielkiej Pustki, we wnętrzu kuli z ołowiu
          o ścianach grubości ćwierci parseka [nawet neutrino nie może
          przelecieć przez taką zaporę]; z litości nad ludzkością ustaliłem
          pobyt [tam] na jedną tylko wieczność<sup>35</sup>. Utwór pisałem pod
          wpływem własnych wizji, wyjaśniłem to we wstępie [ubolewając nad niską
          jakością nauk o życiu zagrobowym [oto urywek wstępu]]:
        </p>
        <p className="h2_wstep">
          <b>
            Poniższy początek […] jest wstępem do wątku piekielnego, mającego
            wartość raczej tylko ludyczną, nie zaś pedagogiczną, bo przecież w
            piekło dziś mało kto wierzy. Ale gdyby jednak jakaś bardzo wysoka
            cywilizacja kosmiczna zapanowała nad ciałem i psychiką człowieka tak
            integralnie, że miałaby władzę także nad naszymi karmanami [osadami
            karmicznymi naszych czynów, decydujących o dalszych naszych losach
            reinkarnacyjnych], to mogliby oni więzić nasze „ja” po śmierci i
            utrudniać nam drogę do pełnego wyzwolenia. Teoretycznie jest nawet
            możliwe, że każdemu z nas mogą oni stworzyć osobne piekło, w którym
            każdy może być królem, pełne sztucznych fantomów, których człowiek
            nie wykształcony duchowo nie odróżni od rzeczywistych bytów
            pośmiertnych, czym sam sobie tylko zaszkodzi. Proszę się jednak tak
            bardzo nie bać, tylko wstąpić na ścieżkę poznawania samego siebie,
            zaś te moje wizje uznać za literackie bajdurzenie [w tym konkretnym
            piekle królem jest Dante Alighieri].
          </b>
        </p>
        <h2 className="h1_wstep">28</h2>
        <p className="h2_wstep_center">
          <b>Montrouge, 10 XI 2022 (z dziennika)</b>
          <br></br> (zapis ogłoszony na Facebooku dnia j.w.)
        </p>
        <p className="h2_wstep">
          Chciałem dziś zrobić przypis<sup>37</sup> [do opowiadania, które
          aktualnie piszę] o Adamie Mickiewiczu, ale z myślą o czytelniku
          francuskim, bo pewien mój młody przyjaciel chce rzecz tę przełożyć na
          język tubylców. W opowiadaniu wspominam o naszym wieszczu kilkakrotnie
          [m.in. gdy moi bohaterowie naśladują incydent poszukiwania mrówek w
          zakamarkach swoich ciał na wycieczce do lasu], ale ponieważ rano wpadł
          mi w ręce artykulik na ten temat z bardzo starej gazety, pomyślałem,
          żeby pochwalić się także [tymi] mało znanymi związkami Mickiewicza z
          moim rodzinnym miastem.{" "}
        </p>
        <p className="h2_wstep_center">
          <b>ODSŁONIĘCIE POMNIKA ADAMA MICKIEWICZA</b>
        </p>

        <p className="h2_wstep">
          <b>
            We czwartek dnia 26, b.m. o godzinie 11 przed południem odbyła się
            uroczystość odsłonięcia pomnika Adama, po solennem nabożeństwie,
            odprawionym w katedrze r.k. Obaj biskupi, burmistrz, członkowie
            komitetu, przedstawiciele stowarzyszeń przemysłowych, „Sokół” i
            „Gwiazda” ze sztandarem ruszyli po nabożeństwie z kościoła ku
            skwerowi przy ul. Mostowej, gdzie pomnik został ustawiony. Służbę
            porządkową utrzymywała straż ochotnicza pożarna.
          </b>
        </p>
        <p className="h2_wstep">
          <b>
            Pomnik nakryty okalało 5 masztów, z których zwieszały się flagi. Na
            masztach widniały herby Przemyśla i ziemi przemyskiej; orła
            polskiego szukaliśmy daremnie. Na trybunach ustawiono kilkadziesiąt
            krzeseł. Po przemówieniu p. burmistrza Dra Aleksandra Dworskiego,
            zdjęto osłonę z posąga a chór Towarzystwa muzycznego, pod
            kierownictwem dyrektora artyst. p. L. Dietza, wykonał znakomicie
            piękną kantatę ułożoną przez tegoż na tę uroczystość, która opiewa:
          </b>
        </p>
        <p className="h2_wstep_center">
          <b>
            Nieśmiertelny mistrzu słowa, <br></br>
            Chlubo, dumo całej Polski! <br></br>
            Świat Ci wierną pamięć chowa, <br></br>
            Wielbiąc, wieszczu, dar Twój boski!
          </b>
        </p>
        <p className="h2_wstep_center">
          <b>
            Dziś Twa pieśń już zagościła<br></br>I do zamku i do chatki,{" "}
            <br></br>
            By tam w sercach roznieciła<br></br>
            Miłość do Ojczyzny Matki.
          </b>
        </p>
        <p className="h2_wstep_center">
          <b>
            Tyś nam prorok z ponadziemia, <br></br>
            Tyś nam kapłan u ołtarza, <br></br>
            Wielkość Twoja świat oniemia, <br></br>
            Pieśń Twa – bohaterów stwarza.
          </b>
        </p>
        <p className="h2_wstep_center">
          <b>
            Gdy się spełnią sny Twe wieszcze, <br></br>
            Gdy doświadczeń czas ustanie, <br></br>
            Pękną więzy niewolnicze, <br></br>A Ojczyzna – zmartwychwstanie!
          </b>
        </p>

        <p className="h2_wstep">
          <b>
            Następnie chór „Sokoła” pod batutą p. Cyrbesa odśpiewał z przejęciem
            się hymn F. Mendelssohna-Bartholdy’ego, poczem p. K. Pepłowski
            odczytał telegramy nadeszłe od komitetu budowy pomnika Mickiewicza w
            Krakowie, od Czytelni akademickiej tamże i od Wydziału czytelni
            akademickiej we Lwowie. Uroczystość zakończył chór „Sokoła”
            odśpiewaniem chorału „Z dymem pożarów”.
          </b>
        </p>
        <p className="h2_wstep_center">
          <b>
            <i>Gazeta Przemyska</i>, nr 96 z dnia 29 listopada 1891 r.
          </b>
        </p>
        <p className="h2_wstep">
          Dla lubiących koincydencje i synchroniczności dodam, że nazwisko
          Ducasse [ów arystokrata, który odsądził Mickiewicza od czci i wiary]
          czyta się po francusku tak samo, jak po polsku nazwisko Dykas! A po
          drugie: cały dzień chodził dziś za mną Arthur Rimbaud [czy to dlatego,
          że [to] opowiadanie jest wariacją na tematy dantejskie, niezależnie
          tak samo jak „Sezon w Piekle”?], ale gdy jednak zaglądnąłem do
          Encyklopedii Alpha [rok wyd. 1974, tom 13, str. 5121], okazało się, że
          chyba znów odebrałem informację z innych wymiarów, bo dziś jest akurat
          131 rocznica jego śmierci [10 XI 1891 r.]. [Przepraszam, ale to jednak
          była Wikipedia]!*<br></br>* „Encyklopedia Alpha” jest piękna i
          solidna, ale pewnych szczegółów w niej brak! rl
        </p>
        <h2 className="h1_wstep">29</h2>
        <p className="h2_wstep_center">
          I po wspomnieniu różnych piekieł tylu, <br></br>
          wracam do chwili, gdym z Panną Weronicz<br></br>
          leżał pod niebem bieszczadzkiego raju,
        </p>
        <p className="h2_wstep_center">
          ani przez chwilę nie myśląc, że może<br></br>
          mulatka owa ugryźć mnie w mózg ducha! <br></br>
          Ugryźć w mózg ducha! Nie, nie bredzę teraz!
        </p>
        <p className="h2_wstep_center">[ocenzur. Inst. Heg. Czł.]</p>
        <p className="h2_wstep_center">
          Nie zapomniałem, że to stamtąd Fredro<sup>38</sup> <br></br>
          pochodził, który Mickiewicza dzieło<br></br>
          poprawił, nową dodając mu księgę!
        </p>
        <p className="h2_wstep_center">
          A gdym jej księgę tę jął recytować<br></br>
          [bo znam na pamięć], moja czarna dziewa<br></br>
          nagle z munduru cała się rozdziewa!
        </p>
        <p className="h2_wstep_center">
          Uśmiechem płonie jej anielskie liczko! <br></br>
          Któż nie zachwyciłby się taką piczką? <br></br>
          [ocenzur. Inst. Heg. Czł.]
        </p>
        <h2 className="h1_wstep">30</h2>

        <p className="h2_wstep">
          „Co jednakie jest w łóżku albo na tapczanie!”<sup>39</sup> – dodam tu
          za poetą, i na tym jednak zakończę… Wybacz, drogi P.T. Czytelniku, ale
          rezygnuję z opisu <i>coitus</i>, który obiecałem, zaś powody tego
          okryję tajemnicą. Powiem tylko, że chciałem zacząć [ten rozdział] od
          słów: „I wtedy my w ślinę!” [bo tak się w Przemyślu mówiło, gdy miałem
          15 lat, a ktoś opowiadał o swojej randce], co znaczyło, że zaczęliśmy
          się całować! O, te grube murzyńskie wargi, nigdy ich nie zapomnę! Cóż
          powiem więcej? Pamiętam, że w tych pierwszych sekundach fazy wstępnej
          gry miłosnej, gdy już dłoń trzymałem na jej pulchnym pagórku łonowym,
          pięknie wygolonym, parsknąłem śmiechem, zgoła bezsensownym, bo
          przypomniałem sobie [w takim momencie!] okrzyki żołnierzy
          podglądających kaprala Matugę, swego dowódcę, gdy kładł się on na
          pewnej niewieście, tak samo jak ja w celu doznania wyższego stanu
          świadomości:{" "}
        </p>
        <p className="h2_wstep">
          – „Brawo, panie kapral! I w popielnik! I w te wilgoć!”
        </p>
        <p className="h2_wstep">
          Przez pół sekundy przeżywałem tę głupią myśl, że to ja jestem Matugą,
          a kpr. Weronicz tamtą kobietą, której tożsamość [nazwisko, parametry
          cielesne itp.] oto w ten dziwny sposób poznaję. Sądziłem, że Maria
          Magdalena nie zwróciła uwagi na moje parsknięcie, bo w tym momencie
          zrywała ze mnie odzież, nie bacząc na guziki koszuli, ale tuż przed
          wzięciem do buzi jednej z części mego ciała szepnęła gorąco:
        </p>
        <p className="h2_wstep">– Czemu się śmiejesz, łobuzie paryski?</p>
        <p className="h2_wstep">
          – Potem ci powiem! – zapewniłem ją i zamierzałem to potem zrobić,
          czyli powiedzieć całą prawdę, bo przecież nic w tym nie widziałem
          niestosownego, że jej piczkę nazwałem w myśli wilgocią! Zaraz też
          przekonałem się, że wilgoć owa ma też całkiem miły smak i zapach, gdy
          pod wpływem mego języka jej wargi sromowe rozchyliły się tak pięknie,
          jakby wg podręcznika seksuologii [nastąpił rozziew, czyli hiatus]. Ale
          cały czas czułem też ten uszlachetniony kwas mrówkowy.
        </p>
        <p className="h2_wstep">
          Po pierwszym orgazmie, podczas którego ona wyła wręcz nieludzkim
          głosem, nastąpił rychło następny, a potem i trzeci, i dopiero wtedy
          zrobiliśmy antrakt, bo już pierwszy głód seksualny zaspokoiliśmy.
          Leżąc na plecach i patrząc w gwiazdy, zastanawiałem się, czy pociągnąć
          dalej ten wcześniejszy temat science fiction, atoli uznałem to za
          dziecinadę. Chciałem zażartować, że pewnie wszystkie mrówki wkoło leżą
          w trawach nieprzytomne, ale to ona sama zaczęła, jakby czytając moje
          myśli:
        </p>
        <p className="h2_wstep">
          – Muszę ci wyznać, że zawsze mam przy sobie lekarstwo, które działa na
          około sto metrów średnicy, które chroni mrówki przed utratą
          przytomności!
        </p>
        <p className="h2_wstep">
          – To wspaniale! – ucieszyłem się szczerze, bo pomyślałem, że jeśli
          nawet to żart, to wiadomość jest optymistyczna. – Nie będę miał
          wyrzutów sumienia!
        </p>
        <p className="h2_wstep">
          Marysia westchnęła i chwilę milczała. A potem rzekła z wielkim
          smutkiem:
        </p>
        <p className="h2_wstep">
          – Problem jest w tym, że zwykle mam z sobą tylko trzy dozy, a jedną
          już zużyłam. To jest w aerozolu. Skąd mogłam wiedzieć, że cię dziś
          spotkam? Niestety, lekarstwo działa krótko – tu zawiesiła głos – a do
          rana jeszcze daleko, niestety…
        </p>
        <p className="h2_wstep">
          Przeraziłem się nie na żarty, bo odczuwałem jej osobowość jako
          niezwykle pryncypialną i w sprawach zasadniczych nieustępliwą.
          Zapytałem więc, czy znaczy to, że nie będziemy mogli do samego rana
          cieszyć się nie tylko naszymi duchami, ale i ciałami itd. Na co
          Marysia Magdalenka [też ze smutkiem] odrzekła:
        </p>
        <p className="h2_wstep">
          – Romuś, kochany! Te dwie dozy wystarczą nam do czasu przybycia
          karetki z Sanoka, ale wiąże się to z ogromnym niebezpieczeństwem!
          Lekarstwo działa też na ludzi, oddychamy też tym samym powietrzem, a
          wzięcie trzeciej dawki w tak krótkim czasie tej samej nocy może
          skutkować utratą przytomności! Oto, czego się boję: że pielęgniarze
          znajdą nas tu, gdy będziemy złączeni cieleśnie przez sen, to możliwe,
          wyobraź sobie!
        </p>
        <p className="h2_wstep">
          Zrozumiałem łatwo, co to może znaczyć dla pracownika na etacie, który
          chroni mrówki przed utratą świadomości, a sam zostaje odnaleziony w
          stanie snu, do którego doprowadził się z własnej winy. Było jasne, że
          będziemy musieli zastosować celibat na godziny nadranne. Powiem jednak
          od razu, że nie udało się nam to, bo po następnych kilku orgazmach tak
          zasmakowaliśmy w jednym ze sposobów tantrycznych przedłużonego
          stosunku, że zostaliśmy połączeni cieleśnie około trzy godziny, a
          następnie usnęliśmy na następne trzy, a potem zrobiło się nagle rano.
        </p>
        <p className="h2_wstep">
          Zapomniałem w ogóle napisać, że podczas pierwszej ejakulacji [i potem
          przy każdej następnej] odczułem coś, czego nigdy w życiu dotąd nie
          odczuwałem: część najgłębsza pochwy Marysi skurczyła się nagle,
          uciskając żołądź penisa aż do bólu, a właściwie spotęgowanej rozkoszy,
          która w tym momencie graniczyła z utratą rozumu. Za pierwszym razem
          towarzyszyło temu piekielne przerażenie, jakby w pochwie Marysi
          znajdowało się jakieś zwierzę typu wąż, które chciało mnie połknąć od
          tej strony, i czułem też nagłe podciśnienie i ucieczkę nasienia w
          trybie przyśpieszonym. Marysia wyła wtedy: „Zapłodnij mnie! O,
          zapłodnij mnie!” Gdy potem zapytałem ją o to wrażenie podciśnienia,
          moja ukochana uspokoiła mnie wyjaśnieniem, że użyła dogońskiego
          sposobu gimnastyki mięśni pochwy, zwiększającego możliwość zostania
          matką. Teraz jednak podejrzewam czasem, że miała ona w swej pochwie
          jakieś urządzenie, które gromadziło moją spermę w innym celu [to
          dlatego roiłem potem, żeby sprawdzić, czy na mchu nie została jej
          resztka, czy może handlują nią już w okolicy Wielkiej Pustki].
        </p>
        <h2 className="h1_wstep">31</h2>

        <p className="h2_wstep">
          Po cóż mi ta mądrość, jak powstały religie, Augusta Comte’a albo
          Durkheima? To według nich tak powstały! Dopóki człowiek sam nie
          zrozumie jak, może wiedzieć tylko to, co o tym myślą inni. Ćwir na
          górze, ćwir na czerwonej górze, ćwir, ćwir. Przecież nie powiedziałem,
          że to Baydała Oszczecirski był Marią Magdaleną. Baydała Oszczecirski
          powiedział: „Ty masz jakieś aspiracje pierdolić się z kosmitkami!” Ale
          Marysia powiedziała, że kontakty między sobą nawiązują tylko takie
          cywilizacje, które opanowały śmierć. Dopiero one mają wspólny cel:
          szukają odpowiedzi, czy istnieje Bóg. Mrówki mają własny sposób:
          starają się utrzymywać świadomość na poziomie stanu miodowego [do tego
          używają człowieka]. Pasożytują na nas, ale musimy im to wybaczyć, bo
          robią to także dla nas. Ale i człowiek może wykorzystać rozkosz w tym
          celu [żeby opanować śmierć i dołączyć do mrówek [i nie tylko mrówek,
          bo i miliardów cywilizacji, które tym się zajmują]]: z dobrowolnie
          oddanej części własnej energii orgazmicznej będzie można zbudować boga
          chowu ziemskiego i przy jego pomocy dołączyć do unii cywilizacji
          opanowujących śmierć, a następnie też [wspólnie] poszukiwać Stwórcę.
          Jako zdarzenie osobnicze rozkosz orgazmiczna nie ma żadnej wartości
          [nie tworzy się stos karmana z rozkoszy], pod tym względem służy tylko
          do kontynuacji życia biologicznego. Jednak obecnie będzie można zacząć
          rozkosz wykorzystywać do celów wyższych, czyli do stworzenia nie tylko
          nowych ludzi, ale [także] bogów. A takich operacji można dokonywać
          tylko w stanie permanentnie wyższej świadomości, haj powinien trwać
          dniami i nocami, ba, całymi latami bez przerwy. Dopiero wtedy budzą
          się w człowieku wyższe myśli. Proszę jednak nie traktować moich słów
          jako kazania czarnodziurskiego, są to tylko informacje na marginesie
          mego wspomnienia z okolic Ustrzyk Górnych.
        </p>
        <p className="h2_wstep">
          Postanowiłem jednak opis tego zdarzenia definitywnie zakończyć, bo po
          prostu mam tego dość [czasem przecież tak bywa, że człowiek nie jest
          zadowolony z własnej roboty]. Ostatecznie stało się tak, jak Marysia
          przewidziała przed naszym obudzeniem się o poranku. To ona [a nie ja!
          co podkreślam!] zadecydowała, że użyje trzeciej działki lekarstwa.
          Rozpyliła aerozol, i gdy tylko „wpadliśmy w ślinę”, coś złego zaczęło
          się dziać z moją świadomością. Mam dziury czasowe: raz oto jestem w
          pozycji na misjonarza, to znów widzę jej piersi nade mną. Nie wiem,
          ile to mogło trwać, ale na pewno ostatnim widokiem [przed zobaczeniem
          nad sobą pielęgniarzy z sanockiego szpitala, zawiadomionych przez
          turystów, którzy mnie znaleźli około południa] było to, jak Marysia
          się rozpada. Rozpada się na czarne okruchy. Okruchy wydające szelest.
          Czułem też intensywny i wysublimowany zapach kwasu mrówkowego. Znów
          zapadłem w dziurę czasową i znów się ocknąłem, ale dopiero za którymś
          razem uświadomiłem sobie, że te czarne okruchy to są mrówki. Mrówki
          bardzo powoli poruszające się, jakby pijane albo zapadające w sen. I
          rozłażące się we wszystkie strony. Zdążyłem jeszcze tylko pomyśleć
          absurdalnie: „Nie była złożona z atomów, tylko z mrówek!” Z
          przerażenia traciłem przytomność i odzyskiwałem ją znów, aż wreszcie
          całkiem ją straciłem.
        </p>
        <p className="h2_wstep_right"> Montrouge, 8 XII 2022</p>
        <h2 className="h1_wstep">OD AUTORA</h2>

        <p className="h2_wstep">
          Bardzo niezręcznie mi wyznać, że mimo podpisania się pod tym
          wspomnieniem własnym nazwiskiem, nie tylko nie przeżyłem większości
          tych przygód, lecz też je częściowo upiększyłem (z powodów tzw.
          artystycznych). Nigdy bym się jednak do tego nie przyznał, gdyby nie
          fakt, że postanowiłem podarować [to] opowiadanie pewnej młodej parze
          jako prezent ślubny, a bez takiego zapewnienia mogłoby ono wzbudzić
          [ogólne] zażenowanie lub podobne uczucia (tak pomyślałem ze strachem).
        </p>
        <hr className="hr_line"></hr>
        <p className="h2_wstep">
          Ale nie chodzi tu tylko o ten ewentualny niedoszły wstyd! Muszę też
          zdradzić pewien fakt, który aż się prosi, żeby nazwać go epilogiem (a
          jeśli nawet go ukryję, będzie mnie to męczyć znów przez całe lata): że
          atmosfera tych wyżej opisanych przeze mnie zdarzeń wydostała się poza
          swą rzeczywistość słowną, a jej metaforyczna ręka chwyciła mnie za
          gardło! [A choć jest to ręka atmosfery, to jednak dusi]! ALBO MOŻE
          BOSKA KOMEDIA TRWA BEZ PRZERWY. [Otóż]: wspomniani młodzi ludzie
          pochodzą z Przemyśla, ale mieszkają w Warszawie. Dedykując im ten
          utwór, nie miałem pojęcia, że zamierzają oni wziąć ślub w Przemyślu.
          Zaskoczyli mnie tym miło [choć wcale nie wiedzieli wtedy o czym jest
          to moje opowiadanie], tym bardziej, że i ja złożyłem kiedyś podobny
          ślub w tym samym mieście! Adres Urzędu Stanu Cywilnego pamiętałem
          dobrze [obok pomnika Mickiewicza] i byłem ciekawy, czy Sala Ślubów
          wyglada teraz tak samo. Ale właśnie o tym najważniejszym wątku
          komediowym dowiedziałem się dopiero wtedy, gdy otrzymałem zaproszenie
          na uroczystość Podpisania Aktu Małżeństwa.
        </p>
        <p className="h2_wstep">
          Obecnie śluby bierze się w Przemyślu pod adresem: ul. Grodzka 8 – w
          tym samym budynku, gdzie ongi było kasyno wojskowe, potem kino
          „Kosmos”, a teraz Biblioteka im. Ignacego Krasickiego, której
          najpiękniejszą salą jest Sala Ślubów!
        </p>
        <p className="h2_wstep">
          Nikt nie wierzy, że tego nie zmyśliłem! Ludzie już nie chcą wierzyć w
          prawdę!{" "}
        </p>
        <p className="h2_wstep_right">R.L.</p>

        <img className="img_text" src={grabowski4}></img>
        <h2 className="h2_podpis_img">
          Okolica Pałacu Ślubów, ogólnie mówiąc, bo w Przemyślu wszędzie blisko…
          Rys. Wojciech Grabowski.
        </h2>
      </div>

      <div className="content_wstep">
        <h2 className="h1_wstep">PRZYPISY WŁASNE</h2>

        <p className="h2_non_justify ">
          [1] Drugą zamierzałem wypić z mieszkańcami sioła Krywe, w którym
          spędziłem ongi pół roku, trudniąc się wyrobnictwem mioteł brzozowych
          (we wsi tej są ruiny cerkwi, w której popełnił samobójstwo główny
          bohater innej mojej niedokończonej powieści o tej nazwie co wieś
          [„Krywe”]). Jakkolwiek jednak stało się inaczej, to muszę tu dodać dla
          ogólnego obrazu, że trzecią miałem w planie opróżnić w połowie u
          źródła Sanu, zaś tę druga połowę butelki wlać do [tej] rzeki, a
          następnie napełnić nią tę pustą butelkę [wodą Sanu], którą wlałbym [po
          powrocie do Paryża] do Sekwany (po francusku Seine – czytaj: sen).
          Symboliczność tego gestu i podobieństwo dźwięków nazw obu rzek miało
          mieć znaczenie magiczne w [mojej prywatnej] jednoosobowej religii.
          (przyp. wł. – rl); <br></br>
          [2] Wzgórze w Krakowie, na którym wznosi się zamek królów Polski,
          widoczne jakoby ze szczytu Tarnicy. Ja nie miałem szczęścia zobaczyć
          stamtąd Wawelu, a nawet pomyślałem złośliwie, że być może było to
          możliwe w czasach, gdy ludzie wierzyli, że Ziemia jest płaska.{" "}
          <br></br>5 lipca 1954 r. przebywał na szczycie Tarnicy przyszły
          święty, ks. Karol Wojtyła, ale nie wiadomo mi, czy wspominał on o tej
          turystycznej ciekawostce [bo świętemu może bym uwierzył]!… (przyp. wł.
          – rl); <br></br>
          [3] Członkowie sekty czarnodziurskiej kontaktują się z sobą myślami
          (oraz, jeśli potrafią, emocjami) codziennie około południa, co
          sprawiło, że nazywa się ich czasem także „południarzami”. (przyp. wł.
          – rl); [4] Jalu Kurek (1904-1983) [pseudonim: Jan Skowron]. „Gwiazda
          spada”, Iskry, 1959 (przyp. wł. – rl); <br></br>
          [5] Op. cit. (przyp. wł. – rl); <br></br>
          [6] Z różnych powodów utajniam niekiedy własne teksty, tym razem jest
          to uszkodzenie mechaniczne rękopisu; <br></br>
          [7] W ogóle nie rozumiem, dlaczego ktoś nie wymyślił małych
          przenośnych elektrowni wodnych lub wiatrowych, które idący w góry
          mógłby zabrać z sobą i zainstalować nad potokiem lub na pagórku, aby
          móc utrzymywać sprawność swych [fragment nieczytelny]!; <br></br>
          [8] Nie rozumiem też, dlaczego [pisząc to wspomnienie] ukrywałem fakt,
          że wyprawa moja miała na celu przede wszystkim uczczenie 60 rocznicy
          ery czarnodziurskiej, której [symboliczną] datą powstania jest 28
          sierpnia 1954 roku [!]. Z sioła Krywe miałem w tzw. międzyczasie
          zrobić wycieczkę do źródeł Sanu (przyp. wł. – rl); <br></br>
          [9] Była to myśl odruchowa. Wielokrotnie w życiu przypominała mi się
          [podobna] sytuacja, jaka miała miejsce w Bieszczadach w latach
          siedemdziesiątych XX wieku. Żołnierz Wojsk Ochrony Pogranicza
          zdezerterował z bronią z tamtejszej jednostki, aby przez
          Czechosłowację uciec do Austrii. W górach natknął się na parę młodych
          turystów, z którymi wymienił parę grzecznych słów, jako żołnierz
          strzegący granicy. Przy pożegnaniu znienacka zastrzelił ich oboje,
          tłumacząc potem, że mogliby posłużyć za świadków, że był on w tej
          okolicy. (przyp. wł. – rl); <br></br>
          [10] Cudzoziemcze, gdybyś kiedyś czytał niniejsze słowa, wybacz mi te
          dłużyzny, w których usiłuję zdać relację z mojej przygody. Ale chyba
          naprawdę musiałbyś być Polakiem, żeby ten komediowy niuans o podłożu
          rasowym mógł cię rozśmieszyć! (Pisząc o tym teraz, w dalszym ciągu nie
          mam jasności, jak z tą sprawą naprawdę jest [ze służbą czarnoskórych w
          polskim wojsku, bo z czym?], ale dla samej opowieści jest to rzecz
          marginalna). (przyp. wł. – rl); <br></br>
          [11] Citoyen de la Republique Francaise! Quelle surprise! (fr.) –
          Obywatel Republiki Francuskiej! Jaka niespodzianka! (przyp. wł. – rl);{" "}
          <br></br>
          [12] Comme vous voyez, monsieur! (fr.) – Jak pan widzi! (przyp. wł. –
          rl); <br></br>
          [13] Vous êtes parisien! Merveilleusement! (fr.) – Pan jest
          paryżaninem! Cudownie!; <br></br>
          [14] Je suis voyant comme mon père! (fr.) – Jestem jasnowidzący, jak
          mój ojciec!; <br></br>
          [15] Je suis peintre! Mais, moi, je suis peintre en bâtiment! (fr.) –
          Jestem malarzem! Ale ja jestem malarzem budowlanym! (przyp. wł. – rl);{" "}
          <br></br>
          [16]
          <i>
            Efektywna złożoność wszechświata to długość zwięzłego opisu jego
            regularności. Podstawowe prawa dają niewielki wkład do efektywnej
            złożoności, podobnie jak do algorytmicznej zawartości informacyjnej.
            Cała reszta pochodzi od licznych regularności wynikających z
            „zamrożonych przypadków”. Są to zdarzenia losowe, które mają liczne,
            dalekosiężne konsekwencje, połączone wspólnym pochodzeniem
          </i>
          . Murray Gell–Man, „Kwark i jaguar”, Wyd. CIS, 1996 (przyp. wł. – rl);{" "}
          <br></br>
          [17] Trudno mi już teraz [kilka dni po napisaniu tych słów]
          powiedzieć, o jakich saltach myślałem. W ogóle już dawno zauważyłem,
          że co innego coś przeżyć, a co innego to coś opisywać. W dodatku to,
          co się przeżyło zmienia się pod wpływem opisywania i jeśli już opisze
          się to coś, ma się wrażenie, że za słowami znajduje się jakieś inne
          wydarzenie niż to, które istnieje we wspomnieniu. Jeśli opisze się to
          samo jeszcze raz, wtedy można stracić rozeznanie, które zdarzenie
          opisane jest bliższe prawdy, aż wreszcie można popaść w zupełną
          rozpacz i zwątpić, czy przekazanie jakiejś prawdy indywidualnego
          przeżycia jest w ogóle możliwe. Pewnie niejeden teoretyk teorii
          literatury załamuje ręce, czytając te moje dywagacje, a niektórzy może
          mi radzą, żebym przeczytał powieść „Absalomie, Absalomie…” Williama
          Faulknera, w której to samo wydarzenie przedstawione jest z około stu
          różnych punktów widzenia, ale z góry dziękuję za podobne mądrości na
          temat narracji, jako że w tym przypadku są one jednak już zbyt
          przestarzałe i nie ułatwiają mi zadania bardziej niż znajomość owej
          maksymy Horacego [65-8 rok p.n.e.]:{" "}
          <i>O tobie ta bajka mówi, choć pod zmienionym imieniem</i>. (przyp.
          wł. – rl); <br></br>
          [18] „Kundalini kobiece” to określenie ognia psychicznego, odczuwanego
          bezpośrednio przez mężczyznę, gdy kobieta jest seksualnie podniecona.
          Termin pochodzi z terenu myśli wschodniej, ale problem jest
          ogólnoludzki i najwyższy czas nazwać go jakoś po europejsku!
          Wychowanie seksualne w Polsce woła o pomstę do nieba! (przyp. wł. –
          rl); <br></br>
          [19] Od postawienia tego wykrzyknika minęło znów parę dni. Im bliżej
          jestem końca opisywanych zdarzeń, tym gorzej mi się pisze. Może to
          dlatego, że opowiedziałem paru osobom tę moją przygodę, a niektóre z
          nich nastawiły się nagle do mnie wrogo? Większość moich paryskich
          znajomych z jakichś powodów w ogóle nie wierzy, że wyjeżdżałem do
          Polski, a zwłaszcza w to, że mógłbym wrócić stamtąd tak prędko. W
          istocie: nie odwiedziłem w Polsce nikogo z tamtejszych moich
          przyjaciół, choć przecież miałem taki zamiar, ale jednak wspomniana
          wcześniej rocznica sprawiła, że musiałem zaplanować ściśle określoną
          kolejność zdarzeń. [A potem było już za późno]. <br></br>
          Innym problemem związanym z opisywaniem niniejszego wspomnienia jest
          język, jaki zastosowałem, który mierzi mnie swoją sztucznością i
          staroświecką napuszonością, jestem nim zwyczajnie zawstydzony. Już nie
          pamiętam, kiedy ostatnio takie dziwolągi zdaniowe układałem, mogą one
          przecież tylko zniechęcić normalnego człowieka do lektury. Nie chcę,
          oczywiście, powiedzieć, że spodziewałem się, że czytają mnie tylko i
          wyłącznie wariaci, choć na pewno i takich jest wielu wśród
          użytkowników FB*, ale gdyby ten statystycznie normalny P.T. Czytelnik
          miał zrezygnować ze śledzenia moich losów, nie mogąc znieść [użytych
          tu] manier stylistycznych, chyba dostałbym załamki…<br></br>
          Nie będę jednak wprowadzał tu żadnych poprawek, obiecałem sobie, że
          nie będę pisał tego wspomnienia dwa razy, bo mam już dość tych
          ciągłych zapewnień, że to jest [to] prawda! <br></br>
          Zresztą, rzecz zbliża się do końca, będę się streszczał! (przyp. wł. –
          rl). * FB – to fejs [czyli Facebook ]wyjaśniam na wypadek bycia
          czytanym za sto lat]]!;<br></br>
          [20] Joseph Cambray, „Synchroniczność (o naturze i psyche we
          wszechświecie wzajemnych połączeń)”, Instytut Terapii Integralnej
          Sławomira Kwiatkowska, Katowice 2014 (przyp. wł. – rl); <br></br>
          [21] Jest to pierwszy przypis dokonany po odzyskaniu tego wspomnienia
          z archiwum. Zdaję sobie sprawę, jak bardzo przypisy wybijają
          czytelnika z rytmu lektury, dlatego postaram się robić je coraz
          rzadziej! (przyp. wł. – rl); <br></br>
          [22] Zapisałem to zdanie w cudzysłowie, jako że tak dokładnie wtedy
          zapytałem [a nie zawsze stosuję zapis tak dokładny]. Nie będę tego
          praktykował w całym tekście, niemniej ten jeden raz postanowiłem to
          uwiecznić, nawet gdyby rzecz wyglądała na pisarskie dziwactwo;
          <br></br>
          [23] Ktoś, kto nie interesuje się budową kosmosu, musi być bardzo
          zaskoczony, gdy dowie się, że jedna z gwiazd konstelacji Rzeki Erydan
          – Theemin – znajduje się 296 lat świetlnych od Ziemi [czyli w naszej
          Drodze Mlecznej], zaś Wielka Pustka to jeden z obiektów najdalej od
          nas oddalonych [miliardy lat świetlnych]. Mowa tu jednak tylko o
          kierunku patrzenia [a nie: „znajdujący się tam”]: wszechświat jest [w
          miarę] przeźroczysty, trzeba więc sobie wyobrazić, że jeśli popatrzymy
          w tamtym kierunku, to dopiero miliardy–miliardy razy dalej [niż
          Erydan] jest owa w/w Wielka Pustka. Mam nadzieję, że wyraziłem to
          jasno?;<br></br>
          [24] Mon tire-bouchon! (fr.) – Mój trybuszon [korkociąg]!;<br></br>
          [25] Sens publicznych spowiedzi w naszej sekcie wyjaśniam gdzie
          indziej. Należy jednak wiedzieć, że w roli spowiednika może wystąpić
          dowolna osoba, każdorazowo w masce innej osoby, znanej publicznie,
          bądź nawet własnej, a prawo rejestracji imprezy ma tylko organizator.
          [W tym wypadku są to: 1. tekst spisany z nagrań magnetofonowych, 2.
          zdjęcia kilku masek, 3. dzwonek czarnodziurski z gliny, zaprojektowany
          i wypalony przez Janusza Elisa Kowalskiego]. Do upowszechnienia
          całości lub fragmentu spowiedzi potrzebna jest zgoda penitenta, jak
          też osób, które biorą czynny udział w imprezie [jako spowiednicy];
          <br></br>
          [26] Dlatego [zanim nawiążemy z nim kontakt] przepraszam p. A. R.
          Minkkinena, że publikuję wypowiedzi tej nieznanej osoby, która na ów
          czas przybrała jego oblicze [a dotyczy to także p. Jerzego Olka, który
          występuje w innej części utworu [sekta poszukuje kontaktu z p. J.
          Olkiem!]; co zaś do innych uczestników uroczystości, to wszyscy
          wyrazili zgodę na użycie ich wypowiedzi, które wszakże też zostały
          wyrażone nie ich ustami [za co bardzo dziękuję];<br></br>
          [27] Gdy pisałem początek tej historii (w pierwszym roku trzeciego
          tysiąclecia), ilość psich odchodów na ulicach Paryża była znacznie
          większa niż obecnie. Pod wieloma względami Paryż podupadł w ciągu
          minionych dwudziestu lat, ale jeśli chodzi o <i>la merde</i>, można
          mówić o wielkim postępie (liczne szalety publiczne, bezpłatne i
          utrzymane w czystości)! – 17 VI 2020 [Pierwszy przypis do powieści
          „Słońce smoków” – zrobiony in statu nascendi];<br></br>
          [28] [Nasz pryncypał do nas wszystkich zwraca się per wasza wysokość],
          ale gdy tak zażartował, poczułem się głupio, jakbym to ja sam był
          przyłapany in flagranti na doświadczaniu przyjemności naszego
          biblijnego przodka Onana [i nie tylko przecież jego]!;<br></br>
          [29] W Polsce, jeśli się coś powie i od razu pożałuje tego, trzeba jak
          najprędzej postukać palcem w niemalowane drewno – wtedy sens
          wypowiedziany przestaje kusić los! Ten zwyczaj przestrzegany ze
          szczerością skutkuje zawsze jak najlepsze zaklęcie! – 9 IV 2021.
          [Przypis stworzony in statu nascendi dla powieści „Słońce smoków”.
          Czerwona góra to francuska nazwa miejscowości, w której wtedy
          mieszkałem: Montrouge];<br></br>
          [30] Ten skrót kojarzy się z fryzurą kobiecą, ale używam go bardziej
          ze względu na pamięć naszych ówczesnych rozmów w kręgu sekty, gdzie
          używaliśmy go w sensie technicznym: „kobieta z kokiem” oznaczało, że
          jest ona świadoma, w którym momencie jest wewnętrznie gotowa do
          seksualnego kontaktu. – 10 X 2021. [J. w.];<br></br>
          [31] Żółty Kieł był zdeklarowanym członkiem naszej sekty przez cały
          czas swego pobytu w Paryżu jako „emigrant ekonomiczny”. Mieszkał w
          naszej komunie, ale pracował na „swoich” budowach. Nie pamiętam, żeby
          skarżył się na los, oprócz tego jednego tylko razu [mówił gwarą, choć
          nie spod Przemyśla, skąd pochodził]: „Oni mje nazywajum Żółty Kieł!…
          Nó, ali, pani Rómani, czy mję się ópłaca kupować szczuteczkię dó
          jidnegu zębu?” – zapytał, a ja przyznałem mu rację. Gdy zjeżdżał do
          kraju, nakazałem mu nie przyznawać się w swojej wsi, że należy do
          „kociej wiary”, a on za tę radę mi podziękował;<br></br>
          [32] Baydała Oszczecirski, „Świadomość kosmiczna (1)”,{" "}
          <i>Teczka (pismo społeczno-kulturalne)</i>, nr 14, Paryż 1998. [W
          skrócie naszego ośrodka – EROS – zawsze dla żartu przestawialiśmy
          kolejność liter, ale nigdy nikt się nie zorientował];<br></br>
          [33] Jarosław Mikołajewski [Facebook, 4 XI 2022]. Autor posta jest
          radiowcem, poetą i tłumaczem z języka włoskiego. Niedawno ukazało się
          jego pierwsze tłumaczenie prozą na język polski „Boskiej Komedii” A.
          Dantego;<br></br>
          [34] Tadeusz Piekło (1936–2007), poeta, dziennikarz, krytyk. Cytowany
          fragment pochodzi z wiersza „ul. Katedralna” [z cyklu „Ulice
          przemyskie”]. Drugi cytat [czyli nowa nazwa kina] pochodzi z wiersza,
          którego tytułu nie udało mi się dotychczas ustalić;<br></br>
          [35] „Boską Komedię” [mającą też tytuł „Bo nigdy dość się nie umiera”]
          pisałem w 2015 r., czyli już wtedy prorokowałem, że wieczności są
          liczne, co potwierdził niebawem fizyk R. Penrose, za co dostał Nagrodę
          Nobla [w 2020 r.];<br></br>
          [36] Przerwałem pisanie „Bo nigdy dość się nie umiera” na wieść, że
          populistyczna partia wygrała wybory prezydenckie [2015], czekałem już
          tylko na najgorsze. Spodziewałem się, że w każdym mieście polskim
          stanie na rynku gilotyna [„bo co Francuz wymyśli, to Polak polubi” [a
          Polska jest około 200 lat za Francją]]. Tymczasem nic podobnego nie
          nastąpiło, zdemontowano tylko organy władzy pochodzenia
          demokratycznego i wzmocniono religię państwową, czyniąc z kleru
          najwyższą klasę społeczną. Ponieważ w pisaniu byłem już w przyszłości,
          nie umiałem wybrnąć z sytuacji, bo wcześniej opisałem pierwszą
          dekapitację z woli nowego prezydenta [i rzecz ogłosiłem w gazecie
          naszej sekty [która już się nie ukazuje]]. Nie skazałem na śmierć
          Donalda Tuska, który pełnił wówczas urząd szefa UE, bo był on poza
          zasięgiem tej władzy, lecz najbardziej interesującego z ich wrogów,
          Janusza P. Przykro mi bardzo, że się pomyliłem i posądziłem populistów
          o tak niecne zamiary, no i też głupio mi bardzo wobec w/w polityka,
          którego zawsze widziałem w roli prezydenta RP;<br></br>
          [37] Polakom nie trzeba tłumaczyć, ale to tak, jakby Francuzom
          powiedzieć: Rimbaud! Świętość narodowa! O tym, że Mickiewicz na
          Zachodzie przez znawców poezji nazywany jest Naśladowcą Szatana,
          przeciętny Polak nie wie [nazwał go tak hrabia de Lautreamont (Isidore
          Ducasse)]. Gdy Mickiewicz zmarł, Rimbaud miał rok, miesiąc i tydzień;
          <br></br>
          [38] Aleksander Fredro (1793–1876), ur. w Surochowie [sioło między
          Jarosławiem a Przemyślem], zmarł we Lwowie. Wspomniana XIII księga
          „Pana Tadeusza”, domniemanego autorstwa Fredry, jest znana wszystkim
          Polakom, a zwłaszcza młodzieży, łaknącej wiedzy na temat życia
          seksualnego, gdyż nawet sens słów „rozkosz”, „orgazm” itp. szkolnictwo
          polskie ukrywa przed dziećmi, twierdząc, że są to doznania z kręgu
          patologii. W naszej sekcie trwają nieustanne modły o rozum polskich
          władz!; <br></br>
          [39] Z Eliota;
        </p>
      </div>
    </div>
  );
};

export default Lis;
