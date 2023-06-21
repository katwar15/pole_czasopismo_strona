import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";

const Ptaszyk = () => {
  return (
    <div className="wstep">
      <Link to="/varia" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h1 className="h1_wstep_autor">Wiesława Ptaszyk</h1>
      </div>

      <div className="content_wstep">
        <h2 className="h1_wstep_tytul">
          O świniobiciu i pewnej niesubordynacji
        </h2>

        <h2 className="h2_wstep">
          Zaraz po Świętym Marcinie przychodziła pora na świniaka. Niczego
          nieświadomy, dobrze podtuczony zwierzak drzemał pewnie jeszcze w
          patyku, gdy szarym świtem rzeźnik Józef Koza podążał wyboistym leśnym
          duktem, na swoim pyrkoczącym komarku, w kierunku małej poolęderskiej
          osady. Za motorkiem podskakiwała na zamarzniętych grudach przyczepka,
          na której Koza przewoził niezbędne do szlachtowania akcesoria. W domu
          pod lasem już od rana panowało spore ożywienie. Gospodyni szykowała
          słoje, misy, kopunki, szorowała wmurowany obok komina żeliwny kocioł i
          wydawała dyspozycje mężowi, który zwykle asystował przy rzeźniku.
          Dzieci miały nie plątać się pod nogami. Gospodarz, z natury
          dobroduszny, jednak umiejący stawiać bierny opór nadmiernym, jego
          zdaniem, wymaganiom żony, do świniobicia podchodził sumiennie i z
          przeświadczeniem spełniania ważnej misji, która pozwoli rodzinie
          przetrwać zimowe miesiące. Szczęśliwie, dobrze znał się z Józefem
          Kozą, jako że pochodzili z tej samej wioski, a być może i rodziny,
          bowiem babka gospodarza – Marianna – też była z domu Koza. Tak więc w
          trakcie oprawiania świni, ziomkowie prowadzili niekończące się
          pogawędki. Zdarzało się, że i gospodyni, w przypływie dobrego humoru,
          dodawała coś od siebie, ale przede wszystkim miała oko na całość;
          choćby upominając męża, żeby lepiej mieszał krew, bo się zgrupi.
          Gospodarz przez cały Boży dzień schodził nogi, podstawiał miski,
          przynosił, wynosił, kroił i mieszał. Miał wszakże jedną słabość:
          lubił, żeby wszystkie wyroby były dobrze przyprawione, toteż za
          plecami żony i rzeźnika dorzucał do misek kilka dodatkowych garści
          soli. Wczesnym popołudniem pod pułapem niewielkiej kuchni unosiły się
          kłęby pary, w kociołku dochodziło mięso ze świńskiego łba, a na
          patelni ścinał galaretowaty móżdżek z jajecznicą. Potem Koza z
          właściwą rzeźnikowi wprawą czyścił, napełniał i porcjował długie zwoje
          kiszek. Wieści o świniobiciu rozchodziły się szybko po okolicy,
          sąsiedzi przychodzili z kankami po kiszczonkę, a krewniacy z miasta
          docierali po swoją wałówkę koleją lub pekaesem. W tym czasie dzieci
          biegały po podwórku, podrzucając napełniony powietrzem świński
          pęcherz. Krótki dzień zachodził różową poświatą, a wraz z nim oddalało
          się wspomnienie poranka, kiedy to dzieci z żalu za świniakiem chowały
          głowy w pierzynach. Pod wieczór, już nieco przemarznięte, z apetytem
          zajadały kaszanki i bułczanki… wszystko obficie popijając wodą ze
          studni. Za kilka tygodni ich ojciec będzie wędził szynki, które
          wcześniej tradycyjnie przesoli. Wieczorem Józef Koza, spakowany i
          zaopatrzony w należny mu przydział ze świniobicia, wracał na swoim
          motorku do domu. Przed Wielkanocą cała historia miała się powtórzyć.
        </h2>
      </div>
    </div>
  );
};

export default Ptaszyk;
