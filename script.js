// 1 – Soma de números informados
function exercicio1() {
    let soma = 0;
    let continuar = true;

    while (continuar) {
        let numero = Number(prompt("Digite um número:"));
        soma += numero;

        let resposta = prompt("Deseja continuar? (s/n)");

        if (resposta == "n") {
            continuar = false;
        }
    }

    console.log("Soma total:", soma);
}

// 2 – Contagem regressiva da NASA
function exercicio2() {
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }

    console.log("Lançamento realizado!");
}
