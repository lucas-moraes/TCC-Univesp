import {PersonDTO} from "../interfaces/personDTO.js";
import {PersonRepository} from "../../adapters/repositories/PersonRepository.js";

export class PersonRegister {
  static async execute(req, res, next) {
    try {
      const {name, wanted, imageBase64} = req.body;
      const imageBuffer = Buffer.from(imageBase64, "base64");
      const person = PersonDTO.build(name, wanted, imageBuffer);
      await PersonRepository.create(person);
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}
