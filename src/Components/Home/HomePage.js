import React from 'react'
import banner from '../../images/banner-img.png';
import './HomePage.css'
import Header1 from '../Header/Header1';
import CardSlider from '../CardSlider/CardSlider';
import Footer from '../Footer/Footer';
import Home2 from '../Home2/Home2';

function HomePage() {
  return (
    <div>
      <div>
        <Header1 />
        <img src={banner} alt='' className='banner'></img>

        <CardSlider/>
        
        <Home2/>
        <Footer/>   
      </div>
    </div>
  )  
}

export default HomePage