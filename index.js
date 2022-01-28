
const http = require ('http')

  // GET /hola -> hola mundo
  // POST /hola -> aqui puedes crear un recurso
  // DELETe /hola -> aqui puedes borrar un recurso
  // GET /adios -> adios :c

const server = http.createServer((request, response)=>{
   
  if (request.method === 'GET' && request.url === '/hola') {
    console.log('method', request.method,'url', request.url)
    response.write('hola mundo')
 
  } else if (request.method === 'POST' && request.url === '/hola') {
    console.log('method', request.method,'url', request.url)
    response.write('aqui puedes crear un recurso')

  } else if (request.method === 'DELETE' && request.url === '/hola') {
    console.log('method', request.method,'url', request.url)
    response.write('aqui puedes borrar un recurso')

  }else if (request.method === 'GET' && request.url === '/adios') {
    console.log('method', request.method,'url', request.url)
    response.write('adios :c')

  }

  response.end()
})



server.listen(8080,()=>{
    console.log('server listening')
})

//GET /koders => lista de koders
//POST / 