let n1 = 231
if (n1 > 10){
    console.log(`é maior que 10`)
}else if (n1 < 10){
    console.log(`é menor que 10`)
}else{
    console.log(`é igual 10`)
}

const person = {
    name:'Jõao',
    age:21,
    nationality:'Brazil'
}
if(person.nationality === 'Brazil'){
    console.log('Ele é Brasileiro')
}else{
    console.log('Ele é estrangeiro')
}

const randomNumber = Math.floor (Math.random() * (10 - 1) + 1);
const winningNumber = Math.floor (Math.random() * (10 - 1) + 1);

console.log(randomNumber)
console.log(winningNumber)

if (randomNumber === winningNumber){
    console.log('Você ganhou!')
}
else{
    console.log('Você perdeu!')
}

const firstnumber = 10
const seccondNumber = 18
const thirdNumber = 37

if(firstnumber > seccondNumber && firstnumber > thirdNumber){
    console.log('O Primeiro é maior')
}else if(seccondNumber > thirdNumber){
    console.log('O segundo é maior')    
}else{
    console.log('O terceiro é maior')
}

if(firstnumber < seccondNumber && firstnumber < thirdNumber){
    console.log('O primeiro é menor')
}else if (seccondNumber < thirdNumber){
    console.log('O segundo é menor')
}else{
    console.log('O terceiro é menor')
}

const person1 = {nome:'Flávio', idade:22 ,sexo:'Masculino',nacionalidade:'Brasileiro'}

const person2 = {nome:'Roberta', idade:22 ,sexo:'Feminino',nacionalidade:'Paraguay'}

if(person1.idade >= 18 && (person1.nacionalidade === 'Brasileiro' || person1.nacionalidade === 'Brasileira')){
    console.log('Você passou no processo')
}else{
    console.log('Voce não passou no processo')
}

if(person2.idade >= 18 && (person2.nacionalidade === 'Brasileiro' || person2.nacionalidade === 'Brasileira')){
    console.log('Voce passou no processo')
}else{
    console.log('Voce nao passou no processo')
}

const score = 10

switch (score){
    case 1:
        console.log('Nota muito ruim')
    break
    
    case 7:
        console.log('Nota okay')
    break

    case 6:
        console.log('Nota em cima da média')
    break

    case 10:
        console.log('Nota Perfeita')
    break    
}

const numero1 = 10
const numero2 = 7

if(numero1 % 2 === 0){console.log('O número é par')}
else{console.log('o número é impar')}

if(numero2 % 2 === 0){console.log('O numero é par')}
else{console.log('O número é impar')}

const num1 = 11

if(num1 % 2 === 0){
    if(num1 % 5 === 0)console.log('O numero é par e é divisível por 5')
    else console.log('O número é par mas nao é divisivel por 5')
}else{
    for (let i = 2; i < num1; i++)
    if (num1 % i === 0) {
        console.log('Ele é ímpar, mas não é primo')
        break
    }else{
        if (i === num1 - 1)console.log('Ele é um numero primo')
    }
}

const numberOne = 26
const numberTwoo = 32
const numberThree = 42
const numberFour = 22

if(numberOne % 2 === 0 && numberTwoo % 2 === 0 && numberThree % 2 === 0 && numberFour % 2 === 0){
    console.log('Todos os números são pares!')
}else if(numberOne % 2 !== 0 && numberTwoo % 2 !== 0 && numberThree % 2 !== 0 && numberFour % 2 !== 0){
    console.log('Todos os números são ímpares!')
}else{
    console.log('Há números pares e ímpares')
}