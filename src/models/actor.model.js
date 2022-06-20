const mongoose         = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const Schema           = mongoose.Schema;

const params = { timestamps: true, strict: false, strictPopulate: false }
const schema = {
    id                  : { type: Number},
    imdb_id             : { type: String},
    known_for_department: { type: String},
    adult               : { type: Boolean, default: false },
    also_known_as       : [
        {type:String}
    ],
    biography     : { type: String, default: 'Acting' },
    birthday      : { type: String, default: '' },
    deathday      : { type: String, default: '' },
    gender        : { type: Number, default: 0 },
    homepage      : { type: String, default: '' },
    name          : {type:String},
    place_of_birth: {type:String},
    popularity    : { type: Number, default: 0 },
    profile_path  : {type:String},
}

const dbSchema = new Schema(schema, params);
dbSchema.plugin(mongoosePaginate);
let model = mongoose.model('actor_details', dbSchema)

module.exports = model

/*

{
    "_id" : ObjectId("629e1fdab7c4bb9a816cf4c7"),
    "id" : 378,
    "imdb_id" : "nm0000596",
    "known_for_department" : "Acting",
    "adult" : false,
    "also_known_as" : [
        "Джонатан Прайс",
        "조너선 프라이스"
    ],
    "biography" : "Jonathan Pryce es un actor galés. Es conocido por interpretar al Gobernador de Port Royal, Weatherby Swann, en las tres primeras películas de la saga cinematográfica Piratas del Caribe, por interpretar al Gorrión Supremo en Juego de Tronos y por el papel de Sir Stuart Strange en la serie Taboo.",
    "birthday" : "1947-06-01",
    "deathday" : null,
    "gender" : 2,
    "homepage" : null,
    "name" : "Jonathan Pryce",
    "place_of_birth" : "Carmel, Flintshire, Wales, UK",
    "popularity" : 22.151,
    "profile_path" : "/zwSv5uXzPTtmitFe39UdqnVwmdL.jpg",
    "createdAt" : ISODate("2022-06-06T15:40:10.931Z"),
    "updatedAt" : ISODate("2022-06-06T15:40:10.931Z"),
    "__v" : 0
}

//*/