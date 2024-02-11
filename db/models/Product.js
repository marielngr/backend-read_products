import mongoose from "mongoose";
//Der Import wird nicht verwendet, deswegen bleibt die Zeile ausgegraut, aber der Vorgang des Importierens
//an dieser Stelle führt dazu, dass der Code in der Review.js ausgeführt wird, wo Mongoosebeigebracht wird
//welche Daten / welches model unter dem Namen "Review" gespeichert sind

import Review from "./Review";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  //An dieser Stelle wird über ref: "Review" dann auf das in Review.js definierte model "Review" verwiesen
  // "reviews" ist ein Array von ObjectId, siehe bonus-products.json
  // dieses "ref" bedeutet aber, dass man mongoose beim Laden von Products anweisen kann,
  // statt den ObjectIds direkt die referenzierten Objekte aus der Collection für Reviews zu laden.
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});
//code 14/15 guckt, ob Product schon einmal generiert wurde und sonst erstellt es es
// Product repräsentiert die Collection mit den products in der Datenbank, z.B. kann man dieses Product nach
// einem Produkt mit einer bestimmten ID fragen (findByID)
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
