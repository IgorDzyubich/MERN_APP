const express = require('express');
const router = new express.Router();

const {asyncWrapper} = require('./helpers');
const {authMiddleware} = require('./middlewares/authMiddleware');

const {addShow, getFavouritesShowsById, getFavouritesShows,
  deleteFavouritesShows} = require('../controllers/favouritesShowsController');

router.post('/', asyncWrapper(authMiddleware), asyncWrapper(addShow));
router.get('/', asyncWrapper(authMiddleware), asyncWrapper(getFavouritesShows));
router.get('/:id', asyncWrapper(authMiddleware), asyncWrapper(getFavouritesShowsById));
router.delete('/:id', asyncWrapper(authMiddleware), asyncWrapper(deleteFavouritesShows));

module.exports = router;
