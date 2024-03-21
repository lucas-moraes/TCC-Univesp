import { PersonRepository } from "../repositories/PersonRepository.js";

export class PersonListAll {
  static async execute(req, res, next) {
    try {
      const response = await PersonRepository.listAll();
      return res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}
