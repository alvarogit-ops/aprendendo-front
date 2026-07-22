var idade = 20

//Sendo idade = 20, a idade é maior que 18 e é um número par?


console.log('Sendo idade = 20, a idade é maior que 18 e é um número par?') //window não existe no Node
var resultado = idade > 18 && idade % 2 == 0 ? 'Sim' : 'Não' //idade % 2 == 0 -> 20 % 2 = 0, então 0 == 0? Sim.

// idade > 18 → 20 > 18 → true
// idade % 2 == 0 → 20 % 2 = 0 → 0 == 0 → true
// true && true → true


console.log(resultado)

