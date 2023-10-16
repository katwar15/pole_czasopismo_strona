import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";

const Wiszniewska = () => {
  return (
    <div className="wstep">
      <Link to="/varia" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h2 className="h2_non_indent">Zaułek bez-troski [1]</h2>

        <h1 className="h1_wstep_autor">Irena Wiszniewska</h1>
      </div>

      <div className="content_wstep">
        <h2 className="h2_wstep">
          Męska ogolona na łyso głowa jest nieodparcie erotyczna. Prawda czy
          fałsz? A kogo to obchodzi w czasach, gdy opinie uznaje się za fakty.
          Idźmy dalej tą wyboistą drogą. W Chinach w XVII wieku dynastia
          mandżurska rozkazała wszystkim mężczyznom ogolenie przodu głowy i
          zapuszczenie z tyłu warkoczyka. Za nieposłuszeństwo stracono w jednym
          z miast 172 tysiące ludzi. Przemoc symboliczna nie zna granic, a włosy
          są – bywają – wyrazem buntu, który władze tłumią. Nie przypadkiem w
          Korei Północnej wszyscy, oprócz studentów, muszą czesać się
          identycznie jak dyktator: podgolona na okrągło głowa, przedziałek na
          środku, opadające na boki krótkie włosy. Wiadomo, że pod nieujarzmioną
          strzechę wpadają podejrzane myśli.
        </h2>
        <h2 className="h2_wstep">
          Fryzury kobiece z zasady odzwierciedlają podległy status. Kobieta ma
          być piękna, czego oznaką są długie zadbane włosy, najlepiej blond, bo
          brunetki z natury są podejrzane, co druga to czarownica. Rewolucja, o
          której milczą podręczniki, nadeszła na początku XX wieku, kiedy
          kobiety skróciły swoje długie pukle. Fryzura zwana „na chłopczycę”,
          sugerowała, że chcą być jak mężczyźni. Skandal! Niektórzy na widok
          takiej chłopczycy spluwali ze wstrętem.
        </h2>
        <h2 className="h2_wstep">
          Świat się zmienia. Pozornie, dorzucą determiniści. Hulaj dusza, piekła
          nie ma, a na głowie raj. Irokez? Bardzo proszę. Dredy? Nosi je
          noblistka. Podgolone boki à la Zagłoba? Każdemu przypasują. W pogoni
          za nowością wszystko dozwolone. Z jednym wyjątkiem. Oto nastała moda
          na siwe włosy dla kobiet. We francuskiej telewizji czterdziestolatki
          obnoszą się z nimi jak z trofeum. Proszę, jaka jestem progresywna, nie
          wstydzę się wieku, promieniuję siłą i zadowoleniem z siebie. Świetnie,
          szkoda tylko, że ta silna kobieta nie ma prawa bawić się swoim
          wizerunkiem. Byle dwudziestolatka może strzelić sobie włosy zielone,
          niebieskie, czerwone albo siwe, a jej starsza siostra <i>verboten</i>.
          Ma być dumna z tego, co dała jej natura i już. Żeby choć czerwone
          pasmo w tym zalewie siwizny! Albo plama zieleni nad lewym uszkiem!
          Jedno na znak lewicowości, drugie ekologii. Pomarzyć dobra rzecz, choć
          niektórzy twierdzą, że to sport dla cieniasów.
        </h2>
        <h2 className="h2_wstep">
          W materii damskich ogolonych głów niewiele jest do powiedzenia z
          powodu ich braku. Wyłamała się piosenkarka Sinéad O’Connor, która
          najpierw zrobiła się na łyso, a potem podarła zdjęcie papieża. Jak
          widać, brak loków, przeciwny naturze, prowadzi do wynaturzonych
          zachowań. Przy nieodpartym uroku męskich ogolonych głów będę się
          upierać z powodów osobistych. Mój przedostatni narzeczony, gdy go
          poznałam, nosił tak zwaną pożyczkę. Co znaczy, że zaczesywał na łysinę
          włosy, które jeszcze łaskawie rosły z boku. Kogo to mogło oszukać?
          Nikogo, a ośmieszało po mistrzowsku. Po miesiącu podchodów raczył po
          resztkach owłosienia przejechać maszynką, więc znacznie
          wyprzystojniał. Tym samym dorzuciłam małe co nieco do ogólnej puli
          dobra. Czego i wam serdecznie życzę.
        </h2>
      </div>
    </div>
  );
};

export default Wiszniewska;
