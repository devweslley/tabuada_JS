// Seleção de elementos
const multiplicationForm = document.querySelector('#multiplication-form') // Seleciona o formulário de multiplicação pelo ID
const numberInput = document.querySelector('#number') // Seleciona o campo de entrada do número pelo ID
const multiplicationInput = document.querySelector('#multiplication') // Seleciona o campo de entrada do multiplicador pelo ID
const multiplicationTitle = document.querySelector('#multiplication-title span') // Seleciona o elemento <span> dentro do título de multiplicação pelo ID
const multiplicationTable = document.querySelector('#multiplication-operations') // Seleciona o elemento que conterá as operações de multiplicação pelo ID

// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ''; // Limpa o conteúdo da tabela de multiplicação

    // Loop para criar as operações de multiplicação
    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i; // Calcula o resultado da multiplicação

        // Template HTML para a linha da operação
        const templete = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser() // Cria um novo parser de DOM

        const htmlTemplete = parser.parseFromString(templete, "text/html") // Converte o template de string para um documento HTML

        const row = htmlTemplete.querySelector('.row'); // Seleciona a linha da operação dentro do documento HTML

        multiplicationTable.appendChild(row); // Adiciona a linha da operação à tabela de multiplicação
    }

    multiplicationTitle.innerHTML = number; // Atualiza o título da multiplicação com o número fornecido
};

// Eventos
multiplicationForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio do formulário e a recarga da página

    const multiplicationNumber = +numberInput.value; // Obtém o valor do número e converte para número
    const multiplicatorNumber = +multiplicationInput.value; // Obtém o valor do multiplicador e converte para número

    if (!multiplicationNumber || !multiplicatorNumber) return; // Se algum dos valores não for válido, interrompe a execução

    createTable(multiplicationNumber, multiplicatorNumber) // Chama a função para criar a tabela de multiplicação
})
