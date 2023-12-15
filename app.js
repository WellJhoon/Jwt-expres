const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();


app.get("/api", (req, res) => {
    res.json({
        mesaje:"express and jwt"
    })
});

app.listen(3000, function(){
    console.log("Listen on port 3000");
});