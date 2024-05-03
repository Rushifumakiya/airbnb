import React from 'react'
import './Home2.css'
import { Link } from 'react-router-dom'
import Dog from '../../images/Dog.png'
import Home from '../../images/Home.png'
import House from '../../images/House.png'
import Sea from '../../images/Sea.png'
import custombanner from '../../images/custombanner.png'

export default function Home2() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth" // Optional: Smooth scrolling behavior
        });
      };

  return (
    <>
        <div className='Home-Second-2'>
            <div className='Home-second-heading'>
                <h2><b>Be a Host to Afghan refugees</b></h2>
            </div>

            <div className='Home-second-paragraph'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo aliquam vitae 
                    mi eget risus. A sagittis vitae dignissim lorem vestibulum vel.Lorem ipsum dolor 
                    sit amet, consectetur adipiscing elit. Commodo aliquam vitae mi eget risus. A 
                    sagittis vitae dignissim lorem vestibulum vel.Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Commodo aliquam vitae mi eget risus. A sagittis vitae 
                    dignissim lorem vestibulum vel.
                </p>
            </div>

            <button className='Home-second-btn' onClick={scrollToTop}>Learn More At Airbnb.org</button>

{/* ---------------------------------------------------------------------------------------------- */}

            <div className='Live-Section'>
                <div className='live-section-heading'>
                    <h1>Live anywhere</h1>
                </div>

                <div className='live-img-collection'>
                    <img src={Dog} className='dog-img'></img>
                    <p className='dog-tital'>pets allowes</p>

                    <img src={Home} className='hou-1'></img>
                    <p className='hou-1-tital'>pets allowes</p>

                    <img src={House} className='hou-2'></img>
                    <p className='hou-2-tital'>pets allowes</p>

                    <img src={Sea} className='boat'></img>
                    <p className='boat-tital'>pets allowes</p>
                </div>
            </div>
    
{/* ------------------------------------------------------------------------------------------- */}

                <div className='home-tryhosting-section'>
                    <div className='home-tryhosting-image'>
                        <img src={custombanner} className='home-tryhosting-img'></img>

                        <h1>Try Hosting</h1>
                        <p>Earn extra income and unlock new opportunities by sharing your space.</p>

                        <button className='home-hosting-btn' onClick={scrollToTop}>Learn More</button>
                    </div>
                </div>

{/* -------------------------------------------------------------------------------------------- */}

                <div className='Discover-Section'>
                    <div className='discover-section-heading'>
                        <h1>Discover thing to do</h1>
                    </div>

                    <div className='discover-img-collection'>
                        <img src={Dog} className='dog-img-2'></img>
                        <p className='dog-img-2-tital'>pets allowes</p>

                        <img src={Home} className='house-1-img-2'></img>
                        <p className='house-1-img-2-title'>pets allowes</p>

                        <img src={House} className='house-2-img-2'></img>
                        <p className='house-2-img-2-title'>pets allowes</p>
                    </div>
                </div>
        </div>
    </>
  )
}
