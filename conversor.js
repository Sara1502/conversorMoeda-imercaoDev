var valorEmDólarTexto = prompt("Qual o valor em dólar que você quer converter?")

var valorEmDólarNumero = parseFloat(valorEmDólarTexto)

var valorEmReal = valorEmDólarNumero * 5.50 
var valorEmRealDecimal = valorEmReal.toFixed(2)

alert(valorEmRealDecimal)
