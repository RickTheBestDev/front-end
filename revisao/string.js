let texto = "Olá, mundo!";
console.log(texto.length);
console.log(texto[0]);
console.log(texto[7]);
console.log(texto[12]);

let nome = "João";
console.log(nome.split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()).join(' '));

let frase = "JavaScript é uma linguagem de programação.";
console.log(frase.replace("JavaScript"));

console.log("HTML é facil".replaceAll("HTML", "CSS"));