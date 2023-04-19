// Criando a funçao
function funcmedia(n1, n2, n3) {
 // Criando o array e adicionando os parametros no array
    let notas = [n1, n2, n3];
     // alterando o array
      for (notas[1] = 0; notas[1] < 10; notas[1]++){
        n2+1
      };
    // fazendo a media
     let media = (notas[0] + notas[1] + notas[2])/3;
    // Exibindo o array no console
    console.log(media);
}

// Chamando a função
funcmedia( 10, 9, 10);