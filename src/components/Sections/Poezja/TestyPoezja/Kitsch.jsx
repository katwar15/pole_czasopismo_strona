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
        <h1 className="h1_wstep_autor">Samantha Kitsch</h1>

        <h2 className="h1_wstep_padding">Trzy wiersze</h2>

        <div className="content_center">
          <h2 className="h1_wstep_padding">Sestyna z dawnych lat</h2>

          <p className="h2_non_indent ">
            [na oponie w dół lodowca na czczo bez zgrzytów i żadnych wątpliwości
            pod tęczą!]
          </p>
          <p className="h2_non_indent ">
            Celem naszej wycieczki był lodowiec.<br></br>
            Aby z niego pozjeżdżać, taszczyliśmy ze sobą oponę, <br></br>
            co było uciążliwe, zwłaszcza na czczo; <br></br>
            nawet drobne potknięcie wywoływało w żołądku niemiły zgrzyt –
            <br></br>
            lecz zaplanowaliśmy śniadanie dopiero pod tęczą. <br></br>
            Milczeliśmy – każdy z nas ukrywał niejedną wątpliwość,
          </p>
          <p className="h2_non_indent ">
            lecz widok z przełęczy zwyciężył wszelkie wątpliwości: <br></br>
            mgła rozwiała się, ostro błysnęła tęcza, <br></br>a niedaleko nad
            nią szklił się lodowiec, <br></br>
            na którym ktoś przez lornetkę dostrzegł ślad opony. <br></br>
            Hurra! pozjeżdżamy aż będzie zgrzytać! –<br></br>
            lecz najpierw zasiedliśmy do śniadania, jako że byliśmy na czczo,
          </p>

          <p className="h2_non_indent ">
            bo lżej podchodzi się pod stromą górę na czczo, <br></br>
            zwłaszcza dźwigając potężną oponę –<br></br>a według planu
            przyjemność miała się zacząć dopiero po tęczy –<br></br>
            więc pochłanialiśmy śniadanie, aż zęby zgrzytały, <br></br>i
            przekrzykiwaliśmy jeden drugiego, bo nikt już nie miał wątpliwości,{" "}
            <br></br>
            że rewelacyjnie udadzą się zjazdy po lodowcu.
          </p>

          <p className="h2_non_indent ">
            W jakiej euforii stawialiśmy pierwszy krok na lodowcu! <br></br>
            Pełni energii – wszak nie byliśmy już na czczo –<br></br>
            wbijaliśmy buty w chrupki śnieg, aż zgrzytał<br></br>i tylko na
            krótką chwilę powróciły nasze wątpliwości, <br></br>
            zanim pod skalną ścianą usadowiliśmy się na oponie –<br></br>
            bo jakże nisko pod nami wydała się tęcza –
          </p>
          <p className="h2_non_indent ">
            otóż umówiliśmy się, że metą będzie właśnie tęcza, <br></br>
            ale czy na pewno – tu tkwiły nasze wątpliwości –<br></br>
            zdołamy się zatrzymać, nim urwie się lodowiec? <br></br>
            Zwłaszcza, że ważyliśmy więcej, nie będąc na czczo; <br></br>
            pozostawał wprawdzie slalom i na zakrętach hamowanie ze zgrzytem,{" "}
            <br></br>
            lecz czy od tego nie pękłaby opona?
          </p>
          <p className="h2_non_indent ">
            Nie było innego wyboru, niż zdać się na oponę. <br></br>
            Odepchnęliśmy się – i tylko mignęła za nami tęcza, <br></br>
            nie mieliśmy czasu na żadne decyzje ani wątpliwości, <br></br>
            kiedy tak lekko, jakbyśmy wciąż byli na czczo, <br></br>
            przelecieliśmy w powietrzu na sąsiedni lodowiec, <br></br>
            krótszy lecz łagodniejszy – i po chwili zupełnie bez zgrzytu
          </p>
          <p className="h2_non_indent ">
            opona niosła nas z prądem szeroką lazurową rzeką, <br></br>
            którą spływały oba lodowce. Bryzgi kropel wzbijały tęczę, <br></br>a
            my śmialiśmy się z naszych dawnych wątpliwości. Znów na czczo.
          </p>

          <h2 className="h1_wstep_padding">próba</h2>

          <p className="h2_non_indent "></p>

          <h2 className="h1_wstep_padding">pocałunek</h2>

          <p className="h2_non_indent ">
            jak trzy świerszcze spod łóżka żołnierza
          </p>
          <p className="h2_non_indent_right">(sprzątać!!!)</p>
          <p className="h2_non_indent ">
            zawsze miej w zanadrzu trzy fałszywe nutki –<br></br>
            to przedłuży ci życie o jeden dzień surrealizmu: <br></br>
            ślizgawkę-tęczę od Cheetaway do Syracuse
          </p>
          <p className="h2_non_indent ">
            pasażer na gapę z piosenki od Chi- do Sy-<br></br>
            uparł się że przetrawersuje grzbiet oceanu<br></br>i w mżawce na
            falochronie od deski do deski<br></br>
            przetasował? przewertował? alfabet –
          </p>
          <p className="h2_non_indent_right">od „s” do „cz”</p>
          <p className="h2_non_indent ">
            słońce spokojnie dłubie sobie w złotych zębach<br></br>
            słońce jeszcze nas wszystkich dobrze szturchnie! <br></br>
            prognoza pogody kłóci się sama z sobą:
          </p>
          <p className="h2_non_indent ">
            c’est la vie – c’est la <i>muerte</i>! – bo tak brzmi lepiej! –
            <br></br>z mordercą po imieniu – przez pomyłkę z mordercą: <br></br>
            przez pomyłkę pocałunek z mordercą
          </p>

          <h2 className="h1_wstep_padding">z dżdżemem</h2>

          <p className="h2_non_indent ">
            mam szachownicę z efektem domina –<br></br>
            błogość w królestwie rozlewisk
          </p>
          <p className="h2_non_indent ">
            nie potknij się o drugie dno! <br></br>w dżdżu dżdżownica je chleb z
            dżdżemem
          </p>
          <p className="h2_non_indent ">
            na chybił trafił szach mat – <br></br>
            wszędzie-kiedyś-naszczał-pies
          </p>
          <p className="h2_non_indent ">
            uważaj bo zahaczysz o wniebowstąpienie! <br></br>i na co zda się
            naginanie kropli?
          </p>
          <p className="h2_non_indent ">
            zastygł w ruchliwej katatonii<br></br>i koziołkuje balansując
          </p>
          <p className="h2_non_indent ">
            na linii wysokiego napięcia<br></br>
            po linii najmniejszego oporu
          </p>
          <p className="h2_non_indent ">
            transcendentalnie w stu dniach<br></br>
            transcendentalnie w studniach –
          </p>
          <p className="h2_non_indent ">
            i licytuje żonglując<br></br>
            wieczną kontrą rekontrą
          </p>
          <p className="h2_non_indent ">
            i <i>rekontrą-à-rebours</i> – i to by było na tyle –<br></br>i
            tyle!!! – tyle co nic:
          </p>
          <p className="h2_non_indent ">
            na chybił trafił szach mat – <br></br>
            nie potknij się o drugie dno!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kitsch;
