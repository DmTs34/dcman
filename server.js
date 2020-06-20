// const express = require("express");
import express from "express"
import decoder from "./js/app/decoder"

let  app = express();

//app.get('/', (req,res) => res.send("HELLO FROM EXPRESS"));

app.use(express.static('public'));
//decoder app
app.get('/decoder', (req,res) => {
    let decoded = decoder(req.query.code)
    res.json(decoded)
    });

app.listen(8080,  () => console.log("Example app listening on port 8080!"));