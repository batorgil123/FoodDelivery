import express from "express";
import mongoose from "mongoose";
import { Users } from "./userschema.js";

export const createUser = async (req, res) => {
  try {
	const user = new Users(req.body);
	await user.save();
	res.send(user);
  } catch (error) {
	res.send(error);
  }
}
