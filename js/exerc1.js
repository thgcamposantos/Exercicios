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
