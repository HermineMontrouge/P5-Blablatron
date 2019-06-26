/*-----------------Class Blablatron-----------------*/

class Blablatron {
  constructor() {
    /*---------------Tableau "Latin"--------------*/

    // Bout de citation Latin 1
    const latinpart1 = [
      "Lorem ipsum",
      "dolor sit amet",
      "consectetur adipiscing elit",
      "Sed non risus"
    ];

    // Bout de citation Latin 2
    const latinpart2 = [
      "Suspendisse",
      "lectus tortor",
      "dignissim",
      "sit amet"
    ];

    // Bout de citation Latin 3
    const latinpart3 = [
      "adipiscing nec",
      "ultricies sed",
      "dolor",
      "Cras elementum ultrices diam"
    ];

    /*---------------Tableau "Langue de bois"--------------*/

    // Bout de citation 1
    const ldbpart1 = [
      "Mesdames, Messieurs, ",
      "Je reste fondamentalement persuadé que ",
      "Dès lors, sachez que je me battrai pour faire admettre que ",
      "C’est en toute connaissance de cause que je peux affirmer aujourd’hui que ",
      "Je tiens à vous dire ici ma détermination sans faille pour clamer haut et fort que ",
      "J’ai depuis longtemps défendu l’idée que ",
      "C’est en toute conscience que je m’engage pour que "
    ];

    // Bout de citation 2
    const ldbpart2 = [
      "la conjoncture actuelle",
      "la situation d’exclusion que certains d’entre vous connaissent ",
      "l’acuité des problèmes de la vie quotidienne ",
      "la volonté farouche de sortir notre pays de la crise ",
      "l’effort prioritaire en faveur du statut précaire des exclus ",
      "le particularisme dû à notre histoire unique ",
      "l’aspiration plus que légitime de chacun au renouveau "
    ];

    // Bout de citation 3
    const ldbpart3 = [
      "doit s’intégrer à la finalisation globale ",
      "oblige à la prise ne compte encore plus effective ",
      "interpelle le citoyen que je suis et nous oblige tous à aller de l’avant dans la voie ",
      "a pour conséquence obligatoire l’urgente nécessité ",
      "conforte mon désir incontestable d’aller dans le sens ",
      "doit nous amener au choix réellement impératif ",
      "doit prendre en compte les besoins "
    ];

    // Bout de citation 4
    const ldbpart4 = [
      "d’un processus allant vers plus d’égalité!",
      "d’un avenir s’orientant vers plus de progrès et plus de justice.",
      "d’une restructuration dans laquelle chacun pourra enfin trouver sa dignité!",
      "d’une valorisation sans concession de nos caractères spécifiques.",
      "d’un plan correspondant veritablement aux exigeances légitimes de chacun.",
      "de solutions rapides correspondant aux grands axes sociaux prioritaires.",
      "d’un programme plus humain, plus fraternel et plus juste!"
    ];
    /*---------------Déclarartion des objets--------------*/

    this.typeCit1 = document.getElementById("typeCit1");
    this.typeCit2 = document.getElementById("typeCit2");
    this.nbCit1 = document.getElementById("nbCit1");
    this.nbCit2 = document.getElementById("nbCit2");
    this.nbCit3 = document.getElementById("nbCit3");
    this.nbCit4 = document.getElementById("nbCit4");
    this.nbCit5 = document.getElementById("nbCit5");
    this.resultNumberQuote = 0;
    this.resultTypeQuote = "";
    this.randomlatinpart1 = Math.floor(Math.random() * latinpart1.length);
    this.randomlatinpart2 = Math.floor(Math.random() * latinpart2.length);
    this.randomlatinpart3 = Math.floor(Math.random() * latinpart3.length);
    this.randomldbpart1 = Math.floor(Math.random() * ldbpart1.length);
    this.randomldbpart2 = Math.floor(Math.random() * ldbpart2.length);
    this.randomldbpart3 = Math.floor(Math.random() * ldbpart3.length);
    this.randomldbpart4 = Math.floor(Math.random() * ldbpart4.length);
    this.finalQuote = "";
    this.button = document.getElementById("tellMeMore");
    this.textZone = document.getElementById("textZone");
  }

