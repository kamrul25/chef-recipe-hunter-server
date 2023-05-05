const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const chefData = require("./data/chefData.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to server!! Thank you to coming my server");
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});


app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const chef = chefData.find((chef) => chef._id === id);
  res.send(chef);
});

app.listen(port, () => {
  console.log(`My chef data server running on this ${port}`);
});
