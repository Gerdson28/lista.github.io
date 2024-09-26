// Seleciona todos os elementos com a classe "column__cards"
const columns = document.querySelectorAll(".column__cards");

// Variável para armazenar o cartão que está sendo arrastado
let draggedCard;

// Função chamada quando o arrasto começa
const dragStart = (event) => {
    draggedCard = event.target; // Armazena o cartão que está sendo arrastado
    event.dataTransfer.effectAllowed = "move"; // Define o efeito do arrasto como "mover"
};

// Função chamada quando um elemento é arrastado sobre outro
const dragOver = (event) => {
    event.preventDefault(); // Permite que o elemento seja soltado
};

// Função chamada quando o cartão arrastado entra em uma nova coluna
const dragEnter = ({ target }) => {
    if (target.classList.contains("column__cards")) {
        target.classList.add("column--highlight"); // Destaca a coluna que recebe o cartão
    }
};

// Função chamada quando o cartão arrastado sai da coluna
const dragLeave = ({ target }) => {
    target.classList.remove("column--highlight"); // Remove o destaque da coluna
};

// Função chamada quando o cartão é solto em uma nova coluna
const drop = ({ target }) => {
    if (target.classList.contains("column__cards")) {
        target.classList.remove("column--highlight"); // Remove o destaque
        target.append(draggedCard); // Adiciona o cartão arrastado à coluna
    }
};

// Função chamada para criar um novo cartão ao dar um duplo clique
const createCard = ({ target }) => {
    if (!target.classList.contains("column__cards")) return; // Verifica se o clique foi na coluna

    const card = document.createElement("section"); // Cria um novo elemento de cartão
    card.className = "card"; // Define a classe do cartão
    card.draggable = "true"; // Torna o cartão arrastável
    card.contentEditable = "true"; // Permite edição do conteúdo do cartão

    
   // Cria o botão de excluir
   const deleteButton = document.createElement("button");
deleteButton.textContent = "🗑️"; // Define o texto do botão
deleteButton.className = "delete-button"; // Define a classe do botão
// Adiciona evento de clique para remover o cartão
deleteButton.addEventListener("click", () => {
    card.remove(); // Remove o cartão
});
    
    // Adiciona evento para quando o cartão perder o foco
    card.addEventListener("focusout", () => {
        card.contentEditable = "false"; // Desabilita a edição
        if (!card.textContent) card.remove(); // Remove o cartão se estiver vazio
    });

    // Adiciona evento de início de arrasto ao cartão
    card.addEventListener("dragstart", dragStart);

    // Adiciona o botão ao cartão
    card.append(deleteButton);
    target.append(card); // Adiciona o cartão à coluna
    card.focus(); // Foca no cartão recém-criado
};

// Adiciona os eventos de arrasto para cada coluna
columns.forEach((column) => {
    column.addEventListener("dragover", dragOver); // Permite o arrasto sobre a coluna
    column.addEventListener("dragenter", dragEnter); // Destaca a coluna ao arrastar
    column.addEventListener("dragleave", dragLeave); // Remove o destaque ao sair
    column.addEventListener("drop", drop); // Lida com o evento de soltura
    column.addEventListener("dblclick", createCard); // Cria um novo cartão com duplo clique
});
