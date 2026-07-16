const express = require("express");
require("dotenv").config();

const app =express();
const mongoose = require("mongoose");

//Middleware
app.use(express.json());
//Home route
app.get("/",(req,res)=>{
    res.json({
        success : true,
        message :"Cloud Task API V2 is running successfully"
    });
});
// Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`);
});
