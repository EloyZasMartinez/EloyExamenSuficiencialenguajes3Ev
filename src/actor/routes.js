const express = require('express');
const router  = express.Router();

const ctrl = require('./actor.functions');

router.get('/uk', ctrl.getActorsFromUk );
router.get('/:id', ctrl.getActorsFromMovie)

// Ruta inicial de portada
router.get('/', (req, res) => {
    // TODO: FIXME: Mostrar las rutas de las lineas 6, 7
    // TODO: FIXME: Tener una ruta para volver a la ruta principal ('/')
    // (NOTA: Para el id del actor debe ser _id, por ejemplo: 629e1fdab7c4bb9a816cf4c7 )
    res.render('actor/index');
});

module.exports = router;