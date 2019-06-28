/*-----------------Selection of elements on the dom-----------------*/

const tellMeMoreBtn = document.querySelector("#tellMeMore");
const dropdownMenuBtn = document.querySelector("#dropdownMenuButton");
const textZone = document.querySelector("#textZone");
const citationLatinBtn = document.querySelector("#typeCit1");
const citationLangueDeBoisBtn = document.querySelector("#typeCit2");
const postOneQuote = document.querySelector("#nbCit1");
const postTwoQuote = document.querySelector("#nbCit2");
const postThreeQuote = document.querySelector("#nbCit3");
const postFourQuote = document.querySelector("#nbCit4");
const postFiveQuote = document.querySelector("#nbCit5");

/*---------------Data citations--------------*/

//Array "Latin"

const dataCitationsLatin = [
  ["Lorem ipsum",
    "dolor sit amet",
    "consectetur adipiscing elit",
    "Sed non risus"
  ],
  ["Suspendisse",
    "lectus tortor",
    "dignissim",
    "sit amet"
  ],
  ["adipiscing nec",
    "ultricies sed",
    "dolor",
    "Cras elementum ultrices diam"
  ],
  ["adipiscing nec",
    "ultricies sed",
    "dolor",
    "Cras elementum ultrices diam"
  ]
];

// Array "Langue de bois"

const dataCitationsLangueDeBois = [
  ["Mesdames, Messieurs,",
    "Je reste fondamentalement persuadé que",
    "Dès lors, sachez que je me battrai pour faire admettre que",
    "C’est en toute connaissance de cause que je peux affirmer aujourd’hui que",
    "Je tiens à vous dire ici ma détermination sans faille pour clamer haut et fort que",
    "J’ai depuis longtemps défendu l’idée que",
    "C’est en toute conscience que je m’engage pour que"
  ],
  ["la conjoncture actuelle",
    "la situation d’exclusion que certains d’entre vous connaissent",
    "l’acuité des problèmes de la vie quotidienne",
    "la volonté farouche de sortir notre pays de la crise",
    "l’effort prioritaire en faveur du statut précaire des exclus",
    "le particularisme dû à notre histoire unique",
    "l’aspiration plus que légitime de chacun au renouveau"
  ],
  ["doit s’intégrer à la finalisation globale",
    "oblige à la prise ne compte encore plus effective",
    "interpelle le citoyen que je suis et nous oblige tous à aller de l’avant dans la voie",
    "a pour conséquence obligatoire l’urgente nécessité",
    "conforte mon désir incontestable d’aller dans le sens",
    "doit nous amener au choix réellement impératif",
    "doit prendre en compte les besoins"
  ],
  ["d’un processus allant vers plus d’égalité!",
    "d’un avenir s’orientant vers plus de progrès et plus de justice.",
    "d’une restructuration dans laquelle chacun pourra enfin trouver sa dignité!",
    "d’une valorisation sans concession de nos caractères spécifiques.",
    "d’un plan correspondant veritablement aux exigeances légitimes de chacun.",
    "de solutions rapides correspondant aux grands axes sociaux prioritaires.",
    "d’un programme plus humain, plus fraternel et plus juste!"
  ]
];

/*-----------------Variables-----------------*/

let typeCitation = null;
let numberCitation = null;

/*-----------------"Blablatron" Class-----------------*/

class Blablatron {
  constructor(begin, middle, next, end) {
    this._begin = begin;
    this._middle = middle;
    this._next = next;
    this._end = end;
  };

  // quote generator
  generateCitation() {
    const start = this._begin[Math.floor(Math.random() * this._begin.length)];
    const middle = this._middle[
      Math.floor(Math.random() * this._middle.length)
    ];
    const next = this._next[
      Math.floor(Math.random() * this._next.length)
    ];
    const end = this._end[Math.floor(Math.random() * this._end.length)];

    const citation = start + " " + middle + " " + middle + " " + end;
    return citation;
  }

  // quote display
  displayCitation() {
    const citations = this.generateCitation();
    textZone.innerHTML = citations;
  }
}

/*-----------------Instantiation-----------------*/

