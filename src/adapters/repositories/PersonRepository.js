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
    const resp = await Person
      .find({})
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw new ApiError("❌ Erro to list Person", 500);
      });

    return resp;
  }

  static async delete() {
    const connect = await MongoDB.connect();
    try {
      const db = connect.db("persons");
      const collection = db.collection("persons");
      await collection.deleteMany({});
    } catch (error) {
      throw new ApiError("❌ Erro to delete Person", 500);
    }
  }
}
