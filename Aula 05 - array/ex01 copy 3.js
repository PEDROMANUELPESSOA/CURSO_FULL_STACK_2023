// Criando a funçao
function func(n1, n2, n3, n4, n5, n6) {
 // Criando o array e adicionando os parametros no array
    let numeros = [n1, n2, n3, n4, n5, n6];
   // Criando o contador
   let contador = 0
   // criando o laço
      for (let i = 0; i < numeros.length; i++){
   // verificando se é par
  if (numeros[i] % 2 == 0){
    contador++
  }    
  };
       // Exibindo o array no console
     console.log(contador);
}

// Chamando a função
func( 10, 15, 17, 22, 9, 4);