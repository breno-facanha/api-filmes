const connection = require("./connection.js")

async function insertFilmes(filme){
    const filmeInsert = await connection.query(`
        INSERT INTO filmes (titulo, genero, ano, minutos)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,[filme.titulo, filme.genero, filme.ano, filme.minutos])

    return filmeInsert.rows[0]

}

async function getFilmes() {
    try {
        const filme = await connection.query(`SELECT * FROM filmes `)
        return filme.rows
    } catch (error) {
        res.status(400).send("Erro ao buscar filmes model")
    }
}

async function getFilmeId(id) {
    const filme = await connection.query(`SELECT * FROM filmes WHERE id = ${id}`)
    return filme
}

module.exports = {
    insertFilmes,
    getFilmes,
    getFilmeId
}