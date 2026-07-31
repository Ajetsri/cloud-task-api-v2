const express = require("express");
require("dotenv").config();

const app =express();
const mongoose = require("mongoose");

const connectDB = require("./config/db");

const taskRoutes=require("./routes/taskRoutes");

const logger = require("./middleware/logger");

//Middleware
app.use(express.json());
app.use(logger);
app.use("/api/tasks",taskRoutes);

//Home route
app.get("/",(req,res)=>{
    res.json({
        success : true,
        message :"Cloud Task API V2 is running successfully"
    });
});

const PORT = process.env.PORT || 3000;

// connectDB();
// app.listen(PORT,()=>{
//     console.log(`Server is running in ${PORT}`);
// }); direct starting server

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};//server starts only after database is connected 
startServer();
// Start Server