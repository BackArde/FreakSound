const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeSchema = new Schema({
    id: Number,
    titulo: String,
    texto: String,
    autor: String,
    imagen: String,
    categoria: String,
    url: String

});



module.exports = mongoose.model('anime', animeSchema);