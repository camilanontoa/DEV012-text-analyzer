import analyzer from './analyzer.js';

const boton = document.getElementById("reset-button");
const textarea = document.querySelector('textarea[name="user-input"]');
const segundaMetrica = document.querySelector('li.categoria:nth-child(1)');

boton.addEventListener('click',function (){
    if(textarea.value===''){
        alert("Ya está vacío");
    }
    else{textarea=''}
}
)
textarea.addEventListener('input', function(){
    const textAnalyzer = analyzer.getCharacterCount(textarea.value);
    segundaMetrica.textContent=textAnalyzer;
})


//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`