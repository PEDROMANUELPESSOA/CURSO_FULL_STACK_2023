
let expr = 'Banana'

switch (expr) {
    case "Laranja":
      console.log("A laranja custa $0.59 o quilo.");
      break;
    case "Maçã":
      console.log("Maçã custa $0.32 o quilo.");
      break;
    case "Banana":
      console.log("Banana custa $0.48 o quilo.");
      break;
    case "Cereja":
      console.log("Cereja custa $3.00 o quilo.");
      break;
    case "Manga":
    case "Mamão":
      console.log("Manga e mamão custam $2.79 o quilo.");
      break;
    default:
      console.log("Desculpe, estamos sem nenhuma "   +expr+   ".");
  }
  
  console.log("Tem algo mais que você gostaria de levar?");