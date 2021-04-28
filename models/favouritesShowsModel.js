const mongoose = require('mongoose');

const favouritesShowsSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  language: {
    type: String,
  },
  genres: {
    type: Array,
  },
  status: {
    type: String,
  },
  officialSite: {
    type: String,
  },
  rating: {
    type: Object,
  },
  image: {
    type: Object,
  },
  summary: {
    type: String,
  },
});

module.exports.FavouritesShows = mongoose.model('favouritesShows', favouritesShowsSchema);
