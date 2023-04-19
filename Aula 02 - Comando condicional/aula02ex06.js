let a = 1.8
let p = 98
let imc = p/(a*a)

if ( imc < 18.5 ) {
    console.log('Para o peso '+p+'Kg e altura '+a+'m inseridos, o valor do IMC é: '+imc+' e seu resultado está abaixo de 18.5, classificado como Abaixo do peso')
}
else if ( imc >= 18.5 && imc < 25 ){
    console.log('Para o peso '+p+'Kg e altura '+a+'m inseridos, o valor do IMC é: '+imc+' e seu resultado está entre de 18.5 e 25, classificado como Peso normal')
}
else if ( imc >= 25 && imc <= 30 ){
    console.log('Para o peso '+p+'Kg e altura '+a+'m inseridos, o valor do IMC é: '+imc+' e seu resultado está entre de 25 e 30, classificado como Acima normal')
}
else {
    console.log('Para o peso '+p+'Kg e altura '+a+'m inseridos, o valor do IMC é: '+imc+' e seu resultado está acima de 30, classificado como Obeso')
}

