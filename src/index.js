import connectDB from "./db/db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});

(async () => {
  try {
    await connectDB();
    console.log(`Server running on port ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
  }
})();
