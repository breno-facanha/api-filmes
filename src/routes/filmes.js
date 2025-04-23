const express = require("express");
const router = express.Router();
const controllerFilmes = require('../controllers/filmes.controller.js')

router.get('/', controllerFilmes.getFilmes)

module.exports = router