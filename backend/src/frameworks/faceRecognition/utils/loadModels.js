
const faceapi = require("@vladmandic/face-api");
const canvas = require("canvas");

class LoadModels {
  static async execute() {
    const {Canvas, Image, ImageData} = canvas;
    faceapi.env.monkeyPatch({Canvas, Image, ImageData});

    await faceapi.nets.ssdMobilenetv1.loadFromDisk("./src/frameworks/faceRecognition/models");
    await faceapi.nets.faceLandmark68Net.loadFromDisk("./src/frameworks/faceRecognition/models");
    await faceapi.nets.faceRecognitionNet.loadFromDisk("./src/frameworks/faceRecognition/models");
  }
}

module.exports = {LoadModels};
