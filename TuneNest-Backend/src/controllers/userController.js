import userModel from "../models/userModel.js";

const AddUser = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const userData = {
            email,
            password
        }

        const user = userModel(userData);

        await user.save();

        res.json({ success: true, message: "User Added" });
    } catch (error) {
        res.json({ success: false });
    }
}

const CheckUser = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await userModel.findOne({ email: email});

        if(!user) {
            res.json({ success: false });
        }
        else if (user.password == password)
        {
            res.json({ success: true, message: "User Added" });
        }
        else
        {
            res.json({ success: false });
        }

    } catch (error) {
        res.json({ success: false });
    }
}

export { CheckUser, AddUser };