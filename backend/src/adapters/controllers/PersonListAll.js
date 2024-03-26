const {PersonRepository} = require("../repositories/PersonRepository.js");

class PersonListAll {
  static async execute(req, res, next) {
    try {
      const response = await PersonRepository.listAll();
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {PersonListAll};
