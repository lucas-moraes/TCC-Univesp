import express from "express";
import bodyParser from "body-parser";
import {PersonRecognize} from "../../adapters/controllers/PersonRecognize.js";
import {LoadModels} from "../faceRecognition/utils/loadModels.js";
import {LoadImagesAndDescriptors} from "../faceRecognition/utils/loadImagesAndDescriptors.js";
import {errorHandler} from "../common/Errorfunction.js";
import {PersonList} from "../../adapters/controllers/PersonList.js";
import {PersonRegister} from "../../adapters/controllers/PersonRegister.js";
import "@tensorflow/tfjs-node";

class App {
  constructor() {
    this.express = express();
    this.#toolsCharger();
    this.#middlewares();
    this.#routes();
    this.#expressJS();
  }

  async #toolsCharger() {
    await LoadModels.execute();
    await LoadImagesAndDescriptors.execute();
  }

  #middlewares() {
    this.express.use(bodyParser.json({limit: "50mb"}));
  }

  #routes() {
    this.express.post("/person-recognize", PersonRecognize.execute);
    this.express.post("/person-register", PersonRegister.execute);
    this.express.get("/person-list", PersonList.execute);
    this.express.get("/health-check", (req, res) => {
      return res.status(200).send({message: "Server is running."});
    });
    this.express.use(errorHandler);
  }

  #expressJS() {
    this.express.listen(3000, () => {
      console.log("🚀 Server is running on port 3000");
    });
  }
}

export default new App();
