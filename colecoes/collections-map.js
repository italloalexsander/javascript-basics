function getAdmin(map){
    let admins = []
    for([chave, valor] of map){
        if( valor === 'Admin'){
            admins.push(chave)
        }
    }
    return admins;
}

function getUser(map){
    let users = []
    for([chave, valor] of map){
        if( valor === 'User'){
            users.push(chave)
        }
    }
    return users;
}

const pessoas = new Map();

pessoas.set('Cloud', 'Admin')
pessoas.set('Sephiroth', 'Admin')
pessoas.set('Sora', 'User')
pessoas.set('Riku', 'User')

console.log(getAdmin(pessoas));
console.log(getUser(pessoas));