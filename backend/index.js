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

