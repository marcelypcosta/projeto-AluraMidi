// declaração
const listaDeTeclas = document.querySelectorAll('.tecla'); //referência que recebe a busca de TODOS os seletores com classe tecla do documento.

// função tocaSom para acessar todos os sons e colocamos um parâmetro idElementoAudio para sabermos que é o acesso ao id dos seletores audio no html.
function tocaSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    // condição criada para caso seja usado algum elemento que não é poss´vel utilizar. Ai para não dar erro foi criado essa condição
    if (elemento && elemento.localName === 'audio'){
            elemento.play();
    }else{
        // alert('Elemento não encontrado ou selettor inválido') ou
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador] // criando uma referência que recebe o seletor indicado no indice que está com contador pois será recebido a cada leitura do código cada um de um vez. 
    const instrumento = tecla.classList[1];  // Acessar o indice 1 do class do seletor button, pois é igual à parte do id do seletor audio, conseguindo acessar a cada leitura do código o som referente do instrumento clicado.
    const idAudio = `#som_${instrumento}` // Definindo a variável idAudio que irá receber o valor do id #som_... de cada instrumento. Para pegar o que falta usando entre cifrão e o ${} para ser adicionado, conseguindo o acesso ao som do intrumento clicado.

    // função anônima para conseguir acessar o som apenas quando o usuário quiser
    tecla.onclick = function (){
        tocaSom(idAudio);
    }

    // função anônima para à tecla ser apertada(onkeydown) realizar a função
    tecla.onkeydown = function(evento){
        // condição criada para evento acontecer se as condições forem verdadeiras
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    // função anônima para à tecla ao ser soltada(onkeyup) realizar a função
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
