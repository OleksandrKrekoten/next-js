import { Schema, model, models } from "mongoose";

const LaptopSchema = new Schema({
  category: String,
  brand: String,
  model: String,
  processor: String,
  graphics_card: String,
  ram: String,
  storage: String,
  photo: Array,
});
const Laptop = models.Laptop || model("Laptop", LaptopSchema);
export default Laptop;
