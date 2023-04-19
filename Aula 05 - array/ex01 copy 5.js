// Criando a funçao
function func(n1, n2, n3, n4, n5, n6) {
 // Criando o array e adicionando os parametros no array
    let numeros = [n1, n2, n3, n4, n5, n6];
    let pares = []
    let impares = []
   // criando o laço
      for (let i = 0; i < numeros.length; i++){
   // verificando se é par
  if (numeros[i] % 2 == 0){
    pares.push(numeros[i])
  }
  else{
      impares.push(numeros[i])
  }  
  };
       // Exibindo o array no console
     console.log(numeros);
     console.log(pares);
     console.log(impares);
}

// Chamando a função
func( 10, 15, 17, 22, 9, 4);