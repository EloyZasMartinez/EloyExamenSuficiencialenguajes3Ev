const mMovie       = require('../models/movie.model');
const mMovieDetail = require('../models/movie_detail.model');

exports.getMovieDetails = async (req, res) => {
    const {body, params, query} = req
    const id = params.id || query.id || body.id

    const movie = await mMovieDetail.findById(id)
    if (!movie) {
        return res.status(404).json({
            message: 'movie not found'
        })
    }

    res.json(movie)

}