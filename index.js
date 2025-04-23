const express = require('express')
const app = express()
const port = 4000
const routesFilmes = require('./src/routes/filmes.js')
const dotenv = require('dotenv')


app.use(express.json())
dotenv.config();

app.use('/filmes', routesFilmes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})