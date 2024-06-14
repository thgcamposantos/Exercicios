/*Condicional Simples:
Escreva um programa que receba um número inteiro e verifique se ele é positivo. Se for positivo, exiba "O número é positivo".*/
let numero = parseInt(prompt("Digite um numero: "));
    if(numero == 0){
        console.log('Numero Nulo')
    }else if(numero > 0){
        console.log('Numero positivo')
    }else{
        console.log('Numero Negativo')
    }

/*Condicional Composta:
Crie um programa que receba um número inteiro e verifique se ele é par ou ímpar. Exiba "O número é par" ou "O número é ímpar" conforme o caso.*/
let verificar_numero = parseInt(prompt('Digite um número: '));
    if(verificar_numero % 2 == 0){
        console.log('Número Par')
    }else{
        console.log('Numero Impar')
    };
/*Condicional Aninhada:
Escreva um programa que receba três números e determine qual é o maior. Exiba "O maior número é X", onde X é o maior número.*/
let numero1 = parseInt(prompt('Digite um numero: '));
let numero2 = parseInt(prompt('Digite um numero: '));
let numero3 = parseInt(prompt('Digite um numero: '));
    if((numero1 == numero2) || (numero2 == numero3) || (numero1 == numero3)){
        console.log('Use tres distintos')
    }else if((numero1 > numero2) && (numero1 > numero3)){
        console.log("Numero 1 é maior");
    }else if((numero1 > numero2) && (numero1 < numero3)){
        console.log("Número 3 é o maior numero")
    }else if((numero1 < numero2) && (numero2 > numero3)){
        console.log("Número 2 é maior")
    };
/*Laço de Repetição com Saída Antecipada:
Crie um programa que receba números inteiros do usuário até que o usuário digite zero. Ao final, exiba a soma de todos os números digitados.*/
let soma = 0;
let digitar_numero;

do {
    digitar_numero = parseInt(prompt("Digite um número: "));
    if (digitar_numero !== 0) {
        soma += digitar_numero;
    }
} while (digitar_numero !== 0);

console.log("A soma dos números digitados é: " + soma);

    