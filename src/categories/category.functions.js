const mCat          = require('../models/category.model')
const mMovieDetails = require('../models/movie_detail.model')

exports.getAllCategories = async (req, res) => {
    const categories = await mCat.find()
    // TODO: FIXME: Mostrar un listado de las categorias y las rutas para entrar en cada una de ellas
    // (NOTA => Usa el atributo category._id)
    res.render('category/index', {categories})
}

exports.getCategoryById = async (req, res) => {
    const {body, params, query} = req
    const id = params.id || query.id || body.id

    const category = await mCat.findById(id)
    if (!category) {
        return res.status(404).json({
            message: 'Category not found'
        })
    }

    res.json(category)
}