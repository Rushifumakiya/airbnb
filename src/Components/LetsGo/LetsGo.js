import React from 'react'
import gradient from '../../images/gradient.png';
// import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import './LetsGo.css'



export default function LetsGo() {
  return (
    <div>
      <div className='gradient-image'>
        <img src={gradient} alt='' ></img>
        <h1>What kind of place will you host?</h1>
      </div>

      <div className='gradient-top-buttons-container'>
        <button className='button-small'>Ask a Superhost</button>
        <button className='button-small'>Help</button>
        <button className='button-small'>Save and Exit</button>
      </div>

      <div className='large-button-container'>
        <Link to='/flat'><button className='large-button m-3'><h3>Flat</h3></button>  <br /></Link>
        <Link to='/flat'><button className='large-button m-3'><h3>House</h3></button>  <br /></Link>
        <Link to='/flat'><button className='large-button m-3'><h3>Secondary Unit</h3></button>  <br /></Link>
        <Link to='/flat'><button className='large-button m-3'><h3>Uniqe Space</h3></button>  <br /></Link>
        <Link to='/flat'><button className='large-button m-3'><h3>Bed and breakfast</h3></button>  <br /></Link>
        <Link to='/flat'><button className='large-button m-3'><h3>Boutique Hotel</h3></button></Link>
      </div>
    </div>
  )
}


