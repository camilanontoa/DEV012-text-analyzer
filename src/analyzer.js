const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(' ');
    const filteredWords = words.filter(word => word.trim() !== '');
    return filteredWords.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return  text.length
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const cleanText = text.replace(/[ \.,;!?]/g, '');
    return cleanText.length;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.split(' ');
    const filteredWords = words.map(palabra => palabra.replace(/[.,;!?]/g, ''));
    return (
      filteredWords.length > 0 ? 
      (filteredWords.reduce((acumulador, palabra) => acumulador + palabra.length, 0)) / filteredWords.length :
      0
    );
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    return text.match(/\d+\.\d+|\d+/g).length
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const foundNumbers = text.match(/\d+\.\d+|\d+/g);
    return foundNumbers.reduce((acumulador, numero) => acumulador + parseFloat(numero), 0)
  },
};

export default analyzer;
