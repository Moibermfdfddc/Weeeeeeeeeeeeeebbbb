const mongoose = require("mongoose")

const DB = "mongodb+srv://basselshaaban81:123w654@cluster0.vctc5js.mongodb.net/projectWeb?retryWrites=true&w=majority"

mongoose.connect(DB).then(()=>console.log("data base connected")).catch((error)=> console.log("error"+ error.message))