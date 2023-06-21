import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";
import dabrowski_img from "../../../../assets/dabrowski.jpg";

const Dabrowski = () => {
  return (
    <div className="wstep">
      <Link to="/recenzje" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h2 className="h2_wstep">Pola semantyczne (1)</h2>
        <h1 className="h1_wstep_autor">Jakub Dąbrowski</h1>
      </div>

      <div className="content_wstep">
        <h2 className="h1_wstep_tytul">Ontologia smutku</h2>
        <h3 className="h3_wstep">
          Unica Zürn, „Trąby jerychońskie”, przeł. Małgorzata Łukasiewicz i
          Maryna Ochab, Wydawnictwo Drzazgi, Okoniny 2021
        </h3>
        <p className="h2_wstep">
          Minął już ponad rok, od kiedy w Wydawnictwie Drzazgi ukazały się
          „Trąby jerychońskie” Uniki Zürn. Książka spotkała się z przychylnym
          przyjęciem. Gdzie zatem szukać usprawiedliwienia dla czernienia
          papieru? Być może jedyną wymówką jest próba przywrócenia czytelnikom
          takiego obrazu artystki, który nie jest zbyt obciążony naszymi
          własnymi strachami, słabościami i życzeniami. Jednak czy starczy nam
          odwagi, by spojrzeć Unice w oczy i dojrzeć tam jej własne myśli
          i uczucia, a nie tylko nasze własne odbicie? W katalogu do wystawy
          poświęconej Unice Zürn w Muzeum Sztuki i Historii Szpitala św. Anny
          (MAHHSA), gdzie przebywała artystka w krytycznych okresach, dr
          Anne-Marie Dubois pisała na temat interpretacji jej sztuki:
          <i>
            {" "}
            życie, nierzadko tragiczne, odcisnęło swoje piętno na jej
            twórczości, była przedmiotem najróżniejszych fantazji oraz projekcji
            wyobrażeń czy interpretacji
          </i>
          . Widziano w niej uciemiężoną męskością partnerkę Hansa Bellmera
          (zwłaszcza na popularnym zdjęciu, na którym jej ciało obwiązane jest
          sznurkami i przedstawione w ironicznym komentarzu
          <i>przechowywać w chłodnym miejscu</i> jako szynka), zgwałconą ofiarę
          własnego brata czy chorą psychicznie osobę, nie potrafiącą odnaleźć
          zdrowia. Spróbujmy jednak sztuce oddać sprawiedliwość, a autorce jej
          własny głos.
        </p>
        <p className="h2_wstep">
          Trąby jerychońskie słyszymy wyraźnie. Ich dźwięk zwyczajowo kojarzymy
          z walącymi się murami. To, co wali się w tych opowiadaniach, to
          jedność. Wśród gruzów znajdujemy właściwy temat książki – obiekt.
          Brzmi to niemal trywialnie. Chciałoby się odrzucić go jak jakikolwiek
          kamień. Jednak krótka chwila zabawy, powierzchowna analiza konturów,
          zaczyna budzić w nas dziwną ciekawość, potem zaniepokojenie, aż
          wreszcie, nie mogąc przestać o nim myśleć, zaczynamy podejrzewać się o
          szaleństwo.
        </p>
        <p className="h2_wstep">
          Sztuka Uniki Zürn jest obiektywna. Nie powinniśmy jednak rozumieć
          przez to podejścia, które sili się na zachowanie dystansu, wycofuje
          to, co szczegółowe, indywidualne na rzecz wszechobejmującego ogółu. W
          jej opowiadaniach wychodzimy właśnie na spotkanie temu, co
          jednostkowe. Najmniejszy przedmiot, materialny lub nawet zjawisko,
          obiekt jako coś, co wpada nam pod nogi, pod powieki, pod myśl. To
          wszystko pędzi w błyskających czarnymi łuskami wężowatych linijkach
          jej historii.
        </p>
        <p className="h2_wstep">
          Zdolność oraz dążenie Zürn do szczególnie rozumianej obiektywizacji
          widać już od pierwszego opowiadania „Ciemna wiosna”. Autorka tworzy w
          nim wyjątkowy obraz z okresu dojrzewania. Przypuszczalnie wiele z
          opisywanych wspomnień w umyśle dorosłego człowieka powinno być już
          zatartych. Zürn jednak przedstawia nam niezwykle wyraźny zapis z
          początkowego okresu życia. Abstrahuje go, wycina z resztki własnej
          istoty i stawia przed nami siebie w swoim literackim wspomnieniu,
          ufając, że może liczyć na naszą uwagę. Zgodnie z obecnymi trendami
          moglibyśmy czuć pokusę, aby nazwać ów proces przewrotnie „reportażem z
          życia wewnętrznego”. Moglibyśmy wierność szczegółowi poczytać za
          dziennikarską zaletę, za cnotę precyzji i wierności prawdzie. Wysuńmy
          jednak przeciwną tezę: tylko dzięki fikcji literackiej możliwe staje
          się uchwycenie obiektu. I prawdy. Dzięki językowi i słowom możliwe
          staje się stworzenie nowego obiektu – żywego wspomnienia dzieciństwa
          z jego wybranymi barwami.
        </p>
        <p className="h2_wstep">
          Żeby jednak to nastąpiło, trzeba słowo po słowie skroplić w sobie
          wizję opisywanego okresu jako obiektu, odsunąć go od siebie na
          odpowiedni dystans, wyobcować, wyciąć z siebie. Bez fikcyjnego
          laboratorium języka byłoby to niemożliwe. Centrum tego procesu
          językowego zajmuje anagram. Podkreśla on indywidualną wartość liter
          oraz nieskończone możliwości abstrahowania z nich kolejnych,
          indywidualnych bytów. Bez transformacyjnych możliwości anagramów, bez
          słownych obrazów, bez zlewających się wizji umknęłoby nam wszystko to,
          co dostrzegają zmysły,
          <i>
            {" "}
            język który jest w stanie wyrazić cały smutek świata i którego nikt
            poza nimi [Uniką i Elisą] nie rozumie. Ten język składa się jedynie
            z samogłosek
          </i>
          . Wyraz „samogłoska” pozwala dostrzec to dodatkowe znaczenie wewnątrz
          języka, które łączy go z obiektywną, indywidualną strukturą świata i
          pozwala na odzwierciedlenie własnej samotności w języku. I chociaż
          chodzi w tym pisaniu wciąż o tę samą osobę, to nie postrzegamy jej już
          w jej jedności oraz ciągłości, ale zaczynamy obserwować w miriadach
          drobnych gestów, zdarzeń, dni, wydarzeń. Jakby szklana powierzchnia
          klepsydry, sztucznej, antropogenicznej zabawki, pilnującej spokojnego,
          mierzonego naszą miarą przepływu barwnych oblicz świata, roztrzaskała
          się. Objęte kształtem szkła ziarenka rozsypują się szybko w chaosie
          indywidualności. Powierzchnia wspomnień staje się nagle nieco bardziej
          chropowata. Można niemal wyczuć fakturę i załamania słów, literackiego
          i wspomnieniowego materiału. W ten sposób konstruuje się przed nami
          oraz przed samym autorem kolejny obiekt-obraz. Jak laboratoryjny
          homunkulus, niekoniecznie brzydki i pokraczny, ale dzięki ręce mistrza
          budzący podziw, obciągnięty krwawym mięsem, jak żywy.
        </p>
        <p className="h2_wstep">
          W pierwszym opowiadaniu jednym z najważniejszych obiektów jest męski
          członek.
          <i>
            {" "}
            Obserwując swojego brata dowiaduje się, co kryje się w spodniach.
            To, co widzi między jego nogami, kiedy brat rozbiera się do snu,
            kojarzy się jej z kluczem, ona sama nosi na łonie zamek do niego
          </i>
          . Ten klucz otwiera Unikę na tajemnicę. Penis staje się wzorem
          obiektu, jednostkowości oraz izolacji. Jako symbol uwidocznić może się
          w każdym bycie, równie dobrze w języku matki:
          <i>
            {" "}
            kobieta rzuca się na dziewczynkę z otwartymi, wilgotnymi ustami,
            skąd sterczy drgający język, długi i nagi jak ta rzecz, którą brat
            chowa w spodniach
          </i>
          . Może też z klucza przemienić się w nóż, który przekształci zamek w
          ranę:
          <i> Rzuca się na nią i wbija „nóż” (jak to nazywa) w jej „ranę”</i>.
          Kolejne porównanie podkreśla pierwotność członka jako symbolu oraz
          łączy go z doświadczeniem bólu. Odtąd penis, obiekt będący symbolem
          wszystkiego co jednostkowe, jest świadectwem procesu, który pozostawia
          po sobie ranę: ową raną z kolei jest obiekt, którego główną cechą jest
          to, że jest tautologiczną całością zamkniętą w sobie samej i
          oddzieloną od reszty. Stawać się, istnieć, to nosić bolesną ranę,
          która przywołała nas do jednostkowego istnienia z białej nicości; to
          nosić skórę, która oddziela nas od świata. I być może tym jest ciemna
          wiosna, początkiem, który jest zawsze bolesny, kwitnieniem, które
          wzrasta w bólu. Życiem, które rozwija się w cierpieniu.
        </p>
        <img className="img_text" src={dabrowski_img}></img>
        <h2 className="h2_podpis_img">
          Tomasz Przybyłek, <i>bez tytułu</i>, rysunek piórem kulkowym
        </h2>

        <p className="h2_wstep">
          Podobny zabieg jest również doskonale widoczny w „Mężczyźnie w
          jaśminach”, gdzie obiektywizacji ulega choroba psychiczna.
          Zdumiewające jest to, w jak genialny sposób oraz z jaką łatwością Zürn
          potrafi spojrzeć z dystansu na siebie samą i przedstawić w doskonałych
          detalach trudne i bolesne przeżycia, traumatyczne doświadczenie i
          zaburzenia, które raczej kazałyby nam patrzyć na jej opowiadania z
          nieufnym dystansem, jaki możemy lekceważąco okazać cierpiącym i
          chorym. Nic z tego. W wyraźnych obrazach, w porażających swoją
          poetycko-intuicyjną przejrzystością metaforach odmalowuje ona w dziele
          literackim to, co dla słabego ciała i umysłu może pozostać zakryte.
          Opisane w „Mężczyźnie w jaśminach” szaleństwo jest tak kompletne, że
          wydaje się, że zamykając ten utwór, autorka niemal całkowicie
          wyrzuciła z siebie chorobę. W jakimś sensie to przerażające, że
          szaleństwo da się opisać tak jasnymi i trzeźwymi słowami.{" "}
        </p>
        <p className="h2_wstep">
          Triadę domyka ponury opis ciąży w ostatnim opowiadaniu. Ciąża
          przedłuża tu zapoczątkowany przez członek bolesny ciąg bytu obiektu,
          który znajduje swoje zwieńczenie w największym bólu – porodzie. Tym
          boleśniejszym, że niepożądanym. Po tym kolejnym rozdarciu i
          wyabstrahowaniu z siebie następnego bolesnego obiektu-obrazu
          zastanawiamy się, co jeszcze skrywa w sobie Unica? Czy w swoim dążeniu
          do obiektywizowania nie zredukowała samej siebie do końca? Co zostało
          z niej samej? Być może w pędzie tworzenia z siebie kolejnych obiektów
          zawiera się paradoksalne pragnienie śmierci, wymazania własnej
          indywidualności? Zürn wyszywa dla nas najpiękniejszą koronkę,
          zawiązuje supełki, łączy kolejne nitki i bez końca, w gorączce tka z
          siebie rzędy biało-krwawej tkaniny. W pewnym momencie zaczynamy razem
          z Uniką osuwać się we fraktalne fermentowanie słownej piany.
          Galopujące w anagramach wyrazy obłażą obrazy i myśli jak mrówki, aby
          jeszcze wyraźniej zarysować je swoim czarnym konturem i w tym samym
          momencie pożreć. Autorka sama dezintegruje własną ciągłość w kolejnych
          obrazach-obiektach, wspomnieniach, które z kolei składają się z innych
          obiektów, które żyją jedynie w słowach, w literach, w pojedynczych
          punktach. Ta konieczność indywiduacji oraz izolacji jest w uniwersum
          Zürn niezbędna do stworzenia doświadczenia. Postrzegać, to
          wyodrębniać, ujednastkawiać, kaleczyć, rozkładać, uprzedmiatawiać,
          czyli obiektywizować. To puszczać czarne bańki, które przy najlżejszej
          próbie kontaktu i zespolenia pękają. W pewnym momencie trudno jednak
          znaleźć granicę i odróżnić autorkę od opowiadania oraz kolejne obiekty
          jej uniwersum od niej samej. Wszystko przenika się w wielowymiarowych
          płaszczyznach niedostępnych dla ludzkiego oka.
        </p>
        <p className="h2_wstep">
          Takie podejście do obiektu wpisuje się w szersze starania ruchu
          surrealistycznego o wyzwolenie przedmiotów spod ludzkiej zależności.
          Jednak wyjątkowa rola, jaką Unica przypisuje obiektowi, pozwala
          widzieć w jej twórczości początki czegoś, co obecnie nazywamy
          <i>ontologią zorientowaną obiektowo</i> (ang. object oriented
          ontology). Dzięki ujawnieniu oraz opisaniu mechanizmów indywiduacji
          oraz wyłaniania się obiektów w kolejnych separacyjnych cięciach
          zyskujemy wgląd w genezę nowej metafizyki, która, stawiając obiekt w
          centrum filozoficznych dociekań, uwalnia go od antropologicznych
          zależności i epistemologicznych pułapek. Wyzwolenie obiektu spod
          władzy iluzji ludzkiej, spajającej świadomości ma jeszcze jeden aspekt
          istotny z punktu widzenia opowiadań Zürn. Całkowicie zmienia się
          relacja pomiędzy człowiekiem a obiektem. Między tym co na zewnątrz i
          wewnątrz. Jedynie ktoś, kto podąża za freudowską psychoanalizą,
          konstruującą ludzką jaźń w kolejnych coraz szerszych pierścieniach
          świadomości zanurzonej w tym, co nieświadome, może uznać Zürn za osobę
          „szaloną”. W takim wypadku tradycyjne, hierarchiczne mechanizmy
          ludzkiej jaźni działałyby u niej w sposób dysfunkcyjny, powodując
          chorobę. Jeśli usuniemy antropocentryczną relację podmiot-przedmiot i
          zastąpimy ją ontologicznie niezhierarchizowaną relacją oddzielnych,
          ale oddziałujących na siebie obiektów, to w pełni objawi nam się
          mediumiczno-tragiczna zdolność Zürn do wiernego oddania rzeczywistości
          przedmiotu. Należy przy tym pamiętać, że mówiąc „przedmiot” lub
          „obiekt”, nie mamy na myśli tylko przedmiotu materialnego. Dla Zürn
          obiektem jest także przedmiot myśli, abstrakt.
        </p>
        <p className="h2_wstep">
          Opowiadania Zürn cechuje więc nie tylko wyjątkowy kunszt literacki,
          lecz również umiejętność, która najwyraźniej przesądza o ich wartości
          artystycznej – przedstawiają wyjątkowość ludzkiego doświadczenia,
          bezpośrednio zakotwiczonego w ontologii obiektu. Jej zdolność do
          przedstawienia i osadzenia tego obrazu w kategoriach filozoficznych
          sprawia, że komunikowane przez nią uczucie wsącza się od razu w
          najgłębsze pokłady naszych wnętrzności. Trzewia czytelnika od
          pierwszego zdania zalewane są przez wody, które rozerwały zaporę
          smutku.
        </p>
        <p className="h2_wstep">
          Czytając Zürn, zagłębiamy się w jej doświadczenie nie tylko dzięki
          kunsztowi samej opowieści. Widzimy w jej historii pokłady szczerych
          emocji, miażdżących przeżyć. Jako postać Unica ma coś z bohaterów
          tragedii, którzy poruszani boskimi siłami nie są w stanie decydować o
          własnym losie. Jej przygniatające cierpienie, pomimo swojego ogromu,
          nie budzi w nas poczucia sztuczności, które podważyłoby zaufanie do
          pisarki. Jej cierpienie nie wypełnia nas paraliżującą i egoistyczną
          litością, która chciałaby przekrzyczeć bohaterkę. Głosy, które słyszy
          Zürn, halucynacje, które ją przerażają, ale których nie chce się
          pozbyć, miotają nią jak Kasandrą, której nikt nie chce zaufać,
          uwierzyć w ich brutalne piękno. Łatwiej zamknąć ją w jej własnym
          szaleństwie, zatrzasnąć za nią drzwi szpitala i razem z nią zamknąć w
          domu dla obłąkanych całe kosmiczne cierpienie tego świata: być może
          jedyną rzecz naprawdę godną uwagi.
        </p>
        <p className="h2_wstep">
          Zestawienie tych dwóch elementów – obiektywności obiektu jako elementu
          porządku ontologicznego oraz doświadczenia cierpienia – składa się na
          tytułową ontologię smutku. W dziełach Zürn porządek rzeczy jest
          namacalny. Wiedza w tym wypadku nie prowadzi nas jednak ani do dobra,
          ani do akceptacji (przynajmniej spontanicznej), ale raczej do długiego
          pasma cierpień, które wynika z konieczności podporządkowania: zasadom,
          regułom, innym obiektom, zdaniom, osobom. Nie ma ucieczki od izolacji,
          nie ma schronienia w całości. Szerokie ramiona, kojące i spajające
          całość bytu, są tylko iluzją, migającą grą ziarnistych paciorków.
          Duszącym pięknem białej koronki. Śnieżna tkanina świata została
          rozcięta stwarzającym nożem. Od teraz możemy tylko dzielić, separować,
          obiektywizować i pomnażać rany. Jeżeli system Leibniza był monadyzmem
          obiektów, umieszczonym w najlepszym z możliwych światów, to monadyzm
          Zürn jest monadyzmem czarnym, który polega na bolesnej samoświadomości
          przedmiotów, które, będąc w skomplikowanych relacjach z każdym
          elementem otoczenia, nie potrafią przezwyciężyć własnej
          indywidualności i skazane są na powolne wykrwawianie się z rodzącej
          rany obiektywizacji. Bóg nas zgwałcił i zagroził stwórczym palcem,
          abyśmy nie pisnęli słowa matce.
        </p>
      </div>
    </div>
  );
};

export default Dabrowski;
