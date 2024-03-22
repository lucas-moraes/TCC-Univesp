import {FaceRecognition} from "../../frameworks/faceRecognition/index.js";
import { ImageValidation } from "../../frameworks/faceRecognition/utils/ImageValidation.js";

export class PersonRecognize {
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
