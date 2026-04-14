import { Carro } from "./encapsulamento.js";

class Modelo extends Carro {
    constructor(nome, ano, modelo) {
        super(nome, ano);
        this.modelo = modelo;
    }
    exibir() {
        return "Este" + this.nome + " é do modelo " + this.modelo +
         " e tem " + this.idade() + " anos.";
}
}

const carroArthur = new Modelo("Ford", 2014, "Ka");
console.log(carroArthur.exibir());