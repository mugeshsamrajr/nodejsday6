import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./Database/dbConfig.js"

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Welcome");
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server started");
})