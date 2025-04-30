const express = require("express");
const router = express.Router();
const controllerFilmes = require('../controllers/filmes.controller.js')
const middlewaresFilmes = require('../middlewares/filmes')

router.get('/', controllerFilmes.getFilmes)
router.get('/:id', controllerFilmes.getFilmeId)
router.get('/titulo/:titulo', controllerFilmes.getFilmeTitulo)
router.post('/', middlewaresFilmes.validadeInsertFilmes,  controllerFilmes.insertFilmes)
router.delete('/:id', controllerFilmes.deleteFilme)
router.put('/:id', controllerFilmes.updateFilmes)

module.exports = router