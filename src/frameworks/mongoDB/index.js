import mongoose from "mongoose";
import {ApiError} from "../common/ApiError.js";

class MongoDB {
  static async connect() {
    mongoose
      .connect("mongodb://test:abc@localhost:27017")
      .then(() => {
        console.log("🚀 MongoDB is running");
      })
      .catch((error) => {
        throw new ApiError("❌ Error connecting to MongoDB", 500);
      });
  }
}

export {MongoDB};
