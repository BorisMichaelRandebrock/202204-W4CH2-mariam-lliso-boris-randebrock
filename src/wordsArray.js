const initialWordsArray = [
  "ÑAÑAS",
  "ANOLE",
  "ANSAR",
  "ANOTO",
  "ANOTE",
  "ANOTA",
  "ANONA",
  "ANOLO",
  "ANOLA",
  "ANSIA",
  "ANODO",
  "ANOAS",
  "ANJEO",
  "ANITO",
  "ANISO",
  "ANISE",
  "ANSAS",
  "ANSIE",
  "ANION",
  "ANUDE",
  "ANURA",
  "ANUOS",
  "ANULO",
  "ANULE",
  "ANULA",
  "ANUDO",
  "ANUDA",
  "ANSIO",
  "ANUAS",
  "ANUAL",
  "ANTRO",
  "ANTIS",
];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const wordsArray = shuffle(initialWordsArray);

export default wordsArray;
