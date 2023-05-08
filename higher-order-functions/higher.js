
/*ex 1

const employeeGenerator = (fullName) => {
    const email = fullName.toLowerCase().replace(' ', '_');
    return { fullName, email: `${email}@trybe.com`};

};

const newEmployees = (callback) => {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    };

    return employees;
    };

    console.log(newEmployees(employeeGenerator));

    /*Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. 
    Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:*/

    //ex2

   /*function soma (numero1, numero2){
    const somaNumeros = numero1 + numero2
console.log(somaNumeros)
} 
    soma (1, 2);

    function mult (numero1, numero2){

    const multNumeros = numero1 * numero2
    console.log(multNumeros)
    }

    mult (10, 50);

    function div (numero1, numero2){
        const divNumeros = numero1 / numero2
        console.log(divNumeros)
    }

    div (50, 1250)*/
