/*-----------------Selection of elements on the dom-----------------*/

const typeCitationValue = document.querySelector("#dropdownCitationType");
const numberCitationValue = document.querySelector("#dropdownNbCitationValue");
const tellMeMoreBtn = document.querySelector("#tellMeMore");
const stopItBtn = document.querySelector("#stopIt");
const textZone = document.querySelector("#textZone");

/*---------------Data citations--------------*/

// Array "Langue de vipère"

const dataCitationsLangueDeVipere = [
  // Begin
  [
    "Il paraît que",
    "J’ai entendu dire que",
    "D’après les bruits qui courent",
    "J’arrive pas à y croire,",
    "Non mais c'est fou,",
    "Je n'en reviens pas,"
  ],
  // Middle
  [
    "tu ne sais pas qui est le premier ministre",
    "tu sais pas vraiment parler anglais",
    "tu n’as toujours pas ton permis de conduire",
    "tu as encore oublié de remplir ta déclatation d’impots",
    "tu n'as jamais sauté en parachute",
    "tu dors jusqu’à midi le dimanche"
  ],
  // Next
  [
    "et ça ne te choque pas du tout",
    "et tu pars en crise de panique quand on t’en parle",
    "et tu t’en fiches complètement",
    "et ça te fait marrer",
    "et ça devient un sujet tabou pour toi",
    "et tu rentres en furie quand on t'en parle"
  ],
  // End
  [
    "moi je trouve ça scandaleux!",
    "moi ça me fait mourir de rire!",
    "moi j’aurais tellement honte!",
    "moi je voudrais même plus exister!",
    "moi je trouve ça vraiment ridicule!",
    "moi je pense que c'est pathétique"
  ]
];

// Array "Langue de bois"

const dataCitationsLangueDeBois = [
  // Begin
  [
    "Mesdames, Messieurs,",
    "Je reste fondamentalement persuadé que",
    "Dès lors, sachez que je me battrai pour faire admettre que",
    "C’est en toute connaissance de cause que je peux affirmer aujourd’hui que",
    "Je tiens à vous dire ici ma détermination sans faille pour clamer haut et fort que",
    "J’ai depuis longtemps défendu l’idée que",
    "C’est en toute conscience que je m’engage pour que"
  ],
  // Middle
  [
    "la conjoncture actuelle",
    "la situation d’exclusion que certains d’entre vous connaissent",
    "l’acuité des problèmes de la vie quotidienne",
    "la volonté farouche de sortir notre pays de la crise",
    "l’effort prioritaire en faveur du statut précaire des exclus",
    "le particularisme dû à notre histoire unique",
    "l’aspiration plus que légitime de chacun au renouveau"
  ],
  // Next
  [
    "doit s’intégrer à la finalisation globale",
    "oblige à la prise ne compte encore plus effective",
    "interpelle le citoyen que je suis et nous oblige tous à aller de l’avant dans la voie",
    "a pour conséquence obligatoire l’urgente nécessité",
    "conforte mon désir incontestable d’aller dans le sens",
    "doit nous amener au choix réellement impératif",
    "doit prendre en compte les besoins"
  ],
  // End
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

/*-----------------Variables globales-----------------*/

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

  // Quote generator
  generateCitation() {
    const start = this._begin[Math.floor(Math.random() * this._begin.length)];
    console.log(this._begin.length);
    const middle = this._middle[
      Math.floor(Math.random() * this._middle.length)
    ];
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

// Replace the title of the dropdown button with the selected selection
$(".dropdown-menu li a").click(function() {
  $(this)
    .parents(".dropdown")
    .find(".btn")
    .html($(this).text() + ' <span class="caret"></span>');
  $(this)
    .parents(".dropdown")
    .find(".btn")
    .val($(this).data("value"));
});

// Listening the button type choice

typeCitationValue.addEventListener("click", function(type) {
  typeCitation = type.target.innerHTML;
});

// Listening the button number choice

numberCitationValue.addEventListener("click", function(number) {
  numberCitation = number.target.innerHTML;
});

// Listening the button Tell me more
tellMeMoreBtn.addEventListener("click", function() {
  let generatedCitation = "";

  if (typeCitation === "Langue de vipère") {
    if (numberCitation === null) {
      alert(
        "Maintenant que tu as choisi le type de citation, sélectionne le nombre de citations que tu veux générer, puis clique sur Tell Me More !"
      );
    } else {
      for (let i = 0; i < numberCitation; i++) {
        generatedCitation += citationsLangueDeVipere.generateCitation();
        generatedCitation += "<br />";
        generatedCitation += " <br />";
      }
      citationsLangueDeVipere.displayCitation(generatedCitation);
    }
  } else if (typeCitation === "Langue de bois") {
    if (numberCitation === null) {
      alert(
        "Maintenant que tu as choisi le type de citation, sélectionne le nombre de citations que tu veux générer, puis clique sur Tell Me More !"
      );
    } else {
      for (let i = 0; i < numberCitation; i++) {
        generatedCitation += citationsLangueDeBois.generateCitation();
        generatedCitation += "<br />";
        generatedCitation += "<br />";
      }
      citationsLangueDeBois.displayCitation(generatedCitation);
    }
  } else {
    alert(
      "Choisis le type de blabla et le nombre de citations que tu veux générer, puis clique sur Tell Me More !"
    );
  }
});

// Listening the button Stop it please
stopItBtn.addEventListener("click", function() {
  textZone.innerHTML = "";
});
