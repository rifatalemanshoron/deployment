const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res)=>{
    return res.send("hello");
})

app.listen(PORT, ()=>{
    console.log("SERVER STARTED SUCCESSFULLY");
})