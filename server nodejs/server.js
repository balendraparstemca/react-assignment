

/*


  working on 
  
  not completed



*/
//import express module

let express = require("express");
//import mongoose module
let mongoose = require("mongoose");
//import body-parser module
let bodyparser = require("body-parser");
//import cors module
let cors = require("cors");
//create the rest object
let app = express();
//set the JSON AS MIME Type
app.use(bodyparser.json());
//enable the cors
app.use(cors());
//parse the JSON
app.use(bodyparser.urlencoded({extended:false}));
//define the schema
let employess = mongoose.Schema({
    ////yet to make  keys 
});
//give schema to mongodb database
let obj = mongoose.model("distance",employess);
//create the rest api
app.post("/register",(req,res)=>{
    mongoose.connect("mongodb://localhost/my_db",(err)=>{
        if(err)
            throw err;
        else{
            let newRecord = new obj({
                'avgSpeed':req.body.fname,
                'total_travel_duration':req.body.---,
                'total_travel_distance':req.body.---,
                'safe_travel_distance':req.body.---,
                'safe_travel_duration':req.body.----,
                'moderate_travel_distance':req.body.---,
                'moderate_travel_duration':req.body.----,
               'risky_travel_distance':req.body.-,
                
                'risky_travel_distance':req.body.---,
				"Date":req.body.---,
				
				
            });
            newRecord.save((err,record)=>{
                if(err)
                    res.send({registration:"fail"});
                else
                    res.send({registration:"success"});
            });
        }
    });
});
//assign the port no
app.listen(8080);
console.log("server listening the port no.8080");


