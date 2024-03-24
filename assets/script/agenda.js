const eventos = []; // Array para armazenar os eventos

const btnAdicionar = document.getElementById('btnAdicionar');
const divEventos = document.getElementById('eventos');

// Função para exibir os eventos na página
function exibirEventos() {
    divEventos.innerHTML = ''; // Limpa a lista de eventos
    eventos.forEach((evento, index) => {
        const divEvento = document.createElement('div');
        divEvento.classList.add('evento');
        divEvento.innerHTML = `
            <strong>${evento.data}</strong> - ${evento.titulo}
            <button onclick="editarEvento(${index})">Editar</button>
            <button onclick="excluirEvento(${index})">Excluir</button>
        `;
        divEventos.appendChild(divEvento);
    });
}

// Função para adicionar um novo evento
function adicionarEvento() {
    const data = prompt('Digite a data do evento (DD/MM/AAAA):');
    const titulo = prompt('Digite o título do evento:');
    eventos.push({ data, titulo });
    exibirEventos();
}

// Função para editar um evento existente
function editarEvento(index) {
    const novoTitulo = prompt('Digite o novo título do evento:');
    eventos[index].titulo = novoTitulo;
    exibirEventos();
}

// Função para excluir um evento existente
function excluirEvento(index) {
    eventos.splice(index, 1);
    exibirEventos();
}

// Adiciona um ouvinte de evento para o botão de adicionar evento
btnAdicionar.addEventListener('click', adicionarEvento);

// Exibe os eventos inicialmente ao carregar a página
exibirEventos();