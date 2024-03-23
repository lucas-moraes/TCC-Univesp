import mongoose from "mongoose";
import {ApiError} from "../common/ApiError.js";

class MongoDB {
  static async connect() {
    mongoose
      .connect(process.env.MONGOURL, {
        dbName: process.env.DBNAME,
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
