import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";
import jarocka_img from "../../../../assets/jarocka.jpg";
import ubu_img from "../../../../assets/ubu.jpg";
import kurylak_img from "../../../../assets/kurylak.jpg";

const LisRecenzja = () => {
  return (
    <div className="wstep">
      <Link to="/recenzje" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h1 className="h1_wstep_autor">Roman Lis</h1>
      </div>

      <div className="content_wstep">
        <h2 className="h1_wstep_tytul">
          Poezja jako superdestylat ducha ludzkości
        </h2>
        <h3 className="h3_wstep">(cykl recenzji)</h3>
        <h2 className="h1_wstep">I. Ewa Jarocka</h2>
        <h2 className="h1_wstep">1</h2>
        <p className="h2_wstep">
          <b>Wstęp (zawsze inny)</b>
        </p>
        <p className="h2_wstep">
          Jeśli kiedyś dokończę ten cykl (są to pierwsze jego słowa), wtedy
          pokuszę się o wyciągnięcie z zarejestrowanych odkryć (mam nadzieję, że
          takich dokonam, dlatego właśnie rozpoczynam tę pracę) jakichś
          ogólniejszych wniosków na temat poezji, o której mam jak najlepsze
          zdanie od wielu lat. Sam kiedyś też parałem się tworzeniem poezji, ale
          w końcu uznałem, że muszę zrobić małą przerwę w pisaniu, inaczej
          mówiąc chyba zwątpiłem w siebie jako poetę i tak minęło kilkadziesiąt
          lat (jedyną książkę z wierszami wydałem w 1979 r.). Ale czytam poezję
          całe życie i nawet czasem, bardzo rzadko, pisuję recenzje tomików,
          jednak uznawano mnie za krytyka bardzo ostrego, więc przestałem dawać
          się we znaki artystom słowa. Obecnie jednak postanowiłem robić użytek
          z bieżących lektur tego gatunku piśmiennictwa, czyli zapisywać uwagi
          na marginesie wpadających mi w ręce utworów. Nie myślę ani trochę o
          esejach, tylko właśnie o przelotnych myślach, które pojawiają się
          podczas lektury, często są to olśnienia, które gubią się w
          codzienności, a może wyniknie z nich jakiś konkretny obraz
          dzisiejszego świata (tak pomyślałem, wprowadzając rzecz w czyn).
        </p>
        <p className="h2_wstep">
          We wstępie będę zawsze podawał jakieś własne mądrości sensu largo (ale
          proszę się nastawić na impresjowatość myśli, zaś wybór autorów to
          przypadek).
        </p>
        <h2 className="h1_wstep">2</h2>
        <p className="h2_wstep">
          Ewa Jarocka, „Zapalmy moją krew”, Wydawnictwo Kwadratura, Łódź 2022.
        </p>
        <div className="content_photo">
          <img className="img_text_recenzje" src={jarocka_img}></img>
        </div>
        <p className="h2_wstep">
          Poetce tej można zarzucić, że jej wiersze są trochę rozgadane. Ale
          jest to tylko wrażenie, bo okazuje się, że dają się przeczytać do
          końca i nie nudzą. Jest ich jednak coraz większa ilość i czytanie ich
          nie może być przypadkowym zaglądnięciem do tomiku, tylko należy z tego
          zaglądnięcia zrobić serię: w tym celu można książkę położyć gdzieś na
          widoku i sięgać po nią raz po raz. Anna Adamowicz pisze na okładce:
          Jeśli nie interesuje Was ta książka, to po co w ogóle uczyliście się
          czytać? Ale to pytanie to tylko żart, bo jest wiele innych powodów,
          aby poznać te wiersze!
        </p>
        <p className="h2_wstep">
          Podczas czytania wierszy Ewy Jarockiej trzeba zapomnieć, że istnieją
          inni poeci [i poetki]: odkrycia tego dokonałem wraz ze zrozumieniem,
          że tak właściwie jest zawsze podczas czytania wierszy. Ale
          naprowadziło mnie to także na uświadomienie sobie, dlaczego taka myśl
          mi się nasunęła! Chodzi po prostu o sugestywność: podmiot liryczny
          [podmiotka liryczna] mówi o sobie, a ostatnią myślą czytelnika jest,
          że ona coś zmyśla, nawet jej metafory czasem są takie, jakby kpiły z
          poezji [w sposób sympatyczny]. Można uznać, że „bohaterką” wszystkich
          tych wierszy jest ta sama osoba [gdyby się nie wiedziało ile autorka
          ma lat, można by się tego domyślić]: młoda kobieta pochodząca ze wsi,
          wykształcona, ale żyjąca wewnętrznie realiami lasów, gleby, kościołów
          i mamą mówiącą, że [ta] córka ma „nierówno pod sufitem”. [Pisarzom
          pochodzącym ze wsi zdarzało się często słyszeć w młodości takie
          określenia pod swym adresem]. Ta „sugestywność” to umiejętność
          uchwycenia w używanych zdaniach [wyrażeniach – dlatego – poetyckich]
          samej siebie, z którą czytelnik kontaktuje się podczas lektury. Jest
          to zresztą wielka tajemnica twórczości w ogóle: umieć zawrzeć siebie w
          słowach, które w wierszu stają się już nie słowami w ogóle, tylko
          słowami [w tym wypadku] Ewy Jarockiej. Ja to odczucie mam często, że
          poetka mówi z bardzo bliska, bez szamotania się z materią przekazu
          [właśnie słowami]… choć tu zawieszę swój sąd, bo może to być wynik
          albo: 1. mistrzowskiego opanowania własnego warsztatu [i władzy nad
          słowami], albo: 2. natchnienia młodej i szczerej [nie zepsutej w
          sensie rzemiosła] wiary w moc słowa… Ale właśnie dlatego nie ma w tym
          nudy; jakkolwiek jednak od razu wyrażę tu swoją obawę (można ją też
          nazwać nieuchronną konsekwencją): tak nie będzie zawsze! „Stara”
          poetka na pewno nie będzie pisać tylu wierszy na tematy typowe dla
          życia młodej niewiasty, a większa syntetyczność poetyckich wyrażeń
          pojawi się pod wpływem biologicznego ciśnienia po przekwitaniu.{" "}
        </p>
        <p className="h2_wstep">
          Poetka sama najlepiej wyraża tę moją powyższą supozycję: Choć mam
          czterdzieści lat, jeszcze nie umiem o tym opowiedzieć [jest to tytuł
          jednego z wierszy].
        </p>
        <p className="h2_wstep">
          Oczywiście, w wieku późniejszym poetce będzie łatwiej wyrazić to coś,
          ale pozwolę sobie przestrzec ją, że to, co będzie chciała wyrażać
          wtedy, będzie czymś innym i dokładnie tak samo trudnym do wyrażenia.
          Wiersze siedemdziesięcioletniej Ewy Jarockiej trudno mi sobie
          wyobrazić, ale jednak je sobie wyobrażam, tylko nie umiem tego wyrazić
          (zdradzę jednak, że jest to miłe uczucie)…
        </p>
        <p className="h2_wstep">
          Oto piękne momenty robienia poezji mimochodem w tomiku „Zapalmy moją
          krew” [mimochodem, czyli jakby bez wysiłku, z własnej natury poetki]:
        </p>
        <p className="h2_left_bez">
          więc przyjechałam do wioski,<br></br> w której się urodziłam, i
          wąchałam<br></br> deskę z płotu, czy pachnie<br></br> tak samo, a w
          moim ciele tlił się<br></br> strach o losy miasta, nie wiem,<br></br>
          czy gdybym mogła wybrać,<br></br> wybrałabym ludzi z miasta<br></br>
          czy owce i barany
        </p>
        <p className="h2_non_indent">[z wiersza „miastowa”]</p>
        <p className="h2_left_bez">
          jest niedzielny poranek, ptaki krzyczą mi do ucha<br></br>
          niezrozumiałe słowa w ich języku. on jest piękny,<br></br> ale nasz
          język też jest piękny, dlatego piszę nim<br></br> wiersze o ptakach,
          koniczynie, stokrotkach i makach.
        </p>
        <p className="h2_non_indent">[z wiersza „oda do bólu”]</p>
        <p className="h2_wstep">
          Ale niech wystarczą te dwa przykłady, bo zauważyłem też, że wyrwanie
          fragmentu z wiersza Jarockiej zuboża ten wiersz, czyli zastosowanie
          pars pro toto nie jest często w przypadku utworów tej autorki możliwe.
        </p>
        <h2 className="h1_wstep">3</h2>
        <p className="h2_wstep">
          <b>Genus irritabile vatum</b>
        </p>
        <p className="h2_wstep">
          Przepraszam, że to tak mało, ale [publikuję to] dlatego, że znam
          siebie! Gdybym zostawił te kilka zdań, to nie wiem, czy bym do nich
          prędko wrócił, a tak będą pod ręką i będę mógł coś co nich dopisać.
          Genus irritabile vatum [drażliwa rasa wieszczów] – tak w czasach
          starożytnych nazywano środowisko literackie – na pewno może mnie
          wyśmiać za taką recenzję, ale wtedy napiszę jeszcze jedną o tej
          książce!
        </p>
        <p className="h2_podpis">Montrouge, 28 I 2023</p>
        <h2 className="h1_wstep">IV. Monika Luque-Kurcz</h2>
        <h2 className="h1_wstep">1</h2>
        <p className="h2_wstep">
          <b>Wstęp (zawsze inny)</b>
        </p>
        <p className="h2_wstep">
          Kandydat na poetę powinien przede wszystkim zdać sobie sprawę, że nie
          jest prawdą, że wszystko jest poezją. Poezja w ogóle nie istnieje w
          świecie, tylko pojawia się w człowieku pod wpływem słów (w momencie,
          gdy nauczy się rozumieć poezję). [Dotyczy to też kandydatów na
          czytelników poezji]. Brzmi to może dziwnie, ale poezja jest językiem w
          języku, językiem osobniczym we wszechświecie języków znormalizowanych.
          Wszelkie dziwactwa, jakie w wierszu można spotkać, biorą się z tego,
          że poeta używa języka po swojemu, żeby zwrócić uwagę, że podaje
          informacje jednorazowe. W poecie można widzieć prototyp człowieka
          przyszłości, gdy nasz gatunek osiągnie poziom kosmiczny (religie mówią
          o etapie rajskim), a każdy człowiek będzie już mówił własnym prywatnym
          językiem, zaś wszyscy będą go rozumieć, bo będą naturalnie zdolni znać
          wszystkie języki świata.
        </p>
        <p className="h2_wstep">
          Zauważyłem ze smutkiem, że nie ma w Polsce jakiegoś centrum badania
          poziomu poezji w wierszu, choć są do tego warunki: z jednej strony
          solidna kadra naukowa, z drugiej jako doradcy wszyscy ci, którzy i bez
          nauk poezję czują przez skórę duszy. Te powyższe słowa to kpina, ale
          rzeczywistość jest jeszcze gorsza, bo nawet w świecie literackim nie
          ma żadnej jednoznacznej aksjologicznie instancji, która by wydawała
          godne uwagi wyroki np. w rządowej TV. Tymczasem wzrasta produkcja
          wyrobów poezjopodobnych, które wciskają się na rynek bez sygnatury
          jakości, zatruwając ducha społecznego. Ostatnim inkwizytorem poezji
          polskiej był Artur Sandauer (1913-1989), który śledził wszystkich
          poetów polskich i ich książki, a pod koniec roku zdawał publicznie
          relację z ich zawartości. Napisałem dla ekscytacji „inkwizytor”, ale
          krytyk ten nie był nim, spełniał jednak wspaniałą rolę repera
          solidnego poziomu sztuki poetyckiej. W obecnej sytuacji, gdy poetą
          jest każdy, kto opublikuje wiersz, można ulec złudnie pojęciu
          demokracji, która w sztuce nie istnieje: autorzy wierszy są sobie
          równi jako osoby, a nie jako poeci!
        </p>
        <h2 className="h1_wstep">2</h2>
        <p className="h2_wstep">
          Monika Luque-Kurcz, „Portret Ubu”, Podkarpacki Instytut Książki i
          Marketingu, Rzeszów 2021.
        </p>
        <div className="content_photo">
          <img className="img_text_recenzje" src={ubu_img}></img>
        </div>
        <p className="h2_wstep">
          – Drogie dzieci, dziś będziemy się uczyć o czymś, o czym niemożliwe
          jest opowiedzieć własnymi słowami, ani czego nie można streścić, można
          to jedynie powtórzyć! – takie zdanie lub podobne każdy na pewno
          usłyszał kiedyś na pierwszej w życiu lekcji o poezji. Ja też nie mogę
          wyrazić tego lepiej niż Monika Luque-Kurcz w swoich wyznaniach.
          Chciałem napisać „w swoich mamrotaniach”, ale ugryzłem się w język, bo
          przecież gdy ktoś mamrocze, to jeszcze nie znaczy, że nie wie, co
          mówi. Dlatego muszę, niestety, zdradzić już na początku recenzji, że
          autorka stosuje tu wobec czytelnika taką oto słowną zasłonę (czyli
          mówi do góry nogami):
        </p>
        <p className="h2_left_bez">
          moje pisanie<br></br> jest jak mamrotanie pod nosem<br></br> tak
          naprawdę nie obchodzi mnie<br></br> czy ktoś słucha<br></br> czuję
          potrzebę mamrotania<br></br> choćby w centrum placu pigalle<br></br>
          mijam ludzi<br></br> zajętych swoimi sprawami<br></br> tylko czasem
          ktoś rozumie<br></br> jak się ze sobą kłócę<br></br> mówi wtedy
          <br></br> napij się wódki to minie<br></br> już minęło<br></br> każdy
          wiersz jest śmiercią<br></br> umarłam tyle razy<br></br> że mogę się
          tylko śmiać
        </p>
        <p className="h2_non_indent">[* * * (bez tytułu)]</p>
        <p className="h2_wstep">
          Udając, że mamrocze (i śmieje się zza grobu po tylu śmierciach),
          poetka chce też odwrócić uwagę od niewątpliwej hermetyczności swoich
          wierszy. Myślała nawet być może, że tak łatwo pozbyła się nas zupełnie
          (mówię „nas” w imieniu milionów czytelników, czyli także tych z czasów
          przyszłych), ale my jednak tym bardziej nadstawiamy słuchy, bo za
          takie właśnie „momenty” poezję szczególnie lubimy.{" "}
        </p>
        <p className="h2_wstep">
          Jedna z fantastycznych teorii poezji mówi, że wszyscy poeci tworzą
          Poetę Kosmicznego, który jest aspektem Człowieka Kosmicznego
          (Antroposa). Ów non stop kontroluje wszystkie świadomości tworzące
          aktualnie poezję, wtrącając się do tego procesu tym częściej i
          skuteczniej, im konkretny jego awatar dozwala mu „oddać stery”: wtedy
          poeta pisze jakby w natchnieniu, a na pewno pod dyktando siły wyższej,
          o czym artyści słowa wspominają od tysięcy lat. Wielu poetów zna
          dobrze to uczucie, gdy po napisaniu wiersza dziwią się, że sami dany
          tekst napisali. W wierszach Moniki Luque-Kurcz widzę wiele takich
          momentów, gdy w trakcie pisania pozwalała ona swoim myślom poruszać
          się w kierunku, którego sama nie przewidywała, oddając władzę
          daimonionowi. Oczywiście, te momenty są poetycko doskonałe, ale trudno
          je ocenić lepiej niż przedstawiając konkretne cytaty (ale po namyśle
          nie podaję przykładów, bo wyrwane z kontekstu tracą swój blask).
        </p>
        <p className="h2_wstep">
          Nie jest też możliwe ustalenie tożsamości podmiotu lirycznego tych
          wierszy. Najwyraźniej jest to „ja”, które można by nazwać
          metahistorycznym (może są to wspomnienia innych wcieleń), pojawiają
          się reminiscencje jakoby z Holokaustu, a na pewno z rekwizytami
          żydowskimi, wspomniany jest Paryż i okolice (np.):
        </p>
        <p className="h2_left_bez">
          miał w ustach wszystkie<br></br> pejzaże prowansji i rzymu<br></br>
          jedliśmy winogrona<br></br> soki moich owoców spływały do ziemi
          <br></br> jakbym miała się w nim ukorzenić<br></br> jakby paryż był
          moim domem<br></br> i ibsena
        </p>
        <p className="h2_non_indent">[„noc w saint-cloud” (fragment)]</p>
        <p className="h2_wstep">
          Z informacji na okładce tomiku wynika, że poetka urodziła się w Polsce
          w określonym czasie, tak więc powyższe domniemywania mogą dotyczyć
          tylko biografii jej osób wewnętrznych. Niemniej jednak i sam fakt
          urodzenia biologicznego został przedstawiony nam w sposób poetycki,
          daleki od życiorysowych standardów (muszę tu znów zacytować cały
          wiersz, bo inaczej to nie będzie to):
        </p>
        <p className="h2_left_bez">
          odchodzili kolejno zabierając wielkanocne <br></br>
          cukrowe kurczęta <br></br>w porze karmienia puchły powieki <br></br>
          palce należały do boga <br></br>
          przez własną skórę mogłam zobaczyć wszechświat <br></br>
          pękała głowa od drutów wystających ze starego <br></br>
          tapczanu piekły plecy <br></br>
          byłam krzykliwym nieistnieniem drzewem <br></br>
          powalonym na rzece <br></br>
          matka nosiła zimny grysik w piersiach <br></br>
          rodzina dbała o gustowne fotografie <br></br>
          wpadałam w każdą szparę w podłodze <br></br>
          do każdej drzazgi mówiąc - mamo <br></br>
        </p>
        <p className="h2_non_indent">
          [„przyszłam na świat w siedemdziesiątym siódmym”]
        </p>
        <p className="h2_wstep">
          W tym wierszu poczucie humoru i horror istnienia tworzą substancję
          osobną, czyli właśnie to coś, co zobaczone z bliska okazuje się
          poezją: Pani Monika była wtedy tak mała, że wpadała do każdej szpary w
          podłodze, i tak głupiutka jeszcze, że do każdej drzazgi mówiła „mamo”.
          Strach pomyśleć, ale to powinno pozwolić kandydatowi na czytelnika
          poezji zrozumieć, jak delikatna może być natura duchowa poetki. Zdania
          <i> matka nosiła zimny grysik w piersiach</i> na pewno trudno będzie
          zapomnieć, za jego poetycką (oraz egzystencjalną) niezwykłość. W innym
          wierszu poetka wyznaje, że w poezji nie znajduje{" "}
          <i> miejsca na wstyd</i> i że sama mogłaby być wierszem:
        </p>
        <p className="h2_left_bez">
          jeśli kiedyś napiszę wiersz <br></br>
          przesypię się w nim z rąk <br></br>
          prosto do ziemi <br></br>
        </p>
        <p className="h2_non_indent">[„śmierć trwa tylko chwilę”]</p>
        <p className="h2_wstep">
          – traktując twórczość jako potrzebę fizjologii duchowej, mającej
          bezpośredni związek ze śmiercią. To tylko potwierdza fakt
          (wzmiankowany w pierwszym cytowanym utworze), że Monika Luque-Kurcz
          pisze przede wszystkim dla siebie, samej sobie ujawniając, jak pod
          względem słownym wygląda jej własna kondycja kosmiczna (mówię
          „kosmiczna”, bo to brzmi mniej filozoficznie niż „transcendentna”, a
          jest to łatwiej zrozumiane przez tzw. lud). W tym sensie też jest ona
          bardzo dobrym przykładem gatunku człowieka przyszłości, którego
          artyści są prefiguracjami.
        </p>
        <p className="h2_wstep">
          Tu mogę tylko uderzyć się w pierś i przeprosić, że nie zmieściłem się
          na przewidzianej powierzchni pisanej z taką prezentacją dorobku Pani
          Moniki, jaką uznałbym za odpowiednią, ale ciągle nie osiągnąłem
          właściwej ogłady krytycznej (poczekam na następny tomik poetki z
          Ropczyc, może wtedy mi się uda).
        </p>
        <h2 className="h1_wstep">3</h2>
        <p className="h2_wstep">
          <b>Genus irritabile vatum</b>
        </p>
        <p className="h2_wstep">
          To głupie powtarzać za każdym razem, że tytuł rozdziału znaczy
          „drażliwa rasa wieszczów” i że dwa tysiące lat temu poeta Horacy
          nazywał tak środowisko literackie. Jego „List do Pizonów” należy do
          jednej z trzech tzw. poetyk klasycznych i zawiera rady dla poetów,
          które do dziś nie straciły na aktualności. Mówi np., że słowa w
          wierszu <i> powinny się sobie dziwić</i>, jakby spotkały się pierwszy
          raz (co oznacza, że w języku potocznym słowa służą na sposób, którego
          celem jest raczej informacja, a nie to iskrzenie między nimi, które
          właśnie nazywamy poezją). W dzisiejszych praktykach poetyckich myśl ta
          służy w swej formie rozwiniętej, czyli rozumie się, że także związki
          frazeologiczne powinny się sobie dziwić. Inną radą ponadczasową jest
          tworzenie nowych słów; można to zrozumieć tak, że poeta powinien
          wykorzystać swoje osobnicze doświadczenie do wyrażenia swych
          indywidualnych doświadczeń, które jeszcze nie mają nazwy.
        </p>
        <p className="h2_wstep">
          Poeci kłócą się między sobą o wiele częściej niż artyści z innych
          branż, a sama recenzowana poetka przyznaje się nawet do kłótni z sobą
          (patrz wiersz bez tytułu).
        </p>
        <p className="h2_wstep">
          PS: Ja też kłócę się z sobą. I w tej chwili przypadkiem tak przecież
          niedaleko od centrum placu Pigalle (patrz ten sam wiersz bez tytułu).
        </p>
        <p className="h2_podpis">Montrouge, 19 II 2023</p>
        <h2 className="h1_wstep">VII. Józef Kurylak</h2>
        <h2 className="h1_wstep">1</h2>
        <p className="h2_wstep">
          <b>Wstęp (zawsze inny)</b>
        </p>
        <p className="h2_wstep">
          Ilość tajemnic w świecie jest nieznana, ale przy operatywności
          dzisiejszych komputerów na pewno by się dało je policzyć i
          sklasyfikować. Nigdy do tego nie dojdzie, bo ludzie nie lubią zdradzać
          swoich tajemnic, a wiem to stąd, jak trudno mi było spowiadać się
          kapłanowi, gdy byłem katolikiem. Dlatego zacznę inaczej [że]:
          tajemnica jest w świecie tylko jedna, a poezja jest
          najbezpieczniejszym sposobem jej wyrażania. Teraz jest to już dużo
          lepiej powiedziane, ale ponieważ piszę ten cykl recenzji dla
          kandydatów na poetów oraz kandydatów na czytelników poezji, dodam, że
          chodzi oczywiście o tajemnicę istnienia (bo wszystkie inne są od niej
          pochodne).
        </p>
        <p className="h2_wstep">
          Jeden z moich znajomych poetów tak sygnalizuje główną niedogodność,
          jaka się w związku z tym problemem pojawia:{" "}
          <i>
            Ludwig Wittgenstein zwraca jednak uwagę, że język człowieka nie da
            nam odpowiedzi na wszystkie pytania, poeci mają świadomość tego
            ograniczenia, dlatego filozof każe nam szukać sensu życia poza
            granicami języka
          </i>
          <a id="footnote_1_lis_recenzja-ref" href="#footnote_1_lis_recenzja">
            <sup>1</sup>
          </a>
          . Wyznam więc tu od razu, że moją nadzieją od co najmniej dwudziestu
          lat jest powstanie szkoły „języka emocyjnego” [na początek szłoby o
          to, aby uczniowie rozumieli proste emocje słodkie, które nauczyciel
          przesyła im bezpośrednio bez słów, jak też rozpoznawali czyjąś złość
          lub rozdrażnienie nawet wtedy, gdy ten ktoś miło się uśmiecha]. [Takie
          „praktyki emocyjne” są od dawna przedmiotem badań specjalistów od
          empatii i wyższej jej formy, „kumacji” &#123;to nazwa
          tymczasowa&#125;, ale tego wątku nie będę tu rozwijał, to ogólna
          informacja].
        </p>
        <p className="h2_wstep">
          Wybór sposobu dokonywania spowiedzi słowami przed uchem ludzkości
          każdy poeta wybiera sam, zależnie od własnych predyspozycji,
          doświadczeń życiowych, oczytania, poczucia rytmu oraz innych cech
          charakteru własnej osoby. Jeśliby formy wierszy porównać do słoików,
          to daje się ona zakonserwować w sonetach, dytyrambach, satyrach lub
          stanie wolnym, co poeci osiągają dzięki tym umiejętnościom, które
          sprawiają, że nazywa się ich artystami słowa [umieją panować nad
          językiem, wymuszać na słowach nowe sensy, tworzyć neologizmy itp.],
          nie bez powodu nazywa się ich osobami obdarzonymi talentem.
        </p>
        <p className="h2_wstep">
          Cechą typową wypowiedzi poetyckich jest to, że własne tajemnice są
          podawane jako tajemnice człowieka w ogóle [a w ogóle trudno sobie
          wyobrazić, aby nawet najstarsze teksty – np. „Upaniszady” czy „Pieśń
          nad pieśniami” – nie wyrażały czyichś problemów indywidualnych].{" "}
        </p>
        <p className="h2_wstep">
          Można też powiedzieć, że ludzkość wynalazła sobie poezję po to, żeby
          się sobie spowiadać.
        </p>
        <h2 className="h1_wstep">2</h2>
        <p className="h2_wstep">
          Józef Kurylak, „Wojna tajemnic”, Wydawnictwo Nowy Świat, Warszawa
          2002.
        </p>
        <div className="content_photo">
          <img className="img_text_recenzje" src={kurylak_img}></img>
        </div>
        <p className="h2_wstep">
          W lecie 1940 roku w Drohobyczu Józef Kurylak siedział raz w kawiarni
          ze swoją matką. Miał sześćdziesiąt lat, a jego matka miała wtedy
          osiemnaście lat. On miał się urodzić za dwa lata, ale ona jeszcze o
          tym nie wiedziała. Śmiali się, pili kawę. On podziwiał jej zdrową
          jasną twarz i włosy ciemne. Jacyś ludzie nieśli skrzynię drewnianą,
          czarną, pełną polskiej mowy, którą ustawili w pobliskim kościele. Obok
          kawiarni przechodził Bruno Schulz, ukłonił się jego matce, w oczach
          zdawał się mieć żądzę. Nie miał jednak żadnych szans, pociągał nogą
          (czasem geniusz pociąga nogą).
        </p>
        <p className="h2_wstep">
          Opisałem tu własnymi słowami wiersz Kurylaka [napisany w Drohobyczu w
          2000 r.], w którym zstępuje on do piekła własnego ja, sam jednak w to
          nie wierząc:
        </p>
        <p className="h2_left_bez">
          Czyżbym zszedł do inferno mego ja? Lecz się wydaje, <br></br>
          że blask wszechświata nie podlega śmierci, <br></br>
          gdyż nie zauważyłem zmian w jego naturze. <br></br>
          <br></br>Potężniejsza jest ciemność, <br></br>
          która właściwie nie ma źródła. <br></br>
          Do Ostatecznego celu przeznaczona. <br></br>
        </p>
        <p className="h2_non_indent">[„Drohobycz”]</p>
        <p className="h2_wstep">
          Ciemność byłaby zatem potężniejsza? Przyznam się, że trochę tu nie
          rozumiem poety [ale w poezji nie wszystko musi być zrozumiałe, tak jak
          przecież jest w życiu], a zwłaszcza tego, co miałoby być tym
          ostatecznym celem z dużej litery. Obecna fizyka teoretyczna usiłuje
          zgłębić tajemnicę ciemnej materii, która stanowi ponad 80 procent masy
          wszechświata, co chyba warto także przypomnieć przy tej okazji…
        </p>
        <p className="h2_wstep">
          Ale do tematu tego wrócę może później, bo dotąd jeszcze nie
          wyjaśniłem, że to właśnie ciemność, grób, trumna itp. rekwizyty z
          wierszy Józefa Kurylaka sprawiły, że jego samego określa się czasem
          dla żartu poetą cmentarno-księżycowym. Dobrym przykładem klimatu
          takiego utworu, napisanego z dystansem do tematu, jest poświęcony p.
          Ryszardowi Machowi, przyjacielowi poety, wiersz bez tytułu:
        </p>
        <p className="h2_left_bez">
          W nocy jesiennej przed bramą cmentarza<br></br>
          zatrzymuje się smutny, stary wół: <br></br>
          śmierć sobie swoją wyobraża, <br></br>
          wielką zieloną trumnę, wielki dół. <br></br>
          <br></br>
          Lub zakonnica, lub powracający<br></br>
          pies bezdomny z beznadziejnej podróży. <br></br>
          Ubrana tam w żałobę biała róża<br></br>
          pociesza go w jesiennym chłodzie nocy. <br></br>
          <br></br>
          Lub czarny, pusty dziecięcy wózek<br></br>
          nagle podjeżdża i kołysze się, kołysze się<br></br>i znika. <br></br>
          <br></br>
          Czasem diabeł w postaci dziewczynki tam<br></br>
          zapłacze cicho – aż noc drży. <br></br>I ja się w nocy pod tą bramą
          zjawiam, <br></br>a groby plują na mnie – bom zły. <br></br>
        </p>
        <p className="h2_non_indent">[* * *]</p>
        <p className="h2_wstep">
          Pan Ryszard Mach słynął z tego, że należał do tych nielicznych osób, z
          którymi Józef Kurylak lubił słuchać muzyki [poeta jest znawcą i
          miłośnikiem muzyki poważnej]. Nie wszyscy chyba wiedzą, że jeśli
          słuchacz muzyki nudzi się lub jest zniecierpliwiony, wpółsłuchacz może
          współodczuwać jego stan psychiczny, a to może być poważną przeszkodą w
          takim wspólnym słuchaniu. Można by tu zapytać: „A dlaczego słuchacz
          nie słucha sam?” W odpowiedzi wyjaśnia się, że jeśli obaj słuchacze są
          wytrawnymi empatami, to mogą wzajemnie tak podnieść jakość emocji
          słodkich, jakiego nigdy nie osiągnie się w samotności. [Nie mówiąc o
          koncercie, którego wszyscy słuchacze są empatami &#123;a nawet
          pamiętam pewien koncert – wprawdzie tylko jazzowy – po którym muzycy
          wypowiadali się między sobą pod adresem publiczności: „Dobrze
          żarło!”&#125;]. W tym miejscu przepraszam, że nie przestrzegam
          własnego zapewnienia, że nie będę rozszerzał informacji o szkole
          emocji, ale uznałem, że ma to jednak bardzo ważny związek z poezją; a
          poeta ten mógłby w podobnej szkole pracować jako znawca przedmiotu.
          [Dodam tu jednak jeszcze, że słowa „empatia” nadużywa się obecnie w
          trochę innym znaczeniu].
        </p>
        <p className="h2_wstep">
          Innym typowym tematem utworów Józefa Kurylaka jest śmierć. W wierszu
          „Ojczyzna” (dedykowanym naszemu wspólnemu przyjacielowi, Tadeuszowi
          Piekle) wpada on nawet w ton oskarżycielski w tym względzie na
          szczeblu ojczyzny:
        </p>
        <p className="h2_left_bez">
          Znów na rodzinnej ziemi, znów całuję<br></br>i zjadam tę ziemię jak
          chleb. <br></br>
          Twarz mi pożółkła. <br></br>
          <br></br>
          Znów ten las mówiący…<br></br>W nim spotykam świnię, <br></br>
          która wspięła się na drzewo<br></br>i nożem mi wygraża, gdyż zabito
          <br></br>
          jej matkę. Oczy ma od łez czerwone. <br></br>
          <br></br>
          Całuję, zjadam tę ziemię jak chleb, <br></br>
          kompromituję się. <br></br>
          Oni nie rozumieją dźwięku mego dzwonu…<br></br>
          <br></br>
          Gdyż w mojej ojczyźnie<br></br>
          wszystko obraca się w dowcip<br></br>i w seks. Nawet religia i śmierć.{" "}
          <br></br>
          Zwłaszcza wśród inteligencji. <br></br>
          Aż przyjdzie Bóg i poruszy ich świecznik<br></br>i zacznie się
          tragedia ich wieczności. <br></br>
        </p>
        <p className="h2_wstep">
          Słowu „wieczność” należałoby się tu przyglądnąć dokładniej. Dwa lata
          temu Roger Penrose otrzymał Nagrodę Nobla za wykazanie, że w naszym
          wszechświecie istnieją pozostałości z poprzedniej wieczności [trzeba
          tu jednak uwzględnić fakt, że fizycy liczą czas od Wielkiego Wybuchu,
          gdyż czas przed tym momentem nie istniał &#123;czas jest tylko
          aspektem materii, której wcześniej nie było, zaś nie wiadomo, czy tę
          osobliwość, która wybuchła, można na pewno nazwać materią w sensie nam
          znanym&#125;]; a gdyby się okazało, że jesteśmy dziećmi jeszcze
          jakiejś starszej wieczności, powinniśmy się MOŻE uznać za NIE BEZ
          POWODU MAJĄCYCH ROZUM (nazwa podręczna). Jednak tymczasem ta recenzja
          też nabrała właściwości wybuchu, bo rozlatuje się w różne strony, a
          chciałem tylko zwrócić uwagę na czas.
        </p>
        <p className="h2_wstep">
          W świecie Józefa Kurylaka występują elementy fantastyczne, dominuje
          wizja i liryzm. Inny z moich znajomych pisarzy wprowadził osobę poety
          do swego opowiadania, w którym zwierza się on innemu poecie:{" "}
          <i>Andrzej, ja już cały w wizję wszedłem!</i>
          <a id="footnote_2_lis_recenzja-ref" href="#footnote_2_lis_recenzja">
            <sup>2</sup>
          </a>
          . Przykładowym wierszem w tej materii jest „Chłop i piorun”:
        </p>
        <p className="h2_left_bez">
          Oto we wiosce chłop oswoił piorun<br></br>i do pługa go swego
          zaprzągł, <br></br>o zmierzchu w drewnianym domu<br></br>
          spożywają razem kolację. <br></br>
          <br></br>W zimie piorun izbę ogrzewa<br></br>
          lub przed Obrazem odmawia pacierze<br></br>
          albo dziecko kołysze i śpiewa, <br></br> albo jak pies gospodarstwa
          strzeże. <br></br>
          <br></br>
          Czasem po niebie wędruje z chłopem<br></br>
          na wysokościach, jak Faust i Diabeł -<br></br>
          aż tam gdzie wieczny panuje niepokój, <br></br>
          aż tam gdzie dobro nie dociera żadne. <br></br>
          <br></br>
          Coraz częściej piorun wspomina<br></br>
          odczuwając swej duszy boleść: <br></br>
          kiedyś zabił dziecko i dziewczynę, <br></br>
          gdy pod wierzbą schronili się w polu. <br></br>
          <br></br>
          Wczoraj rozmawiałem z nim w półmroku boru, <br></br>
          gdzie zmarłych myśliwski przywołuje róg: <br></br>
          pytał mnie o wiersz, który jak piorun<br></br>
          zabić, spalić wiecznego Boga by mógł. <br></br>
        </p>
        <p className="h2_wstep">
          Analizując ten wiersz zwróciłem uwagę na narrację [bo jest to też pod
          pewnym względem utwór epicki]; a skądinąd mi wiadomo, że poeta nie
          lubi określenia „podmiot liryczny”, uważając, że opowiada zawsze
          poeta. Ja jednak wyraźnie mam tu do czynienia z dwoma narratorami:
          jeden jest ukryty i przedstawia ogólną wiedzę o oswojeniu ognistej
          siły przyrody przez anonimowego chłopa, drugi zaś mógłby być samym
          Józefem Kurylakiem – owszem – jakkolwiek nigdy przecież bym nie
          uwierzył, że zechciałby on kiedykolwiek spełnić to szalone marzenie
          pioruna [!].
        </p>
        <p className="h2_wstep">
          Różne widma pojawiają się w wierszach autora „Wojny tajemnic”. Nawet
          fragmenty życiorysu występują tam w postaci nieziemskiej, np.:
          [bezcielesna] matura chodzi w płaszczu z czarnych świadectw, a szkolne
          koleżanki zmieniają się w miasta:
        </p>
        <p className="h2_left_bez">
          Skrzypią podłogi szkoły w każdą noc –<br></br>
          to moja umarła matura<br></br>w płaszczu z czarnych świadectw<br></br>
          tak chodzi po klasach, bibliotece, korytarzach, <br></br>
          ona mi otworzyła bramy życia<br></br>i zamknie je. Matura-widmo.
          <br></br>
          <br></br>I pięknych koleżanek już nie poznam: <br></br>
          zmieniły się w nieznane wielkie miasta. <br></br>
          <br></br>
          Kochałem bardziej drzewa niż naukę, <br></br>a jednak powinienem
          ucałować<br></br>
          próg szkoły, zanim ucałuję próg śmierci, <br></br>
          chociaż zatarły się, pokryły kurzem<br></br>
          granice między mistrzami a uczniem. <br></br>
        </p>
        <p className="h2_non_indent">[„Liceum Ekonomiczne w Przemyślu”]</p>
        <p className="h2_wstep">
          O stosunku tego poety do zwierząt było głośno już pod koniec XX w.,
          gdy wydał swój tomik „Tragedia zwierząt” [w ekskluzywnym Wydawnictwie
          Gdzie Indziej] , w „Wojnie tajemnic” zaś zamieścił na ten temat taką
          oto miniaturę, która zawsze robiła na mnie duże wrażenie (czytam ją co
          kilka lat):
        </p>
        <p className="h2_left_bez">
          Gdzieś nad Wiarem, w biednej wiosce, <br></br>w której grusze, wierzby
          szumią, <br></br>
          czarny piesek do mnie podszedł<br></br>i powiedział: Ja wiem co to
          jest trumna. <br></br>
        </p>
        <p className="h2_non_indent">[* * *]</p>
        <h2 className="h1_wstep">3</h2>
        <p className="h2_wstep">
          <b>Genus irritabile vatum</b>
        </p>
        <p className="h2_wstep">
          <i>Drażliwa rasa wieszczów</i> [Kwintus Horacjusz Flakkus, 65-8 r.
          p.n.e.] – te słowa usłyszałem pierwszy raz w życiu z ust poety,
          którego tomik tu recenzuję. Było to w maju 1965 r., gdy zamiast do
          szkoły poszedłem na wagary, ponieważ dzień wcześniej ktoś dał mi adres
          Józefa Kurylaka, którego wiersze czytałem często w
          <i> Nowinach Rzeszowskich</i>. Zawsze chciałem go poznać, uważałem, że
          pisze genialne wiersze, a ich świeżość zdumiewa mnie do dziś (poeta
          nie chce do nich wracać, ale myślę, że nie zostaną one zapomniane).
          Dzięki temu w krótkim czasie poznałem twórczość poetów współczesnych,
          czytaliśmy wtedy na tzw. potęgę.
        </p>
        <p className="h2_wstep">
          I tak oto nagle znaleźliśmy się w trzeciem dziesięcioleciu XXI wieku,
          a i recenzja też zbliża się do końca, widzę koniec kartki. A ja
          przecież obiecałem jeszcze rozjaśnić problem ciemności [rozjaśnić
          ciemną stronę kosmosu], a przynajmniej w poezji Józefa Kurylaka. Ale
          nie dalej jak trzy dni temu (już w trakcie pisania tego tekstu)
          natknąłem się w internecie na wykład prof. fizyki teoretycznej
          Krzysztofa Meissnera
          <a id="footnote_3_lis_recenzja-ref" href="#footnote_3_lis_recenzja">
            <sup>3</sup>
          </a>
          , na temat ogólnie zbieżny z ciemną materią. Jest powszechnie wiadome,
          że pewnych rzeczy człowiek nigdy nie pozna (głównie z powodu istnienia
          horyzontu zdarzeń), ale z wykładu wynika, że są też inne postaci
          tajemnic, których na drodze fizyki nie da się rozpoznać. Profesor
          wyciągnął z tego wniosek, że taka niewiedza dobrze nauce robi, ale ja
          chciałbym tu do tego dodać, że w takim razie w naturze kosmosu
          tajemnica jest jego częścią składową na zasadzie konieczności [dla
          istot posiadających zmysły i centralny układ orientacji].
        </p>
        <p className="h2_wstep">
          Tajemnica ciemnej materii jest prawdopodobnie do odkrycia, tak samo do
          odkrycia jest to, dlaczego w wierszu Józefa Kurylaka ciemność jest
          przeznaczona do Ostatecznych celów. Dla mnie jest to ten sam problem,
          różnie wyrażony, jakkolwiek ani [ten] poeta, ani ludzkość [czyli też
          ja] tego na razie nie wiemy.
        </p>
        <p className="h2_wstep">
          Ale jeśli ciemna materia to jest coś, co stworzyło naszą materię?
          Zadałem to pytanie dla żartu jednak, żeby zniszczyć to powstające tu
          odium sztywności i powagi!
        </p>
        <p className="h2_podpis">Montrouge, 1 IV 2023</p>
        <br></br>
        <p className="h2_non_justify " id="footnote_1_lis_recenzja">
          <a href="#footnote_1_lis_recenzja-ref">[1]</a> „Stanisław Dłuski,
          „Władysław Sebyła wobec spraw ostatecznych”, Arcana (nr 169-170),
          2023”;
        </p>
        <p className="h2_non_justify " id="footnote_2_lis_recenzja">
          <a href="#footnote_2_lis_recenzja-ref">[2]</a> „Adam Wiedemann,
          „Prawda”, Twórczość (nr 5), 2009. [Cytowałem z pamięci i popełniłem
          błąd. W oryginale jest: Kurylak się dosiadł do Sosnowskiego i rzekł:
          Wiesz, Andrzej, ja w mojej poezji już całkiem idę w wizję].”;
        </p>
        <p className="h2_non_justify " id="footnote_3_lis_recenzja">
          <a href="#footnote_3_lis_recenzja-ref">[3]</a> „Krzysztof Meissner,
          Fizyka i transcendencja. Wykład Mistrzowski, wygłoszony w Wyższym
          Seminarium Duchownym w Łodzi, 27 III 2023 r.”;
        </p>
      </div>
    </div>
  );
};

export default LisRecenzja;
