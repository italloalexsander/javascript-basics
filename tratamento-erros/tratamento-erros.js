function validArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Parâmetros vazios");
        
        if(typeof arr!=='object') throw new TypeError("Primeiro parâmetro não é do tipo object array");
        
        if(typeof num!=='number') throw new TypeError("Segundo parâmetro não é do tipo number")   

        if(arr.length !== num) throw new RangeError("Tamanho inválido")

        return arr;
    }catch(e){
        if(e instanceof ReferenceError){
            console.log("ReferenceError foi detectado")
            throw e;
        }
        else if(e instanceof TypeError){
            console.log("TypeError foi detectado")
            throw e;
        }
        else if(e instanceof RangeError){
            console.log("RangeError foi detectado")
            throw e;
        }
        else{
            console.log("Tipo de erro não detectado: " + e);
        }
    }
}


console.log(validArray([], 5)); //Tamanho Invalido.