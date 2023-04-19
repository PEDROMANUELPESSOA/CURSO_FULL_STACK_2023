confirm('Vamos verificar o faturamento entre as lojas e a sede que faturou 54000?');

const quant = Number(prompt('Digite a quantidade de clientes:'));
let valorTotal = 0;

for(let i = 0; i < quant; i++){
    let valor = Number(prompt(`Digite o faturamento do cliente ${i+1} :`));
    valorTotal+=valor
}

if(valorTotal > 0){
    alert(`A diferença é: ${valorTotal-54000}`);
    
}