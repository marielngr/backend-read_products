export default function handler(request, response) {
  const { id } = request.query;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(product);
}
//   const { id } = request.query;

//   if (request.method === "GET") {
//     const product = await Product.findById(id);
//   }

//   if (!product) {
//     return response.status(404).json({ status: "Not Found" });
//   }
//   return response.status(200).json(product);
