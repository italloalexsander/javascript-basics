const apple = {
    value: 2,
}

const orange = {
    value: 3,
}

//Essa função usa o map com o this
function mapThis(arr, thisArg){
    return arr.map(function(item){
       return item * this.value;
    }, thisArg);
}

//Essa função usa o map sem o this
function mapSimple(arr){
    return arr.map(function(item){
        return item * 4;
    });
}

const numeros = [1, 2, 3];

console.log('this -> apple:', mapThis(numeros, apple));
console.log('this -> orange:', mapThis(numeros, orange));
console.log('Map w/o this:', mapSimple(numeros));
