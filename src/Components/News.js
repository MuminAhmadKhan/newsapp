import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export default class News extends Component {
   articles=[
    {
    "source": {
    "id": null,
    "name": "Finanzen.net"
    },
    "author": "finanzen.net Redaktion",
    "title": "Inflationsschutz Gold? Börsenlegende Jeremy Siegel sieht bei Millennials einen anderen Vermögenswert vorn - finanzen.net",
    "description": "Das eigene Geld vor Inflation zu schützen ist ein großes Thema unter Anlegern. Während traditionellerweise Gold als Schutz vor Geldentwertung gilt, hat das Edelmetall in der jüngeren Vergangenheit insbesondere unter Millennials starke Konkurrenz bekommen, gla…",
    "url": "https://www.finanzen.net/nachricht/devisen/schutz-vor-geldentwertung-inflationsschutz-gold-boersenlegende-jeremy-siegel-sieht-bei-millennials-einen-anderen-vermoegenswert-vorn-10895758",
    "urlToImage": "https://images.finanzen.net/mediacenter/unsortiert/bxswiss-inflation-660x303px.jpg",
    "publishedAt": "2022-01-07T14:10:00Z",
    "content": " Wharton-Professor Siegel von der Goldpreisentwicklung enttäuscht Bitcoin von Millennials als Inflationsschutz präferiert Experten uneins\r\nSiegel ist als Finanzprofessor an der Wharton School der … [+5012 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "N-tv.de"
    },
    "author": "n-tv NACHRICHTEN",
    "title": "Dreikampf der Premiummarken: BMW stößt Mercedes vom Thron - n-tv NACHRICHTEN",
    "description": "Seit Jahren ringen Mercedes, Audi und BMW um die meisten Verkäufe. Mit dem Chefwechsel in Stuttgart gibt Daimler das Rennen auf. Zudem müssen sie anerkennen, dass die Münchener den Chipmangel besser verwaltet bekommen. Dennoch meldet Mercedes mehr Gewinn.",
    "url": "https://www.n-tv.de/wirtschaft/BMW-stoesst-Mercedes-vom-Thron-article23043332.html",
    "urlToImage": "https://bilder2.n-tv.de/img/incoming/crop23043329/9831322563-cImg_16_9-w1200/263762158.jpg",
    "publishedAt": "2022-01-07T13:07:41Z",
    "content": "Seit Jahren ringen Mercedes, Audi und BMW um die meisten Verkäufe. Mit dem Chefwechsel in Stuttgart gibt Daimler das Rennen auf. Zudem müssen sie anerkennen, dass die Münchener den Chipmangel besser … [+3421 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "tagesschau.de"
    },
    "author": "tagesschau",
    "title": "Billigflieger gibt Basis auf: Ryanair-Aus am Frankfurter Flughafen | tagesschau.de - tagesschau.de",
    "description": "Der Billigflug-Anbieter Ryanair löst seine Basis am Frankfurter Flughafen im März auf. Grund dafür sind die erhöhten Start- und Landegebühren. Der Bundesregierung wirft der Konzern Wettbewerbsverzerrung vor.",
    "url": "https://www.tagesschau.de/wirtschaft/unternehmen/ryanair-airline-flughafen-frankfurt-101.html",
    "urlToImage": "https://www.tagesschau.de/multimedia/bilder/ryanair-293~_v-original.jpg",
    "publishedAt": "2022-01-07T13:02:58Z",
    "content": "Der Billigflug-Anbieter Ryanair löst seine Basis am Frankfurter Flughafen im März auf. Grund dafür sind die erhöhten Start- und Landegebühren. Der Bundesregierung wirft der Konzern Wettbewerbsverzerr… [+2806 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Golem.de"
    },
    "author": null,
    "title": "Mobilfunk: 5G - (k)eine Gefahr für die Gesundheit - Golem.de - Golem.de",
    "description": null,
    "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https:%2F%2Fwww.golem.de%2Fnews%2Fmobilfunk-5g-k-eine-gefahr-fuer-die-gesundheit-2201-161527.html",
    "urlToImage": null,
    "publishedAt": "2022-01-07T11:01:02Z",
    "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "t-online.de"
    },
    "author": "Silke Ahrens",
    "title": "Premiere bei Lidl: Discounter bietet Hybridfleisch in allen Filialen an - t-online",
    "description": "Ab kommenden Montag gibt es bei Lidl neue Aktionsware: Der Discounter bietet Fleisch oder Wurst deutscher Herkunft erstmals mit einem Pflanzenanteil an.",
    "url": "https://www.t-online.de/leben/essen-und-trinken/id_91439536/premiere-bei-lidl-discounter-bietet-hybridfleisch-in-allen-filialen-an.html",
    "urlToImage": "https://bilder.t-online.de/b/91/44/00/70/id_91440070/tid_da/lidl-der-discounter-probiert-neue-aktionsware-aus-.jpg",
    "publishedAt": "2022-01-07T10:54:34Z",
    "content": "Ab kommenden Montag gibt es bei Lidl neue Aktionsware: Der Discounter bietet Fleisch oder Wurst deutscher Herkunft erstmals mit einem Pflanzenanteil an.\r\nNach den Supermärkten Rewe und Netto zieht nu… [+1990 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "N-tv.de"
    },
    "author": "n-tv NACHRICHTEN",
    "title": "Bitcoin verliert heftig: Kryptowährungen rauschen in die Tiefe - n-tv NACHRICHTEN",
    "description": "Für Bitcoin verläuft der Jahresauftakt unerfreulich, bisher geht es um zehn Prozent nach unten. Der Grund: Es sieht ganz danach aus, dass die US-Notenbank die Geldschwemme entschlossener eindämmen wird als bisher erwartet.",
    "url": "https://www.n-tv.de/wirtschaft/Kryptowaehrungen-rauschen-in-die-Tiefe-article23042725.html",
    "urlToImage": "https://bilder4.n-tv.de/img/incoming/crop23042783/2181323299-cImg_16_9-w1200/imago0119292950h.jpg",
    "publishedAt": "2022-01-07T10:33:19Z",
    "content": "Für Bitcoin verläuft der Jahresauftakt unerfreulich, bisher geht es um zehn Prozent nach unten. Der Grund: Es sieht ganz danach aus, dass die US-Notenbank die Geldschwemme entschlossener eindämmen wi… [+1928 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CHIP Online Deutschland"
    },
    "author": "Marvin Fuhrmann",
    "title": "Illegaler Streaming-Dienst am Ende: Verantwortliche schalten Website ab - CHIP Online Deutschland",
    "description": "Eine der größten illegalen Streaming-Seiten schließt zum zweiten Mal ihre Tore. Das liegt allerdings nicht daran, dass legale Anbieter wie Netflix gegen die Seite vorgegangen sind. Die Entscheidung lag offenbar bei den Streaming-Nutzern.",
    "url": "https://www.chip.de/news/Illegaler-Streaming-Dienst-am-Ende-Verantwortliche-schalten-Website-ab_184028561.html",
    "urlToImage": "https://www.chip.de/ii/1/2/6/5/6/7/0/6/9/ca44b98b752871c3.jpeg",
    "publishedAt": "2022-01-07T10:14:00Z",
    "content": "Die illegale Streaming-Website \"Popcorn Time\" wurde erneut vom Netz genommen. Ursprünglich wurde die Seite 2014 an den Start gebracht, aber kurze Zeit später aufgrund des Drucks durch die legalen Anb… [+1504 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Golem.de"
    },
    "author": null,
    "title": "Elektroauto: Vinfast stellt drei neue Modelle vor - Golem.de - Golem.de",
    "description": null,
    "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https:%2F%2Fwww.golem.de%2Fnews%2Felektroauto-vinfast-stellt-drei-neue-modelle-vor-2201-162264.html",
    "urlToImage": null,
    "publishedAt": "2022-01-07T10:00:03Z",
    "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informatio… [+575 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Finanzen.net"
    },
    "author": "finanzen.net Redaktion",
    "title": "Deutsche Bank-Aktie legt zu: Deutsche Bank hält an Jahreszielen fest - finanzen.net",
    "description": "Die Deutsche Bank rechnet 2022 weiter mit dem Erreichen der Rendite-Ziele.",
    "url": "https://www.finanzen.net/nachricht/aktien/bessere-rating-noten-deutsche-bank-aktie-legt-zu-deutsche-bank-haelt-an-jahreszielen-fest-10901948",
    "urlToImage": "https://images.finanzen.net/mediacenter/unsortiert/deutsche_bank_tower_360b_shutterstock_660.jpg",
    "publishedAt": "2022-01-07T09:29:00Z",
    "content": "Er sei \"sehr zuversichtlich\", dass die Bank ihre selbst gesetzten Vorgaben erfüllen werde, sagte Finanzchef James von Moltke dem \"Handelsblatt\" (Freitagausgabe). \"Das Renditeziel von acht Prozent ist… [+1483 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "tagesschau.de"
    },
    "author": "tagesschau",
    "title": "Gasmangel in Europa: USA mit Export-Rekord bei Erdgas | tagesschau.de - tagesschau.de",
    "description": "Öl und Gas sind derzeit begehrt wie nie. Die hohe Nachfrage in Europa hat nun den USA einen Ausfuhr-Rekord bei Flüssigerdgas (LNG) beschert. Zuletzt nahmen zehn US-Tanker Kurs Richtung Europa.",
    "url": "https://www.tagesschau.de/wirtschaft/weltwirtschaft/usa-erdgas-exporte-rekord-101.html",
    "urlToImage": "https://www.tagesschau.de/multimedia/bilder/fluessiggas-109~_v-original.jpg",
    "publishedAt": "2022-01-07T09:25:13Z",
    "content": "Öl und Gas sind derzeit begehrt wie nie. Die hohe Nachfrage in Europa hat nun den USA einen Ausfuhr-Rekord bei Flüssigerdgas (LNG) beschert. Zuletzt nahmen zehn US-Tanker Kurs Richtung Europa.\r\nDer h… [+2684 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "N-tv.de"
    },
    "author": "n-tv NACHRICHTEN",
    "title": "Der nächste Hype ist da: Gamestop-Kurs geht durch die Decke - n-tv NACHRICHTEN",
    "description": "Gamestop baut angeblich einen Online-Marktplatz zum Vertrieb von Nonfungible Tokens auf. Damit solle das Kerngeschäft Videospiele endlich die Ertragswende schaffen, heißt es. Kurz darauf wird an der Börse eifrig mit Gamestop-Aktien gezockt.",
    "url": "https://www.n-tv.de/wirtschaft/Gamestop-Kurs-geht-durch-die-Decke-article23042454.html",
    "urlToImage": "https://bilder1.n-tv.de/img/incoming/crop22637336/5251321905-cImg_16_9-w1200/imago0114775720h.jpg",
    "publishedAt": "2022-01-07T08:56:41Z",
    "content": "Gamestop baut angeblich einen Online-Marktplatz zum Vertrieb von Nonfungible Tokens auf. Damit solle das Kerngeschäft Videospiele endlich die Ertragswende schaffen, heißt es. Kurz darauf wird an der … [+2665 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Faz.net"
    },
    "author": "dpa. / Reuters",
    "title": "Nationalbank der Schweiz macht 25 Milliarden Euro Gewinn - FAZ - Frankfurter Allgemeine Zeitung",
    "description": "Die Schweiz kann sich über eine hohe Überweisung von ihrer Notenbank freuen. Für den Milliardengewinn gibt es vor allem einen Grund.",
    "url": "https://www.faz.net/aktuell/finanzen/nationalbank-der-schweiz-macht-25-milliarden-euro-gewinn-17719994.html",
    "urlToImage": "https://media0.faz.net/ppmedia/aktuell/finanzen/2476197116/1.7095234/facebook_teaser/schweizierische-nationalbank.jpg",
    "publishedAt": "2022-01-07T08:37:00Z",
    "content": "Die Schweizerische Nationalbank (SNB) hat im vergangenen Jahr abermals einen hohen Gewinn erzielt. Nach vorläufigen Berechnungen ergab sich für 2021 ein Jahresgewinn von rund 26 Milliarden Franken, w… [+994 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Onvista.de"
    },
    "author": null,
    "title": "Morphosys: Erster Ausblick auf das neue Jahr bringt keine Trendwende – Aktie weiter auf dem Weg zu einem 10 Jahrestief - onvista",
    "description": "Während sich einige großer Verlierer von Mittwoch heute erholen, geht die Talfahrt der Morphosys-Aktie scheinbar ungebremst weiter. Heute verliert das Papier zum Börsenstart über 2 Prozent. Das Biotechunternehmen mit Sitz in Planegg hat heute se... Informatio…",
    "url": "https://www.onvista.de/news/morphosys-erster-ausblick-auf-das-neue-jahr-bringt-keine-trendwende-aktie-weiter-auf-dem-weg-zu-einem-10-jahrestief-507535805",
    "urlToImage": "https://newsimages.onvista.com/news/boxes/news-image/newsid-507535805.jpg?width=720&height=540",
    "publishedAt": "2022-01-07T08:30:00Z",
    "content": "Während sich einige großer Verlierer von Mittwoch heute erholen, geht die Talfahrt der Morphosys-Aktie scheinbar ungebremst weiter. Heute verliert das Papier zum Börsenstart über 2 Prozent. Das Biote… [+1730 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Faz.net"
    },
    "author": "Benjamin Fischer",
    "title": "Spotify will an die Radio-Milliarden - FAZ - Frankfurter Allgemeine Zeitung",
    "description": "Spotify hat 2021 erstmals mehr als eine Milliarde Euro mit Werbung eingenommen – vor allem dank der teuren Podcast-Offensive. Das soll nur der Anfang sein, sagt Michael Krause. Die Musik bleibe aber keineswegs auf der Strecke.",
    "url": "https://www.faz.net/aktuell/wirtschaft/digitec/europa-chef-michael-krause-spotify-will-an-die-radio-milliarden-17718888.html",
    "urlToImage": "https://media0.faz.net/ppmedia/aktuell/3779455455/1.7718906/facebook_teaser/auch-bruce-springsteen-und.jpg",
    "publishedAt": "2022-01-07T08:24:00Z",
    "content": "Das ist ein schöner Titel: Musikstreaming-Marktführer. Doch sein Träger Spotify legt längst Wert darauf, dass es ihm eben nicht nur um Musik geht. Wir sind auf einem guten Weg, eine breit aufgestellt… [+2572 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Finanznachrichten.de"
    },
    "author": null,
    "title": "Heilung? Kurschance vor dem Wochenende: Aufsehenerregender Forschungsdurchbruch!? - FinanzNachrichten.de",
    "description": "Anzeige / WerbungHeilung? Kommt der wahrscheinlich international aufsehenerregende Forschungsdurchbruch? Alle Zeichen verdichten sich: Der Kurs dieser Aktie steigt bereits seit Tagen an und die Funkstille",
    "url": "https://www.finanznachrichten.de/nachrichten-2022-01/54916680-heilung-kurschance-vor-dem-wochenende-aufsehenerregender-forschungsdurchbruch-670.htm",
    "urlToImage": "https://fns1.de/g/fb.png",
    "publishedAt": "2022-01-07T08:17:00Z",
    "content": "Anzeige / Werbung\r\nHeilung? Kommt der wahrscheinlich international aufsehenerregende Forschungsdurchbruch? Alle Zeichen verdichten sich: Der Kurs dieser Aktie steigt bereits seit Tagen an und die Fun… [+14415 chars]"
    },
    {
    "source": {
    "id": "die-zeit",
    "name": "Die Zeit"
    },
    "author": null,
    "title": "Frauenquote: Fast fünfmal mehr Frauen in Vorständen börsennotierter Unternehmen - ZEIT ONLINE",
    "description": "",
    "url": "https://www.zeit.de/zustimmung?url=https:%2F%2Fwww.zeit.de%2Fwirtschaft%2F2022-01%2Ffrauen-quote-vorstand-managerinnen-dax",
    "urlToImage": null,
    "publishedAt": "2022-01-07T07:50:58Z",
    "content": "When browsing with ads:\r\nWe collect personal data and also transmit it to third-party providers\r\n that help us improve and finance our digital content. Some of the information stored on your device, … [+732 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "t-online.de"
    },
    "author": "t-online, rtr",
    "title": "US-Gigant: New York Times kauft Online-Sportmagazin The Athletic - t-online",
    "description": "Hammer-Nachricht auf dem Sportmedien-Transfermarkt. Eine der etabliertesten Medienmarken der Welt, die 'New York Times', kauft sich die aufstrebende Online-Plattform 'The Athletic'.",
    "url": "https://www.t-online.de/sport/id_91438866/us-gigant-new-york-times-kauft-online-sportmagazin-the-athletic.html",
    "urlToImage": "https://bilder.t-online.de/b/91/43/89/64/id_91438964/tid_da/auch-football-im-angebot-the-athletic-berichtet-viel-ueber-us-sport-aber-auch-fussball-ist-vorne-dabei-.jpg",
    "publishedAt": "2022-01-07T07:44:36Z",
    "content": "Hammer-Nachricht auf dem Sportmedien-Transfermarkt. Eine der etabliertesten Medienmarken der Welt, die \"New York Times\", kauft sich die aufstrebende Online-Plattform \"The Athletic\". \r\nDie \"New York T… [+665 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "N-tv.de"
    },
    "author": "n-tv NACHRICHTEN",
    "title": "Der Börsen-Tag Freitag, 7. Januar 2022 - n-tv.de - n-tv NACHRICHTEN",
    "description": "Der Börsen-Tag",
    "url": "https://www.n-tv.de/wirtschaft/der_boersen_tag/Der-Boersen-Tag-am-Freitag-7-Januar-2022-article23042129.html",
    "urlToImage": "https://bilder4.n-tv.de/img/incoming/crop22806287/8161321201-cImg_16_9-w1200/256574288-1-.jpg",
    "publishedAt": "2022-01-07T07:18:45Z",
    "content": "Zum Wochenausklang erholen sich die Börsen in Ostasien und Australien von den Verlusten des Vortags. Gleichwohl agieren Anleger meist vorsichtig, denn im späteren Tagesverlauf, wenn die Börsen der Re… [+1154 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Godmode-trader.de"
    },
    "author": "Rocco Gräfe",
    "title": "DAX - Tagesausblick: DAX auf dem Pullback-Pfad zum Ziel... - GodmodeTrader.de Finanznachrichten",
    "description": "Hier ist die heutige DAX Prognose. Es wurden seit 7:45 Uhr wieder alle DAX Chartparameter der Zeitebenen Tageskerzen und Stundenkerzen sorgfältig ausgewertet und der FDAX mit einbezogen. Darauf deuten die DAX Kursmuster für den heutigen Tag bis 17:30 Uhr hin.…",
    "url": "https://www.godmode-trader.de/analyse/dax-tagesausblick-dax-auf-dem-pullback-pfad-zum-ziel,10420296",
    "urlToImage": "https://www.godmode-trader.de/articleimage/10420296.image",
    "publishedAt": "2022-01-07T07:12:46Z",
    "content": "The copyright of Nikkei 225 is owned by Nikkei Inc.\r\nThe Dow Jones IndicesSM are proprietary to and distributed by CME Group Index Services LLC and have been licensed for use.\r\nFor the Terms and Cond… [+388 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ComputerBase"
    },
    "author": "Nicolas La Rocco",
    "title": "LVCC Loop ausprobiert: Schneller von A nach B mit dem Tesla im Tunnel - ComputerBase",
    "description": "The Boring Company von Elon Musk will die Hotels und Casinos in Las Vegas mit Tunneln verbinden, in denen Tesla fahren. Eine Probefahrt.",
    "url": "https://www.computerbase.de/2022-01/lvcc-loop-ausprobiert-schneller-von-a-nach-b-mit-dem-tesla-im-tunnel/",
    "urlToImage": "https://pics.computerbase.de/1/0/2/0/2/7-cc173ccee748e75e/article-1280x720.ab9a69be.jpg",
    "publishedAt": "2022-01-07T06:42:00Z",
    "content": "Leichtes Spiel für Elon Musk und seine The Boring Company: Zur CES 2022 kann das Unternehmen den unterirdischen LVCC Loop mit Tesla-Fahrzeugen einem Stresstest unterziehen und erhält gleichzeitig ein… [+6095 chars]"
    }
    ]
    constructor(){
        super();
        this.state={
            articles:this.articles,
            loading:false
        }
    }
    render() {
     
        return (
            <div  className="container">
            <h3>NEWS-HEADLINES</h3>
            <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} /> 
                   </div> 
                })}
               
               
            </div> 
            </div>
            
        )
    }
}
