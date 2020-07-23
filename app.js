import express from "express"
import mongoose from "mongoose";

const app = express();


app.get('/',(req,res) => {
    res.send("Hello Babel")
})

app.listen(4000,() => {
    console.log(`app is listening to port 4000`);
})