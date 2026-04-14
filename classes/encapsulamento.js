class Carro {
    constructor(nome, ano) {
        this.nome= nome;
        this.ano = ano;
    }
    idade() {
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.ano;
    }
}

    const meuCarro = new Carro("Ford", 2014);
    const  carroDaMaria = new Carro("Corola", 2019);
    console.log("O carro da MAria é " + carroDaMaria.nome() + " anos.");
     
    console.log(meuCarro.nome);
    console.log(meuCarro.ano);
    console.log("Meu carro é " + meuCarro.idade() + " anos.");