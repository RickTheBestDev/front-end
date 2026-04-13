const carros = ['Ford', 'Fiat', 'Honda'];
carros.log(carros)
console.log(carros[2]);
console.log(typeof carros);

for(i = 0; i < 6; i++) {
    console.log(carros[i]);
}

carros.forEach((valor) => console.log(valor)); 

const numero  = [45, 4, 9, 16, 25];
const acimaDe18 = numero.filter((valor) => valor > 18);
console.log(acimaDe18);

for(i = 0; i < 5; i++) {
    if(numero[i] > 18) {
        console.log(numero[i]);
    }
}


console.log(numeros.reduce((total, valor) => total + valor));