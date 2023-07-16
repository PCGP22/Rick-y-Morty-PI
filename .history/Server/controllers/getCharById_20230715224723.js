const axios = require("axios");

function getCharById (req, res) {
  let id = req.params.id
  axios
    .get(`https://rickandmortyapi.com/api/character/:id`)
    .then((response) => {
      try {
        if (response.data.name) {
          char = {
            id: id,
            name: response.data.name,
            status: response.data.status,
            species: response.data.species,
            gender: response.data.gender,
            origin: response.data.origin,
            image: response.data.image,
            episode: response.data.episode,
          };
          return res.send(JSON.stringify(char));
        }
        return res.status(404).send("Not found");
      } 
      catch (error) {
        return res.status(500).send(error.message);
      }
    });
};

module.exports = {
  getCharById,
};
