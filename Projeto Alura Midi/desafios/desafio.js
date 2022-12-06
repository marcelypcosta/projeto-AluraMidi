const listaDeTeclas = document.querySelectorAll('.botao'); // acesso aos input[type=button]

// função para adicionar o valor ao campo do input[type=tel]
function adicNum(valor){
    document.querySelector(".tel").value += valor;
}       

// acessando todos os inputs[type=button] para realizar a função numTelefone 
for( let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const valor = tecla.value;
    
    tecla.onclick = function(){
        adicNum(valor);
    }

    tecla.onkeydown = function(){
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
