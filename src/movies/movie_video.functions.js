const mMovie       = require('../models/movie.model');
const mMovieDetail = require('../models/movie_detail.model');
const mMovieVideos = require('../models/movie_video.model');

exports.getMovieVideos = async (req, res) => {

    const videos = await mMovieVideos.find({
        movie_id:453395
    })

    // TODO: FIXME: Mostrar los videos en galeria
    // (NOTA: Los videos tienen el atributo key para poder ser reproducidos)
    /**
        -> Usa el siguiente código para reproducir un video:
        <iframe width="560" height="315"
            src="https://www.youtube.com/embed/<key>"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
     */
    res.render('movies/videos', {videos})
}