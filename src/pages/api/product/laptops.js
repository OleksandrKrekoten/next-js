import Laptop from "@/models/laptopModel";
import ConnectMongo from "@/utils/connectMongo";

async function laptops(req, res) {
  await ConnectMongo();
  if (req.method === "GET") {
    try {
      const { page } = req.query;

      const pageNumber = parseInt(page);
      const limitNumber =  20;

      const skip = (pageNumber - 1) * limitNumber;

     const totalCount = await Laptop.countDocuments({ category: "Laptop" });

     const totalPages = Math.ceil(totalCount / limitNumber);

     const posts = await Laptop.find({ category: "Laptop" })
       .sort( )
       .skip(skip)
       .limit(limitNumber);

     res.status(200).json({ posts, totalPages });
    } catch (error) {
      res.status(500).json({ error: "Помилка сервера" });
    }
  } else {
    res.status(400).json({ error: "Неправильний метод запиту" });
  }
}
export default laptops;
