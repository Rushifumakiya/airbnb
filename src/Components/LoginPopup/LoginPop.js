import React from 'react';
import './LoginPop.css'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function LoginPop() {
    return (
        <div className='login-popup-box'>
            <div className='login-popup-content-item'>
                <MDBContainer fluid className='card-body'>
                    <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                        <MDBCol col='12'>
                            <h2 className='head'>Login in Page</h2> <hr />
                            <MDBCard className='bg-white my-2 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                                <MDBCardBody className='p-4 w-100 d-flex flex-column'>

                                    <h2 className="fw-bold mb-2">Welcome to Airbnb</h2> <br />

                                    <MDBInput wrapperClass='mb-3 w-100' placeholder='Plese Enter Your Email' id='formControlLg' type='email' />
                                    <MDBInput wrapperClass='mb-3 w-100' placeholder='Please Enter Your Password' id='formControlLg' type='password' />

                                    <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-3' label='Remember password' />

                                    <MDBBtn size='lg'>
                                        Login
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

export default LoginPop;

