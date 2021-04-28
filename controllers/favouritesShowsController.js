const {FavouritesShows} = require('../models/favouritesShowsModel');

module.exports.addShow = async (req, res) => {
  try {
    const {id, name, type, language, genres, status, officialSite,
    rating, image, summary,} = req.body;
    console.log('id: ', id, 'name: ', name);
    const favouritesShow = new FavouritesShows({
      id, name, type, language, genres, status, officialSite,
      rating, image, summary
    });
    await favouritesShow.save();
    
    res.status(200).json({message: 'FavouritesShow created successfully'});
    
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

module.exports.getFavouritesShowsById = async (req, res) => {
  console.log('payload: ', req.payload)
  const showId = req.payload.id;
  if (!showId) {
    return res.status(400).json({message: `No show with name 
    '${req.payload.name}' found!`});
  }
  const show = await FavouritesShows.find({'id': showId});
  if (!show) {
    return res.status(400).json({message: `No show found!`});
  }
  res.status(200).json({'show': show});
};

module.exports.getFavouritesShows = async (req, res) => {
  console.log('payload: ', req.payload)
  
  const shows = await FavouritesShows.find({});
  if (!shows) {
    return res.status(400).json({message: `No shows found!`});
  }
  res.status(200).json({'shows': shows});
};

module.exports.deleteFavouritesShows = async (req, res) => {
  console.log(req.params)
  const showId = req.params.id;
  const show = await FavouritesShows.remove({'id': showId});
  if (!show) {
    return res.status(400).json({message: `No show found!`});
  }
  res.status(200).json({message: 'Show deleted successfully'});
};