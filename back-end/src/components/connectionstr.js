import mongoose from "mongoose";
const mongoString = process.env.CONNECTION_STRING;

if (!mongoString) {
  console.error("CONNECTION_STRING environment variable is not defined.");
  process.exit(1);
}