// Criando a funçao
function func(n1, n2, n3, n4, n5, n6) {
 // Criando o array e adicionando os parametros no array
    let notas = [n1, n2, n3, n4, n5, n6];
   // criando o laço
    for (let i = 0; i < notas.length; i++){
   // verificando se é par
       if (notas[i] < 6){
    notas[i] = notas[i] + 1;
       }    
  };
       // Exibindo o array no console
     console.log(notas);
}

// Chamando a função
func( 6, 6, 6, 6, 6, 4);