const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator_keys');

keys.addEventListener('click', e => {//ouvir as teclas precionadas
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;//para determinar qual tecla foi clicada.
        const keyContent = key.textContent;//chamando o conteudo
        const displaydNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
    }
});

// Se a tecla não tiver um atributo data-action, ela deve ser uma tecla numérica.
if(!action){ 
    console.log('number key!')
}

/*
Se a tecla tiver um atributo data-action que seja add, subtract, multiply ou 
divide, sabemos que a tecla é um operador.
*/
if( action === 'add' ||
    action === 'subtract' ||
    action === 'multply' ||
    action === 'divide'){
        console.log('operator key!')
    }

//Se a tecla data-action for decimal, sabemos que o usuário clicou sobre a chave decimal.
if(action === 'decimal'){
    console.log('decimal key!')
}

//se a tecla data-action for clear, sabemos que o usuário clicou na tecla de limpar (aquela que diz AC)
if(action === 'clear'){
    console.log('clear key!')
}

//Se a chave data-action for calculate, sabemos que o usuário clicou na tecla de iguais.
if(action === 'calculete'){
    console.log('equal key!')
}
