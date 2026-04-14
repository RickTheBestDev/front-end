const url= "https://jsonplaceholder.typicode.com/users";

fetch(url).then(resposta => { 
    if (!resposta.ok){
        throw new Error("Erro na rede: " + resposta.status)
    }
    return resposta.json();
})
.then(dados => {
    console.log("Dados recebidos: \n", dados )
})
.catch( erro => console.error("Houve um probelma com a requisição: " + erro))



const video = document.getElementById("cameraFeed");
const canvas = document.getElementById("capturedImage");
const botao = document.getElementById("captureButton");
const contexto = canvas.getContext("2d");

//solicitar acesso a câmera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play(); 
    })
    .catch( erro => {
        console.error("erro ao acessar a câmera " + erro);
    });

//atribuir uma função para o botão de captura

botao.addEventListener("click", () => {
    //Desenhar o quadro atual do vídeo na área do canvas
    contexto.drawImage(video, 0, 0, canvas.width = 1000, canvas.height = 1000);

    //obter a imagem capturada como um data URL
    const imagemDataURL = canvas.toDataURL("image/png");
    //enviar a imagem para o servidor 
    enviarImagemParaServidor(imagemDataURL);

})

//função para enviar a imagem para o servidor
function enviarImagemParaServidor(imagemDataURL) {
    //simular o envio da imagem para o servidor
    console.log("Enviando imagem para o servidor...");
    
    fetch("/", {
        method: "POST",
        body: JSON.stringify({ imagem: imagemDataURL }),
        headers: {
            "Content-Type": "application/json"
        }
})
.then( resposta => resposta.json())
.then( dados => {
    console.log("Resposta do servidor: ", dados);
})

.catch( erro => {
    console.error("Erro ao enviar a imagem para o servidor: " + erro);
})
}
