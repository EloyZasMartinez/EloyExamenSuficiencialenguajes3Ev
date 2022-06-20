const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    movie_id            : { type: Number },
    adult               : { type: Boolean, default: 'Gollum' },
    gender              : { type: Number, default:1 },
    known_for_department: { type:String, default:'Acting' },
    name                : { type:String, default:'' },
    original_name       : { type:String, default:'' },
    character           : { type:String, default:'' },
    popularity          : { type: Number },
    profile_path        : { type:String, default:'' },
    credit_id           : { type:String, default:'' },
    order               : { type:Number, default:1 },
    id                  : { type:Number, default:1 },
    cast_id             : { type:Number, default:1 }
}
const Esquema = new Schema(schema, params);
const model   = mongoose.model('actors', Esquema);

module.exports = model

/*
{
    "_id" : ObjectId("629dd329b680ee11232a1eeb"),
    "movie_id" : 393209,
    "adult" : false,
    "gender" : 1,
    "known_for_department" : "Acting",
    "name" : "CCH Pounder",
    "original_name" : "CCH Pounder",
    "character" : "Mo'at",
    "popularity" : 13.097,
    "profile_path" : "/c0ey32ObHhJIQVQYqGejaxOS23x.jpg",
    "credit_id" : "5989ff07c3a36874ff0177ff",
    "order" : 5,
    "id" : 30485,
    "cast_id" : 9,
    "createdAt" : ISODate("2022-06-06T10:12:57.513Z"),
    "updatedAt" : ISODate("2022-06-06T10:12:57.513Z"),
    "__v" : 0
}

//*/