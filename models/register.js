const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const registerSchema = new Schema ({
    id: Number,
    nombre: String,
    apellidos: String,
    email: String,
    password: String
});

module.exports = mongoose.model('register', registerSchema);