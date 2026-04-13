const letras = new Set();

letras.add('a');   
letras.add('b');
letras.add('c');
letras.add('a');   // Não será adicionado, pois 'a' já existe no conjunto

console.log(letras); // Output: Set { 'a', 'b', 'c' }

const letrasGregas = new Set(['alpha', 'beta', 'gamma']);

letrasGregas.add('alpha'); // Não será adicionado, pois 'alpha' já existe no conjunto

console.log(letrasGregas); // Output: Set { 'alpha', 'beta', 'gamma' }

console.log(letras.has('elpison'));
console.log(letras.has("beta"));
