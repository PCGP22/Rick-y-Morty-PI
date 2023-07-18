const axios = require("axios");

function getCharById (req, res) {
  let id = req.params.id
  axios
    .get(`https://rickandmortyapi.com/api/character/:id`)
    .then(({data}) => {
      try {
        if (response.data.name) {
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
