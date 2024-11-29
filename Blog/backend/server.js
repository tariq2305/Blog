const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const myrouter = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.port || 8080;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: "true",
  })
  .then(() => console.log(`Connected to MongoDB`))
  .catch((err) => console.log(err));

app.use(myrouter);

app.listen(PORT, () => {
  console.log(`App listening on: ${PORT}`);
});
