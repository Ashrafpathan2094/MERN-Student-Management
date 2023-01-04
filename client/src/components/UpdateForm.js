import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { validateSchema } from "./Validate.js"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";




export default function UpdateForm({ data, onClose, onSubmit}) {

    const [student, setStudent] = useState({ ...data })

    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(validateSchema),
    });


  
    return (
        <>
            <Modal show={true} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Student Record</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={handleSubmit(onSubmit)} method="post">
                    
                        <div className="mb-3 mt-3">
                            <label htmlFor="regNumber" className="form-label">Registration Number</label>
                            <input  {...register("regNumber")} type="number" className="form-control" id="regNumber" value={student.regNumber}
                                onChange={(event) => {
                                    setStudent({ ...student, regNumber: event.target.value })
                                }} aria-describedby="RegHelp" />
                            <div id="RegHelp" className="form-text">Enter Student Registration Number</div>
                            <span className="error-message">{errors.regNumber?.message}</span>
                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="name" className="form-label">Student Name</label>
                            <input  {...register("name")} type="text" className="form-control" id="name" value={student.name}
                                onChange={(event) => {
                                    setStudent({ ...student, name: event.target.value })
                                }}
                                aria-describedby="NameHelp" />
                            <div id="NameHelp" className="form-text">Enter Student Name</div>
                            <span className="error-message">{errors.name?.message}</span>

                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="grade" className="form-label">Grade</label>
                            <input {...register("grade")} type="text" className="form-control" id="grade" value={student.grade}
                                onChange={(event) => {
                                    setStudent({ ...student, grade: event.target.value })
                                }}
                                aria-describedby="GradeHelp" />
                            <div id="GradeHelp" className="form-text">Enter Student Grade</div>
                            <span className="error-message">{errors.grade?.message}</span>

                        </div>

                        <div className="mb-3 mt-3">
                            <label htmlFor="section" className="form-label">Section</label>
                            <input {...register("section")} type="text" className="form-control" id="section" value={student.section}
                                onChange={(event) => {
                                    setStudent({ ...student, section: event.target.value })
                                }}
                                aria-describedby="SectionHelp" />
                            <div id="SectionHelp" className="form-text">Enter Student Section</div>
                            <span className="error-message">{errors.section?.message}</span>

                        </div>

                        <button type="submit" className="btn btn-primary" >Update Student</button>
                    </form>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
