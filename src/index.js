import analyzer from './analyzer.js';

const boton = document.getElementById("reset-button");
const textarea = document.querySelector('textarea[name="user-input"]');
const metrica1 = document.querySelector('li.categoria:nth-child(1) span');
const metrica2 = document.querySelector('li.categoria:nth-child(2) span');
const metrica3 = document.querySelector('li.categoria:nth-child(3) span');
const metrica4 = document.querySelector('li.categoria:nth-child(4) span');
const metrica5 = document.querySelector('li.categoria:nth-child(5) span');
const metrica6 = document.querySelector('li.categoria:nth-child(6) span');

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
    metrica1.textContent=analyzer.getWordCount(textarea.value);
    metrica2.textContent=analyzer.getCharacterCount(textarea.value);
    metrica3.textContent=analyzer.getCharacterCountExcludingSpaces(textarea.value);
    metrica4.textContent=analyzer.getAverageWordLength(textarea.value);
    metrica5.textContent=analyzer.getNumberCount(textarea.value);
    metrica6.textContent=analyzer.getNumberSum(textarea.value);
})


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
