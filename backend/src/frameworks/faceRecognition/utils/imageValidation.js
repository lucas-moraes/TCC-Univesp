
const {ApiError} = require("../../common/ApiError.js");
const canvas = require("canvas");
const faceapi = require("@vladmandic/face-api");

async function ImageValidation(imageBuffer) {
  const img = await canvas.loadImage(imageBuffer);
  const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();

  if (!detections) throw new ApiError("❗ No face found in the image.", 400);

  return detections.descriptor;
}

module.exports = {ImageValidation};