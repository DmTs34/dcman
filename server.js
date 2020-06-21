const express = require("express");
const decoder = require("./src/app/decoder")
// import express from "express"
// import decoder from "./js/app/decoder"

let  app = express();


app.set('trust proxy', true);

app.use(express.static('public'));
//decoder app
app.get('/decoder', (req,res,next) => {
    let decoded = decoder(req.query.code)
    res.json(decoded)   
    })

app.listen(8080,  () => console.log("Example app listening on port 8080!"));