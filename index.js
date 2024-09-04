const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res)=>{
    return res.send("hello, I have Change code");
})

app.listen(PORT, ()=>{
    console.log("SERVER STARTED SUCCESSFULLY AT PORT ", PORT);
})