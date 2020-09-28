const router = require('express').Router();
const Anime = require('../../models/anime');
const app = require('../../app');
const anime = require('../../models/anime');




router.get('/', async(req, res) => {
    const animes = await Anime.find().sort({titulo: 1});
    res.json(animes);
});

router.get('/categoria/:nombreCategoria', async(req, res) => {
    const animes = await Anime.find({categoria: req.params.nombreCategoria}).sort({titulo: 1});
    res.json(animes);
})

router.post('/', async (req, res) => {
    const nuevoAnime = await Anime.create(req.body);
    res.redirect('/animes');
});

module.exports = router;