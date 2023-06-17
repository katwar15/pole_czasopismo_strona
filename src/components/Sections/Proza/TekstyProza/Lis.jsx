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

const Lis = () => {
  return (
    <div className="wstep">
      <Link to="/proza" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h1 className="h1_wstep_autor">Roman Lis</h1>
        <h2 className="h1_wstep">
          Żołnierz strzegący mrowiska koło Ustrzyk Górnych
        </h2>
        <h3 className="h1_wstep">(wspomnienie)</h3>
      </div>

      <div className="content_wstep">
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
        <h2 className="h1_wstep">„BĄDŹ ZDRÓW! NIE PIERDOL KRÓW!”</h2>

        <p className="h2_wstep"></p>
        <p className="h2_wstep"></p>
        <p className="h2_wstep"></p>
        <p className="h2_wstep"></p>
        <p className="h2_wstep"></p>
        <p className="h2_wstep"></p>
        <p className="h2_wstep"></p>
        <p className="h2_wstep"></p>
        <p className="h2_wstep"></p>
        <p className="h2_wstep"></p>
        <p className="h2_wstep"></p>
        <p className="h2_wstep"></p>
        <p className="h2_wstep"></p>

        <img className="img_text" src={foks_img}></img>
        <h2 className="h2_podpis_img">fot. Darek Foks</h2>

        <h2 className="h1_wstep">1</h2>

        <h2 className="h2_podpis">[10 września 2022]</h2>
      </div>
    </div>
  );
};

export default Lis;
