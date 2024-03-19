import {ApiError} from "./src/frameworks/common/ApiError.js";
import App from "./src/frameworks/express/index.js";
import {MongoDB} from "./src/frameworks/mongoDB/index.js";

class Server {
  constructor() {
    this.app = App.express;
    this.#mongoDb();
  }

  async #mongoDb() {
    await MongoDB.connect();
  }
}
export default new Server();
