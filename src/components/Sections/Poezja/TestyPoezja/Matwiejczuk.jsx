import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";

const Kitsch = () => {
  return (
    <div className="wstep">
      <Link to="/poezja" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h1 className="h1_wstep_autor">Filip Matwiejczuk</h1>

        <h2 className="h1_wstep_padding">Fragment poematu </h2>

        <div className="content_center">
          <h2 className="h1_wstep">2. Władza i moc</h2>

          <p className="h2_non_justify ">
            Na początku potraktowałem tego Czecha jako fajny element o energii
            anegdotycznej w dłuższym wierszu pisanym w trakcie posiadówy przed
            komputerem
          </p>
          <p className="h2_non_justify">
            Ale później ten utwór z mojej perspektywy wydał mi się posiadać
            znaczniejszy potencjał produkcyjny ale w kontekście większego
            potencjalnego utworu wobec czego Czech stał się jednym z głównych
            elementów maszynki w centrum fabryki ją napędzającego
          </p>
          <p className="h2_non_justify">
            Został fabułą nośną ale nie uważam żeby taki element mógłby
            wytrzymać nieprzerwany proces produkcyjny rozrastającej się fabryki{" "}
          </p>

          <p className="h2_non_justify">
            Wobec czego powinienem go wymienić na bardziej nośny element
            fabularny poprzez sprawne zabiegi konstrukcyjne
          </p>
          <p className="h2_non_justify">
            Dzięki w stopniu zadowalającym wykonanym operacjom na materii
            fabularnej przemienię go w/na coś co wchodzi w pole między częściami
            mechanizmu a „przestrzenią” między nimi
          </p>
          <p className="h2_non_justify">Stanie się tym czego elementem jest</p>
          <p className="h2_non_justify">
            Wchodząc do tej fabryki percepcją ludzką metodą egzemplifikacji
            można zobaczyć wykwity powstałe w trakcie działania również
            posiadające moc w pewien sposób połączone z głównym organem ale
            produkujące dla siebie (w uproszczeniu)
          </p>

          <h2 className="h1_wstep">3. Poszukiwanie</h2>
          <p className="h2_non_indent ">
            Fabryka stwierdziła, że to nie była śmierć naturalna.<br></br>
            Był na świecie jeszcze inny pisarz, którego twórczość<br></br>
            Można by uznać za rzecz osobliwą, a zwłaszcza <br></br>
            Jego nieprzetłumaczalne opus magnum (tak, on również) <br></br>
            <i>Zettels traum</i>, a nazywał się on – Arno Schmidt. <br></br>
            Przeciągnęła się na łóżku i po serii intensywnych <br></br>
            Rozmyślań powiedziała „nie, tego nie można <br></br>
            Nie można tak zostawić” i zadzwoniła do kwestora<br></br>Z zamiarem
            zdobycia pozwolenia na przejęcie śledztwa. <br></br>
            On w tym czasie czytał <i>Pielgrzyma</i> Paula Coelho<br></br>
            Skrupulatnie wykonując każde ćwiczenie polecone <br></br>W tym
            utworze. Po odebraniu telefonu i wysłuchaniu <br></br>
            Tego, co fabryka miała do powiedzenia, powiedział<br></br>
            „Nic z tego nie rozumiem”. „Ja nigdy cię nie, <br></br>
            Ja nigdy cię nie rozumiem”. W tym momencie wiedziała, <br></br>
            Już wiedziała, że nie może tak tego zostawić. <br></br>
          </p>
          <h2 className="h1_wstep">7. Opowieść albo wyprawa</h2>

          <p className="h2_non_indent ">
            Odejście z horyzontu nie jest wykonalne; <br></br>
            Oderwanie, pękniecie jest tylko możliwe, <br></br>
            Ale nie jest wygodne, a przy uszkodzeniach<br></br>
            Wybrakowane miejsca trzeba czymś wypełniać, <br></br>
            Co skutkuje wstępną decentralizacją, <br></br>W której nagle stajesz
            „się” brzęczącą rozgracją<br></br>I przechodzą przez ciebie pasy
            migające <br></br>
            <i>
              Tak wszystko w swym obraca moda kołowrocie, <br></br>
              Tak szybko za nowością, gdy świat cały bieży, <br></br>
              Trudno człowieka poznać w człowieczej odzieży; <br></br>
              Klamry, zapinki, wstążki, całą płeć poryły, <br></br>
              Na tyle ukrępowań lwiej potrzeba siły, <br></br>
              Ośmiu tamy zaparta krew ścina się w biegu, <br></br>I by wolność
              odzyskać czeka aż noclegu
            </i>
            <i>
              Marcinkowski, Kajetan Jaxa (ca 1788-1832) <br></br>
              Zabawy wierszem dla płci
            </i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kitsch;
