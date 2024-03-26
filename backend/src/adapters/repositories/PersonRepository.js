const {Person} = require("../../entities/person.js");
const {ApiError} = require("../../frameworks/common/ApiError.js");
const { messageError } = require("../../frameworks/common/constants.js");

class PersonRepository {
  static async create(person) {
    const newPerson = new Person({
      name: person.name,
      wanted: person.wanted,
      image: person.image,
    });

    const resp = await newPerson
      .save()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new ApiError(messageError.CREATE, 500);
      });

    return resp;
  }

  static async listAll() {
    const resp = await Person.find({}, "name wanted image")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new ApiError(messageError.LIST, 500);
      });

    return resp;
  }

  static async findById(id) {
    const resp = await Person.findById(id, "name wanted")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new ApiError(messageError.FIND, 500);
      });

    return resp;
  }
}

module.exports = {PersonRepository};