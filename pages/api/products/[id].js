import dbConnect from "@/db/connect";
import Product from "@/db/models";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id);
    return response.status(200).json(product);
  } else {
    return response.status(404).json({ status: "Not Found" });
  }
}
