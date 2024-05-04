const {PersonDTO} = require("../interfaces/personDTO.js");
const {PersonRepository} = require("../../adapters/repositories/PersonRepository.js");
const {ImageValidation} = require("../../frameworks/faceRecognition/utils/imageValidation.js");
const {LogReport} = require("../../frameworks/common/logReport.js");

class PersonRegister {
  static async execute(req, res, next) {
    try {
      LogReport.log("PersonRegister", 8,"PersonRegister called");
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
      LogReport.error("PersonRegister", 20, error);
      next(error);
    }
  }
}

module.exports = {PersonRegister};
