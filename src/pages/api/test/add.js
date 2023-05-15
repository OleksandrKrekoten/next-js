import ConnectMongo from "@/utils/connectMongo";
import User from "@/models/userModel";
async function addTest(req, res) {
 try {
     const { password, email, userName } = req.body;
     await ConnectMongo();
     const user = await User.create(req.body);
     res.json({ user });
 } catch (error) {
    res.json({ error });
 }
}
export default addTest;
