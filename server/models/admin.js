import mongoose from 'mongoose';


const adminSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    name: String,
    password: String


},{
    timestamps:true
});

const admin = mongoose.model('Admin', adminSchema);

export default admin;


