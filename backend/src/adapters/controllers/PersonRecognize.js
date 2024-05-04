const {FaceRecognition} = require("../../frameworks/faceRecognition/index.js");
const {ImageValidation} = require("../../frameworks/faceRecognition/utils/imageValidation.js");
const {LogReport} = require("../../frameworks/common/logReport.js");

class PersonRecognize {
  static async execute(req, res, next) {
    try {
      LogReport.log("PersonRecognize", 8,"PersonRecognize called");
      const img = req.body.imageBase64;
      const imageBuffer = Buffer.from(img, "base64");
      await ImageValidation(imageBuffer);

      const response = await FaceRecognition.recognize(imageBuffer);

      res.status(200).send(response);
    } catch (error) {
      LogReport.error("PersonRecognize", 17, error);
      next(error);
    }
  }
}

module.exports = {PersonRecognize};
