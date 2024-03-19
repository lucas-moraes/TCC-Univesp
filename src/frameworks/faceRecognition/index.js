import faceapi from "@vladmandic/face-api";
import canvas from "canvas";
import Storage from "../storage/store.js";
import {ApiError} from "../common/ApiError.js";

export class FaceRecognition {
  static async recognize(imageBuffer) {
    const img = await canvas.loadImage(imageBuffer);
    const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();

    if (!detections) {
      throw new ApiError("❗ Nenhum rosto encontrado na imagem.", 404);
    }

    const faceMatcher = new faceapi.FaceMatcher(
      Storage.storage.map((item) => new faceapi.LabeledFaceDescriptors(item.label, [item.descriptor]))
    );

    const bestMatch = faceMatcher.findBestMatch(detections.descriptor);

    if (bestMatch.label === "unknown") {
      throw new ApiError("❗ Nenhum correspondente encontrado.", 404);
    }

    return {message: "Correspondente encontrado.", label: bestMatch.label};
  }
}
