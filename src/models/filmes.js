const connection = require("./connection.js")

async function insertFilmes(filme){
    const filmeInsert = await connection.query(`
        INSERT INTO filmes (titulo, genero, ano, minutos, nota, sinopse, banner)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
        `,[filme.titulo, filme.genero, filme.ano, filme.minutos, filme.nota, filme.sinopse, filme.banner])

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
    const filme = await connection.query(`SELECT * FROM filmes WHERE id = $1`, [id])
    return filme
}

async function deleteFilmes(id) {
    const filme = await connection.query(`DELETE FROM filmes WHERE id = $1`, [id])
    return filme.rows[0]
}

module.exports = {
    insertFilmes,
    getFilmes,
    getFilmeId,
    deleteFilmes
}