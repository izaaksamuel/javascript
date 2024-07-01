/**
 *  Cálculo da média de 2 notas
 * @author Samuel
 */

// importar o pacote readline-sync (input no console)
const input = require (`readline-sync`)

//variaveis
let pes,metros,total
console.clear
console.log("valor de pes em metros")

pes= Number (input.question('pes '))
metros= 0.3048
total = pes * metros 


console.log(` ${pes.toFixed(1)} pés  equivalem a ${total.toFixed(4)} metros `)
