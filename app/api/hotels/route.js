"use client"
import dbConnection from "@/db/db"
import { Hotel } from "@/models/hotels-model"
import { useParams } from "next/navigation"

import { NextResponse } from "next/server"


//  export async function POST(req,res) {

//    dbConnection()

//    const body = await req.json()
//    console.log(body);

//    const newHotel = new Hotel(body)
//      const result = await newHotel.save()

//      return NextResponse.json({
//         msg:"hotel added successfully",
//         status:201
//      })
// }

export async function GET(request,params){
 
   console.log(params);
    // const hotels =await Hotel.find({location:body.query})
   return NextResponse.json({msg:"found"})
}
