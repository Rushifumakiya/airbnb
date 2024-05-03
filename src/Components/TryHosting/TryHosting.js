import React from 'react';
import './TryHosting.css';
import Hostvideo2 from '../../images/Hostvideo2.mp4';
import { MDBBtn } from 'mdb-react-ui-kit';
import HostFooter from '../HostFooter/HostFooter';
import { Link } from 'react-router-dom';

function TryHosting() {
    return (
        <>
            <div className='head'>
                <div className='video'>
                    <iframe
                        width="619"
                        height="348"
                        src={Hostvideo2}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>

                <h1 className='host-header1'>Become a Host in 10 easy steps</h1>
                <h5 className='host-header2'>Join Join us. We'll help you every step of the way.</h5>

                <Link to='/go'>
                    <div className='try-button'>
                        <MDBBtn className="btn" color='danger'> Let's Go </MDBBtn>
                    </div>
                </Link>

                <div className='footer-try'>
                    <HostFooter />
                </div>
            </div>
        </>
    );
}

export default TryHosting;
