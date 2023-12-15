const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

//First route
app.get("/api", (req, res) => {
    res.json({
        mesaje:"express and jwt"
    })
});

// get user and token jwt
app.post("/api/login", (req, res) => {
    const user = {
        id: 1,
        name: "Jhon",
        email: "jhon4369@gmail.com"
    }

    jwt.sign({ user }, 'secretkey', (err, token) => {
        res.json({
            token
        })
    }); 
});

//treeh route
app.post("/api/posts", (req, res) => {

    res.json({  
        mesaje:"Post fue creado"
    });
});




app.listen(3000, function(){
    console.log("Listen on port 3000");
});