import React from 'react'
import './HostPage.css'
import Hostvideo2 from '../../images/Hostvideo2.mp4';
import { MDBBtn } from 'mdb-react-ui-kit';
import HostFooter from '../HostFooter/HostFooter';
import { Link } from 'react-router-dom';
function HostPage() {
    return (
        <div>
            <div className='container-fluid' id="FirstSection">
                <div className='row'>
                    <div className='col-sm-6'>
                        <h1 className='host-heading'>Open your door to <br /> hosting </h1>

                        <Link to="/tryhosting">
                            <MDBBtn className="btn" color='danger'> Try hosting </MDBBtn>
                        </Link>
                    </div>

                    <div className='col-sm-5'>
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
                </div>
            </div>
            <HostFooter />
        </div>
    )
}

export default HostPage