const citationsLatin = new Blablatron(
  dataCitationsLatin[[0]],
  dataCitationsLatin[[1]],
  dataCitationsLatin[[2]],
  dataCitationsLatin[[3]]
);

const citationsLangueDeBois = new Blablatron(
  dataCitationsLangueDeBois[[0]],
  dataCitationsLangueDeBois[[1]],
  dataCitationsLangueDeBois[[2]],
  dataCitationsLangueDeBois[[3]]
);

/*-----------------Event listeners-----------------*/

citationLatinBtn.addEventListener("click", function () {
  typeCitation = "latin";
});

citationLangueDeBoisBtn.addEventListener("click", function () {
  typeCitation = "langue de bois";
});

tellMeMoreBtn.addEventListener("click", function () {
  if (typeCitation === "latin") {
    console.log("citation latin");
    citationsLatin.displayCitation();
  } else if (typeCitation === "langue de bois") {
    // Affiche les citations langue de bois
    console.log("citation langue de bois");
  }
});

/*------------------Boutton tellMeMore----------------*/
/*
  tellMeMore() {
    this.button.addEventListener("click", function () {
      console.log("click bouton tellmeMore");
      console.log(this.resultNumberQuote);
      console.log(this.resultNumberQuote);
      if (this.resultTypeQuote == "latin") {
        console.log("cest du latin")
        // Boucle de sélection pour latin
        for (let i = 0; i > this.resultNumberQuote; i++) {
          console.log("je suis rentrée dans ma boucle ldb on m'appelle" + this.resultNumberQuote)
          console.log("resultNumberQuote est écouté");
          document.getElementById("textZone").innerHTML += this.randomLatin();
        }
        // Boucle de sélection pour langue de bois
      } else if (this.resultTypeQuote == "ldb") {
        console.log("je suis dans tellme et ldb")
        for (let i = 0; i > this.resultNumberQuote; i++) {
          console.log("je suis rentrée dans ma boucle ldb on m'appelle" + this.resultNumberQuote)
          document.getElementById("textZone").innerHTML += randomLangueDeBois();
        }
      }
    });
  };
};
*/
/*---------------Blablatron--------------*/
/*
blablatron = new Blablatron();

blablatron.tellMeMore();
blablatron.typeQuote();
blablatron.numberQuote();
*/
/*-----------------Méthode choix type citation---------------*/
/*
  typeQuote() {
    this.typeCit1.addEventListener("click", function () {
      console.log("listening latin button");
      //Si le dropdown "Latin" est sélectionné, renvoie la valeur "latin"
      if (this.id == "typeCit1") {
        this.resultTypeQuote = "latin";
      }
    });

    this.typeCit2.addEventListener("click", function () {
      console.log("listening ldb button");
      //Si le dropdown "Langue de bois" est sélectionné, renvoie la valeur "ldb"
      if (this.id == "typeCit2") {
        this.resultTypeQuote = "ldb";
      }
      return this.resultTypeQuote;
    });
  }
*/
/*----------------Choix nombre citation--------------*/
/*
  //récupération du dropdown nbCit
  numberQuote() {
    //Renvoie la valeur de 1 à 5 sélectionné par l'utilisateur
    if (this.nbCit1.addEventListener("click", function () {

        this.resultNumberQuote = 1;
        console.log(this.resultNumberQuote);
        return this.resultNumberQuote;
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
*/


/*
  // random "latin"
  randomLatin() {
    // Random creation of a blabla from the "Latin" table
    this.randomlatinpart1;
    this.randomlatinpart2;
    this.randomlatinpart3;

    // return the random dataset
    return (
      latinpart1[this.randomlatinpart1] +
      latinpart2[this.randomlatinpart2] +
      latinpart3[this.randomlatinpart3]
    );
  }

  // random Langue de bois"
  randomlangueDeBois() {
    // Random creation of a blabla from the "Langue de bois" table
    this.randomldbpart1;
    this.randomldbpart2;
    this.randomldbpart3;
    this.randomldbpart4;

    // return the random dataset
    return (
      ldbpart1[this.randomldbpart1] +
      ldbpart2[this.randomldbpart2] +
      ldbpart3[this.randomldbpart3] +
      ldbpart4[this.randomldbpart4]
    );
    */