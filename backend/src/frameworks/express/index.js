const express = require("express");
const bodyParser = require("body-parser");
const {PersonRecognize} = require("../../adapters/controllers/PersonRecognize.js");
const {LoadModels} = require("../faceRecognition/utils/loadModels.js");
const {errorResponseHandler} = require("../common/ResponseErrorHandler.js");
const {PersonListAll} = require("../../adapters/controllers/PersonListAll.js");
const {PersonRegister} = require("../../adapters/controllers/PersonRegister.js");
import cors from "cors";
require("@tensorflow/tfjs-node");

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
  }

  #middlewares() {
    this.express.use(cors({origin: "*"}));
    this.express.use(bodyParser.json({limit: "50mb"}));
  }

  #routes() {
    this.express.post("/person-recognize", PersonRecognize.execute);
    this.express.post("/person-register", PersonRegister.execute);
    this.express.get("/person-list-all", PersonListAll.execute);
    this.express.get("/health-check", (req, res) => {
      return res.status(200).send({message: "Server is running."});
    });
    this.express.use(errorResponseHandler);
  }

  #expressJS() {
    if(process.env.NODE_ENV === "test") return;
    this.express.listen(process.env.PORT ? Number(process.env.PORT) : 3000, () => {
      console.log(`🚀 Server is running on port ${process.env.PORT}`);
    });
  }
}

module.exports = new App();
