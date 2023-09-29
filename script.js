'use strict'; //Modo restrito
//https://viacep.com.br/

//Função para limpar Formulário
//Arrow Fuction
const limparFormulario = (endereco) => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}