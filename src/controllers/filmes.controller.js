const connection = require ('../models/connection')

async function getFilmes(req, res){
    try {
        const filme = await connection.query(`SELECT * FROM filmes `)
        
        res.send(filme.rows)    
    } catch (error) {
        res.status(400).send.message
    }
    
}

async function getFilmeId(req, res){

    try {
        const { id } = req.params

        const filme = await connection.query(`SELECT * FROM filmes WHERE id = ${id}`)
    
        res.send(filme.rows)    
    } catch (error) {
        res.status(400).send.message
    }
    
}

async function getFilmeTitulo(req, res){

   try {
        const { titulo }  = req.params

        const filme = await connection.query(`SELECT * FROM filmes WHERE titulo ILIKE '%${titulo}%' `)

        res.send(filme.rows)
   } catch (error) {
        return res.status(400).send(error.message)
   }
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

async function deleteFilme(req, res){

    try {
        const { id } = req.params

        await connection.query(`DELETE FROM filmes WHERE id = ${id}`)
    
        res.status(200).send({message: `Filme de id: ${id} deletado com sucesso`})    
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}

async function updateFilmes(req, res){

    try {
        const { titulo, genero, ano, minutos } = req.body
    
        const { id } = req.params

        await connection.query(`UPDATE filmes SET 
            titulo = '${titulo}',
            genero = '${genero}',
            ano = ${ano},
            minutos = ${minutos}
            WHERE id = ${id};`)

        res.send({message: `Filme atualizado com sucesso`})    
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}

module.exports = {
    getFilmes,
    getFilmeId,
    getFilmeTitulo,
    insertFilmes,
    deleteFilme,
    updateFilmes
}