import User from "../../models/UserSchema.js";

export const createUser = async (req, res) => {
	try {
	  const user = new User(req.body);
	  await user.save();
	  res.send(user);
	  console.log("User has been created");
	} catch (error) {
	  res.status(500).send({ error: error.message });
	  console.error("Error creating user:", error);
	}
  };
  
