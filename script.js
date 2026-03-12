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

// 3 – Balanço financeiro anual
function exercicio3() {
    let ganhoAnual = 0;
    let gastoAnual = 0;

    for (let i = 1; i <= 12; i++) {
        let ganho = Number(prompt("Ganho do mês " + i));
        let gasto = Number(prompt("Gasto do mês " + i));

        ganhoAnual += ganho;
        gastoAnual += gasto;
    }

    let saldo = ganhoAnual - gastoAnual;

    console.log("Ganho anual:", ganhoAnual);
    console.log("Gasto anual:", gastoAnual);
    console.log("Saldo anual:", saldo);

    if (saldo > 0) {
        console.log("Lucro");
    } else {
        console.log("Prejuízo");
    }
}

// 4 – Ordenação de valores
function exercicio4() {
    let numeros = [];

    for (let i = 0; i < 4; i++) {
        numeros.push(Number(prompt("Digite um número")));
    }

    numeros.sort((a, b) => b - a);

    console.log("Ordem decrescente:", numeros);
}
