var express = require("express");
var router = express.Router();

const CLE_API_MOVIE_DB = process.env.CLE_API_MOVIE_DB;

router.get("/movies", async (req, res) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${CLE_API_MOVIE_DB}`;

  const reponse = await fetch(url);
  const reponseData = await reponse.json();
  const movies = reponseData.results;
  console.log(movies);
  res.json({ movies });
});

module.exports = router;
