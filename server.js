import App from "./src/frameworks/express/index.js";
import {MongoDB} from "./src/frameworks/mongoDB/index.js";
import dotenv from "dotenv";

class Server {
  constructor() {
    this.app = App.express;
    this.#mongoDb();
  }

  async #mongoDb() {
    dotenv.config();
    await MongoDB.connect();
  }
  
}
export default new Server();
