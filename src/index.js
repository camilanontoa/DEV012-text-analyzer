import analyzer from './analyzer.js';

const boton = document.getElementById("reset-button");
const textarea = document.querySelector('textarea[name="user-input"]');
const wordCount = document.querySelector('li.categoria:nth-child(1) span');
const characterCount = document.querySelector('li.categoria:nth-child(2) span');
const characterCountExcludingSpaces = document.querySelector('li.categoria:nth-child(3) span');
const averageWordLength = document.querySelector('li.categoria:nth-child(4) span');
const numberCount = document.querySelector('li.categoria:nth-child(5) span');
const numberSum = document.querySelector('li.categoria:nth-child(6) span');

boton.addEventListener('click',function (){
    if(textarea.value===''){
        alert("Ya está vacío");
    }
    else{
        textarea.value=''
    }
}
)
textarea.addEventListener('input', function(){
    wordCount.textContent=analyzer.getWordCount(textarea.value);
    characterCount.textContent=analyzer.getCharacterCount(textarea.value);
    characterCountExcludingSpaces.textContent=analyzer.getCharacterCountExcludingSpaces(textarea.value);
    averageWordLength.textContent=analyzer.getAverageWordLength(textarea.value);
    numberCount.textContent=analyzer.getNumberCount(textarea.value);
    numberSum.textContent=analyzer.getNumberSum(textarea.value);
})


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
userText.value = " "