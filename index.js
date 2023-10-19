import analyzer from "./analyzer.js";

const boton = document.getElementById("reset-button");
const userInput = document.querySelector("textarea");
const wordCountObject = document.querySelector('[data-testid="word-count"]');
const characterCountObject = document.querySelector('[data-testid="character-count"]');
const characterCountExcludingSpacesObject = document.querySelector('[data-testid="character-no-spaces-count"]');
const averageWordLengthObject = document.querySelector('[data-testid="number-count"]');
const numberCountObject = document.querySelector('[data-testid="number-sum"]');
const numberSumObject = document.querySelector('[data-testid="word-length-average"]');

boton.addEventListener("click", function () {
  if (userInput.value === "") {
    alert("Ya está vacío");
  } else {
    userInput.value = "";
  }
});
userInput.addEventListener("input", function () {
  //código que se ejecuta cuando ocurre el evento input por parte del usuario

  const text = userInput.value;
  // toma el valor que el usuario ha ingresado dentro del text area y se actualiza de acuerdo a este
  const wordCount = analyzer.getWordCount(text);
  // llama a la función getWordCount del objeto analyzer y toma  el texto del <textarea> como argumento.
  wordCountObject.textContent = `Recuento de palabras: ${wordCount}`;
  //inserta el numero en tiempo real del recuento

  const characterCount = analyzer.getCharacterCount(text);
  characterCountObject.textContent = `Recuento de carácteres: ${characterCount}`;

  const characterCountExcludingSpaces =
    analyzer.getCharacterCountExcludingSpaces(text);
  characterCountExcludingSpacesObject.textContent = `Recuento de caracteres (sin espacios y puntuación): ${characterCountExcludingSpaces}`;

  const averageLength = analyzer.getAverageWordLength(text);
  averageWordLengthObject.textContent = `Longitud promedio de palabras: ${averageLength}`;

  const numberCount = analyzer.getNumberCount(text);
  numberCountObject.textContent = `Recuento de números: ${numberCount}`;

  const numberSum = analyzer.getNumberSum(text);
  numberSumObject.textContent = `Suma de números: ${numberSum}`;
});

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
