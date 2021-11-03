const mongoose=require('mongoose')

let MongooseSchema=mongoose.Schema

const todoSchema=new MongooseSchema(
    {
        movieName:String,
        actorName:String,
        actressName:String,
        director:String,
        releasingYear:Number,
        camera:String,
        producer:String,
        language:String,
    }
)

var todoModel=mongoose.model("todos",todoSchema)

module.exports={todoModel}