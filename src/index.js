import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.get("/", (req, res) => {
      res.send("<h1>Home Page</h1>");
    });
    app.on("error", (error) => {
      console.log("ERR: ", error);
    });
    app.listen(process.env.PORT || 5000, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("connection failed-----", error);
  });
