import fastify from 'fastify'

const app = fastify()

app.listen({
  port: 3333
}).catch(() => {
  console.log('HTTP server running!')
})