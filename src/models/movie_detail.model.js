const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    adult                : { type: Boolean, default:false },
    original_language    : { type:String, default:'en' },
    original_title       : { type:String, default:'' },
    overview             : { type:String, default:'' },
    character            : { type:String, default:'' },
    popularity           : { type: Number, default:0 },
    poster_path          : { type:String, default:'' },
    backdrop_path        : { type:String, default:'' },
    release_date         : { type:String, default:'' },
    title                : { type:String, default:'' },
    video                : { type:Boolean, default:false },
    vote_average         : { type:Number, default:0 },
    vote_count           : { type:Number, default:0 },
    belongs_to_collection: { type:String, default:'' },
    budget               : { type:Number, default:0 },
    genres               : [
        { type:Number, default:0 }
    ],
    homepage        : { type:String, default:'' },
    imdb_id         : { type:String, default:'' },
    revenue         : { type:Number, default:0 },
    runtime         : { type:Number, default:0 },
    spoken_languages: [
        { type:String, default:'' }
    ],
    status : { type:String, default:'' },
    tagline: { type:String, default:'' },
    id     : { type:Number, default:1 }
}
const Esquema = new Schema(schema, params);
const model   = mongoose.model('movie_details', Esquema);

module.exports = model


/*

{
    "_id" : ObjectId("629dc7a1b680ee11232a1b6c"),
    "adult" : false,
    "original_language" : "en",
    "original_title" : "Black Panther: Wakanda Forever",
    "overview" : "Segunda entrega de Black Panther protagonizada por el actor Chadwick Boseman, sinopsis pendiente por confirmar",
    "popularity" : 31.939,
    "poster_path" : "/6N6Rr1Y5wsi2KbTP4hFAP3hnWQE.jpg",
    "backdrop_path" : "/jfD92h1JMirOJqgSfc1qnSbnEv2.jpg",
    "title" : "Black Panther: Wakanda por siempre",
    "video" : false,
    "vote_average" : 0,
    "vote_count" : 0,
    "belongs_to_collection" : "529892",
    "budget" : 0,
    "genres" : [
        28,
        12,
        878
    ],
    "homepage" : "https://www.marvel.com/movies/black-panther-wakanda-forever",
    "imdb_id" : "tt9114286",
    "production_companies" : [
        420
    ],
    "production_countries" : [
        null
    ],
    "revenue" : 0,
    "runtime" : 0,
    "spoken_languages" : [
        "en"
    ],
    "status" : "In Production",
    "tagline" : "",
    "id" : 505642,
    "release_date" : ISODate("2022-11-09T00:00:00.000Z"),
    "createdAt" : ISODate("2022-06-06T09:23:45.323Z"),
    "updatedAt" : ISODate("2022-06-06T09:23:45.323Z"),
    "__v" : 0
}

//*/