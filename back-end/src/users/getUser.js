import Users from "../models/userschema.js";

export const getUser = async (req, res) => {
    try {
        const user = await Users.find();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
    console.log("User has been fetched");
    
}
