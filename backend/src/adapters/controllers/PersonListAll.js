const {PersonRepository} = require("../repositories/PersonRepository.js");

class PersonListAll {
  static async execute(req, res, next) {
    try {
      let response = await PersonRepository.listAll();
      response =  response.map((person) => {
        return {
          name: person.name,
          image: person.image.toString('base64'),
          wanted: person.wanted,
        };
      })
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {PersonListAll};
