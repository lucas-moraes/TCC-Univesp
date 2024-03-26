const App = require("./src/frameworks/express/index.js");
const {MongoDB} = require("./src/frameworks/mongoDB/index.js");
const dotenv = require("dotenv");

class Server {
  constructor() {
    this.app = App.express;
    this.#mongoDb();
  }

  async #mongoDb() {
    dotenv.config();
    if(process.env.NODE_ENV === "test") return;
    await MongoDB.connect();
  }
}

module.exports = new Server();
