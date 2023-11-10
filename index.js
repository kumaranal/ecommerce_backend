import app from "./src/app.js";
import dotenv from "dotenv";
import dbconnection from "./src/db/dbConnection.js";
dotenv.config();

dbconnection();
const port=process.env.PORT||4000;
app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
});