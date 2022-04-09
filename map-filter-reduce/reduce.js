function sumNumbers(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    }, 80)
}


const lista = [
    {
        name: 'mouse',
        preco: 100,
    },
    {
        name: 'teclado',
        preco: 300,
    },
    {
        name: 'monitor',
        preco: 500,
    }
]

const saldo = 2000

function availableCredit(saldo, lista){
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    }, saldo);
}



const numb = [1, 5, 10, 25, 36];

console.log(sumNumbers(numb));
console.log(availableCredit(saldo, lista))