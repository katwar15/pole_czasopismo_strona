import React from "react";
import { Link } from "react-router-dom";
import "./Wstep.css";
import forward_button from "../../../assets/forward_button.svg";

const Wstep = () => {
  return (
    <div className="wstep">
      <Link to="/" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h1 className="h1_wstep_autor">Piotr Skalski</h1>
      </div>

      <div className="content_wstep">
        <h2 className="h1_wstep_tytul">Koniec. Końcówka</h2>

        <h2 className="h2_wstep">
          ...mówić tak, żeby było słychać. Inaczej położony akcent zmienia sens
          wszystkiego: dlatego pojęli po jakimś czasie niektórzy, że pierwsze
          słowa księgi – <i>Na początku stworzył Pan niebo i ziemię</i> – to
          zaledwie tytuł rozdziału, wcale nie początek opowieści, lecz tylko
          opis jej treści. Punkt wyjścia przedstawiony jest tutaj, to są
          pierwsze słowa:
          <i> Ziemia była męt i zamęt, ciemno było nad odmętem</i>. Dopiero
          wtedy – kiedy? – ów <i>duch</i>, co <i>unosił się</i> cały czas{" "}
          <i>nad wodami</i>, podjął decyzję – w końcu – by nadać porządek owej
          materii bez kształtu, i zaczął, tak się złożyło, od światła.
        </h2>
        <h2 className="h2_wstep">
          Dlatego warto mieć na względzie, że cofnięcie dzieła stworzenia jakimś
          aktem kosmicznego terroru nie wrzuciłoby nas w nicość kompletną, lecz
          zaledwie w świat bez ładu i składu, w którym nic znaczącego jeszcze
          się nie stało, ale wciąż może stać się wszystko, nawet światło, góra i
          gołąb, tak dla przykładu.
        </h2>
        <hr className="hr_line"></hr>

        <h2 className="h2_wstep">
          Tu leży <i>Pole</i>.
        </h2>
        <h2 className="h2_wstep">
          Jeśli po czasie ktoś nas wspomni, gdy cała reszta zapomni, dostrzeże
          być może coś, w co dziś jeszcze trudno dowierzać, jakiś przejaw
          szerszej woli „odtrzeźwienia” (retoksykacji, jeśli tak wolicie):
          ludzie, niektórzy ludzie, w tym nasi przyjaciele z innych „młodych
          czasopism”, czują, że wciąż jesteśmy zbyt trzeźwi.
        </h2>
        <h2 className="h2_wstep">
          Dane o wzrastającym w naszej ojczyźnie spożyciu środków odurzających
          nie mają nic do rzeczy.
        </h2>
        <h2 className="h2_wstep">
          Poczucie, że jesteśmy w życiu umysłu i ciała jak konie prowadzeni za
          uzdy, budzi chęć wyuzdania tym potężniejszą, im większą wartość
          zyskuje dla nas zawartość obecnej chwili. „Jutro” jest pojęciem
          zdecydowanie przecenionym.
        </h2>
        <h2 className="h2_wstep">
          To nasza pierwsza sugestia. Zaczynając, obiecać można wszystko,
          wzniośle i dumnie, byle ogólnikowo, żeby nas potem nie chwycono za
          słowo. Program albo manifest to obwieszczenie początku, a początek
          (projektu) to wizja przyszłości – gdy pierwsze słowo zafrunie w
          chmury, nie ma wyjścia, trzeba klęknąć, potem wyjść w pole orać, ze
          świadomością, że jakieś oszustwo wleczemy za sobą, coraz bardziej
          znudzeni. <i>Od czegoś trzeba zacząć</i>... Pismo nie musi zaczynać od
          początku, może też zacząć od końca. Na wypadek, gdyby{" "}
          <i>to jedno po nim zostało</i> – gdyby ciągu dalszego z
          najróżniejszych powodów nie było.
        </h2>
        <h2 className="h2_wstep">Nie wiem, może się znudzimy.</h2>
        <hr className="hr_line"></hr>

        <h2 className="h2_wstep">
          Nie ma jednego przepisu na zrzucenie uzdy, lecz próby wyuzdania
          przyjmują często formę uczynniania zaspałych organów, a nawet
          tworzenia organów całkiem nowych.
        </h2>
        <h2 className="h2_wstep">
          Najpożyteczniejszy organ to taki, który co prawda spełnia przypadłą mu
          funkcję, lecz zarazem ożywia się i usamodzielnia w niespodziewanych
          dla nas momentach, jakby działał sam z siebie. Poruszony zostaje przez
          podnietę, która omija rozum i czasem całkowicie zaślepia, kieruje się
          w strony, których organizm nie przewidział, i sonduje, eksploruje,
          omijając pytania o cel, granice i wartość.
        </h2>
        <h2 className="h2_wstep">
          Plotka, podtrzymywana przez założycieli Związku Pisarzy ze Wsi, że od
          początków jego powstawania towarzyszył mu śmiech, pierwszy raz podczas
          libacji – w mieście – gdy powiadomiono towarzystwo o planach jego
          stworzenia, niesie ze sobą prawdę, która stanowi sam materiał
          genetyczny <i>Pola</i>: jesteśmy poważni, ale w granicach śmiechu.
        </h2>
        <h2 className="h2_wstep">
          Geneza <i>Pola</i> to oczywiście co innego niż jego treść, tak jak
          skutek nie zawiera się w przyczynie. Związek, który postanowił na boku
          wydawać dwumiesięcznik, ma własne reguły i sposoby ich łamania,
          <i>Pole</i>
          ma całkiem inne, redakcja nie składa się wyłącznie z członków Związku,
          a zawartość pisma nie jest dyktowana, lecz współkształtowana jedynie
          przez nominalne zainteresowania Związku, którego tworzymy niespokojny
          i chutliwy organ.
        </h2>
        <h2 className="h2_wstep">
          W sumie: aktualny kształt <i>Pola</i> to nic innego jak wytwór
          bodźców, które wpychają nas – pod wpływem wieloletnich pasji, ale i
          przelotnych chwil – w działanie tak nieproduktywne i może nawet
          pozbawione perspektyw na przyszłość, jak pisanie, publikowanie i
          redagowanie, składające się w całość, którą skądinąd podejrzewamy
          nieskromnie o oryginalność zgoła bezprecedensową.
        </h2>
        <h2 className="h2_wstep">
          To stanowi nasz „program” i stanowić go będzie w przyszłości, o ile
          numer zatytułowany „Koniec” nie okaże się proroctwem, o które
          najwyraźniej tak bardzo się prosimy.
        </h2>
        <hr className="hr_line"></hr>

        <h2 className="h2_wstep">
          „Koniec” to nie tyle temat, co postawa. Zapisywanie zdania, całego
          tekstu, całego życia można wyobrazić sobie jako serię decyzji, z
          których każda kolejna wybiera jedną możliwość z nieskończenie wielu,
          stopniowo opuszczając chaos na rzecz pewności – pozornej zresztą –
          określonej myśli zamkniętej kropką czy też śmiercią. Za pomocą
          operacji inwersji (inspirację, zapewne powierzchowną, czerpię tu z
          „Elaboratu” Donata Kirscha) odwrócić można zależność między zamkniętym
          końcem i otwartym początkiem, potraktować to, co dobiegło końca, jako
          punkt wyjścia ruchu stopniowego otwierania możliwości aż do momentu,
          gdy na skutek kolejnych naszych decyzji wszystko rozsypie nam się w
          pył i możliwe znowu okaże się wszystko.
        </h2>
        <h2 className="h2_wstep">
          <i>Pole</i> złożyło autorów „Końca” – w większości żywych – na
          cmentarzu nie tylko dlatego, że lubimy czarny humor. Dziś cmentarze to
          przeważnie obszary lśniących ohydą nagrobków, rytuałów
          zinstytucjonalizowanej religii, ściętych drzew i zapomnianych kości.
          Historycy przypominają jednak, że był w Europie czas nie tak dawny,
          gdy cmentarz nie był – albo nie był głównie – miejscem, gdzie chowano
          zmarłych. Był natomiast azylem, oazą dla zbiegów, miejscem wolności,
          rozwijającym się w publiczne forum, miejsce spotkań, świętowania i
          zabawy; przez wieki bezskuteczne pozostawały zarządzenia kościelne,
          które groziły ekskomuniką za <i>tańce na cmentarzu</i>.
        </h2>
        <h2 className="h2_wstep">
          W geście inwersji postanowiliśmy zatańczyć na cmentarzu, a wy zróbcie
          z tym, co chcecie.
        </h2>
        <hr className="hr_line"></hr>

        <h2 className="h2_wstep">
          <i>Pole</i> z góry przeprasza osoby, które by mogły poczuć się urażone
          treściami obecnymi w tym piśmie. Będzie to tylko i wyłącznie
          rezultatem błędu redaktorskiego.
        </h2>
      </div>
    </div>
  );
};

export default Wstep;
