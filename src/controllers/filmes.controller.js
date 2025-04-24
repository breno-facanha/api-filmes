const connection = require ('../models/connection')

function getFilmes(req, res){
    res.send("Rota de Filmes")
}

async function insertFilmes(req, res){
    const { titulo, genero, ano, minutos } = req.body

    if(!titulo, !genero, !ano, !minutos){
        res.status(400).send({message:  "Inserir dados corretamente"})
    }
    
    try {
        const filme = await connection.query( `INSERT INTO filmes (titulo, genero, ano, minutos)
        VALUES ('${titulo}', '${genero}', ${ano}, ${minutos})
        RETURNING *
        `)

        return res.status(201).send(filme.rows[0])
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

module.exports = {
    getFilmes,
    insertFilmes
}