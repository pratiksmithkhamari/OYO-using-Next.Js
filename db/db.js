import mongoose from "mongoose";

const dbConnection = async () => {
  await mongoose
    .connect(process.env.URL)
    .then(() => console.log("db connetced"))
    .catch((err) => console.log(err, "db coneection failed"));
};

export default dbConnection;
