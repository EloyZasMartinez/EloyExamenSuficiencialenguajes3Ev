const express = require('express');
const router  = express.Router();

const cCat = require('./category.functions');

router.get('/all', cCat.getAllCategories )
router.get('/:id', cCat.getCategoryById )


// Ruta inicial de portada
router.get('/', (req, res) => {
    // TODO: FIXME: Mostrar las rutas de las lineas 6, 7
    // TODO: FIXME: Tener una ruta para volver a la ruta principal ('/')
    res.render('category/index');
});

module.exports = router;