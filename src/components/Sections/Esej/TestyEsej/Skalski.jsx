import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";

const Skalski = () => {
  return (
    <div className="wstep">
      <Link to="/esej" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h1 className="h1_wstep_autor">Piotr Skalski</h1>
        <h2 className="h1_wstep">Początek przejścia do czynu</h2>
      </div>

      <div className="content_wstep">
        <h2 className="h1_wstep">1</h2>
        <p className="h2_wstep">
          To było tak: żył kiedyś Henryk Bereza, lecz zmarł. Pismo{" "}
          <i>Mały Format </i>
          zaplanowało numer poświęcony Berezie. Do planowanego numeru wysłał
          tekst Donat Kirsch. Bereza cenił był Kirscha. Kirsch ceni Berezę.
        </p>
        <p className="h2_wstep">
          Tu kończy się uwertura, zaczyna się, powiedzmy, coś na kształt fugi.
        </p>
        <h2 className="h1_wstep">2</h2>
        <p className="h2_wstep">
          A zatem Kirsch, pisarz przez Berezę, krytyka literackiego, ceniony,
          skorzystał ze sposobności, jakiej jemu i innym dostarczył{" "}
          <i>Mały Format</i>, ażeby przedstawić swój pogląd na losy i
          dziedzictwo tego rodzaju krytyki literackiej, jaką swego czasu
          uprawiał Bereza, ponieważ zaś własną perspektywę rzeczywiście Kirsch
          miał, toteż napisał tekst i wysłał. Tymczasem Mały Format, choć na
          pewno uznał, że tekst Kirscha jest na temat, postanowił, że go do
          publikacji nie przyjmie, przypuszczam – może wrócę do tego – z tej
          racji, że okazał się aż za bardzo na temat: kolejny raz sprawdziłaby
          się mądrość nakazująca rozwagę, gdy się o coś prosi, gdyż istnieje
          ryzyko, że się to naprawdę dostanie.
        </p>
        <p className="h2_wstep">
          <i>Mały Format</i> Kirscha odrzucił, Kirsch zatem – za podpowiedzią
          Wiedemanna, którego później w numerze o Berezie <i>Mały Format</i>{" "}
          akurat opublikował – nie chcąc, by tekst całkiem przepadł, wysłał go
          do gdyńskiej <i>Blizy</i>. Wkrótce potem <i>Bliza</i> także tekst
          odrzuciła, choć należy jej policzyć na plus, że przynajmniej go nie
          zgubiła.
        </p>
        <p className="h2_wstep">
          Tym samym tekstu Kirscha o losach dziedzictwa Berezy postanowiły nie
          przyjąć dwa pisma literackie, bardzo od siebie różne (bo jedno
          czytane, a drugie drukowane).
        </p>
        <p className="h2_wstep">
          W tej sytuacji z pomocą Kirschowi przyszedł literaturoznawca Andrzej
          Śnioszek, profesjonalnie zajmujący się Berezą i bliskimi mu twórcami,
          i pomógł mu wydać w postaci książkowej zbiorek dwóch esejów, z których
          jeden był drukowany w <i>Twórczości</i> w dawnych czasach, gdy pismo
          to współtworzył Bereza, drugim zaś był tekst omawiany tu właśnie, raz
          zamówiony, dwakroć odrzucony. Dawniejszy esej klęskę Berezy wieszczył,
          nowy zaś jej dzieje spisywał.
        </p>
        <h2 className="h1_wstep">3</h2>
        <p className="h2_wstep">
          Z tą fugą to pewnie przesada, równie dobrze mógłbym przywołać allegro
          sonatowe, jeżeli już czepiać się form muzycznych, w każdym razie
          książka Kirscha-Śnioszka ukazała się parę lat temu, jest więc dziś
          obiektywnie starociem, lecz nawet teraz mógłbym przecież zabrać się do
          prób związania jej ruchu z moim własnym, by przekonać się, co z takich
          zabiegów wyniknie.
        </p>
        <p className="h2_wstep">
          Okazuje się jednak, że przez te lata ktoś już ją przeczytał,
          zrecenzował, skrytykował, gorzej nawet, że Kirsch na recenzję sam
          raczył odpowiedzieć obszernie.
        </p>
        <p className="h2_wstep">
          A to oznacza, że ekspozycję, z paroma istotnymi zmianami, należy
          powtórzyć.
        </p>
        <h2 className="h1_wstep">4</h2>
        <p className="h2_wstep">
          Kirscha-Śnioszka okołoberezowy zbiorek „Eliminacja episteme” ukazał
          się w 2019 roku, powitany przez garść komentarzy, wśród których jeden,
          Macieja Libicha, był krytyczny na tyle, że wzbudził w Kirschu złość
          zapewne tym większą, że wydrukowała go Twórczość, w dawnych czasach
          pismo Berezy, dziś pismo żywe dzięki wspomnieniu owych dawnych czasów.
          Do Twórczości posłał więc Kirsch polemikę z Libichem.
        </p>
        <p className="h2_wstep">
          Już pośpieszna lektura obu tekstów, krytyki i polemiki, ujawnia, jak
          wiele musieli Libich z Kirschem spraw i detali między sobą wyjaśnić, z
          których do względnie mniej istotnych zaliczał się wytyk Libicha za
          przytoczenie w przypisie (przez Śnioszka) przestrogi Umberta Eco przed
          skutkami poprawności politycznej, która to wypowiedź, ponieważ
          pochodziła z uprzedniej dekady, w naturalny sposób stała się
          niepoprawna.
        </p>
        <p className="h2_wstep">
          Kirsch także zmuszony był naprawiać błędy Libicha, dotykające nie
          tylko światopoglądu, lecz, co gorsza, faktografii. Libich mianowicie
          stwierdził, że w 1977 roku komisja pod przewodnictwem Berezy przyznała
          Kirschowi trzecią nagrodę w konkursie imienia Macha, tymczasem, po
          pierwsze, nie było to w roku 1977, po drugie, Bereza nie
          przewodniczył, po trzecie, nie trzecią nagrodę, po czwarte, nie
          imienia Macha.
        </p>
        <p className="h2_wstep">
          Zresztą, lepiej: Mach w 1977, ale nie trzecia, lecz główna, a trzecia
          w konkursie Czytelnika, lecz w 1975, a mówiąc ściślej, nie tyle
          trzecia tout court, co trzecia ex aequo.
        </p>
        <p className="h2_wstep">
          To mam nadzieję już jasne, ale więcej o treści za chwilę, najpierw
          reszta dziejów.
        </p>
        <p className="h2_wstep">
          Polemika z Libichem miała ukazać się w <i>Twórczości</i>, która, jak
          się rzekło, przed laty publikowała i Berezę, i Kirscha, niemniej
          jednak, mimo że Libich Kirscha krytykował, a od Berezy się
          dystansował, <i>Twórczość</i> postanowiła polemikę Kirscha odrzucić,
          ponieważ była bardziej polemiczna, niż polemice przystoi.
        </p>
        <p className="h2_wstep">Prawa symetrii żądały podjęcia nowej próby.</p>
        <p className="h2_wstep">
          Zdawało się, że ta będzie nawet bardziej stosowna, albowiem jeszcze
          wtedy istniało pismo <i>eleWator</i>, wydawane przez fundację imienia,
          no właśnie, samego Berezy.
        </p>
        <p className="h2_wstep">
          W odpowiedzi Kirschowi <i>eleWator</i> stwierdził wszakże (jak sam
          Kirsch sprawozdaje), że stosunki z Libichem są mu droższe niż z nim,
          sojusznikiem Berezy, i także tekst odrzucił.
        </p>
        <p className="h2_wstep">Niedługo potem przestał istnieć.</p>
        <p className="h2_wstep">
          Tym samym tekst Kirscha o losach jego tekstu skrytykowanego przez
          tekst Libicha odrzucony został przez dwa pisma literackie, tym razem
          dosyć do siebie podobne, gdyż oba drukowane i oba pod znakiem Berezy:
          jedno Berezy żywego, drugie Berezy martwego.
        </p>

        <p className="h2_wstep">
          W tej sytuacji Śnioszek znów przyszedł Kirschowi z pomocą i pomógł mu
          wydać w postaci książkowej zbiorek dwóch jego esejów, z których jeden,
          odrzucony przez <i>Mały Format</i> i <i>Blizę</i>, ukazał się już we
          wcześniejszej książce, komentowanej przez Libicha, drugim zaś był
          właśnie tu omawiany komentarz do komentarza Libicha, odrzucony przez
          <i>Twórczość</i> i <i>eleWatora</i>. Tak powstała jako współprodukt
          odrzutów „Prounowa eksmisja Henryka Berezy” ukazała się w 2020 roku.
        </p>
        <h2 className="h1_wstep">5</h2>
        <p className="h2_wstep">
          Nie wiem zresztą, jak bym postąpił, gdybym znał tylko głos Kirscha,
          skoro cały ten balet odrzuceń, polemik, republikacji poznałem w jednym
          rzucie i w tej postaci, w kontekście całości, zrobił on na mnie takie,
          nie inne wrażenie. Mógłbym snuć wizje możliwych, a nie spełnionych
          światów: zagaiłem był resztę zespołu po rozpoczęciu prac nad{" "}
          <i>Polem</i>, a gdybyśmy to my otrzymali ów pierwszy artykuł Kirscha,
          czy postąpilibyśmy jak <i>Mały Format</i> i po prostu go odrzucili,
          powodowani być może idiosynkrazją lub strachem? Na szczęście zespół
          odpowiedział na moje pytanie właściwie, czyli je zignorował (po kilku
          stronach Bożek stwierdziła, że tekst ją nudzi), wykazując się w ten
          sposób zbiorowym wyczuciem natury problemu: przewidywanie sytuacji
          wyjątkowych w oparciu o wyjątkowe jest bezsensowną stratą czasu, do
          marnowania którego mamy i tak już w naszej grupie wyjątkową skłonność.
        </p>
        <p className="h2_wstep">
          Mimo wszystko sięgam do Kirscha z Libichem świętych obcowania, bo
          ciekawe, pasjonujące jest, nie tylko dlatego, że dwaj święci nie
          zrozumieli się wzajemnie, nie próbowali nawet, takie są w końcu
          fabryczne ustawienia komunikacji, w której idzie o prawdę, słuszność i
          własną pozycję, innymi słowy o świętość. W interesie tak szczytnym
          ścierają się style tak różne, że humanistyka robiąca we wglądach w
          sedno (polityczne zwłaszcza) mogłaby potraktować tę polemikę jak
          szkolenie w metodach prowadzenia sporu, dla jasności wykładu
          zilustrowanych na przykładach możliwie najjaskrawszych. A ponieważ
          zderzenie kontrastów to jedno z podstawowych źródeł komizmu, polemika
          Kirscha z Libichem powinna posłużyć za wzór wszystkim, którym marzy
          się spór żywy, emocjonujący nawet dla tych, którym nie mieściłoby się
          w głowie śledzenie debaty o zmarłego krytyka literackiego, prowadzonej
          przez innego zawodowego krytyka z pisarzem zapomnianym (to Kirsch o
          sobie).
        </p>
        <p className="h2_wstep">A tak poza tym, temat sporu też jest ważny.</p>
        <h2 className="h1_wstep">6</h2>
        <p className="h2_wstep">
          Dwoistą taktykę sporu można streścić jako strzelanie z armaty
          wycelowanej we wróbla na zmianę z próbą złowienia wieloryba na wędkę.
        </p>
        <p className="h2_wstep">
          To jest w zasadzie główne źródło ożywczego komizmu, którego świadomość
          znajduje pewien, choć raczej śladowy wyraz w replice Kirscha, który
          mógłby się z oponenta przede wszystkim śmiać, lecz zamiast tego woli
          potępiać, podczas gdy Libich, analogicznie, postanowił tylko pouczać,
          i nawet wtedy, gdy pewne wypowiedzi Kirscha uznaje za śmieszne, nie
          słychać wcale, by naprawdę się śmiał. Skłonny jestem sądzić, to moja
          prywatna obsesja, że wynika to z ogólnej tendencji dzisiejszej
          kultury, której wspólnym patronem, niezależnie od podziałów
          światopoglądowych i politycznych, jest mnich Jorge z „Imienia róży”,
          ten, co wziął sobie zanadto do serca regułę świętego Benedykta,
          traktującą o śmiechu; przypomnę:{" "}
          <i>
            niestosowne żarty oraz gadanie puste i pobudzające do śmiechu
            potępiamy zawsze i wszędzie
          </i>
          .
        </p>
        <p className="h2_wstep">
          Tymczasem jednak właśnie owa zgodna odmowa śmiechu jest śmieszna, a to
          za sprawą obustronnego niedobrania środków do celu. Scena bowiem
          przedstawia elegancko wystrojonego członka akademii, próbującego
          jakoby rezonować z rozdrażnionym zwierzęciem, choć jego głos bardziej
          niż do nieokrzesanej bestii kieruje się ku widowni, udomowionej,
          cywilizowanej, przez to zarazem wymagającej i wysoce krytycznej,
          dlatego też rezoner mówi ostrożnie, rachując, gdyż zwyczajnie obawia
          się palnąć coś w mniemaniu widowni głupiego – i nie budziłby tym
          zastrzeżeń, gdyby ta uczona mowa nie starła się z agresywnością
          kontrmowy, w której nie czuć żadnej obawy przed gadaniem głupot, gdyż
          mówca przemawia nie dla uznania, lecz w imię prawdy, a to oznacza, że
          nie uwzględnia w ogóle możliwości, że bredzi.
        </p>
        <p className="h2_wstep">
          Odnoszę przy tym wrażenie, że sprawa, o którą poszło, mianowicie
          sposób wytłumaczenia losów pewnej określonej wizji literatury, dodaje
          tej kanonadzie między pisarzem i krytykiem takiej wagi, której nie
          mógłby zapewnić dowolny inny temat, o który także można by toczyć nie
          mniej ogniste spory. Mówiąc bardziej po ludzku, nie kierowałem dotąd
          przesadnej uwagi ku działalności krytyków literackich, żywych czy
          martwych, mimo to po głowie chodzi mi myśl, że Bereza miał do
          powiedzenia coś, co się nie przedawnia, bo sięga do podstaw naszych
          hierarchii wartości, które jakoś przeważnie dotknięte zostają
          stężeniem właśnie wtedy, gdy ponad twórczością zaczynają stawiać
          misję, a ponad wolnością – no, dajmy na to, odpowiedzialność.
        </p>
        <p className="h2_wstep">
          Kiedy już wchodzi w grę waga tak ciężka, a przecież cały czas o nią
          chodzi, hasło <i>pamięci o Berezie</i> musi być traktowane z
          elementarną powagą, bo inaczej zamieni polemikę w mimowolną
          autoparodię, jak wtedy, gdy na tezę jednej strony, że pamięć o Berezie
          <i> uległa systematycznemu wyparciu</i>, druga strona odrzeknie, że
          pamięć przecież trwa, skoro wznawia się Berezę i o Berezie pisze – co
          właściwie oznacza, że należy się cieszyć, bo mogłoby być gorzej,
          żywotność dzieła Berezy mogłaby być mniejsza niż pierwszego lepszego
          mędrca antykwarycznego, którego zawsze przecież ktoś wyda, a ktoś inny
          na nim obroni licencjat. Kirsch konstatuje, że jest to pamięć
          zapewniona eksponatowi muzealnemu, ma w tym oczywistą rację.
        </p>
        <p className="h2_wstep">
          W tym wypadku rozminięcie się intencji jest tym bardziej zaskakujące,
          że świadczy o zupełnym braku woli nawiązania realnej rozmowy, skoro
          dotyczy tezy tak fundamentalnej i prostej. No, chyba że tylko mnie
          zdaje się prosta. Może Kirsch swoim agresywnym antykomunizmem wzbił
          wokół swej głównej myśli tak wielki tuman kurzu, że dotarcie do niej
          jest niemożliwe bez zaawansowanych zabezpieczeń sanitarnych, bo
          nadwrażliwy duch się zadusi, co oznaczałoby w takim razie, że albo
          brak mi wrażliwości, albo widzę naprawdę tylko czubek własnego nosa.
          Kto mnie doczytał do tego zdania, ma prawo sądzić, co chce.
        </p>
        <p className="h2_wstep">
          Tak czy owak, jeszcze nie skończyłem, czas na repryzę.
        </p>
        <h2 className="h1_wstep">7</h2>
        <p className="h2_wstep">
          Przesadzam już pewnie w udawanej naiwności, mówiąc o jakiejś
          <i> elementarnej powadze</i>, obie strony mają rozum i powagą
          rozporządzają dokładnie tak, jak chcą. Uczciwiej jest nie tyle
          stwierdzić, że Libich w krytyce Kirscha zmarnował szereg narzucających
          się sposobności, by stanąć na jednym gruncie ze swym adwersarzem, ile
          podnieść po prostu możliwość innej lektury, potencjalnie bardziej
          owocnej, bo, tak to ujmę, życzliwszej, czerpiącej z własnych założeń
          Kirscha, a nie tylko miotającej na niego gromy z obłoków prawdziwszej
          wiary.
        </p>
        <p className="h2_wstep">
          Weźmy chociażby ten moment, w którym Libich zarzuca Kirschowi, że nie
          umie czarnego odróżnić od białego, i że zaślepienie ideologiczne nie
          pozwala mu dostrzec takich różnic, których istnienie jest już
          przedmiotem utrwalonej i powszechnej wiedzy. Trzeba zaiste
          szczególnego rodzaju ignorancji bądź fanatyzmu, żeby nurt Nowej Fali
          przedstawiać jako zaledwie <i>nową falę realizmu socjalistycznego</i>,
          krzewiącego w nowocześniejszym, modniejszym przebraniu wciąż tę samą
          ewangelię marksizmu: socrealizm był realizmem rzeczywistości takiej,
          jaką miała być, realizm nowofalowy miał przedstawiać rzeczywistość
          taką, jaką naprawdę była. Gdzie oczywiste sprzeczności narzucają się
          same, tam potrzeba dyskusji się kończy, bo spór już jest wygrany,
          wystarczy sprzeczność czytelnie, podręcznikowo rozpisać, by nawet
          ideologiczny ślepiec miał szansę pojąć swój błąd, a czy z tej szansy
          skorzysta, to już jego problem... Co kończy dowód.
        </p>
        <p className="h2_wstep">
          Można jednak mieć wątpliwości, czy prawda podręczników jest dobrze
          skalibrowaną bronią przeciwko antykomunistycznej argumentacji Kirscha.
          Programowy tekst Kornhausera i Zagajewskiego głosi, co następuje, i co
          Kirsch chętnie cytuje:
        </p>
        <p className="h2_wstep">
          <i>
            Gdy czytamy „Ucieczkę od wolności” Ericha Fromma i w jego opisie
            mechanizmów degradujących człowieka w społeczeństwie
            kapitalistycznym z niechęcią odnajdujemy zjawiska znane nam z
            naszego terenu, nie potrafimy ocenić, jak daleko zaszliśmy w
            kształtowaniu nowych postaw ludzkich, a ile jeszcze w nich pozostało
            z przeszłości
          </i>
          .
        </p>
        <p className="h2_wstep">
          Wiedząc to, co wiedzieć powinniśmy, bez trudu dostrzegamy w tych
          słowach zgrabny wybieg, który pozwala nielotnemu cenzorowi zrozumieć
          jedno, a pozostałym, czujnym czytelnikom drugie. Socjalizm krytykowany
          jest nie ze względu na jego własne wady, lecz na przeżytki
          kapitalizmu, których wciąż nie wykorzeniono do końca: tyle ma pojąć
          urzędnik, żeby dopuścić tekst do druku i nie wywołać skandalu,
          pozostali zaś pojmą, że był to ze strony autorów wyłącznie wybieg, pod
          płaszczykiem ideologicznej poprawności kierujący uwagę ku właściwemu,
          niepoprawnemu przedmiotowi ożywionej literatury realistycznej.
        </p>
        <p className="h2_wstep">
          Zrozumienie intencji tej gry jest na tyle łatwe, że dosłowność, z jaką
          Kirsch traktuje słowa Kornhausera i Zagajewskiego, narzuca raczej
          pytanie, czy on sam nie uprawia gry całkiem odrębnej, dzięki której
          może postawić tezę, że tamci dwaj gracze udawali zdecydowanie lepiej,
          niż chcieli. Kornhauser i Zagajewski założyli maski, które przylegały
          do ich twarzy tak dobrze, że stało się obojętne, czy zwracają się do
          nas zamaskowani, czy obnażeni. Maska okazała się nawet prawdziwsza od
          twarzy.
        </p>
        <p className="h2_wstep">
          Podobnie można sobie wyobrazić eksperyment, który polegałby na tym, że
          choć rozumiemy grę w udawanie, to sami zarazem zaczynamy udawać, że o
          tej grze nic nie wiemy: może się wtedy okazać, że przeciwstawne,
          wrogie stanowiska łączy bliższe pokrewieństwo, niż spodziewała się
          tego którakolwiek ze stron, że łączy je niechciany wspólny mianownik.
        </p>
        <p className="h2_wstep">
          Co to za mianownik, to akurat wiadomo, bo Kirsch sam odmienia wyrazy
          <i> norma</i>, <i>obowiązek</i>, <i>wytyczne</i> przez wszystkie
          przypadki. Libich poprzestaje na stwierdzeniu, że powinności
          wynikające z ideologicznego <i>schematyzmu</i> socrealistycznego są
          czymś drastycznie odmiennym od powinności nowofalowego{" "}
          <i>poszukiwania prawdy</i>, lecz nie zwraca uwagi, że to właśnie
          powinność, nieważne jaka, jeżeli wskazana zostaje literaturze
          <i> programowo</i> z zewnątrz, ma ideologiczny charakter nawet wtedy,
          gdy jej ambicją jest prawda. Takie przynajmniej było stanowisko
          Berezy, takie stanowisko za nim przyjął Kirsch, na tego stanowiska
          gruncie Nową Falę z socrealizmem łączyła główna myśl, wedle której
          literaturę kazano oceniać za pomocą kryteriów pozaliterackich,
          ideologicznych, zamiast pozwolić jej na to, by kryteria stwarzała
          sobie swobodnie za każdym razem od nowa.
        </p>
        <p className="h2_wstep">
          Jeżeli na to założenie przystać – a właściwie tylko je zrozumieć, żeby
          wiedzieć, o co w ogóle wypada toczyć spór – to wymazanie Berezy
          oznacza dla Kirscha coś oczywiście innego niż typowy przejaw walki o
          uzyskanie przewagi w polu literackim, choć takim stwierdzeniem
          zadowolił się Libich, zamazując całkowicie sens poglądu, na który się
          zamierzył. Trwałe podporządkowanie literatury powinności zewnętrznej
          oznacza przecież dla Kirscha nie tyle przegraną jednego z możliwych
          światopoglądów, reprezentowanego akurat przez niego i przez Berezę,
          lecz fundamentalne przeistoczenie samego pola literackiego i natury
          toczącej się w nim rywalizacji, w taki sposób, że zniesieniu uległ sam
          sens walki, gdyż toczy się ona odtąd tylko między tymi, którzy są już
          ze sobą zgodni. Dlatego z perspektywy Kirscha wymazanie Berezy nie
          jest zwykłą przegraną, kolejną w niekończącym się pochodzie
          heroicznych klęsk osobowości ponadprzeciętnych, lecz jest objawem
          choroby samego pola literackiego, z którego, w trosce o podniesienie
          wartości literatury, nieoczekiwanie usunięto literaturę.
        </p>
        <p className="h2_wstep">
          Nazwy schorzenia, które dotknęło pole, są liczne.
        </p>
        <p className="h2_wstep">
          <i>Normatywizm, logika deontyczna</i>, także <i>pozytywizm</i>, to
          najogólniejsze z nich.
        </p>
        <p className="h2_wstep">
          Wszystkie służą wyrażeniu jednej uporczywej myśli, zgodnie z którą
          literatura, powiedzmy górnolotnie: zgodna ze swym przeznaczeniem, otóż
          taka literatura słucha tylko samej siebie, gdyż nie służy żadnym innym
          celom niż ona sama i jej własna wielkość, a więc jednocześnie też
          osobista wielkość samego pisarza. Literatura natomiast, której kształt
          i treść wyznaczają normy z góry, z zewnątrz przyjęte, której cele mają
          pozaliteracki, na przykład społeczny, polityczny, religijny charakter,
          taka literatura jest chora, gdyż straciła swą autonomię, samą swoją
          hierarchię wartości nienaturalnie stawiając na głowie.
        </p>
        <p className="h2_wstep">
          I mniej więcej w tym miejscu mógłbym zakończyć, gdybym zapragnął z
          jakichś powodów idiotycznie udawać, że choroba nie ma wedle Kirscha
          także mniej ogólnych, konkretnych, polityczno-historycznych nazw,
          mianowicie – zamiennie – <i>socjalizmu, komunizmu, marksizmu</i>.
        </p>
        <p className="h2_wstep">
          Ten komunizm, którego moc jest tak wielka, że rozciągnął swoje
          panowanie na czasy, gdy sama komunistyczna idea uznawana jest
          powszechnie za skompromitowaną, archaiczną, zużytą, gdy nie ma już
          praktycznie żadnego żywotnego ruchu, który by się do niej przyznawał,
          gdy pod tą nazwą występują już tylko nieliczne, stare, dogorywające
          partie, gdy marksizm uprawiany jest tylko przez garstkę teoretyków
          akademickich, którzy spotykają się na seminariach, marząc o
          przywróceniu mu awangardowej aury, zatraconej chyba już ze sto lat
          temu, ten komunizm tak przerośnięty jest, rozdęty w swej potędze tak
          bardzo ponad miarę, że jego niszczycielskie widmo rozśmieszyło mnie w
          podobnym stopniu, jak reakcja Libicha, który powiada, że{" "}
          <i>nie krążymy tu wokół sporów ideologicznych</i>, bo jeśli nie wokół
          ideologii krążymy, to wokół czego? Otóż chyba właśnie każdy, Kirsch i
          Libich, obraca się wokół własnej ideologicznej osi, z tą różnicą
          jednak, że Kirsch w Libicha ciska gromy, widząc w nim oczywiście
          kolejnego otumanionego lub cynicznego marksistę, podczas gdy Libich
          współczuje Kirschowi, że tak niezręcznie rozmija się z oczywistą
          prawdą współczesnego świata, która to prawda, rzecz jasna, nie ma
          żadnej ideologicznej nazwy.
        </p>
        <p className="h2_wstep">
          Kirsch nazywa to marksizmem, natomiast widać dobrze, że w wyliczankach
          dzisiejszych bolączek, których zacytowania zresztą Libich sobie nie
          odmówił, gdyż same w sobie mają niewątpliwy efekt humorystyczny (to
          one, pozwalam sobie zgadywać, mogły przesądzić o odrzuceniu tekstu
          przez <i>Mały Format</i>, przy czym humor był tu raczej ofiarą
          uboczną: za publikację pomstowań na
          <i> islamofilię, feminizm, geizm, postmodernizm, antyizraelizm</i> i
          im podobne oczekiwano by posypania głów redakcyjnych popiołem, którego
          nie ma w internecie w dostatecznych ilościach), otóż więc w
          wyliczankach tych Kirsch wziął sobie na cel po prostu globalnie
          wszelkie możliwe ambicje i postępowe marzenia dzisiejszego poczciwego
          świata liberalnego, wszystkie cele, wokół których tworzą się
          jakiekolwiek zaangażowane wspólnoty, o ile podstawą ich tożsamości nie
          są tak zwane wartości tradycyjne, którym Kirsch też nie okazuje żadnej
          sympatii, lecz nie uznaje ich najwyraźniej za wartości dziś panujące.
          Jest to więc antykomunizm skrajny na miarę rzekomo skrajnej potęgi
          postępowego wroga.
        </p>
        <p className="h2_wstep">
          Pozostaje zadać sobie pytanie, dlaczego Bereza stwierdził, a Kirsch te
          słowa przytoczył, że{" "}
          <i>
            dyskurs doktrynalny zastąpić dyskursem antydoktrynalnym to tkwić po
            same uszy w tym, co się zwalcza
          </i>
          .
        </p>
        <p className="h2_wstep">
          Tak, wiem, oczywiście, najpierw kontekst! W kontekście słowa te mają
          wspierać tezę, że realizm socjalistyczny z realizmem nowofalowym
          dzieli spór powierzchowny, a łączy mimowolna więź rodzinna, której
          wspólnym zawołaniem rodowym jest wezwanie literatury do czynu.
        </p>
        <p className="h2_wstep">
          Tyle że słowa te służą do wyrażenia ogólniejszego prawidła i nie
          miałoby sensu zakładać, że Kirsch o tym zapomniał, tym bardziej że sam
          pisał podobnie w liście do Śnioszka, że{" "}
          <i>
            większość działań przeciw komunizmowi zmienia się w jego kontynuację
          </i>
          .
        </p>
        <p className="h2_wstep">
          Większość działań, ale nie wszystkie, bo skrajne zagrożenie wymaga
          naprawdę skrajnej reakcji.
        </p>
        <p className="h2_wstep">
          Komunizm, czyli pozytywizm, czyli normatywizm, czyli jakiekolwiek
          żądanie czynu – żądanie go od literatury, która nie przyjmuje żadnych
          żądań, bo sama je stawia – można zwalczać wyłącznie pod warunkiem, że
          nie przyjmuje się żadnej ideologicznej granicy, nawet tej
          antykomunistycznej, że nie żąda się czynu od nikogo, nawet w imię
          walki z obowiązkiem czynu.
        </p>
        <p className="h2_wstep">
          Gdy chodzi o uzdrowienie pola literatury, naprawdę skrajny
          antykomunizm ciągnie w dół komunizm razem z samym sobą: dla pisarzy,
          kiedy piszą, to znaczy wymyślają reguły dla siebie, komunizm i
          antykomunizm stają się równie obojętne, warte siebie nawzajem, bo dla
          nich są jeden i drugi tylko przeszkodą.
        </p>
        <p className="h2_wstep">
          A poczucie wyższości moralnej którejkolwiek ze stron zostaje poniżone
          tak samo, zepchnięte tam, gdzie jest jego miejsce, to znaczy w sferę
          walki o władzę. O władzę, to znaczy: o pierwszeństwo w ustalaniu
          hierarchii wartości dla wszystkich.
        </p>
        <p className="h2_wstep">
          Inaczej niż prymitywny, obsesyjny, paranoiczny antykomunizm, na mocy
          własnej wewnętrznej logiki antykomunizm konsekwentny i skrajny podważa
          sam swoją wartość, demonstrując, że także on musi zejść ze sceny, bo
          wtedy dopiero wartości pola literatury będzie można postawić z
          powrotem z głowy na nogi.
        </p>
        <p className="h2_wstep">
          To dopiero czyn ekstremalny, tak bardzo, że nie widać go wcale.
        </p>
      </div>
    </div>
  );
};

export default Skalski;
