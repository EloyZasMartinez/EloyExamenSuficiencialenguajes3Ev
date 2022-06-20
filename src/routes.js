const express = require('express');
const router  = express.Router();

router.use('/movies',     require('./movies/routes'))
router.use('/actor',      require('./actor/routes'))
router.use('/categories', require('./categories/routes'))

// Ruta inicial de portada
router.get('/', (req, res) => {

    // Hacer una portada para la web, donde haya unos botones (a) para cada una de las funciones
    /*
    // TODO: FIXME: Tiene que tener un Menu para ir a las rutas:
    .- /movies
    .- /categories
    .- /actors

    //*/
    res.render('index');
});

module.exports = router;