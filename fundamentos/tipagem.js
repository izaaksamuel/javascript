/**
 *  Estudo das variaveis - tipagem dinamca
 * @author Izaak samuel
 */

console.clear()
console.log("strings_________")
let nome = "izaak Samuel"
console.log(typeof(nome))
console.log(nome)
//concatenação (unir um texto com o conteudo de uma variavel)
console.log("Aluno: " + nome) // evitar concatenar de tal maneira
console.log(`Aluno: ${nome}`)
console.log("numeros______________________")
let peso = 79
let altura = 1.76
console.log(typeof(altura))
console.log(typeof(idade))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`imc: ${imc.toFixed(2)}`) //tofixed2 arredonda 2 casas decimais
//ATENÇÃO !!!
console.log(10/0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2)
console.log(0.5 +0.5)
console.log(0.1 + 0.2)
console.log("booleanos_______________")
let chave = true
console.log(typeof(chave))
let lampada = false
console.log(typeof(lampada))
console.log(`Chave: ${chave} Lâmpada: ${lampada}`)
