import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";

const Wiedemann = () => {
  return (
    <div className="wstep">
      <Link to="/esej" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h2 className="h2_wstep">Wystawy, na których nie byłem (1)</h2>
        <h1 className="h1_wstep_autor">Adam Wiedemann</h1>
      </div>

      <div className="content_wstep">
        <h2 className="h1_wstep">Majtki i nowa sztuka</h2>
        <h3 className="h3_wstep">
          [z okazji wystawy malarstwa Juliusza Lewandowskiego]
        </h3>
        <p className="h2_wstep">
          Biogramy artysty nie pozostawiają wątpliwości: jest to Jeden z
          nielicznych twórców sztuki erotycznej w Polsce bądź też Malarz samouk,
          tworzący prace o tematyce erotycznej. Tak się go właśnie postrzega,
          pójdźmy więc tym tropem, bo jeśli nawet w jego twórczości da się bez
          trudu wyśledzić i wątki polityczne („Polski chaos”, 2022), i religijne
          („W czyśćcu”, 2021), to jednak znakiem rozpoznawczym pozostaje
          powtarzający się motyw gołego chłopaka w majtkach, siedzącego na
          krześle, w fotelu, albo też leżącego na tapczanie. Celowo piszę
          „gołego”, nie jest on bowiem ani nagi, ani ubrany, majtki sytuują go
          gdzieś pośrodku tych dwóch stanów uważanych tradycyjnie za
          przeciwstawne. Erotyzm tych przedstawień jest tyleż niewątpliwy, co i
          nieprzesadny, można by nawet uznać, że widzimy na tych obrazach jakieś
          zwykłe, codzienne sytuacje, chłopak w majtkach jest przecież trochę
          jakby ubrany, a może nawet całkiem ubrany (w przeciwieństwie do
          dziewczyny w majtkach, która ubrana już nie jest), lecz jednak:
          mężczyzna maluje chłopaka, zatem w grę musi wchodzić erotyzm.
        </p>

        <p className="h2_wstep">
          Do sztuki erotycznej nie mam zbytniego zaufania, podobnie zresztą jak
          do np. sztuki komicznej, każda sztuka mająca wywołać jednoznacznie
          określoną reakcję odbiorcy wywołuje ją tylko u określonej grupy
          odbiorców, podzielających albo ten a nie inny typ humoru, albo (w
          przypadku sztuki erotycznej) taką a nie inną orientację seksualną.
          Choć oczywiście zdarzają się też przypadki odwrotne, gdy dzieło nie
          zamierzone jako erotyczne (bądź komiczne) budzi znienacka podniecenie
          albo rozbawienie. Pamiętam swoją niebywałą ekscytację, gdy jako
          dziecko odkryłem w książce „Obrazy Włoch” planszę przedstawiającą
          „Bitwę nagich mężczyzn” Antonia Pollaiuola – nie był to raczej sztych
          zamierzony jako erotyczny, jednak w czasach, gdy przysłowiową „gołą
          babę” można było zobaczyć dosłownie wszędzie, a nagi mężczyzna
          stanowił wciąż tabu, okazał się on dla mnie założycielski, gdy chodzi
          o rozpoznawanie własnej seksualności. Drugą taką rzeczą (tu już
          zbliżamy się bardziej do sztuki Lewandowskiego) była niewinna z pozoru
          dziecięca wycinanka. Przedstawiała ona chłopca w samych majtkach,
          otoczonego mnogością ubrań, które – po wycięciu – można było na niego
          „przywdziewać”, choć dla mnie od ubierania go bardziej podniecające
          było rozbieranie, przy czym jednak nie dawało się zdjąć mu majtek,
          gdyż miał je na sobie „z definicji”.
        </p>
        <p className="h2_wstep">
          Majtki, jak się wydaje, były najpierw elementem garderoby kobiecej,
          rzeźby z kręgu kultury cykladzkiej (3000-1000 r. p.n.e.) przedstawiają
          głównie kobiety w majtkach (jedyny znany mężczyzna jest akurat całkiem
          nagi), są to zapewne jakieś boginie, idolki, nie żadne koleżanki, w
          każdym razie przy daleko posuniętym schematyzmie samego ujęcia wyraźne
          zaznaczenie majtek wydaje się tu ekscesem, budzi zakłopotanie
          naukowców, starających się dowieść, że może jednak nie są to wcale
          majtki (ale w takim razie co?). Jako ubiór najzupełniej zwyczajny i
          codzienny, majtki (oraz biustonosze) pojawiają się natomiast w
          Pompejach, zarówno u kobiet malowanych na ścianach budynków, jak i
          (pełniących dziś funkcję obiektów na poły „artystycznych”) odlewach
          ciał obywatelek zaskoczonych przez wybuch Wezuwiusza. Mężczyźni
          (europejscy) zaczęli nosić majtki znacznie później, co ciekawe: chyba
          w okresie, gdy kobiety przestały się w nie ubierać, gdyż zdjęcie
          majtek pod krynoliną było wręcz fizycznie niemożliwe bez pomocy
          służącej. Być może istnieją przedstawienia wcześniejsze, mnie jednak
          przypomina się „Święty Sebastian” Antonella da Messina (koniec XV-go
          wieku), ma on na sobie ewidentnie majtki i zresztą swoim obojętnym
          wyrazem twarzy przypomina chłopców z obrazów Lewandowskiego (jedynym,
          co te twarze wyrażają, jest „trud pozowania”). Obraz ten jednak należy
          do rzadkości, pozujący malarzom chłopcy okrywali się zazwyczaj jakimś
          perizonium, bardziej stosownym dla osób świętych, w które zazwyczaj
          się wcielali. Zaryzykuję tu tezę, że majtki wkroczyły do sztuki tak
          naprawdę dopiero wraz z wynalazkiem fotografii, gdy robiono studyjne
          zdjęcia modelom, mające posłużyć adeptom malarstwa jako materiał
          ćwiczebny. Modele w majtkach pozowali też kobietom, które coraz
          powszechniej zaczęły sięgać po pędzel, czego przykładem akty malowane
          przez Annę Bilińską-Bohdanowiczową w 1885-ym roku (jak zauważa Paweł
          Leszkowicz, wszystkie majtki na jej obrazach są czerwone, co akcentuje
          newralgiczną strefę i jej podminowany charakter).
        </p>
        <p className="h2_wstep">
          Wraz z początkiem XX-go wieku artyści coraz śmielej zaczęli
          przedstawiać zupełnie nagich mężczyzn, dość wspomnieć autoportrety
          Egona Schiele, rzeźby Adolfo Wildta czy obrazy Kuźmy Pietrowa-Wodkina
          (do tych ostatnich Lewandowski wyraźnie nawiązuje, czemu trudno się
          dziwić, sam przed jego dziełem „Купание красного коня” stałem w
          Moskwie jak urzeczony, choć wcześniej, w czasach szkolnych, miałem
          jego miniaturkę nad biurkiem za szybką, bo był to – podobnie jak
          „Łucznik” Antoine’a Bourdelle’a – „chłopiec dozwolony”). Znaczniejsza
          ekspansja majtek nastąpiła dopiero w sztuce lat 60-ych i 70-ych,
          zwłaszcza anglosaskiej, i miała niewątpliwy związek z rozwojem
          popkultury (sztuka przestała wymagać zupełnej nagości, odsyłającej –
          rzekomo – do czasów antycznych). David Hockney (na słynnym obrazie z
          1972- go roku) przedstawił swój obiekt erotyczny w kąpielówkach i w
          dodatku pod wodą, Joe Brainard posunął się zaś wręcz do malowania
          samych majtek (własnych), opatrzonych datą i tytułem „Self-Portrait”.
        </p>
        <p className="h2_wstep">
          Jeśli chodzi o konteksty bardziej współczesne i rodzime, chciałbym tu
          wspomnieć o dwóch tylko malarzach żyjących i tworzących pośród nas.
          Tomasz Karabowicz portretuje chłopców niemal wyłącznie ubranych
          (zdarzają się też nadzy, lecz to mniej znane przykłady), w nieco
          „prekubistycznej” manierze zaczerpniętej u Modiglianiego, o erotyzmie
          tych prac świadczy zaś zwłaszcza obsesyjne trzymanie się (w ramach
          cyklu) tego samego modela, którym jest niemal zawsze piękny chłopak.
          Majtek na tych obrazach nie widzimy, już raczej ręcznik, pełniący
          funkcję „współczesnego perizonium”. Wojciech Ćwiertniewicz wręcz
          przeciwnie, portretuje za każdym razem kogoś innego, zwykle mężczyzn
          (rzadziej kobiety) zupełnie nagich, na białym tle, zredukowanych do
          własnej cielesności, zarazem jednak dziwnie świetlistych, emanujących
          świetnością człowieczeństwa. Majtki (a właściwie krótkie leginsy)
          pojawiają się w obrazach z tego cyklu tylko raz, na portrecie
          „baletmistrza” (Jerzego Birczyńskiego), który wyraźnie sobie tego
          zażyczył. Również są białe i świetliste.
        </p>
        <p className="h2_wstep">
          Juliusz Lewandowski nie stroni od elementów tła, nie wprowadzają one
          jednak żadnej anegdoty, są ledwie anturażem uzupełniającym istotę
          rzeczy, jaką stanowi chłopiec, w zasadzie pozbawiony indywidualności,
          podobnie jak jego majtki: jednobarwne, bez logo producenta. Są piękne,
          ponieważ służą chłopcu. Wszystko, co tu piszę, służy małemu odejściu
          od postrzegania tej sztuki jako wyłącznie erotycznej. Owszem, erotyzm
          jest w nią wpisany, lecz jednak nie tak zawsze widzimy go „na
          wierzchu”, co moim zdaniem działa wyłącznie na jej korzyść.
        </p>
        <p className="h2_wstep">
          Zredukowałem twórczość Lewandowskiego do paru zaledwie obrazów
          znalezionych w internecie, które mi się spodobały (ale jako erotyczne
          chcą przecież się podobać) i skłoniły do tych tutaj rozważań. Choć
          przecież mógłbym się skupić na czymś zupełnie innym, choćby postaci
          arlekina (zapożyczonej ewidentnie, jak i sama technika malarska, od
          Eugeniusza Zaka) albo rycerza w zbroi. Rycerz to postać z gruntu
          niepociągająca, zdarzają się zresztą obrazy, na których gwałci jakąś
          kobietę (czyżby św. Urszulę?), takich obrazów nie mam ochoty oglądać,
          chłopak w majtkach wydaje mi się najzupełniej wystarczający. I
          zresztą, tak sobie myślę, majtki to też jakby zbroja, nierzadko
          skuteczniejsza.
        </p>
        <h2 className="h2_podpis">[2023]</h2>
      </div>
    </div>
  );
};

export default Wiedemann;
