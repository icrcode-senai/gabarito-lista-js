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

// 5 – Transformação par e ímpar
function exercicio5() {
    let numero = Number(prompt("Digite um número"));

    if (numero % 2 == 0) {
        numero = numero + 1;
    } else {
        numero = numero + 1;
    }

    console.log("Resultado:", numero);
}

// 6 – Verificar vogal ou consoante
function exercicio6() {
    let letra = prompt("Digite uma letra");

    if (
        letra == "a" || letra == "e" || letra == "i" ||
        letra == "o" || letra == "u"
    ) {
        console.log("Vogal");
    } else {
        console.log("Consoante");
    }
}

// 7 – Sistema de preços da picoléteria
function exercicio7() {
    let codigo = prompt("Digite o código do picolé");

    switch (codigo) {
        case "a":
            console.log("Chocolate - R$1,50");
            break;
        case "b":
            console.log("Morango - R$2,50");
            break;
        case "c":
            console.log("Creme - R$2,50");
            break;
        case "d":
            console.log("Manga - R$3,20");
            break;
        case "e":
            console.log("Melancia - R$3,40");
            break;
        case "f":
            console.log("Vanilla Ice - R$3,00");
            break;
        case "g":
            console.log("Céu Azul - R$3,60");
            break;
        case "h":
            console.log("Brownie - R$4,00");
            break;
        case "i":
            console.log("Hawaiano - R$5,00");
            break;
        default:
            console.log("Código inválido");
    }
}

// 8 – Operações com duas variáveis
function exercicio8() {
    let a = 10;
    let b = 5;

    console.log("Diferença:", a - b);
    console.log("Dobro de A + Triplo de B:", (a * 2) + (b * 3));
    console.log("Multiplicação:", a * b);
}

// 9 – Ordenação entre dois números
function exercicio9() {
    let a = Number(prompt("Digite o primeiro número"));
    let b = Number(prompt("Digite o segundo número"));

    if (a > b) {
        console.log(a, b);
    } else {
        console.log(b, a);
    }
}

// 10 – Folha de pagamento simples
function exercicio10() {
    let nome = prompt("Nome do funcionário");
    let salario = Number(prompt("Salário bruto"));

    let desconto = salario * 0.08;
    let liquido = salario - desconto;

    console.log("Funcionário:", nome);
    console.log("Salário bruto:", salario);
    console.log("Desconto INSS:", desconto);
    console.log("Salário líquido:", liquido);
}

// 11 – Folha de pagamento com desconto variável
function exercicio11() {
    let salario = Number(prompt("Digite o salário"));

    let taxa;

    if (salario <= 1000) {
        taxa = 0.08;
    } else if (salario <= 1500) {
        taxa = 0.085;
    } else {
        taxa = 0.09;
    }

    let desconto = salario * taxa;
    let liquido = salario - desconto;

    console.log("Salário:", salario);
    console.log("Taxa aplicada:", taxa * 100 + "%");
    console.log("Desconto:", desconto);
    console.log("Salário líquido:", liquido);
}

exercicio1();
exercicio2();
exercicio3();
exercicio4();
exercicio5();
exercicio6();
exercicio7();
exercicio8();
exercicio9();
exercicio10();
exercicio11();
