function pagina() {
    const input = document.getElementById("tarefaInput");
    const botao = document.getElementById("btnAdicionar");
    const lista = document.getElementById("listaTarefas");
    const titulo = document.getElementById("titulo");
    
    botao.addEventListener("click", () => {
        //Criar novo elemento da lista
        const novaTarefa = document.createElement("li");
        const texto = input.value.trim();

        if(texto === ""){
            alert("Digite algo jegue!");
            return;
        }

        novaTarefa.textContent = texto; //adiciona texto ao elemento da lista
        novaTarefa.classList.add('destaque');//adiciona a classe "destaque" ao li.
        novaTarefa.setAttribute("data-tarefa", texto.toLowerCase()); //adiciona um atributo
        novaTarefa.style.color = "#333" //muda a cor do texto

        lista.appendChild(novaTarefa); //adiciona o novo elemento à lista
    
                novaTarefa.addEventListener("click", () => {
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo:", tarefa);
            novaTarefa.classList.remove('destaque');//remove a classe "destaque"
            novaTarefa.classList.add('removida');//acrescenta a classe "removida"
            novaTarefa.innerHTML +=  "  (Removida)";//acrescenta a palavra "Removida" ao texto do elemento
            setTimeout(() => {lista.removeChild(novaTarefa);}, 1000);//remove tarefa depois de 1 segundo

            input.value = ""; //limpa o campo de entrada
        });
    });
}
