confirm('Vamos calcular a média de notas de varios alunos?');
const qtd = Number(prompt('Digite a quantidade de alunos:'));
let media = 0;

for(let i = 0; i < qtd; i++){
    let nota = Number(prompt('Digite a nota'));
    media += nota;
}
mediaFinal  = media / qtd;

alert('A média é '+ mediaFinal );