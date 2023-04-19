confirm('Vamos verificar os numeros entre 30 e 90?');
const quant = Number(prompt('Digite a quantidade de numeros:'));
let qtd = 0;

for(let i = 0; i < quant; i++){
    let num = Number(prompt('Digite o numero:'));
    if(num >= 30 && num <= 90){
        qtd++;
    }
}


alert(`A quantidade é: ${qtd}`);