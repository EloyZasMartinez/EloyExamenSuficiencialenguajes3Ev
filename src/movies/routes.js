const express = require('express');
const router  = express.Router();

const cMovie        = require('./movie.functions');
const cMovieActor   = require('./movie_actor.functions');
const cMovieDetails = require('./movie_detail.functions');
const cMovieVideo   = require('./movie_video.functions');

router.get('/getMovieActors', cMovieActor.getMovieActors )
router.get('/getMovieVideos', cMovieVideo.getMovieVideos )
router.get('/:id', cMovieDetails.getMovieDetails )

// Ruta inicial de portada
router.get('/', (req, res) => {
    // TODO: FIXME: Mostrar las rutas de las lineas 9, 10
    // TODO: FIXME: Tener una ruta para volver a la ruta principal ('/')
    res.render('movies/index');
});

module.exports = router;