const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const itemRoutes = require("./routes/itemRoutes");
app.use("/ecom", itemRoutes);


require("./config/connectDB");
const PORT = 5400;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));

// app.post("/register", async (req, res) => {
//   const { name, count } = req.body;
//   console.log("body", req.body);
//   try {
//     const itemAdded = await Item.create({
//       name,
//       count,
//     });
//     res.status(200).json({ message: "Item Added", user: itemAdded });
//   } catch (error) {
//     res.status(400).json({ message: "error" });
//   }
// });
