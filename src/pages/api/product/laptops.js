import Laptop from "@/models/laptopModel";
import ConnectMongo from "@/utils/connectMongo";

async function laptops(req, res) {
  await ConnectMongo();
   if (req.method === "GET") {
     try {
         const { page, limit } = req.query; 

         const pageNumber = parseInt(page) || 2;
         const limitNumber = parseInt(limit) || 20;

         const skip = (pageNumber - 1) * limitNumber;

         const posts = await Laptop.find()
           .sort({ model: 1 })
           .skip(skip)
           .limit(limitNumber); 

         res.status(200).json(posts);
     } catch (error) {
       res.status(500).json({ error: "Помилка сервера" });
     }
   } else {
     res.status(400).json({ error: "Неправильний метод запиту" });
   }
}
export default laptops;
