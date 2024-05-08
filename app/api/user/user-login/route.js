import { User } from "@/models/userSchema";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dbConnection from "@/db/db";
export async function POST(req, res) {
  const body = await req.json();

  dbConnection()
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json({ msg: "all field are mandatory to fill" });
  }

  const userExist = await User.findOne({ email });

  if (!userExist) {
    return NextResponse.json({ msg: "please register first" });
  }

  const comparePass = await bcrypt.compare(password, userExist.password);

  if (!comparePass) {
    return NextResponse.json({ msg: "incorrect credentials" });
  }

  const token = jwt.sign({ token: userExist._id }, process.env.JWT_TOKEN);

  return NextResponse.json({ msg: "login successfull",token }, { status: 200 });
}
