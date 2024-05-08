
import mongoose from "mongoose";


export const hotelSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    galary:[
        {
           type:String,
           required:true
        }
    ],
    location:{
        type:String
    },
     price:{
        type:Number
     },
    facilities:[
        {
            img:String,
            name:String
        }
    ]

},{timestamps:true})


  export const Hotel = mongoose.models.Hotel || mongoose.model("Hotel",hotelSchema)