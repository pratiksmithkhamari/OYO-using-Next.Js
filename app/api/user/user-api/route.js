import dbConnection from "@/db/db";
import { User } from "@/models/userSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json({ msg: "success" });
}

export async function POST(req, res) {
  const bodyData = await req.json();

  const { name, email, password } = bodyData;

  if (!name || !email || !password) {
    return new Response("fill all the input field", {
      status: 400,
    });
  }

  dbConnection();

  const emailExist = await User.findOne({ email });
  if (emailExist) {
    return new Response("email exist please enter different email", {
      status: 400,
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    const result = await newUser.save();

    var token = jwt.sign({ token: result._id }, process.env.JWT_TOKEN, {
      expiresIn: "30d",
    });
    return NextResponse.json({msg:"registered successfully"},{status:201})
  } catch (error) {
    console.error("Error:", error);
    return new Response("failed", {
      status: 400,
    });
  }
}
