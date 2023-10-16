import React from "react";
import { Link } from "react-router-dom";
import "../../Wstep/Wstep.css";
import forward_button from "../../../../assets/forward_button.svg";

const Krajewski = () => {
  return (
    <div className="wstep">
      <Link to="/archiwalia" className="forward_button_wstep">
        <img className="forward_img_wstep" src={forward_button}></img>
      </Link>
      <div className="content">
        <h1 className="h1_wstep_autor">Łukasz Krajewski</h1>
      </div>

      <div className="content_wstep">
        <h2 className="h1_wstep_tytul">
          Od etnografki dzieciństwa do galerniczki wrażliwości: historia Laure
        </h2>
        <h2 className="h2_wstep">
          Colette Peignot, bo tak naprawdę nazywała się autorka „Sacrum”,
          zostawiła po sobie skąpy i eklektyczny korpus dzieł. Należą do niego
          zaangażowane ideologicznie felietony poświęcone wojnie w Hiszpanii,
          fragmenty przekładu „Czerwonej gwiazdy” Aleksandra Bogdanowa –
          powieści science fiction o marsjańskim komunizmie, korespondencja z
          przyjaciółmi, których nazwiska w niemałym stopniu budowały pejzaż
          intelektualny Francji międzywojnia, dwa autobiograficzne teksty prozą
          – „Sacrum” oraz „L’histoire d’une petite fille” (Historia małej
          dziewczynki), a także liczne wiersze. Pseudonim przyjęła
          prawdopodobnie na cześć ukochanej Petrarki, Laury de Sade, której
          potomkiem był słynny markiz. Aż do przedwczesnej śmierci w 1938 roku
          jej dorobek literacki pozostawał praktycznie nieznany. Niedługo
          później, dzięki staraniom Georges’a Bataille’a i Michela Leirisa, dwa
          szczupłe tomy obejmujące niemal wszystkie utwory Peignot trafiły
          wreszcie do druku.
        </h2>
        <h2 className="h2_wstep">
          Publikowane na łamach <i>Pola</i> „Sacrum” to swego rodzaju manifest
          autobiograficzny. Wspomnienia z dzieciństwa pełnią w nim funkcję
          materiału empirycznego, z którego Laure próbuje wyabstrahować sens
          tytułowego pojęcia. Jej wywód przybiera formę zbioru aforystycznych
          fragmentów zwieńczonych definicją, która nie rości sobie praw do
          uniwersalizmu, obiektem swoich refleksji Peignot czyni bowiem
          wyłącznie siebie samą:
          <i>
            {" "}
            Czym jest dla mnie sacrum? A dokładniej – na czym polega moje
            sacrum?{" "}
          </i>
          […]
          <i>
            {" "}
            Wydaje się oczywiste, że wszystko, co nas fascynowało w dzieciństwie{" "}
          </i>
          […]
          <i>
            {" "}
            należy zbadać w pierwszej kolejności. Ponieważ ze wszystkich
            materiałów, którymi możemy dysponować, te pochodzące z dzieciństwa
            mają szansę być najmniej wyrafinowane
          </i>
          <a id="footnote_1_krajewski-ref" href="#footnote_1_krajewski">
            <sup>1</sup>
          </a>
          . Francuska poetka stosuje się w swoim tekście do powyższych zaleceń,
          które jej przyjaciel, Michel Leiris, formułuje w eseju „Sacrum w życiu
          codziennym”.
        </h2>
        <h2 className="h2_wstep">
          Do naukowej wykładni tego pojęcia Laure odnosi się nonszalancko, raz
          tylko przywołując jego „socjologiczne” ujęcie –
          <i>
            sacrum miesza się z tym, co społeczne, aby to, co społeczne, stało
            się święte
          </i>
          . Trudno jednak ustalić, czy w tej enigmatycznej uwadze chodzi o
          nawiązanie do myśli Durkheima i jego klasycznej pracy „Elementarne
          formy życia religijnego”, czy raczej do dorobku Collège de sociologie
          – stworzonej przez Bataille’a instytucji, którą Laure dobrze znała.
          Drugi wariant wydaje się bardziej prawdopodobny. Wbrew pozorom
          instytucja ta niewiele miała jednak wspólnego z socjologią, która
          spełniałaby standardy naukowej ścisłości. Nazwa tego lotnego
          parauniwersytetu, na którym odczyty wygłaszali między innymi Pierre
          Klossowski, Alexandre Kojève czy Roger Caillois, wiąże się z leżącymi
          u jego podstaw założeniami badawczymi, do których w pierwszej
          kolejności należało zgłębianie roli sacrum w stosunkach społecznych.
        </h2>
        <h2 className="h2_wstep">
          Krótki tekst Laure stanowi jej autorski wkład w tę archeologię. W
          proponowanym przez nią ujęciu sacrum musi być odczuwane przede
          wszystkim <i>we wspólnocie z innymi</i>. Można by wyciągnąć stąd
          wniosek, że jego nośnikiem są ekstatyczne – czyli, dosłownie,
          <i> wypychające nas poza własne granice</i>, jak sama pisze – formy
          interakcji, nad którymi nie unosi się odium komunikacyjnego
          konwenansu. Francuska poetka zastrzega jednak, że aby spełnić wymogi
          narzucone przez jej wykładnię, interakcje te muszą uwzględniać również
          <i> konfrontację ze śmiercią</i>. Jako egzemplaryczny przykład
          doświadczenia sacrum Peignot wskazuje swoje spotkanie z ojcem
          odchodzącym na front, spotkanie naznaczone przeczuciem –
          <i>
            wyrażoną zawczasu w obliczu tego, który miał zostać poświęcony,
            zgodą na jego poświęcenie
          </i>
          – że wraz z wymarszem na wojnę utraci go na zawsze.
        </h2>
        <h2 className="h2_wstep">
          Bataille – drugi, poza Leirisem, intelektualista, który był dla Laure
          częstym partnerem w dyskusji i wymianie idei, a prywatnie jej
          kochankiem – zaliczyłby je do momentów
          <i>komunikacji w sensie mocnym</i> […]{" "}
          <i>które rodzą się dzięki wzruszeniom zmysłowości i obrzędowości</i>{" "}
          [...] <i>w dramacie miłości, rozstania i śmierci</i>
          <a id="footnote_2_krajewski-ref" href="#footnote_2_krajewski">
            <sup>2</sup>
          </a>
          . I rzeczywiście, dla Laure sacrum pojawia się w chwili kontaktu
          między osobami połączonymi zażyłą więzią, które nagle konfrontują się
          z namacalnym ryzykiem jej utraty. Choć ta
          <i> nieustająca groźba śmierci jest upajającym absolutem</i>, jak
          pisze Peignot, to jednak sama śmierć nie staje się u niej obiektem
          kultu: sacrum powstaje na progu istnienia i niebytu wskutek napięcia
          między tymi biegunami, w obrębie relacji, gdzie poczucie głębokiej
          wspólnoty z drugą osobą umożliwia wyjście poza orbitę własnego Ja.
        </h2>
        <h2 className="h2_wstep">
          Dlaczego więc francuska poetka w tak krótkim tekście tyle uwagi
          poświęca śmierci?
        </h2>
        <h1 className="h1_wstep">I</h1>
        <h2 className="h2_wstep">
          „Sacrum” otwiera pełniący funkcję motta wiersz, w którym Laure –
          przynajmniej pozornie – podsumowuje swoje życie jako jego negację:{" "}
          <i>Nie w życiu mieszkałam, lecz w śmierci</i>. Jako trzynastolatka
          nosiła już żałobę po kilku członkach rodziny, przede wszystkim
          straciła zaś ojca, który zginął na froncie I wojny światowej. Wkrótce
          później zachorowała na gruźlicę. Jej dzieciństwo do pewnego stopnia
          przypominało opiekuńczą kwarantannę uzasadnioną troską o jej kruche
          zdrowie. Czytając „L’histoire d’une petite fille”, literacki
          autoportret poetki z czasów dorastania, trudno oprzeć się czasem
          wrażeniu, że przez lata wychodziła ona z domu wyłącznie po to, by
          uczestniczyć w pogrzebach swoich zmarłych krewnych. Pod wpływem
          opresyjnej kultury wychowawczej panującej w burżuazyjno-katolickim
          domu młoda Peignot czuła się coraz bardziej osamotniona. Dom ten nie
          stanowił zresztą dla niej schronienia. Jej rodzinę często odwiedzał
          uchodzący za przyjaciela ksiądz, przez którego była molestowana. Kiedy
          Laure próbowała opowiedzieć o tym doświadczeniu swojej matce-dewotce,
          ta zignorowała jej oskarżenia, twierdząc, że nie można ufać osobie,
          która przestała chodzić do kościoła – rozmowa dotycząca krzywd
          wyrządzonych przez księdza nie doprowadziła do ich uznania przez
          matkę, która na koniec wyrzuciła córce, że ma serce z kamienia. Ta nie
          pozostała jej dłużna:
          <i>
            {" "}
            Przyparta do komody, odpowiedziałam: „Nie – z marmuru, bo jest
            zimniejszy”
          </i>
          <a id="footnote_3_krajewski-ref" href="#footnote_3_krajewski">
            <sup>3</sup>
          </a>
          .
        </h2>
        <h2 className="h2_wstep">
          Nic więc dziwnego, że Peignot prędko zaczęła odrzucać katolicyzm,
          który w jej oczach sprowadzał życie do jego ersatzu. Mijani na ulicy
          przedstawiciele lumpenproletariatu i klasy robotniczej uosabiali w jej
          oczach nieskrępowany bojaźnią witalizm:{" "}
          <i>
            Egzystencja tych ludzi była szorstka i krucha, ani lepsza, ani
            gorsza od innych, przyglądając się ich twarzom, dostrzegałam jednak
            bezpośredni sens życia, które nabierało wyjątkowego posmaku, kiedy
            myślałam o
          </i>{" "}
          […]{" "}
          <i>
            mojej matce i kobietach w czerni wychodzących z kościoła, o ich
            wielkich uczuciach, z których niewiele wynikało. Robotnicy, praczki,
            burdelmamy potrafiły cieszyć się życiem tak, jakby źródłem radości
            nie były jedynie rzadkie rozrywki nadpsute lękiem budzącym się na
            myśl o tym, co przyniesie jutro
          </i>
          <a id="footnote_4_krajewski-ref" href="#footnote_4_krajewski">
            <sup>4</sup>
          </a>
          .
        </h2>
        <h2 className="h2_wstep">
          Awanturniczą, choć krótką biografię dorosłej Peignot wypełniają
          podróże po europejskich stolicach – Berlinie, Moskwie i Paryżu – w
          których nawiązywała znajomości i romanse z autorami związanymi ze
          środowiskiem komunistycznym. W stolicy Francji, gdzie spędziła
          ostatnie lata swojego życia, korzystając ze spadku po ojcu, wspierała
          finansowo pismo <i>La Critique sociale</i>, na łamach którego
          publikowała teksty publicystyczne pod pseudonimem Claude Araxe –
          nazwisko skradzione zakaukaskiej <i> rzece, która mosty zrywa</i>, jak
          pisze Wergiliusz w „Eneidzie”. To znamienny wybór. Zjawiska naturalne,
          które Laure przywołuje w swoich tekstach, przeważnie pochodzą spoza
          porządku natury postrzeganej jako domena uregulowanych i racjonalnych
          praw, dzięki czemu mogą pełnić funkcję alegorii transcendencji – jak
          wybuch wulkanu symbolizujący
          <i> wyrzucenie na zewnątrz fundamentu naszego jestestwa</i> (być może
          jest to wspomnienie wspinaczki Laure i Bataille’a na Etnę) albo
          meteoryt szturmujący orbitę planety. Nadrzędnym przypadkiem
          konfrontacji z tkwiącym w porządku natury absolutem okazuje się
          natomiast odsyłające do dzieciństwa doświadczenie obracającej się
          Ziemi – z początku budzące lęk, który prędko przerodzi się jednak w
          fascynację, raz po raz skłaniającą kilkuletnią Peignot do powrotu na
          miejsce, gdzie po raz pierwszy doznała oszołomienia kolistym ruchem
          globu.
        </h2>
        <h1 className="h1_wstep">II</h1>
        <h2 className="h2_wstep">
          Emblematycznym fenomenem, który według Laure wskrzesza doświadczenie
          sacrum, jest korrida. Poświęcony jej tekst poetka zdążyła jednak
          zaledwie rozpocząć. Miał on być zadedykowany Michelowi Leirisowi,
          który pamięci Colette Peignot zadedykował z kolei swoje „Lustro
          tauromachii” – esej o literaturze i sztuce rozpatrywanych przez
          pryzmat metafory walki toreadora z bykiem. Leiris do pewnego stopnia
          zdaje się bliski koncepcjom swojej zmarłej kilka lat wcześniej
          przyjaciółki, zwłaszcza gdy pisze, że prawdziwy artysta{" "}
          <i>
            idzie do końca i rzuca się między rogi, by w odpowiednim momencie
            zadać śmiertelne pchnięcie
          </i>
          <a id="footnote_5_krajewski-ref" href="#footnote_5_krajewski">
            <sup>5</sup>
          </a>
          . Jeśli znaczy to tyle, że jego rola polega na aktywnym buncie
          wymierzonym we współczesne mu społeczeństwo i jego konformistyczne
          struktury (
          <i>
            ciągłość form, ciągłość zewnętrznych okoliczności, które nie
            odzwierciedlają prawdy bytu lub przestały ją odzwierciedlać
          </i>
          , czytamy u Peignot, pozbawia nas przecież możliwości odczuwania
          sacrum), Laure bez wątpienia by się z taką interpretacją zgodziła. Pod
          tym względem przypomina hołubionego zresztą przez nią Rimbauda, który
          rzuca wyzwanie swojej epoce, ogłaszając:
          <i> moje oczy zamknięte są na wasze światło</i>
          <a id="footnote_6_krajewski-ref" href="#footnote_6_krajewski">
            <sup>6</sup>
          </a>
          . Francuska autorka także przedkłada romantyzm obłędu nad
          bezpieczeństwo płynące z uległości wobec skompromitowanego w jej
          oczach społecznego porządku (
          <i>
            Niektórzy zawsze będą wybierali utratę gruntu pod stopami – za cenę
            dowolnego ryzyka: szaleństwa lub śmierci – byleby życie wciąż trwało
          </i>
          ).
        </h2>
        <h2 className="h2_wstep">
          Tłumacząc, dlaczego <i>dzieło poetyckie należy do sfery sacrum</i>,
          wspomina jednak nie tylko o sprzeciwianiu się społeczeństwu, które
          usiłuje ujarzmić artystę, ale o wymierzonej w siebie przemocy, której
          celem jest{" "}
          <i>
            akt obnażenia, komunikowanie innym racji życia, mimo że racja ta nie
            jest żadną stałą
          </i>
          . Niełatwo wyjaśnić, co właściwie ta wymierzona w siebie przemoc
          oznacza w kontekście aktu twórczego. Przez obnażenie można natomiast
          rozumieć ujmowanie w formę literacką treści i doświadczeń, które są
          budulcem jej tożsamości, zwłaszcza tych, które pochodzą z lat
          dziecięcych: tam właśnie Peignot odnajduje pierwotne doświadczenie
          sacrum, które stanowi dla niej <i> rację życia i rację śmierci</i>.
        </h2>
        <h1 className="h1_wstep">III</h1>
        <h2 className="h2_wstep">
          Jedyne świadectwa, z których możemy dowiedzieć się czegoś o Laure, to
          jej własne teksty. Z wypowiedzi mężczyzn, którzy byli jej bliscy,
          trudno wydobyć rzeczowe informacje dotyczące jej zainteresowań
          intelektualnych, pasji ideologicznych czy głównych inspiracji w
          zakresie poezji
          <a id="footnote_7_krajewski-ref" href="#footnote_7_krajewski">
            <sup>7</sup>
          </a>
          . Nie znajdziemy ich nawet u Bataille’a, jej kochanka, z którym
          spędziła ostatnie lata swojego życia. Owszem, w wielu miejscach pisze
          on o Peignot z afektacją i wzruszeniem, ale choć jego wypowiedzi są
          pełne życzliwości, ostatecznie układają się raczej w sentymentalny
          panegiryk. Symptomatycznym przykładem tego uwielbienia jest powieść
          „Błękit nieba”, w której Laure, sportretowana pod wymownym pseudonimem
          Dirty, odgrywa rolę libertyńskiej muzy narratora, który opłakuje kres
          ich romansu. <i>Porte-parole</i> Bataille’a rozpamiętuje transgresje,
          jakich dokonywał wspólnie ze swoją kochanką, a powierniczką jego żali
          jest kobieta nosząca równie mało subtelnie dobrane imię – Lazare –
          która
          <i>
            {" "}
            w owym czasie była jedyną istotą, która pozwalała mu wyrwać się z
            przygnębienia, mimo że była
          </i>{" "}
          […]{" "}
          <i>
            brzydka i zaniedbana (kobiety, z którymi chodziłem wcześniej, były –
            przeciwnie – dobrze ubrane i ładne)
          </i>
          <a id="footnote_8_krajewski-ref" href="#footnote_8_krajewski">
            <sup>8</sup>
          </a>
          . Postać ta miała z kolei swój pierwowzór w osobie Simone Weil. Cała
          trójka z „Błękitu nieba” rzeczywiście się znała, Weil i Peignot
          przyjaźniły się ze sobą i przez pewien czas regularnie widywały w
          paryskim bistrze, by prowadzić dyskusje przy lunchu.
          <i>
            {" "}
            Obie miały niepohamowany apetyt intelektualny, dobre kontakty
            towarzyskie i zainteresowania obejmujące większość dziedzin kultury.
            Obie pisały, dążąc do duchowej transcendencji w warunkach
            ustanowionych przez współczesną im epokę
          </i>
          <a id="footnote_9_krajewski-ref" href="#footnote_9_krajewski">
            <sup>9</sup>
          </a>
          , pisze Chris Kraus. Jeśli podobieństwo między ich osobowościami
          ujmiemy na tyle szeroko – zgoda. Na ile jednak były one sobie
          faktycznie bliskie w swoich poglądach i fascynacjach?
        </h2>
        <h2 className="h2_wstep">
          Weil dała się poznać jako idiosynkratyczna komunistka: aktywnie
          wspierała klasę robotniczą, nie poprzestając na okazywaniu jej
          wsparcia jako publicystka czy uczestniczka strajków. Chciała realnego
          zaangażowania: rzuciła pracę nauczycielki i zatrudniła się w fabryce,
          aby w dosłownym sensie solidaryzować się z proletariuszami. Ten sam
          <i> paniczny altruizm</i>, jak podsumowuje jej postawę Kraus, skłonił
          ją później do zaciągnięcia się do armii walczącej w hiszpańskiej
          wojnie domowej. Kruche zdrowie i słaby wzrok nie czyniły z niej jednak
          zbyt sprawnej żołnierki. Pod koniec życia, przebywając w Ameryce, z
          dala od swojej ojczyzny, przyjmowała głodowe racje pożywienia, mimo
          geograficznego dystansu starając się dzielić los osób, które pozostały
          na terenie okupowanej przez nazistów Francji. Stworzona przez Weil
          doktryna dekreacji koresponduje z jej czynami: głosi ona konieczność
          wyrzeczenia się własnego Ja, które autorkę „Ciążenia i łaski” skłoniło
          do zatracenia się w ekstatycznej empatii i wspólnym przeżywaniu
          cierpienia.
        </h2>
        <h2 className="h2_wstep">
          O ile francuska mistyczka rezygnację ze swojego ciała i podmiotowości
          uczyniła fundamentem swojej doktryny teologiczno-politycznej, o tyle
          dla Laure ciało i podmiotowość były czymś, co z całych sił pragnęła
          wzmacniać i chronić. W jednym z wierszy wyobraża sobie, jak
          przyjaciele rozszarpują ją na strzępy: <i>Obecna i niewidzialna</i>{" "}
          […] <i>widziałam, jak dzielą się moim życiem</i>
          <a id="footnote_10_krajewski-ref" href="#footnote_10_krajewski">
            <sup>10</sup>
          </a>
          . Utrata własnego Ja nie zostaje tu jednak przypieczętowana, to raczej
          echo koszmarnych wspomnień Laure, która, przywołując je w „L’histoire
          d’une petite fille”, pisze zarazem o woli odzyskania swojej
          tożsamości, w tym ciała, które tak długo <i>kazano jej ignorować</i>
          <a id="footnote_11_krajewski-ref" href="#footnote_11_krajewski">
            <sup>11</sup>
          </a>
          . Dążąc do ukonstytuowania własnego Ja, poetka waha się, czy te próby
          nie skończą się klęską:{" "}
          <i>
            Czy nigdy nie będę w stanie odcisnąć w rzeczywistości śladu własnej
            woli? Gdy tylko przestaję być sama, przestaję też być sobą, co
            robić? Czy świat zawsze będzie dla mnie tylko źródłem cierpienia, a
            nie czymś, co mogłabym zmienić?
          </i>
          <a id="footnote_12_krajewski-ref" href="#footnote_12_krajewski">
            <sup>12</sup>
          </a>
          .
        </h2>
        <h2 className="h2_wstep">
          Wydaje się, że ostatecznie Laure znalazła jednak – no właśnie, co:
          wartość? Emocję? Doświadczenie? Trudno skategoryzować ontologicznie
          sacrum, które w jej eseju definiowane jest w dość eliptycznym stylu,
          bo za pomocą przybliżających analogii. To właśnie ono okazuje się
          jednak źródłem siły kształtującej poczucie własnej odrębności:{" "}
          <i>
            To coś, co utwierdza mnie w sobie na tyle mocno, bym mogła
            sprzeciwiać się innym
          </i>
          . Być może trudność odpowiedzi na pytanie, czym dla Laure jest sacrum,
          bierze się z tego, że umieszcza je ona poza religijnym kontekstem,
          który gwarantowałby temu pojęciu czytelnie skodyfikowaną wykładnię.
          Wyswobodzone z tego kontekstu nabiera ono widmowego charakteru i staje
          się, jak pisze francuska poetka,
          <i>stanem nieskończenie rzadko spotykanej łaski</i>.
        </h2>
        <h2 className="h2_wstep">
          Mimo odrzucenia religii i przedkładania jednostkowości nad
          wspólnotowość, Peignot w pewnym sensie pozostaje jednak bliska Simone
          Weil. Nawiązując do tytułu jednego z tomu serii <i>Transgresje</i>,
          obie autorki można by zaliczyć do grona „galerników wrażliwości”.
          Antologia Rośka i Janion skupiała się na romantycznych figurach
          szaleństwa, uwzględniając teksty autorów głoszących paradoksalną
          apologię obłędu – obłędu, który często stoi w opozycji do
          irracjonalizmu społeczeństw piętnujących pisarki i artystów będących
          ich wychowankami. Zebrane w antologii nazwiska należą do twórców,
          którzy przeciwstawiają swoje szaleństwo szaleństwu świata, który ich
          odrzucił lub wyklął. Uwzględnienie w tej grupie Laure i Simone Weil
          pozwoliłoby poszerzyć kategorię galerników wrażliwości. Nie tylko ze
          względu na płeć. We wspomnianym tomie <i>Transgresji</i> tytułowi
          galernicy to głównie otoczone romantyczną aurą twórcze jednostki
          odseparowane od reszty społeczeństwa nieprzekraczalną granicą, często
          wyznaczaną przez mury szpitala psychiatrycznego lub więzienia.
          Biografie Weil i Peignot podkopują ten mit. Nawet jeśli obie
          zapracowały sobie na reputację intelektualnych outsiderek, to z
          pewnością żadna z nich nie dążyła do społecznej izolacji, podejmując
          działania, którym w przyszłości ktoś mógł przypisać znamiona obłędu,
          czy to w dobrej, czy złej wierze. Proponowane przez nie wizje
          wspólnoty – polegającej na ekstatycznym przeżywaniu z innymi
          pozareligijnego sacrum oraz na posuniętym do samowyrzeczenia
          mistycznym komunizmie – oparte są na swego rodzaju zniewalającej
          wrażliwości dyktującej sposób działania, który znacząco oddala się od
          społecznych norm budowania relacji międzyludzkich.
        </h2>
        <h2 className="h2_wstep">
          Obie autorki do dziś nie zaliczają się do jakiegokolwiek kanonu, ale
          nawet w zestawieniu z Weil Peignot pozostaje postacią zupełnie
          niszową, a szczątkowy charakter jej dzieł w połączeniu z brakiem
          świadectw innych niż jej własne sprawia, że popularyzacja jej
          literacko-intelektualnych dokonań jest niemałym wyzwaniem.
          Fragmentaryczny dorobek, który mamy do dyspozycji, wystarczy jednak,
          by wzbudzić zainteresowanie postacią Laure: uprawianą przez nią
          etnografią własnego dzieciństwa, historią budowania własnej
          podmiotowości z towarzyszącym jej napięciem między pragnieniem
          ukonstytuowania własnego Ja a potrzebą wspólnoty i, koniec końców, jej
          autorskim ujęciem sacrum pozbawionym religijnego rdzenia.
        </h2>

        <p className="h2_non_justify" id="footnote_1_krajewski">
          <a href="#footnote_1_krajewski-ref">[1]</a> Michel Leiris, „Sacrum w
          życiu codziennym”, przeł. Joanna Pawelczyk, w:
          <i>Konteksty. Polska Sztuka Ludowa</i>, nr 3-4/2007, s. 29.
        </p>
        <p className="h2_non_justify" id="footnote_2_krajewski">
          <a href="#footnote_2_krajewski-ref">[2]</a> Georges Bataille,
          „Literatura a zło”, przeł. Maria Wodzyńska-Balicka, Oficyna Literacka,
          Kraków 1992, s. 153.
        </p>
        <p className="h2_non_justify" id="footnote_3_krajewski">
          <a href="#footnote_3_krajewski-ref">[3]</a> Laure, „L’histoire d’une
          petite fille”, Édition hors commerce, Paris 1943, s. 39.
        </p>
        <p className="h2_non_justify" id="footnote_4_krajewski">
          <a href="#footnote_4_krajewski-ref">[4]</a> Ibidem, s. 19-20.
        </p>
        <p className="h2_non_justify" id="footnote_5_krajewski">
          <a href="#footnote_5_krajewski-ref">[5]</a> Michel Leiris, „Lustro
          Tauromachii”, przeł. Maryna Ochab, słowo/obraz terytoria, Gdańsk 1999,
          s. 25.
        </p>
        <p className="h2_non_justify" id="footnote_6_krajewski">
          <a href="#footnote_6_krajewski-ref">[6]</a> Arthur Rimbaud, „Zła
          krew”, w: „Sezon w piekle. Iluminacje”, przeł. Artur Międzyrzecki,
          Prószyński i S-ka, Warszawa 1999, s. 21.
        </p>
        <p className="h2_non_justify" id="footnote_7_krajewski">
          <a href="#footnote_7_krajewski-ref">[7]</a> Por. Paulina Tarasewicz,
          „La vie de Laure?”, w: <i>Cahiers ERTA</i>, nr 10/2016, s. 217-251.
        </p>
        <p className="h2_non_justify" id="footnote_8_krajewski">
          <a href="#footnote_8_krajewski-ref">[8]</a> Georges Bataille, „Błękit
          nieba”, w: „Historia oka i inne historie”, przeł. Tadeusz Komendant,
          słowo/obraz terytoria, Gdańsk 2010, s. 181.
        </p>
        <p className="h2_non_justify" id="footnote_9_krajewski">
          <a href="#footnote_9_krajewski-ref">[9]</a> Chris Kraus, „Aliens and
          Anorexia”, Tuskar Rock Press, London 2018, s. 153.
        </p>
        <p className="h2_non_justify" id="footnote_10_krajewski">
          <a href="#footnote_10_krajewski-ref">[10]</a> Laure, „Le Sacré. Suivi
          par de poèmes et de divers écrits”, Édition hors commerce, Paris 1939,
          s. 23.
        </p>
        <p className="h2_non_justify" id="footnote_11_krajewski">
          <a href="#footnote_11_krajewski-ref">[11]</a> „L’histoire d’une petite
          fille”, s. 18.
        </p>
        <p className="h2_non_justify" id="footnote_12_krajewski">
          <a href="#footnote_12_krajewski-ref">[12]</a> Ibidem, s. 40.
        </p>
      </div>
    </div>
  );
};

export default Krajewski;
