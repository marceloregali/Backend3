import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
});

const Pet = mongoose.model("Pet", petSchema);
export default Pet;
