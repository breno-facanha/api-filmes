const express = require("express");
const router = express.Router();
const controllerFilmes = require('../controllers/filmes.controller.js')
const middlewaresFilmes = require('../middlewares/filmes')

router.get('/', controllerFilmes.getFilmes)
router.get('/:id', middlewaresFilmes.validateGetFilmById, controllerFilmes.getFilmeId)
router.get('/titulo/:titulo', controllerFilmes.getFilmeTitulo)
router.post('/', middlewaresFilmes.validadeInsertFilmes,  controllerFilmes.insertFilmes)
router.delete('/:id', middlewaresFilmes.validateGetFilmById, controllerFilmes.deleteFilme)
router.put('/update/:id', controllerFilmes.updateFilmes)

module.exports = router