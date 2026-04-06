let num3 = 2;

function somarNumeros(num1, num2){
    return num1 + num2
}
console.log(somarNumeros(3,20))

const calcularFrete = function(distancia, peso){
    return (distancia * 0.5) + (peso * 2)
}
console.log("Frete:" + calcularFrete(100, 5))

const calcularFrete2 = function(distancia, peso){
    return (distancia * 0.5) + (peso * 2)
}
console.log("Frete:" + calcularFrete2(300, 5))

const calcularFrete3 = distancia => distancia * 0.5;
   
console.log("frete" + calcularFrete3(100))

const calculadora = (num1, num2, operacao)=>{
    return operacao(num1, num2);
}

const operacao = (num1, num2) => num1 + num2;


console.log(calculadora(2, 3, operacao))
