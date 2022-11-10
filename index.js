/*// Overview de JavaScript

// console
console.log('Texto dentro de um log.')
console.warn('Isso é um alerta.')
console.error('Essa é uma mensagem de erro.')
// console é um objeto e log(), warn() e error() são métodos ou funções

// variáveis

// escopo global
let x = 10
if(true){
    // escopo local
    let x = 20
    console.log(x)
}
// é incorreto utilizar var depois do EC6

// tipos de dados

// string
const name = 'Victor'
console.log(name)
console.log(typeof name)

// number
let n = 10
console.log(n)
console.log(typeof n)
n = 15.99
console.log(n)
console.log(typeof n)

// bool
const isOpen = 0
console.log(isOpen)
console.log(typeof isOpen)

// null
const a = null
console.log(a)
console.log(typeof a)

// undefined 
let nada
console.log(nada)
console.log(typeof nada)
// deve-se evitar ter dados nessa configuração

// array
const linguagens = ['C++', 50, 'Python', 'JS']
console.log(linguagens[1])
console.log(typeof linguagens[1])

// object literals
// são usados quando a necessidade é de representar alguma entidade, como usuário, pessoa, produto
// possuem notação específica, similar à do JSON
const user = { 
    username:'vrc', 
    password:'123', 
    name:'Victor',
    age:31
}
console.log(user)
console.log(typeof user)

// métodos de string
const text = 'qualquer um'
// length para retornar o tamanho de uma string; obs.: length é um atributo, e não um método
console.log(text.length)
// split() para quebrar texto em um determinado conjunto de caracteres
const textToArray = text.split('quer')
console.log(textToArray[1])
// toUpperCase() para transformar todos os caracteres em maiúsculo
console.log(text.toUpperCase())
// indexOf() para procurar algo dentro de uma string
console.log(text.indexOf('abc'))
// charAt() para encontrar um char em uma posição específica dentro do vetor de caracteres que uma string é
console.log(text.charAt(0))
// slice() para encontrar um conjunto de caracteres num determinado intervalo do vetor da string
console.log(text.slice(2,10))

// mais sobre arrays
// podem ser heterogêneos, ou seja, ter dados de tipos diferentes
const chars = ['A', 'B', 'C', 'D', 88]
// length em um array retorna quantos dados estão lá dentro
console.log(chars.length)
// para chegar na última posição, tamanho-1 como índice
console.log(chars[chars.length-1])
// mesmo que seja declarado como const, dá pra manipular um array
chars[5] = 'F'
console.log(chars)
// pop para excluir do fim do array; shift para excluir do início do array
chars.pop()
chars.pop()
chars.pop()
// push para inserir no fim do array; unshift para inserir no início do array 
chars.push('B')
console.log(chars)



// Desafio: desenvolva uma calculadora para as 4 operações básicas usando const com os dados vindo de um formulário.


function sum(){
    const formData = new FormData(document.querySelector('form'))
    const n1 = formData.get('n1')
    const n2 = formData.get('n2')
    console.log(n1+' '+n2)
}

// object literal

const product = {
    productName: 'Camisa',
    price: 29.99,
    inStock: true,
    size: ['p', 'm', 'g'],
    'main color': 'red'
}

console.log(product.size[product.size.length-1])
console.log(product.price)
console.log(product['main color'])

// destructuring - desestruturação

let { productName, price } = product
console.log(price)
price = 30.49
console.log(price)
console.log(product.price)

const vector = [3,7,2,45,99]
let [ v1, v2, ...otherVector] = vector
console.log(otherVector)

// JSON - JavaScript Object Notation
// XML é concorrente do JSON

// criando o objeto cachorro
const dog = {
    name: 'Scooby',
    age: 10
}
console.log(dog)
const dogJson = JSON.stringify(dog)
console.log(dogJson)
const dogObject = JSON.parse(dogJson)
console.log(dogObject)

//const jsonErrado = '{"primeiro":"dado1""segundo":222,"terceiro":"dado3}'
//const jsonErradoObject = JSON.parse(jsonErrado)

// Desafio 1: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

const vectorChallenge = [77,45,3,8,123]

const objectChallenge = {
    n1: vectorChallenge[0],
    n2: vectorChallenge[1],
    n3: vectorChallenge[2],
    n4: vectorChallenge[3],
    n5: vectorChallenge[4],
}

const {n1, n2, n3, n4, n5} = objectChallenge

console.log(JSON.stringify({n1,n2,n3,n4,n5}))

// Desafio 2: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão propriedades do objeto) com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.

const num1 = 10
const num2 = 20
const calc = {
    soma: num1+num2,
    sub: num1-num2,
    mult: num1*num2,
    div: num1/num2
}
console.log(JSON.stringify(calc))



// estruturas, métodos de listas, funções
const n = 100
if(n > 10){ // > < >= <= == !=
    console.log('Teste de entrada no if.')
}
const texto = '0'
if(texto === 0)
    console.log("Os dados são iguais.")
else if(true) 
    console.log('Segundo if - if aninhado.')
else
    console.log('Saída...') // erro na hora de pensar o código...
// operador ternário
const resultado =  n > 20 ? true : false
console.log(resultado)
console.log(typeof resultado)
// repetição: precisa de 3 partes - variável de controle e a inicialização dela; condição/critério de parada; alteração do valor da variável de controle
let contador = 0
const lista = [1, 7, 3, 64, 2, 0]
while(contador < lista.length){
    console.log('O \'elemento\' da\n\n vez é ' + lista[contador] + '.')
    contador++ // contador = contador + 1
}
const outraLista = ['a', 'b', 'd', 'e', 'c']
for(let contador = 0; contador < outraLista.length; contador++)
    console.log(`O elemento da

    vez é ${outraLista[contador]}.`) //template literais, ou template strings



const a = 5
const b = 10
const out = ('Quinze e ' + (a+b) + '\ne não ' + (2*a+b) + '.')

//forma literal 
const out2 = `Quinze e ${(a+b)} 
ne não ${(2*a+b)}.`

console.log(out)
console.log(out2)


//metodos de arrays

const names = ['victor','paulo','elias','fabio']

names.forEach(function(name){ //função que percorre o string
    console.log(name)
})

//buscar conteudos
const modifiedNames = names.map(function(name){
    if(name == 'paulo')
        return('paulo sampaio')
    
    else
        return name
})
modifiedNames.forEach(function(modifiedNames){ //função que percorre o string
    console.log(modifiedNames)
   
})

//filter 

const numArray = [90,4,6,22,74,36,4,8].filter(function(name){
    return name < 10

})
    console.log(numArray)


const sumArray = numArray.reduce(function(num1, num2){
    return num1+num2

})
console.log(sumArray)


//funçaõ

function myFunction(){
    return 'testando function'
}

//chamando função

//myFunction()

console.log(myFunction())


//arraw function === função anônima
//function(data){ return 0; }

const myArrayFunction = function(a,b){
    return a+b
}
console.log(myArrayFunction(5,2))

function fora (){
    let x=7
    function somaXMais(x){
        return x + 8

    }
    return somaXMais()
}
() => ( (x=7) => (x=5))

const testArrow = () => ((x=7), () =>(x+5))  ()
console.log(testArrow())
//outras arrow 
//function sum (a + b){
   // return a + b
//}

//const sum = (a,b) => a + b

//console.log(sum)


//function isAdult(age) {
  //  return age > 18
//}


//const isAdult = age => age > 18
//pode ser tb  
//const isAdult = x => x > 18


// function getRandomNumber(){
//   return Math.random()
// }

//const getRandomNumber = () => Math.random()


//document.addEventListener('click', function()){
    // console.log('clicked')
//}

//document.addEventListener('click', () => console.log('clicked')) //se ouver mais de uma instrução coloque ()



//aula 08.11

//const nameLength = names.map(function(value){
  //  return value.length
//})
//console.log(nameLength)
 
//const nameLength = names.map( value => value.length)
//console.log(nameLength)

//const nameLength = names.map( ({length}) => length)

//console.log(nameLength)
let varX = 50
function out(){
    let varX = 35
    function sumXand5(){
        let varX = 10
        return varX+5
    }
     return sumXand5()
}
console.log(out())


let varX = 10

    function sumXand5(){
        return varX+5
    }
    export {sumXand5, varX}

// Desafio A+: Fazer esquema em que um código declara uma variável (let) e uma função faz a soma do valor da variável com um valor estático (5, por exemplo) como retorno. Outro código importa o primeiro e declara uma variável com o mesmo nome e outro valor. Em seguida, chama a função do primeiro código. Qual valor será exibido?
// Utilizar o artigo disponível no endereço https://www.horadecodar.com.br/2020/08/13/como-incluir-um-arquivo-de-javascript-em-outro/

/*

// orientação a objetos
class Product {
    name
    price
    constructor(name, price){
        this.name = name
        this.price = price
    }
    productDetails(){
            console.log(`O nome do produto e ${this.name} e o preço e ${this.price}.`)
    }
    static test(){
        console.log('testando metodo static')
    }
}


//instanciando um objeto product
const shift = new Product('camisa azul', 24.99)
shift.productDetails()
const prink = new Product(`short verde`, 19.99)
prink.productDetails()


Product.test()

//herança

class Tenis extends Product{
    constructor(name, price, size){
        super(name, price)
        this.size = size
    }
    showNumber(){
        return `o nome do tenis e ${this.name}tamanho: ${this.size}, e custa ${this.price}.`
    }

}
const tenis = new Tenis(` dadafa `, 149.99, 43)
console.log(tenis.showNumber())

*/

const texts = document.querySelectorAll('.text')
console.log(texts)

texts.forEach((data) => console.log(data))

texts[0].textContent = 'Estou alterando o primeiro parágrafo.'

texts[0].innerHTML = '<span>Testando uma alteração...</span>'

texts[1].style.backgroundColor = 'red'
//text[2].remove()

const button = document.querySelector('#btn')

button.addEventListener('click',()=>(texts[3].style.backgroundcolor='blue'))




////////aula do dia 09-11

