const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    id         : { type: Number },
    title      : { type:String, default:'' },
    slug       : { type:String, default:'' },
    name       : { type:String, default:'' },
    description: { type:String, default:'' },
    link       : { type:String, default:'' }
}
const Esquema = new Schema(schema, params);
const model   = mongoose.model('categories', Esquema);

module.exports = model


/*

{
    "_id" : ObjectId("629ba07ea97b8d6bb5763d8d"),
    "id" : 28,
    "title" : "Peliculas de Acción",
    "slug" : "peliculas_de_accion",
    "name" : "Acción",
    "description" : "☞【Las Mejores Peliculas de Acción】🎥Descargalas en HD-Rip y Screener. Estrenos y las Mejores Peliculas, que no encontrarás en otro lugar.",
    "link" : "https://bit.ly/2WFIEzA",
    "createdAt" : ISODate("2022-06-04T18:12:14.909Z"),
    "updatedAt" : ISODate("2022-06-04T18:12:14.909Z"),
    "__v" : 0
}

//*/