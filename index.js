const express = require("express");
const app = express();
const port = 9000;

app.use(express.json());

const std = {
  id: 1,
  name: "ali",
};

app.get("/products", (req, res) => {
  res.send(std);
});

app.post("/product", (req, res) => {
  const product = req.body;

  const response = {
    message: "product created successfully",
    data: product,
  };

  res.json(response);
});

app.put("/product/:id", (req, res) => {
  const { id } = req.params;
  res.send(`updated product ${id}`);
});

app.delete("/product", (req, res) => {
  res.send("deleted product successfully");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
