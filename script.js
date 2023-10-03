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

// Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//Responsável pelo preenchimento do Formulário
const preencherFormulario = (endereco) => {
        document.getElementById('rua').value = endereco.lorgradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;

}
// Função para consumo de API da via CEP
const pesquisaCep = async() => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)){
        const dados = await fetch(url); // esperar
        const address = await dados.json(); //retorna dados no formato JSON

        if(address.hasOwProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherFormulario(address);
        }
    }else{
        alert('CEP incorreto');
    }
}

//Adiciona um evento DOM no input do CEP
document.getElementById('cep').addEventListener('focusout',pesquisarCep);