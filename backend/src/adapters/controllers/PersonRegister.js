const {PersonDTO} = require("../interfaces/personDTO.js");
const {PersonRepository} = require("../../adapters/repositories/PersonRepository.js");
const {ImageValidation} = require("../../frameworks/faceRecognition/utils/imageValidation.js");

class PersonRegister {
  static async execute(req, res, next) {
    try {
      const {name, wanted, imageBase64} = req.body;
      const imageBuffer = Buffer.from(imageBase64, "base64");
      await ImageValidation(imageBuffer)
        .then(() => console.info("✅  Face encontrada na imagem"))
        .catch((error) => {
          throw error;
        });
      const person = PersonDTO.build(name, wanted, imageBuffer);
      await PersonRepository.create(person);
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {PersonRegister};
