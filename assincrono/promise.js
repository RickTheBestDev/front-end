const visualizador = (algo) => console.log(algo);

let minhaPromessa = new Promise((resolve, reject) => {
    let ok = true;
    if (ok) {
        resolve("Ok");
    } else {
        reject("Error");
    }
});

minhaPromessa.then(
    (valor) => visualizador(valor),
    (razao) => visualizador(razao)
);