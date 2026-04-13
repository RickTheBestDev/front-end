const frutas = new Map();

frutas.set('banana', 5);
frutas.set('maçã', 7);
frutas.set('laranja', 10);

console.log("O preço da banana é: R$ " + frutas.get('banana'));

const legumes = new Map(
    [['cenoura', 3], ['batata', 4], ['tomate', 6]]
);
console.log(`O preço da cenoura é: R$ ${legumes.get('cenoura')}`);