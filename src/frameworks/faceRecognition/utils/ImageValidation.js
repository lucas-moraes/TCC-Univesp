import {ApiError} from "../../common/ApiError.js";
import canvas from "canvas";
import faceapi from "@vladmandic/face-api";

export async function ImageValidation(imageBuffer) {
  const img = await canvas.loadImage(imageBuffer);
  const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();

  if (!detections) throw new ApiError("❗ No face found in the image.", 400);

  return detections.descriptor;
}
