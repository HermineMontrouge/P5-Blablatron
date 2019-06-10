/*---------------------------------------------------*/
/*---------------Jeu de données "Latin"--------------*/
/*---------------------------------------------------*/

// Bout de citation 1
let debut = [
  "Lorem ipsum",
  "dolor sit amet",
  "consectetur adipiscing elit",
  "Sed non risus"
];

// Bout de citation 2
let milieu = ["Suspendisse", "lectus tortor", "dignissim", "sit amet"];

// Bout de citation 3
let fin = [
  "adipiscing nec",
  "ultricies sed",
  "dolor",
  "Cras elementum ultrices diam"
];

/*---------------------------------------------------*/
/*-----------Jeu de données "Langue de bois"---------*/
/*---------------------------------------------------*/

// Bout de citation 1
let tab1ldb = [
  "Mesdames, Messieurs",
  "Je reste fondamentalement persuadé que",
  "Dès lors, sachez que je me battrai pour faire admettre que",
  "C’est en toute connaissance de cause que je peux affirmer aujourd’hui que",
  "Je tiens à vous dire ici ma détermination sans faille pour clamer haut et fort que",
  "J’ai depuis longtemps défendu l’idée que",
  "C’est en toute conscience que je m’engage pour que"
];

// Bout de citation 2
let tab2ldb = [
  "la conjoncture actuelle",
  "la situation d’exclusion que certains d’entre vous connaissent",
  "l’acuité des problèmes de la vie quotidienne",
  "la volonté farouche de sortir notre pays de la crise",
  "l’effort prioritaire en faveur du statut précaire des exclus",
  "le particularisme dû à notre histoire unique",
  "l’aspiration plus que légitime de chacun au renouveau"
];

// Bout de citation 3
let tab3ldb = [
  "doit s’intégrer à la finalisation globale",
  "oblige à la prise ne compte encore plus effective",
  "interpelle le citoyen que je suis et nous oblige tous à aller de l’avant dans la voie",
  "a pour conséquence obligatoire l’urgente nécessité",
  "conforte mon désir incontestable d’aller dans le sens",
  "doit nous amener au choix réellement impératif",
  "doit prendre en compte les besoins"
];

// Bout de citation 4
let tab4ldb = [
  "d’un processus allant vers plus d’égalité!",
  "d’un avenir s’orientant vers plus de progrès et plus de justice.",
  "d’une restructuration dans laquelle chacun pourra enfin trouver sa dignité!",
  "d’une valorisation sans concession de nos caractères spécifiques.",
  "d’un plan correspondant veritablement aux exigeances légitimes de chacun.",
  "de solutions rapides correspondant aux grands axes sociaux prioritaires.",
  "d’un programme plus humain, plus fraternel et plus juste!"
];

/*---------------------------------------------------*/
/*-----------------Choix type citation---------------*/
/*---------------------------------------------------*/

// récupération du dropdown type de citation
function typeCitation() {
  //Si le dropdown "Latin" est sélectionné, renvoie la valeur 1
  if (document.getElementById("typeCit1").checked) {
    return 1;
  }
  //Si le dropdown "Langue de bois" est sélectionné, renvoie la valeur 2
  else if (document.getElementById("typeCit2").checked) {
    return 2;
  }
}

/*---------------------------------------------------*/
/*----------------Choix nombre citation--------------*/
/*---------------------------------------------------*/

//récupération du dropdown Nombre de synopsis
function getNombreCitation() {
  //Renvoie la valeur de 1 à 5 sélectionné par l'utilisateur
  if (document.getElementById("nbCit1").checked) {
    return 1;
  } else if (document.getElementById("nbCit2").checked) {
    return 2;
  } else if (document.getElementById("nbCit3").checked) {
    return 3;
  } else if (document.getElementById("nbCit4").checked) {
    return 4;
  } else if (document.getElementById("nbCit5").checked) {
    return 5;
  }
}

/*---------------------------------------------------*/
/*------------Generation aléatoire "Latin"-----------*/
/*---------------------------------------------------*/

// Création aléatoire d'un blabla à partir des jeux de données "Latin"
function latin() {
  let randomDebut = Math.floor(Math.random() * debut.length);
  let randomMilieu = Math.floor(Math.random() * milieu.length);
  let randomFin = Math.floor(Math.random() * fin.length);

  //Retourne le jeu de données aléatoires
  return (
    debut[randomDebut] +
    " , " +
    milieu[randomMilieu] +
    " , " +
    fin[randomFin] +
    "..."
  );
}

/*---------------------------------------------------*/
/*--------Generation aléatoire "Langue de bois"------*/
/*---------------------------------------------------*/

// Création aléatoire d'un blabla à partir du jeu de données "Langue de bois"
function langueDeBois() {
  let randomTab1ldb = Math.floor(Math.random() * tab1ldb.length);
  let randomTab2ldb = Math.floor(Math.random() * tab2ldb.length);
  let randomTab3ldb = Math.floor(Math.random() * tab3ldb.length);
  let randomTab4ldb = Math.floor(Math.random() * tab4ldb.length);

  //Retourne le jeu de données aléatoires
  return (
    tab1ldb[randomTab1ldb] +
    tab2ldb[randomTab2ldb] +
    tab3ldb[randomTab3ldb] +
    tab4ldb[randomTab4ldb]
  );
}

/*---------------------------------------------------*/
/*----------------Generation du texte----------------*/
/*---------------------------------------------------*/

let button = document.getElementById("tellMeMore");
let citation = document.getElementById("citation");

button.addEventListener("click", function () {
  let resultat = blablatron();
  /* console.log(resultat); */
  console.log(citation);
  citation.innerHTML = resultat;
});