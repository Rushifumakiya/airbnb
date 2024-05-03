import React, { useEffect, useState } from 'react'
import myroom1 from '../../images/myroom1.png';
import slider1 from '../../images/slider1.jpg';
import slider4 from '../../images/slider4.jpg'
import slider3 from '../../images/slider3.jpg';
import slider5 from '../../images/slider5.jpg';
import './CardSlider.css'
import Carousel from 'react-bootstrap/Carousel';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function CardSlider() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://onestay.3waytech.co/api/room_list', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setCards(data);
                console.log("data", data)
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='row m-3 '>
                {cards.map((card) => (
                    <div className='col-md-3' key={card.id}>
                        <div className='card'>
                            <div className='card-body'>
                                <Link to= '/card-det'>
                                <Carousel data-bs-theme="light" className='img-container' interval={null}>
                                    <Carousel.Item className='img-1'>
                                        <img className="d-block" src={myroom1} alt="First slide" />
                                    </Carousel.Item>

                                    <Carousel.Item className='img'>
                                        <img className="d-block w-100" src={slider1} alt="Second slide" />
                                    </Carousel.Item>

                                    <Carousel.Item className='img'>
                                        <img className="d-block w-100" src={slider3} alt="Second slide" />
                                    </Carousel.Item>

                                    <Carousel.Item className='img'>
                                        <img className="d-block w-100" src={slider4} alt="Second slide" />
                                    </Carousel.Item>

                                    <Carousel.Item className='img'>
                                        <img className="d-block w-100" src={slider5} alt="Second slide" />
                                    </Carousel.Item>
                                </Carousel>
                            </Link>
                            </div>
                        </div>

                        <div className='Los-Angles-txt d-flex'>
                                <div className="detaile-content">
                                    <b>{card.address}</b>
                                    <p className='description'>{card.description}</p>
                                    <p>
                                        <b>{card.price}</b> / night
                                    </p>
                                </div>

                                <div className='now'>
                                    <p>
                                        <b><FaStar /> Now </b>
                                    </p>
                                </div>
                            </div>
                    </div>
                ))}
            </div>
            
        </>
    )
}
