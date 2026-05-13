import express from "express";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import { connectDB } from "./config/database.js";
import cors from "cors";

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 9000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

async function initializeApp() {
  const dbConnected = await connectDB();

  if (!dbConnected) {
    console.error("Failed to initialize database. Server not starting.");
    process.exit(1);
  }

  // Start server only after database is connected
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

app.use("/v1", userRoutes);
app.use("/v1", categoryRoutes);
app.use("/v1", productRoutes);
initializeApp();
