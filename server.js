import express from "express";
import cors from "cors";
// import connectDB from "./config/db";
import authRoute from './routes/UserRoute.js'

const app = express();


const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.use("/api/auth/register",authRoute)



app.get("/", (req, res) => {
    console.log("API is running....");
  res.send("Hello World!");
});

app.listen(PORT,async()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
    //await connectDB();
})