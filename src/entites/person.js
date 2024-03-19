import mongoose from "mongoose";

const Schema = mongoose.Schema;
const personSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    wanted: {
      type: Boolean,
      required: true,
    },
    image: {
      type: Buffer,
      required: false,
    },
  },
  {collection: "persons"}
);

const Person = mongoose.model("Person", personSchema);
export { Person };
