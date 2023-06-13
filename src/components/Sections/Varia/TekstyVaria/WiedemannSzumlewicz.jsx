import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";

const WiedemannSzumlewicz = () => {
  return (
    <div className="wstep">
      <Link to="/varia" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h2 className="h2_wstep">[Sen Adama – Sen Kasi (1)]</h2>
        <h1 className="h1_wstep_autor">Adam Wiedemann</h1>
      </div>

      <div className="content_wstep">
        <h2 className="h1_wstep">Pierwsze drzwi na lewo</h2>
        <h2 className="h2_wstep">
          Śniła mi się historia, będąca częścią większej historii, w której sam
          występowałem, ale jej nie pamiętam, o pisarce-plagiatorce, piszącej
          opowiadania w stylu „iberoamerykańskim” i jedno z tych opowiadań było
          takie, że pewna kobieta miała dostać list (ale być może był to wymysł
          jej dwóch sąsiadek-wariatek) od krewnej zwanej Panią w Czerni (choć
          ani taka z niej pani, ani w czerni, śmieszkowały sąsiadki), że przyśle
          do niej jakąś inną, ubogą krewną, więc żeby przygotowała dla niej
          pokój. Wszystko to były fakty w najwyższym stopniu niepewne, tak czy
          owak któregoś dnia pojawiła się kobieta, ubrana z nieco przesadną
          elegancją, i podeszła do tej, co miała przygotować pokój. Obie razem
          udały się do kawiarni, usiadły przy stoliku na zewnątrz, nic nie
          zamówiły. Po jakimś czasie przyjezdna powiedziała: „Mam pieniądze,
          możemy się zabawić”, zabrzmiało to jakoś tak wręcz wulgarnie, ale ta
          druga zgodziła się, by zamówiły coś do jedzenia, jedna wzięła
          przystawkę z selera (był pokrojony w równe trójkąciki, z jednej strony
          podsmażone, z drugiej białe), a druga z pora. Zjadły, po czym się
          okazało, że „gospodyni” jest w tej knajpie sprzątaczką czy kimś takim,
          przyszła po prostu do pracy. Wtedy ta druga mówi: „To daj mi klucz do
          mieszkania, pójdę tam i się rozgoszczę”, więc ta jej dała i tamta
          poszła, ale jeszcze wróciła się i pyta: „A który to jest mój pokój?”,
          więc ta pokazała odruchowo lewą ręką: „Ten”, na co tamta (bo stały
          naprzeciwko siebie): „Pierwszy po lewej?”, na co ta musiała jakby
          odegrać sama dla siebie scenę wchodzenia do mieszkania, otwierania
          drzwi, i dopiero wtedy powiedziała: „Tak”.
        </h2>
        <div className="content">
          <h1 className="h1_wstep_autor">Katarzyna Szumlewicz</h1>
        </div>
        <h2 className="h1_wstep">Krokusy</h2>
        <h2 className="h2_wstep">
          Śniło mi się, że jestem w górach, topnieje śnieg, jest zimno. Wokół
          mnie rosną krokusy i te krokusy to są mężczyźni. Coś do nich mówię i
          jak słoneczniki obracają się w moją stronę. Podchodzi Zuzanna,
          lesbijka, laska chodząca po górach i nie ma przebacz, i mówi: „ale
          wiesz że to tropizm? Oni cie nie słuchają”, na co wzruszyłam
          ramionami. Potem się obudziłam z tego zimna i znów zapadłam w sen.
          Śniło mi się, że rozmawiam z Magdą, to była kiedyś bardzo piękna
          dziewczyna z wypisanym na czole „only toxic partners" – jest taki typ
          dziewczyn, szukają kolesia, który je zniszczy, po czym znajdują i on
          je niszczy. No i ja ją pytam dlaczego mój były mąż mnie z nią zdradzał
          (co nie miało miejsca, był on zbyt mało toksyczny by wzbudzić jej
          zainteresowanie). A ona mi mówi: „po co mnie wypytujesz, przecież go
          nie kochasz".
        </h2>
      </div>
    </div>
  );
};

export default WiedemannSzumlewicz;
