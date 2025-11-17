"use server";
import mongoose from "mongoose";

async function connector() {
  const client = await mongoose.connect(process.env.MONGODB_URI);
}

export default connector;
