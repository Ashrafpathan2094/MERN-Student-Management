import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';







function Signup() {


    const signUpSchema = yup.object().shape({
        email: yup.string()
            .email()
            .required("Email is Required"),

        name: yup.string()
            .required()
            .min(4, "Name should be Atleast 4 Characters"),

        password: yup.string()
            .required("password is required")
            .min(8, "Password should be Atleast 8 Characters")
            .max(32, ":Password should be only be 32 character "),

        repeatPassword: yup.string()
            .required("repeat - password is required")
            .min(8, "Password should be Atleast 8 Characters")
            .max(32, ":Password should be only be 32 character ")
            .oneOf([yup.ref("password")], "Passwords do not match")

    })
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(signUpSchema),
    });


    const navigate = useNavigate()

    const formSubmit = async (data) => {

        navigate("/")

    }

    return (
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                <MDBCardBody className='px-5' onSubmit={handleSubmit(formSubmit)} >
                    <h2 className="text-uppercase text-center mb-5" >Create an account</h2>
                    <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' {...register("name")} />
                    <span className="error-message">{errors.name?.message}</span>

                    <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' {...register("email")} />
                    <span className="error-message">{errors.email?.message}</span>

                    <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' {...register("password")} />
                    <span className="error-message">{errors.password?.message}</span>

                    <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password' {...register("repeatPassword")} />
                    <span className="error-message">{errors.repeatPassword?.message}</span>

                    <div className='d-flex flex-row justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                    </div>

                    <p className="mb-5 pb-lg-2" style={{}}>Already have an account? <Link to="/" style={{ color: '#393f81' }}>Log-In Here.</Link></p>

                    <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default Signup;