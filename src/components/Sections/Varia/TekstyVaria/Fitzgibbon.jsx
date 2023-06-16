import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";

const Fitzgibbon = () => {
  return (
    <div className="wstep">
      <Link to="/varia" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h2 className="h1_wstep">[Listy do Pana Dyrektora (1)]</h2>
      </div>

      <div className="content_wstep">
        <h2 className="h2_wstep_right">31/10/2022</h2>
        <h2 className="h2_non_indent">
          155 Makowska<br></br> 31/10/2022<br></br> 02.566 Warszawa
        </h2>
        <h2 className="h2_wstep">Szanowny Panie Dyrektorze,</h2>
        <h2 className="h2_wstep">
          Przeprowadiłem do Polski dwa mięsące temu i mam nadzieję, że jak
          znajduje stały pracy może zostać na dłużej.
        </h2>
        <h2 className="h2_wstep">
          Od dwadzieścia lat jestem nauczycielem języka angielskiego.
          Studiowałem anglistyka na uniwersytet w Londynie i potem pedagogika na
          uniwersytet w Oxfordzie. Mysłałem o praca za granicy i dlatego
          dziesiąć lat pracowałem w różnych krajach w Europie i w Afryce.
          Dlatego mam dużo doświadczenia z różnyem kulturów i wiem że muszę
          adoptować moje sposób nauczania do kulturalnie obwywyczajów gdzie ja
          jestem nauczycielem. Jestem raczej nauczycielem dla młodziezy i
          chociaż moge nauczyć dorosłych czują sie bardziej komfortowe z dziecmi
          wiek 6-14 lat.
        </h2>
        <h2 className="h2_wstep">
          Jestem dobra organizowna i zawsze mam plan lekcji przy sobą i umiem
          planować na dalszy przysłości.
        </h2>
        <h2 className="h2_wstep">
          Mam dobry kontakt z młodzieży i używam moje poczuć humorże w czasie
          lekcji żeby twórzyć miłą atmosferą podczas lekcjych. Też jestem
          przyzwyczajony stosowac poziom lekcii do umiejętności studentów żeby
          oni mogą robić szybsziej postępach. Nagrodzenie myśle około 5,000
          netto mięsiecy byłoby wystarczyć. Jeżeli wybiesze mi Pan zgwarantuja
          że jestem dobrym pracownikiem.
        </h2>
        <h2 className="h2_wstep">Za poważaniem,</h2>
        <h2 className="h2_wstep">Gerald Fitzgibbon</h2>
      </div>
    </div>
  );
};

export default Fitzgibbon;
