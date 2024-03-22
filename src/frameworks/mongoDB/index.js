import mongoose from "mongoose";
import {ApiError} from "../common/ApiError.js";

class MongoDB {
  static async connect() {
    mongoose
      .connect("mongodb://olhosdajustica:senha123@localhost:27017", {
        dbName: "olhosdajustica",
      })
      .then(() => {
        console.log("🚀 MongoDB is running");
      })
      .catch((error) => {
        throw new ApiError("❌ Error connecting to MongoDB", 500);
      });
  }
}

export {MongoDB};
