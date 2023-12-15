function myFunc(a, b, c, ...numeros){
    let total = 0
    for(let num of numeros){
        if(a == '+'){
            total += num
        }
        if(a == '-'){
            total -= num
        }
    }
    console.log(...arguments)
    return total
}

//função de criar objeto
function criarObj(nome, sobrenome){
    return {nome, sobrenome}
}

//função de função
function criarMultiplicador(multiplicador){
    return function (n){
        return n * multiplicador
    }
}
//closure,
function falar(nome){
    return function(){
        return nome
    }
}

const duplicar = criarMultiplicador(2)
const triplicar = criarMultiplicador(3)

const funcao1 = falar('fabricio')

//função fabrica - factory function
function criarPessoa(nome, sobrenome, altura, peso){
    return {
        nome,
        sobrenome,
        altura,
        peso,
        imc (){
            return (this.peso/(this.altura ** 2))
        },
        get nomeCompleto(){
            return ` ${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){
            let array_nome = valor.split(' ')
            this.nome = array_nome.shift()
            this.sobrenome = array_nome.join(' ')
        }
    }
}
p1 = criarPessoa('Fabricio', 'Costa', 1.69, 72)
//console.log(p1.nomeCompleto)

//constructor - constructor function
function Pessoa (nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

}

p1 = new Pessoa('Felipe', 'Moura')

console.log(p1.nome)

//console.log(funcao1())

//console.log(myFunc('+', undefined, undefined, 1, 5, 4, 7), criarObj('Luiz', 'Otávio'))