import React, { useState } from "react";
import axios from "axios";

import UpdateForm from "./UpdateForm.js";

export default function ShowStudent() {
    const [studentList, setStudentList] = useState([]);
    const [studentUpdateDetails, setStudentUpdateDetails] = useState({});
    const [showModal, setShowModal] = useState(false);

    const deleteStudent = async (id) => {
        // return axios.delete(`http://localhost:5000/students/${id}`).then(() => {
        //     window.location.reload(false);
        // });
        await axios.delete(`http://localhost:5000/students/${id}`)
        fetchStudentList()
    };

    const fetchStudentList = async () => {
        const response = await axios.post("http://localhost:5000/students/getstudentdetail", { page: 1, pageSize: 5, field:{} })
        setStudentList(response.data.data)
    }
    

    // const submitUpdateStudent = async (data) => {
    //     await axios.put(`http://localhost:5000/students/${data._id}`, data)
    //     fetchStudentList()
    // }
    React.useEffect(() => {
        // axios.get("http://localhost:5000/students").then((allStudents) => {
        //     setStudentList(allStudents.data);
        // });

        fetchStudentList()
    }, []);


    // const showStudentData = studentList.map((student, key) => {
    //     return (
    //         <tr key={key}>
    //             <th>{student.regNumber}</th>
    //             <td>{student.name}</td>
    //             <td>{student.grade}</td>
    //             <td>{student.section}</td>
    //             <td>
    //                 <button
    //                     className="del--btn"
    //                     onClick={() => deleteStudent(student._id)}
    //                 >
    //                     <svg
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         width="16"
    //                         height="16"
    //                         fill="currentColor"
    //                         className="bi bi-trash-fill"
    //                         viewBox="0 0 16 16"
    //                     >
    //                         <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
    //                     </svg>
    //                 </button>
    //             </td>

    //             <td>
    //                 <button className="del--btn">
    //                     <svg
    //                         xmlns="http://www.w3.org/2000/svg"
    //                         width="16"
    //                         height="16"
    //                         fill="currentColor"
    //                         className="bi bi-pencil-fill"
    //                         viewBox="0 0 16 16"
    //                     >
    //                         <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
    //                     </svg>
    //                 </button>
    //             </td>
    //         </tr>
    //     );
    // });




    function onClose() {
        setShowModal(false)
        fetchStudentList()
    }

    const submitUpdateStudent = async (data) => {
        await axios.put(`http://localhost:5000/students/${studentUpdateDetails._id}`, data)
        onClose()
    }

    return (
        <>
            <table className="table table-info table-striped">
                <thead>
                    <tr>
                        <th scope="col">Reg Number</th>
                        <th scope="col">Name</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Section</th>
                        <th scope="col" colSpan="2">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        studentList.map((student, key) => {
                            return (
                                <tr key={key}>
                                    <th>{student.regNumber}</th>
                                    <td>{student.name}</td>
                                    <td>{student.grade}</td>
                                    <td>{student.section}</td>
                                    <td>
                                        <button
                                            className="del--btn"
                                            onClick={() => deleteStudent(student._id)}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-trash-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                                            </svg>
                                        </button>
                                    </td>

                                    <td>
                                        <button className="del--btn" onClick={() => { setStudentUpdateDetails(student); setShowModal(true) }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-pencil-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>


            {showModal && <UpdateForm data={studentUpdateDetails} onClose={onClose} onSubmit={(e) => submitUpdateStudent(e)} />}
        </>
    );
}
