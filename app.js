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
app.post("/api/posts", verifyToken , (req, res) => {
    jwt.verify(req.token, 'secretKey' , (err, authData) => {
        if(err) {
            res.sendStatus(403);
        }else{
            res.json({
                mesaje: "Post se creo correctamente",
                authData
            });
        }
    });
});



// Authorization: Bearer <token>
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
     const bearerToken = bearerHeader.split(" ")[1];
     req.token = bearerToken;
     next();
    }else{
        res.sendStatus(403);
    }
}
        



app.listen(3000, function(){
    console.log("Listen on port 3000");
});