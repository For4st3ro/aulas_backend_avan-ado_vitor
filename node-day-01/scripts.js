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