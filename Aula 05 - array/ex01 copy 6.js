function func() {
    let pares = [];
    let impares = [];

      for (let i = 0; i < 10; i++) {
        let x = Number(input("digite um numero: "));
        if (x % 2 == 0) {
          pares.push(x);
    } else{
        impares.push(x);
    }  
  }
     console.log(pares);
     console.log(impares);
}

func();