function biblioteca(){
    const percy = {
        titulo: "Percy Jackson e o Ladrão de Raios",
        autor: "Rick Riordan",
        disponivel: true
    };

    const harry = {
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        disponivel: true
    }

    const aneis = {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        disponivel: true
    }

    const narnia = {
        titulo: "As Crônicas de Nárnia",
        autor: "C.S. Lewis",
        disponivel: true
    }

    const livros = [percy, harry, aneis, narnia];
    const resultados = document.querySelector("#resultadosBusca");

    function exibirLivros(livros){

        livros.forEach(livro => {
            const card = document.createElement("div");
            card.classList.add("card")
            
            const titulo = document.createElement("h3");
            titulo.textContent = livro.titulo;

            const imagem = document.createElement("img");
            
            const autor = document.createElement("p");
            autor.textContent = `Autor: ${livro.autor}`;

            const status = document.createElement("p");
            if (livro.disponivel == true){
                status.textContent = "Status: Disponível";
                status.classList.add("livro-disponivel")
            }
            else {
                status.textContent = "Status: Emprestado";
                status.classList.add("livro-emprestado")
            }

            const botaoReservar = document.createElement("button");
            botaoReservar.textContent = "Reservar Livro";

            if (livro.disponivel == true){
                botaoReservar.addEventListener("click", () => {
                    botaoReservar.textContent = "Reservado!";
                    status.textContent = "Status: Emprestado";
                    botaoReservar.disabled = true;
                    livro.disponivel = false;
                    status.classList.add("livro-emprestado")
                    console.log(`Livro de cadastro: "${livro.titulo}" reservado com sucesso!`)
    });
}

            card.appendChild(imagem);
            card.appendChild(titulo);
            card.appendChild(autor);
            card.appendChild(status);
            card.appendChild(botaoReservar);
            resultados.appendChild(card);
        });
    }

    exibirLivros(livros);
}