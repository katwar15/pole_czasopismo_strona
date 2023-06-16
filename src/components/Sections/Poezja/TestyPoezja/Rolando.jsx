import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";

const Rolando = () => {
  return (
    <div className="wstep">
      <Link to="/poezja" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h1 className="h1_wstep_autor">Bianka Rolando</h1>

        <h2 className="h1_wstep_padding">Cztery wiersze</h2>

        <div className="content_center">
          <h2 className="h1_wstep_padding">Biały wąż z Jawy</h2>

          <p className="h2_non_indent ">
            Z czarnym brzuchem, zamczysko, zważony ciągnie na-wzór-siebie
            <br></br> Na nim sekretne odmiany pisma, też zwykłe blizny-pejzaże
            ciche<br></br> Skóra (pięć metrów) wisi pod mapą, negocjacja, to i
            jest podział
          </p>
          <p className="h2_non_indent ">
            A jednak księżyc piję skrycie, jak odnajduje się żagiel w płomieniu{" "}
            <br></br>
            jak niszczy się schroniska-usta, ołowiane stopy, jak piwniczne okna{" "}
            <br></br>
            fosforyczny gaz, ciemne nocowanie, wije się zwój i płacze się dnem
            <br></br>
            jak zachodzi kolor, gnijesz niepojęty, jak w jedno nurkowanie-dryf
            <br></br>
            jak ciebie idę szybko, przez ciebie płynę szybko, wierszu zapadnięty
            <br></br>
            krystaliczna szczęko, bez miejsca idę, i zjawy my – dziecko bez mapy
          </p>
          <h2 className="h1_wstep_padding">próba</h2>

          <p className="h2_non_indent ">
            Tam, gdzie wieje zachodni wiatr, małe, metalowe zwierzęta nucą
            <br></br> I to byłoby wspaniale zdać sprawę lub też opowiedzieć o
            tym<br></br> zdobyć się na notatkę, ale znów zasypiam w ich
            objęciach boso<br></br> Cokolwiek, komuś udowodnić? Nic z tego,
            mamroczę cień progu:<br></br> – Wcześniej tyle razy słyszałam
            ciebie, ale teraz już słyszę morze
          </p>

          <h2 className="h1_wstep_padding">Gorejący krzak</h2>

          <p className="h2_non_indent ">
            Strzępy krepiny podoczepiał do lichego ubrania, <br></br>
            nogi przesadnie długie, twarz już nieczytelna, <br></br>
            tak jakby ktoś przetarł ją w pośpiechu notując: <br></br>
            „podskakiwał dziko na środku galerii handlowej” <br></br>
            Przechodzące dziewczęta, zupełnie zaskoczone, <br></br>
            zdobywały się na specyficzny uśmiech wzgardy, <br></br>
            żeby i nim kokietować kolejnych przechodniów <br></br>
            Wszyscy się z niego śmiali, pokazywali palcami, <br></br>a on wołał
            głośno: – Moje stopy tańczą ogień! <br></br>– Dureń – ktoś krzyknął,
            ale jego to nie dotykało, <br></br>
            ani przez chwilę nie ustawał zajęty ruchem
          </p>

          <h2 className="h1_wstep_padding">
            skrawek na którym zapisałam „Gorejący krzak”
          </h2>

          <p className="h2_non_indent ">
            bawiłam się zaginając ponownie świstek papieru <br></br> (jakby
            wiersz zależał od tego, że go dotykam) <br></br> i poruszał się
            żywy, jak składał się do środka, <br></br> otwierał, sprawdzał mnie
            i uwalniał od siebie
          </p>

          <h2 className="h2_podpis">
            [Wiersze z przygotowywanego tomu „Absyda”]
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Rolando;
