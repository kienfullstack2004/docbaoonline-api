const express =  require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
const router = require("./router");
require("./connectDatabase")

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods:['GET','POST','PUT','DELETE']
}));

router(app);

const listen = app.listen(process.env.PORT,()=>{
    console.log('App listening on port ' + listen.address().port);
})

