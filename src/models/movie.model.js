const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    id               : { type:Number, default:1 },
    adult            : { type: Boolean, default:false },
    genre_ids        : [ { type:Number, default:0 } ],
    original_language: { type:String, default:'en' },
    original_title   : { type:String, default:'' },
    overview         : { type:String, default:'' },
    popularity       : { type: Number, default:0 },
    poster_path      : { type:String, default:'' },
    backdrop_path    : { type:String, default:'' },
    release_date     : { type:String, default:'' },
    title            : { type:String, default:'' },
    video            : { type:Boolean, default:false },
    vote_average     : { type:Number, default:0 },
    vote_count       : { type:Number, default:0 },
    similar          : [ { type:Number, default:0 } ],
    providers        : [ { type:Number, default:0 }]

}
const Esquema = new Schema(schema, params);
const model   = mongoose.model('movies', Esquema);

module.exports = model


/*

{
    "_id" : ObjectId("629dbec0c83628fbaf303fcd"),
    "id" : 338953,
    "adult" : false,
    "genre_ids" : [
        14,
        12,
        28
    ],
    "original_language" : "en",
    "original_title" : "Fantastic Beasts: The Secrets of Dumbledore",
    "overview" : "El profesor Albus Dumbledore sabe que el poderoso mago oscuro Gellert Grindelwald está haciendo planes para apoderarse del mundo mágico. Incapaz de detenerlo él solo, confía en el Magizoólogo Newt Scamander para dirigir un intrépido equipo de magos, brujas y un valiente panadero Muggle en una misión peligrosa, donde se encuentran con antiguos y nuevos animales y se enfrentan a una legión cada vez más numerosa de seguidores de Grindelwald.",
    "popularity" : 9941.754,
    "poster_path" : "/yOeuJdwag4bAlnvgrdweRoiuXGC.jpg",
    "backdrop_path" : "/7ucaMpXAmlIM24qZZ8uI9hCY0hm.jpg",
    "release_date" : ISODate("2022-04-08T00:00:00.000Z"),
    "title" : "Animales fantásticos: Los secretos de Dumbledore",
    "video" : false,
    "vote_average" : 6.8,
    "vote_count" : 1497,
    "similar" : [
        9610,
        9669,
        10008,
        10030,
        311,
        85,
        87,
        89,
        254,
        15121,
        14001,
        756,
        767,
        497,
        117,
        120,
        121,
        122,
        630,
        671
    ],
    "providers" : [],
    "createdAt" : ISODate("2022-06-06T08:45:52.127Z"),
    "updatedAt" : ISODate("2022-06-06T18:15:02.609Z"),
    "__v" : 1
}

//*/