  /*-----------------Méthode choix type citation---------------*/

  typeQuote() {
    this.typeCit1.addEventListener("click", function () {
      console.log("listening latin button");
      //Si le dropdown "Latin" est sélectionné, renvoie la valeur "latin"
      if (this.typeCit1 != "typeCit1") {
        this.resultTypeQuote = "latin";
      }
    });

    this.typeCit2.addEventListener("click", function () {
      console.log("listening ldb button");
      //Si le dropdown "Langue de bois" est sélectionné, renvoie la valeur "ldb"
      if (this.typeCit2 != "typeCit2") {
        this.resultTypeQuote = "ldb";
      }
      return this.resultTypeQuote;
    });
  }

  /*----------------Choix nombre citation--------------*/

  //récupération du dropdown nbCit
  numberQuote() {
    //Renvoie la valeur de 1 à 5 sélectionné par l'utilisateur
    if (this.nbCit1.addEventListener("click", function () {
        console.log("listening button 1");
        return (this.resultNumberQuote = 1);
      }));
    if (this.nbCit2.addEventListener("click", function () {
        console.log("listening button 2");
        return (this.resultNumberQuote = 2);
      }));
    if (this.nbCit3.addEventListener("click", function () {
        console.log("listening button 3");
        return (this.resultNumberQuote = 3);
      }));
    if (this.nbCit4.addEventListener("click", function () {
        console.log("listening button 4");
        return (this.resultNumberQuote = 4);
      }));
    if (this.nbCit5.addEventListener("click", function () {
        console.log("listening button 5");
        return (this.resultNumberQuote = 5);
      }));
  };
  /*---------------Méthode random Latin--------------*/

  randomLatin() {
    // Création aléatoire d'un blabla à partir du tableau "Latin"
    this.randomlatinpart1;
    this.randomlatinpart2;
    this.randomlatinpart3;

    //Retourne le jeu de données aléatoire
    return (
      latinpart1[this.randomlatinpart1] +
      latinpart2[this.randomlatinpart2] +
      latinpart3[this.randomlatinpart3]
    );
  }
  /*--------Méthode random "Langue de bois"------*/

  randomlangueDeBois() {
    // Création aléatoire d'un blabla à partir du tableau "Langue de bois"
    this.randomldbpart1;
    this.randomldbpart2;
    this.randomldbpart3;
    this.randomldbpart4;

    //Retourne le jeu de données aléatoires
    return (
      ldbpart1[this.randomldbpart1] +
      ldbpart2[this.randomldbpart2] +
      ldbpart3[this.randomldbpart3] +
      ldbpart4[this.randomldbpart4]
    );
  }

  /*---------------------------------------------------*/
  /*------------------Fonction tellMeMore----------------*/
  /*---------------------------------------------------*/

  tellMeMore() {
    // si je clique sur latin (typeQuote=1) alors
    // si je clique sur 1 (nbCitation=1) alors
    // jappelle la methode latin
    // jappelle la methode nombre de phrase

    //si je clique sur ldb (typeQuote=2) alors
    // si je clique sur nbCitation alors
    // jappelle la methode langue de bois

    // Boucle de sélection pour latin
    /*
          if (this.resultTypeQuote === 1) {
            for (let i = 1; i > this.resultNumberQuote; i++) {
              document.getElementById("textZone").innerHTML += latin();
            }
            // Boucle de sélection pour langue de bois
          } else {
            for (let i = 0; i > this.resultNumberQuote; i++) {
              document.getElementById("textZone").innerHTML += langueDeBois();
            }
          }    */

    this.button.addEventListener("click", function () {
      console.log("listening tell me more button");
      return (this.resultNumberQuote = "go");
    });
    /*
document.getElementById("tellMeMore").addEventListener("click", function() {
  const resultat = tellMeMore();
  /* console.log(resultat); */
    // textZone.innerHTML = resultat;
    // });

  }
}
/*---------------Blablatron--------------*/

const blablatron = new Blablatron();

blablatron.typeQuote();
blablatron.numberQuote();
blablatron.tellMeMore();