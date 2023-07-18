const axios = require("axios");

async function getCharById (req, res) {
  try{
    const {data} = await axios(`https://rickandmortyapi.com/api/character/:id`)
    let id = req.params.id
    if (data.name) {
      char = {
        id: id,
        name: data.name,
        status: data.status,
        species: data.species,
        gender: data.gender,
        origin: data.origin,
        image: data.image,
        episode: data.episode,
      };
      return res.json(char);
    }
    return res.status(404).send("Not found");
  } 
  catch (error) {
    return res.status(502).send(error.message);
  }
}


module.exports = {
  getCharById,
};
