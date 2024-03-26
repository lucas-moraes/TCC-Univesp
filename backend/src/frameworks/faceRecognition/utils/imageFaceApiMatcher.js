const faceapi = require("@vladmandic/face-api");

function ImageFaceApiMatcher(data, detections) {
    const faceMatcher = new faceapi.FaceMatcher(data);
    return faceMatcher.findBestMatch(detections.descriptor);
}

module.exports = {ImageFaceApiMatcher};