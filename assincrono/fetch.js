async function buscarDados() {
    try{
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!resposta.ok) {
            throw new Error("Erro na requisição");
        }
        const dados = await resposta.json();
        console.log(dados);
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
}
buscarDados();