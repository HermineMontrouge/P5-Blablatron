/*-----------------Selection of elements on the dom-----------------*/

const tellMeMoreBtn = document.querySelector("#tellMeMore");
const textZone = document.querySelector("#textZone");
const citationLatinBtn = document.querySelector("#typeCit1");
const citationLangueDeBoisBtn = document.querySelector("#typeCit2");
const postOneQuoteBtn = document.querySelector("#nbCit1");
const postTwoQuoteBtn = document.querySelector("#nbCit2");
const postThreeQuoteBtn = document.querySelector("#nbCit3");
const postFourQuoteBtn = document.querySelector("#nbCit4");
const postFiveQuoteBtn = document.querySelector("#nbCit5");

/*---------------Data citations--------------*/

//Array "Latin"

const dataCitationsLatin = [
  [
    "Lorem ipsum",
    "dolor sit amet",
    "consectetur adipiscing elit",
    "Sed non risus"
  ],
  ["Suspendisse", "lectus tortor", "dignissim", "sit amet"],
  ["adipiscing nec", "ultricies sed", "dolor", "Cras elementum ultrices diam"],
  ["adipiscing nec", "ultricies sed", "dolor", "Cras elementum ultrices diam"]
];

// Array "Langue de bois"

const dataCitationsLangueDeBois = [
  [
    "Mesdames, Messieurs,",
    "Je reste fondamentalement persuadé que",
    "Dès lors, sachez que je me battrai pour faire admettre que",
    "C’est en toute connaissance de cause que je peux affirmer aujourd’hui que",
    "Je tiens à vous dire ici ma détermination sans faille pour clamer haut et fort que",
    "J’ai depuis longtemps défendu l’idée que",
    "C’est en toute conscience que je m’engage pour que"
  ],
  [
    "la conjoncture actuelle",
    "la situation d’exclusion que certains d’entre vous connaissent",
    "l’acuité des problèmes de la vie quotidienne",
    "la volonté farouche de sortir notre pays de la crise",
    "l’effort prioritaire en faveur du statut précaire des exclus",
    "le particularisme dû à notre histoire unique",
    "l’aspiration plus que légitime de chacun au renouveau"
  ],
  [
    "doit s’intégrer à la finalisation globale",
    "oblige à la prise ne compte encore plus effective",
    "interpelle le citoyen que je suis et nous oblige tous à aller de l’avant dans la voie",
    "a pour conséquence obligatoire l’urgente nécessité",
    "conforte mon désir incontestable d’aller dans le sens",
    "doit nous amener au choix réellement impératif",
    "doit prendre en compte les besoins"
  ],
  [
    "d’un processus allant vers plus d’égalité!",
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
let numberCitation = 1;

/*-----------------"Blablatron" Class-----------------*/

class Blablatron {
  constructor(begin, middle, next, end) {
    this._begin = begin;
    this._middle = middle;
    this._next = next;
    this._end = end;
  }

  // quote generator
  generateCitation() {
    const start = this._begin[Math.floor(Math.random() * this._begin.length)];
    const middle = this._middle[Math.floor(Math.random() * this._middle.length)];
    const next = this._next[Math.floor(Math.random() * this._next.length)];
    const end = this._end[Math.floor(Math.random() * this._end.length)];

    const citation = start + " " + middle + " " + next + " " + end;
    return citation;
  }

  // quote display
  displayCitation() {
    const citations = this.generateCitation();
    textZone.innerHTML = citations;
  }

  // multiplicateCitation(numberCitation) {
  //   for (let i = 0; i < numberCitation; i++) {
  //     citationsLatin.displayCitation() += numberCitation;
  //     return numberCitation;
  //   }
  // }
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
  console.log("c'est du latin");
});

citationLangueDeBoisBtn.addEventListener("click", function () {
  typeCitation = "langue de bois";
  console.log("c'est de la langue de bois");
});

postOneQuoteBtn.addEventListener("click", function () {
  numberCitation = 1;
  console.log("on veut une seule citation");
});

postTwoQuoteBtn.addEventListener("click", function () {
  if (document.getElementById('nbCit2').checked) {
    numberCitation = document.getElementById('nbCit2').value;
  }
  numberCitation = 2;
  console.log("on veut deux citations");
  console.log(numberCitation);
});

postThreeQuoteBtn.addEventListener("click", function () {
  if (document.getElementById('nbCit3').checked) {
    numberCitation = document.getElementById('nbCit3').value;
  }
  numberCitation = 3;
  console.log("on veut trois citations");
});

postFourQuoteBtn.addEventListener("click", function () {
  if (document.getElementById('nbCit4').checked) {
    numberCitation = document.getElementById('nbCit4').value;
  }
  numberCitation = 4;
  console.log("on veut quatre citations");
});

postFiveQuoteBtn.addEventListener("click", function () {
  if (document.getElementById('nbCit5').checked) {
    numberCitation = document.getElementById('nbCit5').value;
  }
  numberCitation = 5;
  console.log("on veut cinq citations");
});


tellMeMoreBtn.addEventListener("click", function () {

  if (numberCitation == 1) {
    for (let i = numberCitation; i > 0; i--) {
      citationsLatin.displayCitation();
    }
  }
  if (numberCitation == 2) {
    for (let i = numberCitation; i > 0; i--) {
      citationsLatin.displayCitation();
      console.log("deux citations latines");
    }
  }
  if (numberCitation == 3) {
    for (let i = numberCitation; i > 0; i--) {
      citationsLatin.displayCitation();
    }
  }
  if (numberCitation == 4) {
    for (let i = numberCitation; i > 0; i--) {
      citationsLatin.displayCitation();
    }
  }
  if (numberCitation == 5) {
    for (let i = numberCitation; i > 0; i--) {
      citationsLatin.displayCitation();
      console.log("combien de citation?");
    }
  }
  // if (typeCitation === "latin") {
  //   citationsLatin.displayCitation();
  // } else if (typeCitation === "langue de bois") {
  //   citationsLangueDeBois.displayCitation();
  // }
  // if (numberCitation == 2) {
  //   for (let i = 0; i < numberCitation; i++) {
  //     Math.random
  //   }
  //   console.log("c'est ldbbbbbbb");
  // }

});