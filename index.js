const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const dotenv = require('dotenv')
dotenv.config();

const routesFilmes = require('./src/routes/filmes.js')

app.use(cors())
app.use(express.json())

app.use('/filmes', routesFilmes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})