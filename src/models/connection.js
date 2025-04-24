const { Pool } = require('pg')

const connection = new Pool({
    connectionString: process.env.URL_DATABASE
})

module.exports = connection