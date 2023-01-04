import jwt from "jsonwebtoken";
import AdminDataBase from "../models/admin.js";


export default async function protect (req, res, next){


    if (!req.headers.authorization) {
        res.status(401).json({ message: "Token not found!" })
    }

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            let token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await AdminDataBase.findById(decoded.id).select("-password")
            next()
        } catch (error) {
            console.log(error)
            res.status(401).json({ message: error.message })
        }
    }
}