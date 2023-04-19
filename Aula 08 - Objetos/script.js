// ==> Questao 1

const atletas = [
    {nome: 'joao', esporte: 'surf'},
    {nome: 'maria', esporte: 'futebol'}, 
];

const listaAtletas = document.getElementById('Atletas');
atletas.forEach((atleta) => {
const li = document.createElement("li");
li.textContent = `Nome: ${atleta.nome} - Esporte: ${atleta.esporte}`;
listaAtletas.appendChild(li);
});

// ==> Questao 2

const formNovoAtleta = document.getElementById('form-novo-atleta');

formNovoAtleta.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome-atleta').value;
    const esporte = document.getElementById('esporte-atleta').value;

    const novoAtleta = { nome, esporte};
    atletas.push(novoAtleta);

    const li = document.createElement('li');
    li.textContent = `${novoAtleta.nome} - ${novoAtleta.esporte}`;
    listaAtletas.appendChild(li);

    formNovoAtleta.reset();

})