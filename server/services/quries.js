import StudentDataBase from "../models/student.js";


export const getallStudents = async (params) => {
    return await StudentDataBase.find(params)
}


export const deleteStudentById = async (params) => {
    return await StudentDataBase.findByIdAndRemove(params)
}


export const updateStudentById = async (params, body, mod) => {
    return await StudentDataBase.findByIdAndUpdate(params, body, mod)
}



export const paginate = async (skip, pageSize, field) => {
    return await StudentDataBase.find().where(field).limit(pageSize).skip(skip).sort("DESC");
    
}