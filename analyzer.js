const analyzer = {
  getWordCount: (text) => {
    const words = text.trim().split(" ");
    const filteredWords = words.filter((word) => word.trim());
    return filteredWords.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const excludingSpaces = [" ",",", ".", "!", "?", ";",":", "/", "[", "^","&", "*", "{","}","=", "$", "¿","+", "-",];
    // preguntar como poner comilla sencilla
    //esta constante contiene los caracteres que deben ser excluidos del recuento
    let count = 0;
    //se inicia lo condicion con un contador de valor 0
    for (let i = 0; i < text.length; i++) {
      // el bucle analiza cada caracter del texto
      const exclude = text[i];
      //se obtiene el caracter en la posición i y se almacena en la constante exclude
      if (!excludingSpaces.includes(exclude)) {
        //Se verifica el cáracter si no está en la lista, es un carácter válido y se incrementa el contador
        count++;
        //si no esta se aumenta el contador
      }
    }
    return count;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const words = text.trim().split(/\s+/);
    ///\s+/ toma espacios en blanco como separadores de palabras, es una secuencia de escape por lo que el
    //array contiene  solo las  palabras sin espacios en blanco
    let totalLength = 0;
    //esta variable acumula la  longitud de todas las palabras
    const filteredWords = words.filter((word) => word.length > 0);
    //se filtran las palabras y se eliminan las que tienen una longitud de 0
    for (let i = 0; i < filteredWords.length; i++) {
      // el bucle verifica cada palabra de la constante
      totalLength += parseFloat(filteredWords[i].length);
      //se toma la longitud de la palabra, el parse float lo convierte en un valor numerico y lo suma a la variable totalLength
    }
    if (filteredWords.length > 0) {
      // verifica si la variable es valida
      const averageLength = (totalLength / filteredWords.length).toFixed(2);
      //se calcula el promedio dividiendo la totalLength por la cantidad de palabras en filteredWords y el resultado se redonde a dos décimales
      //con el toFixed
      return parseFloat(averageLength);
      //el parseFloat no permite que el valor sea dado como una cadena de texto sino como un valor númerico
    }
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    //
    if (numbers === null) {
      return 0;
      //Si no se encuentran números en el texto, la función text.match devuelve null
    } else {
      return numbers.length;
      // numbers es el array que tiene las coincidencias y devuelve la cantidad de números encontrados.
    }
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let sum = 0;
    //esta variable acumula la suma de los números encontrados
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    //expresion regular que devuelve el array que contiene los matchs
    if (numbers) {
      //si se encuentran números se ejecuta el código del if
      for (let i = 0; i < numbers.length; i++) {
        //verifica cada número del array
        sum += parseFloat(numbers[i]);
        //con el parseFloat se convierte el string (número) a un valor númerico y se suma a la variable sum
      }
    }
    return sum;
  },
};

export default analyzer;
