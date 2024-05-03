import React, { useState } from 'react'
import Header1 from '../Header/Header1'
import './CardDetails.css'
import { Link } from 'react-router-dom'
import slider6 from '../../images/slider6.jpg'
import { FaWater } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { IoTvSharp } from "react-icons/io5";
import { FaStarOfLife } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";
import { FaFan } from "react-icons/fa";
import { FaMugSaucer } from "react-icons/fa6";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaStar } from "react-icons/fa";
import h1 from '../../images/h1.png'
import h2 from '../../images/h2.png'
import h3 from '../../images/h3.png'
import h4 from '../../images/h4.png'
import h5 from '../../images/h5.png'
import h6 from '../../images/h6.png'
import h7 from '../../images/h7.png'
import h8 from '../../images/h8.png'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import lookbook from '../../images/lookbook.png'
import { FaCheckCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";

import Footer from '../Footer/Footer'

import aircover from '../../images/aircover.png'

export default function () {
    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <>
            <div className='card-detail-container'>
                <div className='crd-head'>
                    <Header1 />
                </div>

                

                <div className='card-heading'>
                    <h1>Adaaran Club Rannalhi, Maldives, Water Bungalows</h1>
                </div>

                <div className='mal-link'>
                    <div className='maldiv'>
                        <Link to='/'>
                            <span>Maldives</span>
                        </Link>
                    </div>
                    <div className='share'>
                        <Link to='/'>
                            <span>ShareSave</span>
                        </Link>
                    </div>
                </div>

                <div className='im-cont'>
                    <Link to= '/Maldives'><img src={slider6} alt='' className='slide-img-1'></img></Link>
                    <Link to='/Maldives'><img src={slider6} alt='' className='slide-img-2'></img></Link>
                </div>

                <div className='dome'>
                    <h1>Dome hosted by LookBook</h1>
                    <p>6 guests.1bedroom.1bed.1bathroom</p>
                </div>

                <div className='horrizontal'></div>


                <div className='wat-ico'><FaWater /></div>
                <div className='dive-cont-water'>
                    <h4>Dive right in</h4>
                    <p>This is one of the few places in the area with a pool.</p>
                </div>

                <div className='sta-ico'><FaRegStar /></div>
                <div className='dive-cont-star'>
                    <h4>Dive right in</h4>
                    <p>This is one of the few places in the area with a pool.</p>
                </div>

                <div className='horrizontal'></div>

                <div className='air-contener'>
                    <img src={aircover} alt='' className='air-img' />

                    <p>
                        Every booking includes free protection from Host cancellations, listing inaccuracies, and <br />
                        other issues like trouble checking in.
                    </p>
                    <br /><br />

                    <Link>
                        <span>LearnMore</span>
                    </Link>
                </div>

                <div className='horrizontal'></div>

                <div className='paragraph-card'>
                    <p>
                        Adaaran Club Rannalhi is featured among the best hotels in Maldives and sits exclusively
                        at the tip of the South Male atoll within the exotic collection of islands known as the
                        Maldives. Its unique location offers access to pristine beaches, excellent scuba diving
                        opportunities and a relaxed environment with easy access to the capital city of Male.
                    </p>
                </div>

                <div className='horrizontal'></div>

                <div className='bed-heading'>
                    <h2>Where you'll sleep</h2>

                    <div className='bed-div'>
                        <div className='bed-icon'>
                            <FaBed />
                        </div>

                        <div className='bed-paragraph'>
                            <p>
                                <b>Bedroom</b>
                            </p>
                            <h6>1 double bed</h6>
                        </div>
                    </div>

                    <div className='horrizontal'></div>

                    <div className='functions'>
                        <div className='funct-heading'>
                            <h1>What this place offers</h1>
                        </div>
                    </div>

                    <div className='functions-icons-container'>
                        <div className='icon-section-1'>

                            <div className='wifi'>
                                <div className='wifi-icon'>
                                    <FaWifi />
                                </div>
                                <div className='wifi-text'> Wifi </div>
                            </div>

                            <div className='tv'>
                                <div className='tv-icon'>
                                    <IoTvSharp />
                                </div>
                                <div className='tv-text'> TV </div>
                            </div>

                            <div className='dryer'>
                                <div className='hair-dryer-icon'>
                                    <FaStarOfLife />
                                </div>
                                <div className='hair-dryer-text'> Hair Dryer </div>
                            </div>
                            <div className='hotel'>
                                <div className='hotel-icon'>
                                    <FaHotel />
                                </div>
                                <div className='hotel-text'> Long-term stays allowed </div>
                            </div>
                        </div>
                        {/* --------------------------------------------------------------------------- */}

                        <div className='icon-section-2'>

                            <div className='pool'>
                                <div className='pool-icon'>
                                    <FaWater />
                                </div>
                                <div className='pool-text'> Pool </div>
                            </div>

                            <div className='air-condition'>
                                <div className='air-conditioning-icon'>
                                    <FaFan />
                                </div>
                                <div className='air-conditioning-text'> Air Conditioning </div>
                            </div>

                            <div className='breaakfast'>
                                <div className='breakfast-icon'>
                                    <FaMugSaucer />
                                </div>
                                <div className='breakfast-text'> Breakfast </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className='button'>Show all 14 amenities</button>
            <div className='horrizontal'></div>

            {/*-----------------------------------------------------------------------------------*/}

            <div className='calender-heading'>
                <h3>Select Your Dates</h3>
            </div>
            <div className='calender-paragraph'>
                <p>Minimun Stay : 2 Nights</p>
            </div>
            <div className='calendar-container'>
                <div className='calendar-wrapper'>
                    <div className='calendar-left'>
                        <Calendar
                            onChange={setStartDate}
                            value={startDate}
                        />
                    </div>
                </div>
            </div>

            {/* ----------------------------------------------------------------------------------------- */}
            <div className='review-header'>
                <div className='review-icon'>
                    <FaStar />
                </div>
                <div className='review-text'>
                    <h3>4.92 . 26 reviews</h3>
                </div>
            </div>

            <div className='review-cont-list'>

                <div className='review-container-1'>
                    <div className='r1'>
                        <p><b>Cleanliness</b></p>
                    </div>
                    <div className='r1-icon'>
                        <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                    </div>

                    <div className='r2'>
                        <p><b>Communication</b></p>
                    </div>
                    <div className='r2-icon'>
                        <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                    </div>

                    <div className='r3'>
                        <p><b>Check in</b></p>
                    </div>
                    <div className='r3-icon'>
                        <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                    </div>
                </div>

                <div className='review-container-2'>
                    <div className='r4'>
                        <p><b>Accuracy</b></p>
                    </div>
                    <div className='r4-icon'>
                        <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                    </div>

                    <div className='r5'>
                        <p><b>Location</b></p>
                    </div>
                    <div className='r5-icon'>
                        <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                    </div>

                    <div className='r6'>
                        <p><b>Value</b></p>
                    </div>
                    <div className='r6-icon'>
                        <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
                    </div>
                </div>
            </div>

            {/* -------------------------------------------------------------------------------------------- */}

            <div className='container-review-1'>
                <div className='person1-img'>
                    <img src={h1} alt=''></img>
                    <p className='person1-name'>
                        <b>Manthan Dave</b>
                    </p>
                    <p className='person1-year'>June 2022</p>
                    <p className='person1-para'>
                        A memorable experience with exceptional hospitality. The <br />
                        place is amazing for a weekend gateaway. It is in the outskirts <br />
                        of Nasik and very near to Sula. The place has all the fun...
                    </p>
                    <button className='person1-btn'>
                        <b>Show More </b>
                    </button>
                </div>

                <div className='person2-img'>
                    <img src={h2} alt=''></img>
                    <p className='person2-name'>
                        <b>Paras Patel</b>
                    </p>
                    <p className='person2-year'>June 2022</p>
                    <p className='person2-para'>
                        A memorable experience with exceptional hospitality. The <br />
                        place is amazing for a weekend gateaway. It is in the outskirts <br />
                        of Nasik and very near to Sula. The place has all the fun...
                    </p>
                    <button className='person2-btn'>
                        <b>Show More </b>
                    </button>
                </div>

                <div className='person3-img'>
                    <img src={h3} alt=''></img>
                    <p className='person3-name'>
                        <b>Niraj Patel</b>
                    </p>
                    <p className='person3-year'>June 2022</p>
                    <p className='person3-para'>
                        A memorable experience with exceptional hospitality. The <br />
                        place is amazing for a weekend gateaway. It is in the outskirts <br />
                        of Nasik and very near to Sula. The place has all the fun...
                    </p>
                    <button className='person3-btn'>
                        <b>Show More </b>
                    </button>
                </div>

                <div className='person4-img'>
                    <img src={h4} alt=''></img>
                    <p className='person4-name'>
                        <b>Harsh Kansoda</b>
                    </p>
                    <p className='person4-year'>June 2022</p>
                    <p className='person4-para'>
                        A memorable experience with exceptional hospitality. The <br />
                        place is amazing for a weekend gateaway. It is in the outskirts <br />
                        of Nasik and very near to Sula. The place has all the fun...
                    </p>
                    <button className='person4-btn'>
                        <b>Show More </b>
                    </button>
                </div>
            </div>

            <div className='container-review-2'>
                <div className='person5-img'>
                    <img src={h5} alt=''></img>
                    <p className='person5-name'>
                        <b>Ajay Kanzariya</b>
                    </p>
                    <p className='person5-year'>June 2022</p>
                    <p className='person5-para'>
                        A memorable experience with exceptional hospitality. The <br />
                        place is amazing for a weekend gateaway. It is in the outskirts <br />
                        of Nasik and very near to Sula. The place has all the fun...
                    </p>
                    <button className='person5-btn'>
                        <b>Show More </b>
                    </button>
                </div>

                <div className='person6-img'>
                    <img src={h6} alt=''></img>
                    <p className='person6-name'>
                        <b>Ravi Vyas</b>
                    </p>
                    <p className='person6-year'>June 2022</p>
                    <p className='person6-para'>
                        A memorable experience with exceptional hospitality. The <br />
                        place is amazing for a weekend gateaway. It is in the outskirts <br />
                        of Nasik and very near to Sula. The place has all the fun...
                    </p>
                    <button className='person6-btn'>
                        <b>Show More </b>
                    </button>
                </div>

                <div className='person7-img'>
                    <img src={h7} alt=''></img>
                    <p className='person7-name'>
                        <b>Mahir Vadiya</b>
                    </p>
                    <p className='person7-year'>June 2022</p>
                    <p className='person7-para'>
                        A memorable experience with exceptional hospitality. The <br />
                        place is amazing for a weekend gateaway. It is in the outskirts <br />
                        of Nasik and very near to Sula. The place has all the fun...
                    </p>
                    <button className='person7-btn'>
                        <b>Show More </b>
                    </button>
                </div>

                <div className='person8-img'>
                    <img src={h8} alt=''></img>
                    <p className='person8-name'>
                        <b>Neel Vyas</b>
                    </p>
                    <p className='person8-year'>June 2022</p>
                    <p className='person8-para'>
                        A memorable experience with exceptional hospitality. The <br />
                        place is amazing for a weekend gateaway. It is in the outskirts <br />
                        of Nasik and very near to Sula. The place has all the fun...
                    </p>
                    <button className='person8-btn'>
                        <b>Show More </b>
                    </button>
                </div>

                <button className='all-review-btn'>Show all 13 reviews</button>

                <div className='horrizontal'></div>

                <div className='map-container'>
                    <div className='map-heading'>
                        <h2>Where you'll be</h2>
                        <p>Maldives</p>
                    </div>
                    <div className='google-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.25028088343!2d72.66766717350866!3d23.05128411525953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871899ae62b3%3A0xaa93cc187ff53e83!2sRaspan%20Cross%20Rd%2C%20Nikol%2C%20Ahmedabad%2C%20Gujarat%20380038!5e0!3m2!1sen!2sin!4v1710138264741!5m2!1sen!2sin" width="89%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className='horrizontal'></div>

{/* ------------------------------------------------------------------------------------------ */}

                <div className='lookbook-container'>
                    <div className='lookbook-img'>
                        <img src={lookbook} alt=''></img>
                    </div>

                    <div className='lookbook-text'>
                        <h2>Hosted by LookBook</h2>
                        <p>Joined in October 2015</p>
                    </div>

                    <div className='lookbook-icon'>
                        <div className='star-icon'>
                            <FaStar />
                            <div className='star-year'>
                                <p>803 reviews</p>
                            </div>
                        </div>
                        <div className='checked-icon'>
                            <FaCheckCircle />
                            <div className='checked-year'>
                                <p>Identity verified</p>
                            </div>
                        </div>
                        <div className='lookbook-paragraph'>
                            <p>
                                We are a fully independent and dynamic specialist online holiday
                                accommodation provider world-wide company. Hotels and
                                properties are in cities and sun & beach destinations, mainly
                                Turkey, Northern Cyprus, Greece, Maldives and worldwide
                                because of a good selection of products, competitive rates, and
                                conditions. We have own contracting with hotels (+1500) also
                                get rates from 3rd party partners as supplier and distributor and
                                get bookings on B2B/B2C/B2E distrubition channels. “MALLI
                                TOURISM & TRAVEL LLC.” trading name with TURSAB A Group
                                (11357) as “Loobookholiday” head quarter located at Turkey as
                                the only strategic partner company that offers Airbnb users
                                hotel room reservation options as well as home
                                accommodation.
                            </p>

                            <div className='lookbook-para2'>
                                <p>Languages: English, Türkçe</p>
                                <p>Response rate: 74%</p>
                                <p>Response time: within a day</p>
                            </div>

                            <div className='contact-host-btn'>
                                <button>Contact Host</button>
                            </div>

                            <div className='warning'>
                                <p style={{ marginLeft: "70px", marginTop: "10px", fontSize: "13px", fontWeight: "20px", marginBottom: "20px"}}> <RiErrorWarningFill />To protect your payment, never transfer <br />
                                    money or communicate outside of the Airbnb <br />
                                    website or app.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='horrizontal'></div>

{/* -------------------------------------------------------------------------------------------- */}

                <div className='thinking-container'>
                    <div className='thinking-heading'>
                        <h2>Things to know</h2>
                    </div>

                    <div className='house'>
                        <p><b>House Rules</b></p>
                        <p><MdWatchLater /> Check-in: After 3:00 pm</p>
                    </div>
                        
                    <div className='health'>
                        <p><b>Health & safety</b></p>
                        <p className='health-srt-icon'><FaStar /> Airbnb's COVID-19 safety practices apply</p>
                        <p className='health-watc-icon'><MdWatchLater /> Carbon monoxide alarm </p>
                        <p className='health-smok-icon'><MdWatchLater /> Smoke alarm</p>
                    </div>

                    <div className='Cancellation'>
                        <p className='Cancel-heading'><b>Cancellation policy</b></p>
                        <p className='Cancel-para'>Free cancellation for 48 hours. <br/><br/>
                            Review the Host’s full cancellation policy which  <br/>
                            applies even if you cancel for illness or  <br/>
                            disruptions caused by COVID-19.
                        </p> 
                        
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
} 
