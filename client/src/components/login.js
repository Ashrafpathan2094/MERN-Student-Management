import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';

import formImage from "../images/pexels-vlada-karpovich-4050312.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";



function Login() {

    const navigate = useNavigate()

    const logInSchema = yup.object().shape({
        email: yup.string()
            .email()
            .required("Email is Required"),

        password: yup.string()
            .required("password is required")
            .min(8, "Password should be Atleast 8 Characters")
            .max(32, ":Password should be only be 32 character ")

    })
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(logInSchema),
    });



    const formSubmit = async (data) => {
        console.log(data)
        const response = await axios.post("http://localhost:5000/admin/login", data)
        console.log(response)
        navigate("/show-students")

    }

    return (
        <MDBContainer className="my-5">

            <form onSubmit={handleSubmit(formSubmit)}>
                <MDBCard>
                    <MDBRow className='g-0'>

                        <MDBCol md='6'>
                            <MDBCardImage src={formImage} alt="login form" className='rounded-start w-100' />
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>

                                <div className='d-flex flex-row mt-2'>
                                    {/* <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} /> */}
                                    <span className="h1 fw-bold mb-0">Student Management</span>
                                </div>

                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" {...register("email")} />
                                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg-password' type='password' size="lg" {...register("password")} />

                                <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{}}>Don't have an account? <Link to="/signup" style={{ color: '#393f81' }}>Register here</Link></p>

                                <div className='d-flex flex-row justify-content-start'>
                                    <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                </div>

                            </MDBCardBody>
                        </MDBCol>

                    </MDBRow>
                </MDBCard>
            </form>

        </MDBContainer>
    );
}

export default Login;