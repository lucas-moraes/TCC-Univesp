import {Person} from "../../entites/person.js";
import {MongoDB} from "../../frameworks/mongoDB/index.js";

export class PersonRepository {
  static async create(person) {
    const newPerson = new Person({
      name: person.name,
      wanted: person.wanted,
      image: person.image,
    });

    await newPerson
      .save()
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new ApiError("❌ Erro to create Person", 500);
      });
  }

  static async listAll() {
    const resp = await Person.find({}, "name wanted image")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new ApiError("❌ Erro to list Person", 500);
      });

    return resp;
  }

  static async findById(id) {
    const resp = await Person.findById(id, "name wanted")
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new ApiError("❌ Erro to find Person", 500);
      });

    return resp;
  }
}
