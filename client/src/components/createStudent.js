import React from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



export default function CreateStudent() {

    const schema = yup.object().shape({
        regNumber: yup.number().required().min(2, "RegNumber should be Atleast 2 numbers"),
        name: yup.string().required().min(4, "Name should be Atleast 4 Characters"),
        grade: yup.string().required().min(1, "Grade should be Atleast 1 Characters").max(1, "Grade should be only one character "),
        section: yup.string().required().min(1, "Section should be Atleast 1 Characters").max(1, "Section should be only one character "),
    })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    console.log(errors);
    const formSubmit = async (data) => {
        await axios.post("http://localhost:5000/students", data).then(() => {
            window.location.reload(false);
        });

    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <h2>Create a Student</h2>
            <div className="mb-3 mt-3">
                <label htmlFor="regNumber" className="form-label">Registration Number</label>
                <input type="number" className="form-control" id="regNumber"
                    aria-describedby="RegHelp" {...register("regNumber")} />
                <div id="RegHelp" className="form-text">Enter Student Registration Number</div>
                <span className="error-message">{errors.regNumber?.message}</span>
            </div>

            <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">Student Name</label>
                <input type="text" className="form-control" id="name"
                    aria-describedby="NameHelp" {...register("name")} />
                <div id="NameHelp" className="form-text">Enter Student Name</div>
                <span className="error-message">{errors.name?.message}</span>
            </div>

            <div className="mb-3 mt-3">
                <label htmlFor="grade" className="form-label">Grade</label>
                <input type="text" className="form-control" id="grade"
                    aria-describedby="GradeHelp" {...register("grade")} />
                <div id="GradeHelp" className="form-text">Enter Student Grade</div>
                <span className="error-message">{errors.grade?.message}</span>
            </div>

            <div className="mb-3 mt-3">
                <label htmlFor="section" className="form-label">Section</label>
                <input type="text" className="form-control" id="section"
                    aria-describedby="SectionHelp" {...register("section")} />
                <div id="SectionHelp" className="form-text">Enter Student Section</div>
                <span className="error-message">{errors.section?.message}</span>
            </div>

            <button type="submit" className="btn btn-primary" >Create Student</button>
        </form>

    )





    // const [student, setStudent] = React.useState({
    //     regNumber: 0,
    //     name: "",
    //     grade: "",
    //     section: ""
    // });

    // console.log(formData);

    // function handleChange(event) {
    //     setFormData(prevFormData => {
    //         return {
    //             ...prevFormData,
    //             [event.target.name]: [event.target.value]
    //         }
    //     })
    // }


    //uncomment
    // const sendStudentData = async (event) => {
    //     event.preventDefault();

    //     const response = await axios.post("http://localhost:5000/students", student).then(() => {
    //         window.location.reload(false);
    //     });
    //     console.log(response);
    // }


    // return (
    //     <form onSubmit={(e) => sendStudentData(e)}>
    //         <h2>Create a Student</h2>
    //         <div className="mb-3 mt-3">
    //             <label htmlFor="regNumber" className="form-label">Registration Number</label>
    //             <input type="number" className="form-control" id="regNumber" value={student.regNumber}
    //                 onChange={(event) => {
    //                     setStudent({ ...student, regNumber: event.target.value })
    //                 }} aria-describedby="RegHelp" />
    //             <div id="RegHelp" className="form-text">Enter Student Registration Number</div>
    //         </div>

    //         <div className="mb-3 mt-3">
    //             <label htmlFor="name" className="form-label">Student Name</label>
    //             <input type="text" className="form-control" id="name" value={student.name}
    //                 onChange={(event) => {
    //                     setStudent({ ...student, name: event.target.value })
    //                 }}
    //                 aria-describedby="NameHelp" />
    //             <div id="NameHelp" className="form-text">Enter Student Name</div>
    //         </div>

    //         <div className="mb-3 mt-3">
    //             <label htmlFor="grade" className="form-label">Grade</label>
    //             <input type="text" className="form-control" id="grade" value={student.grade}
    //                 onChange={(event) => {
    //                     setStudent({ ...student, grade: event.target.value })
    //                 }}
    //                 aria-describedby="GradeHelp" />
    //             <div id="GradeHelp" className="form-text">Enter Student Grade</div>
    //         </div>

    //         <div className="mb-3 mt-3">
    //             <label htmlFor="section" className="form-label">Section</label>
    //             <input type="text" className="form-control" id="section" value={student.section}
    //                 onChange={(event) => {
    //                     setStudent({ ...student, section: event.target.value })
    //                 }}
    //                 aria-describedby="SectionHelp" />
    //             <div id="SectionHelp" className="form-text">Enter Student Section</div>
    //         </div>

    //         <button type="submit" className="btn btn-primary" >Create Student</button>
    //     </form>

    // )
}

