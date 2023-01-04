import StudentDataBase from "../models/student.js";
import { createStudentSchema, updateStudentSchema } from "../JoiSchemas/schemas.js";

import { getallStudents, deleteStudentById, updateStudentById, paginate } from "../services/quries.js";



export const getStudents = async (req, res) => {


  try {


    // const page = parseInt((req.body.page));
    const pageSize = parseInt((req.body.pageSize));

    const field  = req.body.field || {}


    const skip = (parseInt((req.body.page)) - 1) * (pageSize)

    const result = await paginate(skip, pageSize, field)

    console.log(result);

    res.status(200).json({
      status: "success",
      count: result.length,
      data: result,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Server Error",
    });
  }
};

//   try {

//     const allStudents = getallStudents();
//     return res.status(200).json(allStudents);
//   } catch (error) {
//     return res.status(404).json({ message: error.message });
//   }
// }



export const createStudent = async (req, res) => {
  const studentDataFromForm = req.body;

  const { error, value } = createStudentSchema.validate(studentDataFromForm, { abortEarly: false })

  if (error) {
    console.log(error);
    return res.send(error.details);
  }

  const newStudent = new StudentDataBase(studentDataFromForm);

  try {
    await newStudent.save();
    return res.status(201).json(newStudent);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}

export const deleteStudent = async (req, res) => {

  try {
    const id = req.params.id;
    await deleteStudentById({ _id: id });
    return res.send("Successfully Deleted!");
  } catch (error) {
    return console.log(error);
  }
}



export const updateStudent = async (req, res) => {

  try {

    const updatedStudentData = await updateStudentSchema.validateAsync(req.body);


    const id = req.params.id;


    const data = await updateStudentById({ _id: id }, { $set: { ...updatedStudentData } }, { useFindAndModify: false })
    if (!data) {
      return res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found!` });
    }
    return res.send(data);


  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Error Update user information" });
  }

}




  //   const studentDataFromForm = req.body;


//   const student = await StudentDataBase.find(req.body.id)

//   const newStudent = new StudentDataBase(studentDataFromForm);

//   try {
//     await newStudent.save();
//     return res.status(201).json(newStudent);
//   } catch (error) {
//     return res.status(409).json({ message: error.message });
//   }
// }



