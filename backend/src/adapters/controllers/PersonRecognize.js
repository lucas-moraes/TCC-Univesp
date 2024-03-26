const {FaceRecognition} = require("../../frameworks/faceRecognition/index.js");
const {ImageValidation} = require("../../frameworks/faceRecognition/utils/imageValidation.js");

class PersonRecognize {
  static async execute(req, res, next) {
    try {
      const img = req.body.imageBase64;
      const imageBuffer = Buffer.from(img, "base64");
      await ImageValidation(imageBuffer);

      const response = await FaceRecognition.recognize(imageBuffer);

      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {PersonRecognize};
