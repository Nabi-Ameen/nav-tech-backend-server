import express from "express";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = 9000;

app.use(express.json());

app.use("/v1", productRoutes);
app.use("/v1", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
