const router = require('express').Router();
const register = require('../../models/register');
const Register = require('../../models/register');


router.get('/', async(req, res) => {
    const register = await Register.find().sort({nombre: 1});
    res.json(register);
});

router.post('/', async (req, res) => {
    const nuevoRegister = await Register.create(req.body);
    res.redirect('/register');
});

module.exports = router;