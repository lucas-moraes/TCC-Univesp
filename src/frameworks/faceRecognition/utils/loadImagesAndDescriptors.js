import "@tensorflow/tfjs-node";
import { readdirSync } from "fs";
import canvas from "canvas";
import { detectSingleFace } from "@vladmandic/face-api";
import { join } from "path";
import Storage from "../../storage/store.js";

class LoadImagesAndDescriptors{
  static async execute() {
    const imagesDir = "./images";
    const imageFiles = readdirSync(imagesDir);

    for (const file of imageFiles) {
      const imagePath = join(imagesDir, file);
      const img = await canvas.loadImage(imagePath);
      const detections = await detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();

      if (detections) {
        const faceDescriptor = { descriptor: detections.descriptor, label: file };
        Storage.set(faceDescriptor)
      }
    }
  }

}

export {LoadImagesAndDescriptors};