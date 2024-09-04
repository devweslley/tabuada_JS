// Seleções de elementos
const multiplicationForm = document.querySelector('#multiplication-form'); // Seleciona o formulário de multiplicação
const numberInput = document.querySelector('#number'); // Seleciona o campo de entrada para o número a ser multiplicado
const multiplicationInput = document.querySelector('#multiplicator'); // Seleciona o campo de entrada para o número de multiplicações
const multiplicationTable = document.querySelector('#multiplication-operations'); // Seleciona o elemento onde a tabela de multiplicação será exibida
const multiplicationTitle = document.querySelector('#multiplication-title span'); // Seleciona o elemento onde o número da multiplicação será exibido

// Funções
const createTable = (number, multiplicatorNumber) => {   
    multiplicationTable.innerHTML = ""; // Limpa o conteúdo anterior da tabela de multiplicação

    for (let i = 1; i <= multiplicatorNumber; i++) { // Loop de 1 até o número de multiplicações desejado
        const result = number * i; // Calcula o resultado da multiplicação

        // Cria um template HTML para uma linha da tabela
        const template = `<div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result} </div>
        </div>`;

        const parser = new DOMParser(); // Cria um novo objeto DOMParser

        // Converte a string HTML em um documento HTML
        const htmlTemplate = parser.parseFromString(template, "text/html");

        // Seleciona a linha da tabela do novo documento HTML
        const row = htmlTemplate.querySelector(".row");

        // Adiciona a nova linha ao elemento de tabela de multiplicação
        multiplicationTable.appendChild(row);
    }   

    // Atualiza o título com o número da multiplicação
    multiplicationTitle.innerHTML = number;
};

// Eventos
multiplicationForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário

    const multiplicationNumber = +numberInput.value; // Converte o valor do campo de entrada para número
    const multiplicatorNumber = +multiplicationInput.value; // Converte o valor do campo de entrada para número

    // Verifica se os valores são válidos
    if (!multiplicationNumber || !multiplicatorNumber) return;

    // Cria a tabela de multiplicação com os valores fornecidos
    createTable(multiplicationNumber, multiplicatorNumber);
});
