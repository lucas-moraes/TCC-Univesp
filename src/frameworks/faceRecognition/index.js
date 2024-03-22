import faceapi from "@vladmandic/face-api";

import canvas from "canvas";
import {PersonRepository} from "../../adapters/repositories/PersonRepository.js";
import { ApiError } from "../common/ApiError.js";

export class FaceRecognition {
  static async recognize(imageBuffer) {
    const faceLibrary = await PersonRepository.listAll();
    const img = await canvas.loadImage(imageBuffer);
    const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();

    let data;
    for (const {_doc} of faceLibrary) {
      const label = _doc._id.toString();
      const img = await canvas.loadImage(_doc.image);
      const detect = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
      data = new faceapi.LabeledFaceDescriptors(label, [detect.descriptor]);
    };

    const faceMatcher = new faceapi.FaceMatcher(data);

    const bestMatch = faceMatcher.findBestMatch(detections.descriptor);

    if (bestMatch.label === "unknown") {
      throw new ApiError("❗ No correspondents found.", 404);
    }

    const response = await PersonRepository.findById(bestMatch.label);

    return response;
  }
}
