import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";

const Kolodziejek = () => {
  return (
    <div className="wstep">
      <Link to="/proza" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h1 className="h1_wstep_autor">Ola Kołodziejek</h1>
      </div>

      <div className="content_wstep">
        <h2 className="h1_wstep_tytul">Patroni</h2>

        <p className="h2_wstep">
          Pierwsze zimno i mgły pojawiały się w dolinach zazwyczaj tuż przed
          naszą urodzinową imprezą. A tego roku wszystko jakoś przyspieszyło.
          Jeszcze ostatni turyści nie zdążyli wrócić do swojej jesiennej rutyny,
          a na umęczone, wypalone sierpniowym słońcem połoniny wpełzała już
          żółć. W przydługich kończynach wyraźnie czuliśmy, że właśnie
          zdmuchnięte trzynaście świeczek na torcie oznacza nie tylko finał
          lata, ale i zostające w tyle dzieciństwo, kurczące się niczym widok w
          tylnej szybie odjeżdżającego autobusu. Choć w sumie świeczek było
          dwadzieścia sześć, a nas było dwoje.
        </p>
        <p className="h2_wstep">
          I tak popołudniowy chłód ulatywał z naszych drobnych ust obłoczkiem
          zimna skrzyżowanego z sinym dymem, bo od kilku miesięcy nałogowo
          paliliśmy papierosy, przez co nieustannie wpadaliśmy w finansowe
          tarapaty. Ale to mało, bo właśnie okazało się, że tonąca w dzwonkach i
          wierzbówkach, skryta w bukowym lesie polana, ta nasza od roku tajna
          palarnia, właśnie została spalona.
        </p>
        <p className="h2_wstep">
          Obecność osób trzecich skonsternowała nas nieco, ale nie byliśmy na
          tyle głupi, żeby dać się przyłapać. Ukryci w wysokiej tymotce
          bezkarnie obserwowaliśmy rozwój wydarzeń. W facecie opartym plecami o
          solidny pień buka bez trudu rozpoznaliśmy wujka Marczewskiego, kuzyna
          taty, właściciela jedynego w naszej wsi sklepu spożywczo-monopolowego.
          Z rozdziawionymi buziami przyglądaliśmy się scence, do dzisiejszego
          dnia znanej nam jedynie z niezbyt skutecznie ukrywanych przez tatę po
          domowych pawlaczach gazet oraz z jednej zajechanej na amen kasety
          video, którą na wagarach katował nas Irek z ósmej b. Tymczasem w gołej
          od pasa w górę kobiecie, klęczącej na mchu plecami do nas, a twarzą do
          wijących się niczym węże wokół kostek dżinsów wujka Marczewskiego,
          poruszającej jak robot głową otoczoną burzą krwawych, przypominających
          berberys loków, nie od razu rozpoznaliśmy mamusię. Scenka ta szalenie
          nam się podobała, nawet gdy już zrozumieliśmy co jest grane. Mimo to
          poczuliśmy, że z zaistniałą sytuacją należy zrobić porządek.
        </p>
        <p className="h2_wstep">
          Działać zaczęliśmy już następnego rześkiego poranka. Tata kiblował na
          nocnym dyżurze, za to mamusia, jak to mamusia, wylegiwała się i
          podsypiała do południa, choćby i w środku tygodnia. Dlatego do szkoły
          zazwyczaj szykowaliśmy się sami. Przygotowałam bratu kanapkę,
          spakowaliśmy zeszyty, fajki, i jak gdyby nic, o siódmej trzydzieści
          wyszliśmy z domu.
        </p>
        <p className="h2_wstep">
          Zamiast do szkoły poszliśmy jednak do sklepu. Pod osłoną porannej
          mżawki i głęboko zaciągniętych kapturów czailiśmy się na tyłach, przy
          kontenerach na odpady, dopóki wszyscy nasi sąsiedzi nie rozpierzchli
          się po domach wraz z poranną mgłą, dzierżąc w dłoniach siatki pełne
          pachnących bułek, mleka i papierosów. Gdy teren był wreszcie czysty,
          przy dźwięku brzmiącego jak dziecięcy chichocik dzwoneczka,
          zamocowanego nad drzwiami sklepiku, wkroczyliśmy do środka. Wawrzyniec
          przekręcił tabliczkę z napisem Otwarte, wiszącą na przeszklonych,
          piegowatych od martwych owadów drzwiach i zasunął zasuwkę. Zamknięte.
          Mój śmiech zabrzmiał jak wesołe echo dzwoneczka. Wujek Marczewski stał
          plecami do nas i układał na półce piramidy z majonezu.
        </p>
        <p className="h2_wstep">
          O trzy paczki fajek, z chujem w charakterze kropki na końcu zdania,
          poprosiłam z zaskakującą lekkością, jakbym chciała kupić gumę balonową
          albo lizaka. Jednocześnie dotarło do mnie, że nie napisaliśmy na ten
          poranek żadnego scenariusza, więc należało oddać się teatrowi
          improwizacji. Gruchnęłam śmiechem, a wujek gwałtownie odwrócił się w
          naszą stronę. Kiedy czemuś nie dowierzał wyglądał jak umysłowo
          opóźniony. Przyglądał się tak, jakby w jego sklepie pojawiła się
          całkiem obca, zakapturzona dwójka dzieciaków. Chyba się przesłyszał.
        </p>
        <p className="h2_wstep">
          Wawrzyniec oparł swoje szczupłe, długie palce na przeszklonej ladzie,
          pod którą niczym fantastyczne, kolorowe puzzle, tkwił obiekt naszego
          pożądania i przyczyna ciągłych kłopotów – setki paczek papierosów,
          wszystkich możliwych marek. Mój brat pochylił się nad ladą niemal
          dotykając czołem okolic serca wujka Marczewskiego. Był od niego o
          połowę mniejszy, ale teraz ich proporcje odwróciły się, wujek
          drastycznie zmalał, skulił jak nasz kotek, gdy tata karcił go za
          niewinne psikusy. Za to Wawrzyniec wyogromniał jak lew.
        </p>
        <p className="h2_wstep">
          Nie, nie przesłyszał się. Trzy paczki miękkich lucky stricków. I
          zapałki. Wawrzyniec zawiesił głos. Chuju. Jego kropka, mocna, jak
          zaciśnięta pięść, przyprawiła mnie o kolejny radosny chichot. Tym
          razem wyrecytowałam coś, co zabrzmiało jak apel na szkolnym wierszu.
          Od dzisiaj, do swojej usranej śmierci, wydajesz nam codziennie po
          ramce szlugów, albo cała wieś dowie się, co robisz naszej mamusi.
        </p>
        <p className="h2_wstep">
          Wieczorem silny wiatr przyprowadził prawdziwy koniec lata. Z dyżuru
          wrócił tata, a mamusia usmażyła racuchy ze śmietaną i jabłkami. Potem
          do późna siedzieliśmy na podłodze w salonie i całą rodziną graliśmy w
          wojnę. Mama, tata, ja – Elżbieta, patronka matek i żon oraz
          Wawrzyniec, patron ogniska domowego, które z kominka wesoło puszczało
          do nas oko.
        </p>
        <h2 className="h2_wstep_right">
          [
          <i>
            Opowiadanie pochodzi z książki pod roboczym tytułem „Zupa z
            pokrzyw”, która pod koniec roku ma się ukazać w wydawnictwie Nisza.
          </i>
          ]
        </h2>
      </div>
    </div>
  );
};

export default Kolodziejek;
