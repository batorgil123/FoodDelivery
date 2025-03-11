import User from "../../models/UserSchema.js";

export const getUser = async (req, res) => {
    try {
        const user = await User.find();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
    console.log("User has been fetched");
}
