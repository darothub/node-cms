import express from "express"
import mongoose from "mongoose";
import path from 'path'
import hbs from 'express-handlebars'

const app = express();
var mongoDB = 'mongodb://127.0.0.1/my_cms_database'
//Configure mongoDB
mongoose.connect(mongoDB, { useNewUrlParser: true })
.then(res => {
    console.log("Mongod connected successfully")
}).catch(err =>{
    console.log("Connection failed")
})

app.engine('handlebars', hbs({defaultLayout: 'default'}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res) => {
    res.send("Hello CMS APP")
})

app.listen(4000,() => {
    console.log(`app is listening to port 4000`);
})