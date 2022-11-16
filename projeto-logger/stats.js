const os = require('os')

//console.log(os)

//os.freemem()
const {freemem, totalmem } = os 

console.log(`${parseInt(freemem() /1024/1024)} mb - ${parseInt(totalmem()/1024/1024)}`)

const total = parseInt(total()/1024/1024)
const freeMem = parseInt(freemem()/1024/1024)
const usage = total - freeMem
const parcents = ( usage / total ) * 100


const stats = {
    total: `${total} MB`,
    freeMem:`${freeMem} MB`,
    usage: `${usage} MB`,
    parcents: `${parcents}`
}