const {PersonRepository} = require("../repositories/PersonRepository.js");
const {LogReport} = require("../../frameworks/common/logReport.js");

class PersonListAll {
  static async execute(req, res, next) {
    try {
      LogReport.log("PersonListAll", 7,"PersonListAll called");
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
      LogReport.error("PersonListAll", 18, error);
      next(error);
    }
  }
}

module.exports = {PersonListAll};
