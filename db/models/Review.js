import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: String, required: true },
});

//When you call mongoose.model() on a schema, Mongoose compiles a model for you.
//The first argument is the singular name of the collection your model is for. Mongoose automatically
//looks for the plural, lowercased version of your model name. https://mongoosejs.com/docs/models.html
const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
