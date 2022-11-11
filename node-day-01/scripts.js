//servidor http
/*
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//callback

const fs = require('fs')
console.log('primeiro comaando')
console.log('segunda comaando')
console.log('terceira comaando')

fs.readFile('./text.txt', callback)

console.log('segunda comaando')
console.log('terceira comaando')

function callback(erro, content){
    if(erro) return console.error('erro');
    console.log(String(content))
}

//    utilizando programação assincrona
//setTimeout(myFunction, 3000)
setTimeout(() =>(console.log('teste setTimeOut')),3000)


function myFunction(){
    console.log("testando a função ... atrasada em 3000ms")
}
console.log("comando que esta apos a função setTime")
*/
//desafio
/* pega os objeto das class 
pega a data horas mitos e segundos*/
/*criar uma função sem parametro 
criar um objeto tipo date recebe new date não precisa de contrutor ele fica vazio
dentro da função usar os metodos  para montrar um string  com hora minuto e segundo ( pode jogar para variaveis)
jogar em um callback com 5000 (5s) para ver oque acontece

oque esta acontecendo */

/*
function myFunction(){
const data = new Date()
const hora = data.getHours()
const minutos = data.getMinutes()
const segundos = data.getSeconds()

const string = `são agora ${hora}:${minutos}:${segundos}`
console.log(string)
}
setTimeout(myFunction, 5000)
setTimeout(myFunction, 5000)
setTimeout(myFunction, 5000)
setInterval(myFunction, 5000)
console.log("pedro antônio")
*/
//utulizando programação sincrona

/*
function sum(){
const result = 1+1
  if (result === 2){
      setTimeout(sucesso, 5000)
    }
  else{
    erro()
  }
function sucesso(){
  console.log('Sucesso! A soama e 2')
}


function erro(){
  console.log('erro a soma não da 2')
}
}

sum()
console.log("teste de exibição")
*/

/*
//forma de callback
function sum(callback, callbackError){
  const result = 1+1
    if (result === 2){
        callback()
      }
    else{
      callbackError()
  }
}
  
sum(
    () =>(console.log('Sucesso! A soama e 2')),
    () => (console.log('erro a soma não da 2'))

  )
console.log("teste de exibição")


// promise 
// then() (execução quando a promesa for cumprida)
//resolve e reject (promessa cumprida e não cumpridas)

const promise = new Promise((resolve, rejact) =>{
  const result = 1+1
    if (result === 2){
        resolve('Sucesso! A soama e 2')
      }
    else{
      rejact('erro a soma não da 2')
    }
})

//promise.then((resultado)=>(console.log(resultado)))//quer receber oque vai acontecer quando der certo e quando der errado

promise.then(
  ((resultado)=>(console.log(resultado))),
  ((erro)=>(console.log(erro)))
)
*/
//voltando para callback
/*
const name = 'Paulo Sampaio'

function whoIsTheBest(callback, callbackError){
  if(name !='Paulo Sampaio'){
    callbackError('Ta errado. Não tem como!')
  }else{
  //callback(`${name} e o melhor!`)
  callback({
    name: name,
    message:`humildemente o melhor`
  })
  }
}
whoIsTheBest(
  ((sucesso)=>(console.log(`{$sucess.name} e ${sucess.message}`))),
  ((error)=>(console.log(error)))
  )
*/
const name = 'Paulo Sampaio'

  const promise = new Promise((resolve, rejact) =>{
    if(name !='Paulo Sampaio'){
      rejact('Ta errado. Não tem como!')
    }else{
    resolve({
      name: name,
      message:`humildemente o melhor`
    })
    }
  })
  
promise.then(
  ((sucesso)=>(console.log(`${sucesso.name} e ${sucesso.message}`))),
  ((erro)=>(console.log(erro)))
)