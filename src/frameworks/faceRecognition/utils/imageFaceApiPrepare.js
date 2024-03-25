const faceapi = require("@vladmandic/face-api");
const canvas = require("canvas");

async function ImageFaceApiPrepare(_doc) {
    const label = _doc._id.toString();
    const img = await canvas.loadImage(_doc.image);
    const detect = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
    return new faceapi.LabeledFaceDescriptors(label, [detect.descriptor]);
}

module.exports = {ImageFaceApiPrepare};