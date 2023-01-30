import  Express  from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import connectToDatabase from './database/database.js'
import productRoute from './routes/productRoutes.js'
import dotenv from 'dotenv'
import path from 'path';


const app = Express()

dotenv.config();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/',productRoute)

//static files
app.use(Express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

connectToDatabase(process.env.PASSWORD,process.env.APP);
app.listen(process.env.PORT,()=>{
    console.log("Sever is running at " ,process.env.PORT)
})
