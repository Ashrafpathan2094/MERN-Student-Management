import AdminDataBase from "../models/admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";



const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "10d",
    })
}


export const registerAdmin = async (req, res) => {

    try {
        // const adminDataFromFrom = req.body;
        const { email, name, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const admin = await AdminDataBase.create({
            email: email,
            name: name,
            password: hashedPassword,
        })
        return res.status(201).json({admin,token:generateToken(admin._id)});

    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
}



export const loginAdmin = async (req, res) => {


    // const adminDataFromFrom = req.body;
    const { email, password } = req.body;
    const admin = await AdminDataBase.findOne({ email })
    if (admin && (await bcrypt.compare(password, admin.password))) {

        return res.status(201).json({admin,token:generateToken(admin._id)});
    } else {

        return res.status(409).json({ message: error.message, admin: false });
    }




}