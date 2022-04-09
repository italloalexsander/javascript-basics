function evenNumbers(arr){
    return arr.filter(callback);
}

function callback(item){
    if(item%2 === 0){
        return item;
    }
}

numeros = [1, 2, 3, 4, 5, 6]

console.log("Valores pares:", evenNumbers(numeros));