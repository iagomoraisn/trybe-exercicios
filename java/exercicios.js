/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    echo "a media aritmetica: ";
    array_sum(numbers) / count(numbers);

console.log(numbers);
*/

/*Calcule e imprima a média aritmética dos valores contidos no array.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average);*/

//Com base no código que acabou de gerar, faça com que: caso o valor final seja maior que 20, imprima a mensagem “Valor maior que 20”; e, caso não seja maior //que 20, imprima a mensagem “Valor menor ou igual a 20”.

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

result = result / numbers.length;

if (result > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}
*/

//Utilizando for, descubra o maior valor contido no array e imprima-o.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// O valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso o valor 101 fosse atribuído à variável, o algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema, inicie a variável com o primeiro valor do array. Assim, é possível pular a posição 0 e iniciar com index = 1.

/*let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);*/

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}*/

//Utilizando for, descubra o menor valor contido no array e imprima-o.

/*let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// O valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso o valor 1 fosse atribuído à variável, o algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema, inicie a variável com o primeiro valor do array. Assim, é possível pular a posição 0 e iniciar com index = 1.

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber); */










