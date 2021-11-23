const { application } = require("express");
const express = require("express");
require("../src/db/conn");
const Package = require("../src/models/packages");
const app = express();
const port = process.env.PORT || 9000;
app.use(express.json());
 
app.get("/",async(req,res)=>{

    res.send("Hello from the thapa");
})
 
app.post("/package",async(req,res)=>{
    try{
        const addingPackage = new Package(req.body);
        console.log(req.body);
        addingPackage.save();
    }catch(e){}
})
app.listen(port,()=>{

    console.log(`connection is live at port no. ${port}`);
}) 