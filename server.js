import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
cors("*");

const app = express();
mongoose.connect(process.env.MONGOOSE_URL);

app.use(express.json());

import messageRoutes from "./src/routes/message.routes.js";

app.use("/message", messageRoutes);

app.listen(process.env.SERVER_PORT, () => {
  console.log("api on");
});
