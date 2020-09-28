const router = require('express').Router();


const animesApiRouter = require('./api/animes');
const registerApiRouter = require('./api/register')

router.use('/animes', animesApiRouter);
router.use('/register', registerApiRouter);

module.exports = router;