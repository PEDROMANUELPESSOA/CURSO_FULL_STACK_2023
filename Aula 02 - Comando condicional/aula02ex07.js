let preco = 100
let cor = '0'

switch (cor) {
    case "verde":
      console.log("Para o preço: R$" +preco+ ' com a cor da etiqueta: ' +cor+ '. O valor ficou: R$' +(preco-(preco*0.1)));
      break;
    case "amarelo":
        console.log("Para o preço: R$" +preco+ ' com a cor da etiqueta: ' +cor+ '. O valor ficou: R$' +(preco-(preco*0.2)));
      break;
    case "azul":
        console.log("Para o preço: R$" +preco+ ' com a cor da etiqueta: ' +cor+ '. O valor ficou: R$' +(preco-(preco*0.3)));
      break;
    case "vermelho":
        console.log("Para o preço: R$" +preco+ ' com a cor da etiqueta: ' +cor+ '. O valor ficou: R$' +(preco-(preco*0.4)));
      break;
    default:
      console.log('Desculpe, nenhuma etiqueta de desconto nesse produto. O valor ficou: R$' +preco);
  }

  console.log("Tem algo mais que você gostaria de levar?");