import Users from "../models/userschema.js";

export const createUser = async (req, res) => {
	try {
	  const user = new Users(req.body);
	  await user.save();
	  res.send(user);
	  console.log("User has been created");
	} catch (error) {
	  res.send(error);
	}
  };
  
