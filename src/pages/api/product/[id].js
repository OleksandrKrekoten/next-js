import Laptop from "@/models/laptopModel";
import ConnectMongo from "@/utils/connectMongo";

async function productDetails(req, res) {
  await ConnectMongo();
  if (req.method === "GET") {
    try {
      
      const { id } = req.query;

      const posts = await Laptop.findById({ _id: id });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: "Помилка сервера" });
    }
  } else {
    res.status(400).json({ error: "Неправильний метод запиту" });
  }
}
export default productDetails;
