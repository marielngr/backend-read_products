import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: String, required: true },
});

const Review =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Review;
