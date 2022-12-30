import StudentDataBase from "../models/student.js";

export const getStudents = async (_req, res) => {
  try {
    const allStudents = await StudentDataBase.find();
    return res.status(200).json(allStudents);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

export const createStudent = async (req, res) => {
  const studentDataFromForm = req.body;

  const newStudent = new StudentDataBase(studentDataFromForm);

  try {
    await newStudent.save();
    return res.status(201).json(newStudent);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}

export const updateStudent = async (req, res) => {
  const studentDataFromForm = req.body;

  const newStudent = new StudentDataBase(studentDataFromForm);

  try {
    await newStudent.save();
    return res.status(201).json(newStudent);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}