const faceapi = require("@vladmandic/face-api");
const canvas = require("canvas");
const {PersonRepository} = require("../../adapters/repositories/PersonRepository.js");
const {ApiError} = require("../../frameworks/common/ApiError.js");
const {ImageFaceApiPrepare} = require("./utils/imageFaceApiPrepare.js");
const {ImageFaceApiMatcher} = require("./utils/imageFaceApiMatcher.js");

class FaceRecognition {
  static async recognize(imageBuffer) {
    console.info("ℹ️  FaceRecognition called");
    const faceLibrary = await PersonRepository.listAll();
    const img = await canvas.loadImage(imageBuffer);
    const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();

    let data;
    for (const {_doc} of faceLibrary) {
      data = await ImageFaceApiPrepare(_doc);
    }

    const bestMatch = ImageFaceApiMatcher(data, detections);

    if (bestMatch.label === "unknown") {
      throw new ApiError("❗ Correspondente não encontrado.", 404);
    }

    const response = await PersonRepository.findById(bestMatch.label);

    return response;
  }
}

module.exports = {FaceRecognition};
