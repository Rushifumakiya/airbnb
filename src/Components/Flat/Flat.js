import React from 'react'
import gradient from '../../images/gradient.png';
import { Link } from 'react-router-dom';
// import { MDBBtn } from 'mdb-react-ui-kit';
import './Flat.css'


export default function Flat() {
    return (
        <div>
            <div className='gradient-sec'>
                <img src={gradient} alt='' ></img>
                <h1>What kind of place will you host?</h1>
            </div>

            <div className='btn-container'>
                <button className='button-fir'>Ask a Superhost</button>
                <button className='button-fir'>Help</button>
                <button className='button-fir'>Save and Exit</button>
            </div>

            <div className='large-cont'>
                <Link to='/rent'>
                    <button className='large-btn m-3'>
                        <h3>Rental unit</h3>
                        <h6>Lorem ipsum, dolor sit amet consectetur amet consectetur</h6>
                    </button>  <br />
                </Link>

                <Link to='/rent'>
                    <button className='large-btn m-3'>
                        <h3>Apartment</h3>
                        <h6>Lorem ipsum, dolor sit amet consectetur</h6>
                    </button>  <br />
                </Link>

                <Link to='/rent'>
                    <button className='large-btn m-3'>
                        <h3>Loft</h3>
                        <h6>Lorem ipsum, dolor sit amet consectetur</h6>
                    </button>  <br />
                </Link>

                <Link to='/rent'>
                    <button className='large-btn m-3'>
                        <h3>Scrviced Apartment</h3>
                        <h6>Lorem ipsum, dolor sit amet consectetur</h6>
                    </button>  <br />
                </Link>

                <Link to='/rent'>
                    <button className='large-btn m-3'>
                        <h3>Casa Particular</h3>
                        <h6>Lorem ipsum, dolor sit amet consectetur</h6>
                    </button>  <br />
                </Link>

                <Link to='/rent'>
                    <button className='large-btn m-3'>
                        <h3>Holiday Home</h3>
                        <h6>Lorem ipsum, dolor sit amet consectetur</h6>
                    </button>
                </Link>
            </div>
        </div>
    )
}


