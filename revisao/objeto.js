const pessoa = {
    nome: "Luiz",
    sobrenome: "Otávio",
    idade: 40,
    cargo: 'Instrutor'
};
const entidade =  new Map([
    ["nome", "Luiz"],
    ["sobrenome", "Otávio"],
    ["idade", 40],
    ["cargo", "Instrutor"]
]);

console.log(entidade.get("sobrenome"));
console.log(pessoa.sobrenome);

const professor = JSON.stringify(pessoa);
console.log(professor);

const aluno = '{"nome": "Cauã", "sobrenome": "Silva", "idade": 20, "cargo": "Aluno"}';
const alunoObjeto = JSON.parse(aluno);
console.log(alunoObjeto);
console.log(alunoObjeto.nome);
console.log(aluno.nome)