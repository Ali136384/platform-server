import app from "./app.js";
import dotenv from "dotenv";
const PORT = process.env.PORT || 4000;
dotenv.config();

app.listen(PORT, () => {
  console.log("Server is running on !", process.env.PORT);
});
