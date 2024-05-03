import React from 'react'
import gradient from '../../images/gradient.png';
import { Link } from 'react-router-dom';
import './RentalUnit.css'
// import { MDBBtn } from 'mdb-react-ui-kit';


export default function RentalUnit() {
  return (
    <div>
      <div className='gradient-third'>
        <img src={gradient} alt='' ></img>
        <h1>What kind of place will you host?</h1>
      </div>

      <div className='btn-container'>
        <button className='button-first'>Ask a Superhost</button>
        <button className='button-first'>Help</button>
        <button className='button-first'>Save and Exit</button>
      </div>

      <div className='large-cont-third'>
        <button className='large-bttn m-3'>
            <h3>An entire place</h3>
        </button>  <br />

        <button className='large-bttn m-3'>
            <h3>A private room</h3>
        </button>  <br />

        <button className='large-bttn m-3'>
            <h3>A shared room</h3>
        </button>  <br />
      </div>
    </div>
  )
}


