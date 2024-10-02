import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

//connect to MongoDB
try {
    mongoose.connect(URI, {
        useNewUrlparser: true,
        useUnifiedTopology: true
    });
console.log("Connected to MongoDB");
}catch(error){
console.log("Error :" , error);
}

app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});