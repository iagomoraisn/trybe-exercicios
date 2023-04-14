/*let saldo = 1000;

function adicionarValor(saldoAtual, valor) {
  let novoSaldo = saldoAtual + valor;
  return novoSaldo;
}

function subtrairValor(saldoAtual, valor) {
  let novoSaldo = saldoAtual - valor;
  return novoSaldo;
}

function multiplicarPorTaxa(saldoAtual, taxa) {
  let novoSaldo = saldoAtual * taxa;
  return novoSaldo;
}

function dividirValor(saldoAtual, divisor) {
  let novoSaldo = saldoAtual / divisor;
  return novoSaldo;
}

console.log(adicionarValor(saldo, 500)); // saída: 1500
console.log(subtrairValor(saldo, 200)); // saída: 800
console.log(multiplicarPorTaxa(saldo, 1.1)); // saída: 1100
console.log(dividirValor(saldo, 2)); // saída: 500
*/

/*let saldo =100;

function somarsaldo (valor) {
    return valor + saldo;
};

function subtrairsaldo(valor) {
    return valor - saldo;
};

function multiplicasaldo(valor) {
    return valor * saldo;
};

function divivesaldo(valor) {
    return valor / saldo;
};

console.log(somarsaldo (300)); 
console.log(subtrairsaldo(50));
console.log(multiplicasaldo(100));
console.log(divivesaldo(10));
*/

/*let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função
function adicionaCliente(cliente) {
if (typeof cliente === 'string') {
    clientesTrybeBank.push(cliente);
    return 'Cliente adicionada(o) com sucesso!';
} else {
    return 'O parametro passado deve ser do tipo "string"';
}

}

console.log(adicionaCliente(true)); //  O parâmetro passado deve ser do tipo "string"
console.log(adicionaCliente('Joaquim')); // Cliente adicionada(o) com sucesso
console.log(clientesTrybeBank); // [ 'Ada', 'John', 'Gus', 'Joaquim' ]*/

/* let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente) {
    if (typeof cliente === 'string')  {
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if(cliente === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                clienteEncontrado = true;
                return 'Cliente excluida(o) com sucesso.';
            }
        }

        if (clienteEncontrado === false) {
            return 'Cliente não encontrada(o)'
        }

    } else {
        return 'O parametro passado deve ser do tipo "string"';
    }
};

        console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
        console.log(removeCliente('Barney')); // Cliente não encontrada(o)
        console.log(removeCliente('john')); // Cliente excluída(o) com sucesso.
        console.log(removeCliente(clientesTrybeBank)); // [ 'Ada', 'Gus' ]*/





        /*let lado1 = 9;
        let lado2 = 7;
        let lado3 = 8;

        function checkIntegerPositive (l1, l2, l3){[]
            if (checkIntegerPositive >= 1 &&  ) {
                return true;
            }
        
        }*/


       /* let diasDaSemana = {
            1: 'domingo',
            2: 'segunda-feira',
            3: 'terça-feira',
            4: 'quarta-feira',
            5: 'quinta-feira',
            6: 'sexta-feira',
            7: 'sábado',
          };
          
          diasDaSemana.1; // SyntaxError: Unexpected number
          console.log(diasDaSemana['1']); // domingo */
/*
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 }; */

/* let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
}; */
        
 /*console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

player.medals = { golden: 2, silver: 3 };
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

*/
        
/*let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  } */

  /* let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let name in names) {
  console.log("Ola "  +  names [name])
  } */

  /* let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let index in car) {
    console.log(index, car[index]);
  } */  

  /*let student = {   
    firstName: 'iago',  
    lastName: 'Morais',
    age: 27,
    job: 'manager',
    email: 'iagojkd96@hotmail.com',
    github: 'iagomoraisn',
    linkedin: 'https://www.linkedin.com/in/iago-morais96/',
    };

    console.log(student);*/

  /*  let object = { a: 1, b: 2, c: 3 };

for (let property in object) {
  console.log(property + ' = ' + object[property]);
} */


/*let starships = {
    option1: "Tardis",
    option2: "Millennium Falcon",
    option3: "Enterprise",
    option4: "Heart of Gold"
  }

        
    for (let starship in starships) {
        console.log(starship + ' = ' Object.values(starships) );
    }*/
 
    /*function userInfo() {
      let userEmail = 'maria@email.com';
    
      // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
      console.log(userEmail);
    }
    userInfo();*/

    /*let userName = 'Isabella';
let userName = 'Lucas';
console.log(userName); // Resultado: Lucas */

/*function hello() {
  let saudacoes = ["Hello World!", "Olá Mundo!"];
  console.log(saudacoes[0]);
}*/

/*

const nome = "Gus";
const modulos = [1];
const empresa = {
  nome: "Trybe",
  nota: 8001,
};

modulos.push(3);
nome = "Batman";
empresa.nota = 8002;
*/

/*
função basica de cumprimento
function cumprimentaCliente (cliente) {
  return 'Olá ' + cliente + ', seja bem vindo(a)!';
}
console.log(cumprimentaCliente('cliente1'));*/

/*
criando calculadora de saldo
let saldo = 100;

function somarSaldo(valor) { 
    saldo = saldo + valor;
    return saldo;
}
function subtraiSaldo(valor) {
  saldo = saldo - valor;
  return saldo;
}
function multipliqueSaldo(valor) {
  saldo = saldo * valor;
  return saldo;
} 
function dividaSaldo(valor) {
  saldo = saldo / valor;
  return saldo;
}

console.log(dividaSaldo(200)); // 100  */










