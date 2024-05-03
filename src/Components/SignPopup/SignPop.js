

import React from 'react';
import './SignPop.css';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdb-react-ui-kit';

function SignPop() {
    return (
        <div className='login-popup'>
            <div className='login-popup-content'>
                <MDBContainer fluid className='card-body'>
                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12'>
                            <h2 className='head'>Sign Up Page</h2> <hr />
                            <MDBCard className='bg-white my-2 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                                <MDBCardBody className='p-4 w-100 d-flex flex-column'>

                                    <MDBInput wrapperClass='mb-3' placeholder='Enter Your First Name' id='firstName' type='text' />
                                    <MDBInput wrapperClass='mb-3' placeholder='Enter Your Last Name' id='lastName' type='text' />
                                    <MDBInput wrapperClass='mb-3' placeholder='Enter Your Email' id='email' type='email' />
                                    <MDBInput wrapperClass='mb-3' placeholder='Enter Your Password' id='password' type='password' />
                                    <MDBInput wrapperClass='mb-3' placeholder='Enter Your Birth Date' id='confirmPassword' type='date' />
                                    <MDBInput wrapperClass='mb-3' placeholder='Enter Your Phone Number' id='phoneNumber' type='tel' />

                                    <MDBBtn size='lg' style={{ backgroundColor: 'blue', color: 'white' }}>
                                        Sign Up
                                    </MDBBtn>

                                    <hr className="my-4" />

                                    <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: 'green' }}>
                                        <MDBIcon fab icon="google" className="mx-2" />
                                        Sign in with google
                                    </MDBBtn>

                                    <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: 'darkblue' }}>
                                        <MDBIcon fab icon="facebook-f" className="mx-2" />
                                        Sign in with facebook
                                    </MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>
    );
}

export default SignPop;
