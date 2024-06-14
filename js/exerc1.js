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
