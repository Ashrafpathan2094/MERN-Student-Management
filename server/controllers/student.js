import StudentDataBase  from "../models/student.js";


export const getStudents = async (req,res) => {
    try{

        const allStudents = await StudentDataBase.find();
        res.status(200).json(allStudents);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}


export const createStudent = async (req,res) => {
    const studentDataFromForm = req.body;

    const newStudent = new StudentDataBase(studentDataFromForm);

    try{
        await newStudent.save();
        res.status(201).json(newStudent);
    }catch(error){
        res.status(409).json({message: error.message});
    }
}