const mActorMovie  = require('../models/movie_actor.model');
const mActorDetail = require('../models/actor_details.model');
const mMovie       = require('../models/movie.model');


exports.getActorsFromMovie = async (req, res) => {
    const {body, params, query} = req
    const id = params.id || query.id || body.id

    const movie = await mMovie.findById(id)
    if (!movie) {
        return res.status(404).json({
            message: 'movie not found'
        })
    }

    const actors = await mActorMovie.find({
        movie_id: movie.id
    })

    // TODO: FIXME: Mostrar en galeria los detalles de los actores
    const obj = {
        actors: actors,
        movie : movie
    }
    res.render('actor/list', obj)
}

exports.getActorsFromUk = async (req, res) => {

    const actors = await mActorDetail.find({
        place_of_birth: { $regex: 'UK', $options: 'i' }
    })

   res.json(actors)
}