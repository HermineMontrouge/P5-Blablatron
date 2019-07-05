/*-----------------Selection of elements on the dom-----------------*/

const citationLangueDeVipereBtn = document.querySelector("#typeCit1");
const citationLangueDeBoisBtn = document.querySelector("#typeCit2");
const postOneQuoteBtn = document.querySelector("#nbCit1");
const postTwoQuoteBtn = document.querySelector("#nbCit2");
const postThreeQuoteBtn = document.querySelector("#nbCit3");
const postFourQuoteBtn = document.querySelector("#nbCit4");
const postFiveQuoteBtn = document.querySelector("#nbCit5");
const tellMeMoreBtn = document.querySelector("#tellMeMore");
const stopItBtnBtn = document.querySelector("#stopIt");
const textZone = document.querySelector("#textZone");

/*---------------Data citations--------------*/

//Array "Langue de vipère"

const dataCitationsLangueDeVipere = [
  [
    "Il paraît que", "J’ai entendu dire que", "D’après les bruits qui courent", "J’arrive pas à y croire"
  ],
  ["tu ne sais pas qui est le premier ministre", "tu n’as toujours pas ton permis de conduire", "tu as encore oublié de remplir ta déclatation d’impots", "tu dors jusqu’à midi le dimanche"],
  ["et ça ne te choque pas du tout", "et tu pars en crise de panique quand on t’en parle", "et tu t’en fiches complètement", "et ça te fait bien marrer"],
  ["moi je trouve ça scandaleux!", "moi ça me fait mourir de rire!", "moi j’aurais vraiment honte!", "moi je voudrais même plus exister!"]
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
let numberCitation = null;

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
  displayCitation(citation) {
    textZone.innerHTML = citation;
  }
}

/*-----------------Instantiation-----------------*/

const citationsLangueDeVipere = new Blablatron(
  dataCitationsLangueDeVipere[[0]],
  dataCitationsLangueDeVipere[[1]],
  dataCitationsLangueDeVipere[[2]],
  dataCitationsLangueDeVipere[[3]]
);

const citationsLangueDeBois = new Blablatron(
  dataCitationsLangueDeBois[[0]],
  dataCitationsLangueDeBois[[1]],
  dataCitationsLangueDeBois[[2]],
  dataCitationsLangueDeBois[[3]]
);

/*-----------------Event listeners-----------------*/

citationLangueDeVipereBtn.addEventListener("click", function () {
  typeCitation = "LangueDeVipere";
  console.log("c'est de la LangueDeVipere");
});

citationLangueDeBoisBtn.addEventListener("click", function () {
  typeCitation = "langue de bois";
  console.log("c'est de la langue de bois");
});

postOneQuoteBtn.addEventListener("click", function () {
  if (document.getElementById('nbCit1').checked) {
    numberCitation = document.getElementById('nbCit1').value;
  }
  numberCitation = 1;
  console.log("on veut une seule citation");
  console.log(numberCitation);
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
  console.log(numberCitation);
});

postFourQuoteBtn.addEventListener("click", function () {
  if (document.getElementById('nbCit4').checked) {
    numberCitation = document.getElementById('nbCit4').value;
  }
  numberCitation = 4;
  console.log("on veut quatre citations");
  console.log(numberCitation);
});

postFiveQuoteBtn.addEventListener("click", function () {
  if (document.getElementById('nbCit5').checked) {
    numberCitation = document.getElementById('nbCit5').value;
  }
  numberCitation = 5;
  console.log("on veut cinq citations");
  console.log(numberCitation);
});


tellMeMoreBtn.addEventListener("click", function () {

  let generatedCitation = "";

  if (typeCitation === "LangueDeVipere") {
    if (numberCitation === null) {
      alert('Choisis le type de blabla et le nombre de citations que tu veux générer, puis clique sur Tell Me More !');
    } else {
      for (let i = 0; i < numberCitation; i++) {
        generatedCitation += citationsLangueDeVipere.generateCitation();
        generatedCitation += '<br />'
        generatedCitation += '<br />'
      }
      citationsLangueDeVipere.displayCitation(generatedCitation);
    }
  } else if (typeCitation === "langue de bois") {
    if (numberCitation === null) {
      alert('Choisis le type de blabla et le nombre de citations que tu veux générer, puis clique sur Tell Me More !');
    } else {
      for (let i = 0; i < numberCitation; i++) {
        generatedCitation += citationsLangueDeBois.generateCitation();
        generatedCitation += '<br />'
        generatedCitation += '<br />'
      }
      citationsLangueDeBois.displayCitation(generatedCitation);
    }
  } else {
    alert('Choisis le type de blabla et le nombre de citations que tu veux générer, puis clique sur Tell Me More !');
  }
});

stopItBtnBtn.addEventListener("click", function () {
  textZone.innerHTML = "";
})