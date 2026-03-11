// console.log("Hello World");

// let nome = "João";
// console.log(nome);

// const pi = 3.14;
// console.log(pi);

// let n1 = 1;
// let n2 = 2;

// console.log(n1 + n2);

// function saudacao() {
//     console.log("Olá meu nome é " + nome);
// };

// function somar(x, y) {
//     console.log(x + y);
// };

// saudacao();
// somar(4, 5);

function somarNumeros() {
    let soma = 0;
    let continuar = true;
    while (continuar) {
        let numero = parseFloat(prompt("Digite um número (ou digite '0' para encerrar): "));
        // soma = soma + numero;
        if (isNaN(numero)) {
            alert("Por favor, digite um número válido!");
        } else {
            soma += numero;
            console.log(soma);
        }
        continuar = confirm("Deseja adicionar mais um número.");
    }
    alert("A soma dos números é: " + soma);
    console.log("A soma dos números é: " + soma);
}
somarNumeros();