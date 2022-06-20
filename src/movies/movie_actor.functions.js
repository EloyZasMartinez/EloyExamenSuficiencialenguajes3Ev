const mMovie = require('../models/movie.model');
const mMovieDetail = require('../models/movie_detail.model');
const mActorMovie = require('../models/movie_actor.model')

exports.getMovieActors = async (req, res) => {

    const actors = await mActorMovie.find({
        movie_id:453395
    })

    // TODO: FIXME: Mostrar los actores en galeria
    // (NOTA: profile_path es la ruta de la imagen, pero hay que completarla para que se pueda mostrar)
    /**
     * -> Usa el siguiente código para mostrar un actor:
     * <img src="https://image.tmdb.org/t/p/w500/<profile_path>" alt="<name>" />
    */
    res.render('actor/list', {actors})
}