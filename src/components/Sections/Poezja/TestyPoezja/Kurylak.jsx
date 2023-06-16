import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";

const Kurylak = () => {
  return (
    <div className="wstep">
      <Link to="/poezja" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h1 className="h1_wstep_autor">Józef Kurylak</h1>

        <h2 className="h1_wstep_padding">Pięć wierszy</h2>

        <div className="content_center">
          <h2 className="h1_wstep">Marzenie</h2>
          <p className="h2_non_indent ">
            Muszę się uwolnić<br></br> znużyła mnie <i>Kunst der Fuge</i>
            <br></br> która nie przekroczyła granic<br></br> potęgi skorupiej
            <br></br>
            jak puste kościelne nawy<br></br> a moje życie jest podziemnym grave
          </p>
          <p className="h2_non_indent ">
            śmiertelna każda rasa: moje wzgórza <br></br>
            zielone i doliny pełne dzikich wiśni <br></br>
            Biblia zapada się jak wielkie miasta <br></br>
            wszystko pochłania czasu stary potop <br></br>
            zapadły się księżniczek chóry: biel i złoto
          </p>
          <p className="h2_non_indent ">czego chcę?</p>
          <p className="h2_non_indent ">
            chcę usłyszeć w muzyce N i e z i e m s k i e motywy<br></br> poczuć
            w melodiach błysk marihuany<br></br> budzący mnie z hipnozy
            ciemności nieznanych<br></br> aby wehikuł mego ja mnie uniósł
            <br></br> dokąd?
          </p>
          <p className="h2_non_indent ">
            ach bardzo daleko od światła baroku<br></br> w inne spirale<br></br>
            w inny dół albo w górę – w inny spokój
          </p>
          <h2 className="h2_podpis ">Poręba Wielka, 2019 r.</h2>
          <h2 className="h1_wstep">Bomba i chłopiec</h2>
          <p className="h2_non_indent ">
            Mała bomba lotnicza<br></br> niemiecki niewybuch<br></br> z Drugiej
            Wojny<br></br> leżała w ogrodzie
          </p>
          <p className="h2_non_indent ">
            podszedł do niej<br></br> mały chłopiec<br></br> i uderzył kamieniem
            <br></br>w jej rdzewiejącą głowę
          </p>
          <p className="h2_non_indent ">
            drgnęła przestraszona<br></br> i czułym szeptem ale jakby z otchłani
            <br></br>
            powiedziała: chłopcze źle zrobiłeś<br></br> kocham dzieci<br></br>{" "}
            gdy spadałam z samolotu<br></br> wypchnięta przemocą<br></br>{" "}
            modliłam się by nikt nie umarł<br></br> żaden człowiek żadne zwierzę
            <br></br>
            żaden ptak żadna ryba ani mrówka<br></br> nie dotykaj mnie<br></br>{" "}
            mam w sobie coś potężnego<br></br> co mogłoby cię zabić wbrew mej
            woli<br></br> ty już wiesz czym jest śmierć<br></br> gdy pocałowałeś
            zimne nieruchome ręce swojej mamy<br></br> wiele mych sióstr i braci
            leży w rowach<br></br> wśród zgniłych pokrzyw lub gdzieś nad
            potokiem<br></br> woda im zżera rdzewiejące głowy
          </p>
          <p className="h2_non_indent ">
            chłopiec posłuchał tej bomby i odszedł<br></br> bomba zapadła się
            pod ziemię<br></br> głęboko coraz głębiej<br></br> by w ciemności
            umrzeć na wieki
          </p>
          <h2 className="h2_podpis ">Poręba Wielka, 2019 r.</h2>
          <h2 className="h1_wstep">Totenmaske</h2>
          <p className="h2_non_indent ">
            Północ jest przystojną <br></br>
            wysoką czarną deską<br></br>
            tańczy z trupem Beethovena<br></br>w jesiennym deszczu<br></br>
            później w swej żelaznej wieży<br></br>
            śmieje się i głośno łka<br></br>
            widzi w ciemności<br></br>
            choć oczu jej brak<br></br>
            pamiętam czas Tamten<br></br>
            gdy ściany wieży rozjaśniała<br></br>
            wisząca pod sklepieniem<br></br>
            wielka Księga zamiast lampy<br></br>
            teraz w czarnej chustce<br></br>
            piękna czarna deska<br></br>z trupem Beethovena<br></br>
            tańczy w jesiennym deszczu<br></br>
            po miastach się włóczy<br></br>
            requiem śpiewa w tłumie<br></br>
            piękna czarna deska<br></br>
            kolekcjonerka trumien<br></br>
            wspina się spiralą schodów<br></br>
            skrada na piętro Trzecie<br></br>
            do szmaragdowych drzwi Boga<br></br>
            potyka się zapala świecę<br></br>
            ach, kiedyś zachwyciła mnie jej ciemność<br></br>
            nad morzem jej śpiew i taniec<br></br>
            dzisiaj czuję jej moc podziemną<br></br>
            na gardle… oszukany
          </p>
          <h2 className="h1_wstep">Wierzba</h2>
          <p className="h2_non_indent ">
            Wierzba nad Wiarem<br></br>
            jak dawniej szczęśliwa<br></br>
            pozdrawia mnie z daleka<br></br>
            zieloną ręką – wróciłem<br></br>
            wciąż pachnie ziemia<br></br>i zboża wokół<br></br>i duch łąki
            niewinny<br></br>
            padam całuję tę ziemię – tak kiedyś<br></br>
            obejmowałem<br></br>i całowałem dziewczynę
          </p>
          <p className="h2_non_indent ">
            ślady jej bosych stóp<br></br>w gorącym prochu ścieżki<br></br>
            wśród maków i motyli<br></br>i kwiatów niebieskich
          </p>
          <p className="h2_non_indent ">
            ziemio przemyska<br></br>
            wiem komunią świętą jesteś<br></br>
            zwróć mi jej szept i śmiech<br></br>i włosy na wietrze
          </p>
          <p className="h2_non_indent ">
            stary już jestem<br></br>
            stary jak ten kosmos<br></br>
            niektóre moje gwiazdy dawno zmarły<br></br>i w pustym domu<br></br>
            budzi mnie rano lęk pradawny
          </p>
          <p className="h2_non_indent ">
            ziemio znam twoją mądrość<br></br>i moc twoich grobowców<br></br>
            miłość radość<br></br>
            zwróć mi ścieżkę która<br></br>
            do dwóch rzek prowadzi
          </p>
          <p className="h2_non_indent ">
            lecz podnieść się nie mogę<br></br>
            tak osłabłem<br></br>
            śmieją się szydzą<br></br>
            śmieją głupie diabły
          </p>
          <p className="h2_podpis ">Poręba Wielka, 2021 r.</p>
          <h2 className="h1_wstep">Uszy</h2>
          <p className="h2_non_indent ">
            Słusznie mnie pytasz: gdzie są<br></br>
            melodie tej muzyki<br></br>
            których jeszcze nikt nie stworzył? <br></br>
            czy w pustce kosmosu<br></br>w ziemi w jej ciemnych warstwach czasu
            <br></br>
            czy w kołyszącej się ostatniej<br></br>
            gałązce wiśni w spróchniałym ogrodzie? <br></br>
            czy w podziemiach tajemnic mózgu noworodka<br></br>
            który sarkofag światła je ukrywa
          </p>
          <p className="h2_non_indent ">
            te wciągające wiry te wznoszące<br></br>
            spirale sopranów<br></br>u ich stóp ludzie będą klękać<br></br>
            jak kiedyś przed szpitalną bramą
          </p>
          <p className="h2_non_indent ">
            myślę że wszystkie melodie istniały<br></br>
            już w dniu stworzenia: dźwięki Wielkiego Wybuchu<br></br>
            miliardy chórów symfonii i arii<br></br>
            chaos doskonałych form wzruszeń<br></br>
            tylko trzeba je usłyszeć<br></br>
            uporządkować – są gdzieś takie uszy
          </p>
          <p className="h2_podpis ">Poręba Wielka, 2021 r.</p>
        </div>
      </div>
    </div>
  );
};

export default Kurylak;
