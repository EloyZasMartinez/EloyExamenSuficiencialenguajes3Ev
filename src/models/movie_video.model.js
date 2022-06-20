const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    id          : { type:String },
    movie_id    : { type:Number },
    official    : { type:Boolean, default:false },
    size        : { type:String, default:'' },
    iso_639_1   : { type:String, default:'' },
    iso_3166_1  : { type:String, default:'' },
    name        : { type:String, default:'' },
    key         : { type:String, default:'' },
    site        : { type:String, default:'' },
    type        : { type:String, default:'' },
    published_at: { type:String, default:'' }
}
const Esquema = new Schema(schema, params);
const model   = mongoose.model('movie_videos', Esquema);

module.exports = model


/*

{
    "_id" : ObjectId("629dd317b680ee11232a1ec0"),
    "id" : "61b49f1458efd3001bff46c6",
    "movie_id" : 914414,
    "official" : false,
    "size" : "1080",
    "iso_639_1" : "es",
    "iso_3166_1" : "ES",
    "name" : "Los Suelos - Teaser 2",
    "key" : "_jkBnMZsg60",
    "site" : "YouTube",
    "type" : "Trailer",
    "published_at" : ISODate("2021-04-25T16:21:31.000Z"),
    "createdAt" : ISODate("2022-06-06T10:12:39.189Z"),
    "updatedAt" : ISODate("2022-06-06T10:12:39.189Z"),
    "__v" : 0
}

//*/