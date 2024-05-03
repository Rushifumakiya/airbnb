import React from 'react';
import './HostFooter.css'; // Import your footer styles here

function HostFooter() {
    return (
        <footer className="footer">
            <div className="Support-section">
                {/* <h5>SUPPORT</h5> */}
                <ul>
                    <h5>SUPPORT</h5>
                    <li><a href="#">Help Centre</a></li>
                    <li><a href="#">AirCover</a></li>
                    <li><a href="#">Safety information</a></li>
                    <li><a href="#">Supporting people with disabilities</a></li>
                    <li><a href="#">Cancellation options</a></li>
                    <li><a href="#">Our COVID-19 Response</a></li>
                    <li><a href="#">Report a neighbourhood concern</a></li>
                </ul>
            </div>
            <div className="Community-section">
                {/* <h5>COMMUNITY</h5> */}
                <ul>
                    <h5>COMMUNITY</h5>
                    <li><a href="#">Airbnb.org: disaster relief housing</a></li>
                    <li><a href="#">Support Afghan refugees</a></li>
                    <li><a href="#">Combating discrimination</a></li>
                </ul>
            </div>
            <div className="Hosting-section">
                {/* <h5>HOSTING</h5> */}
                <ul>
                    <h5>HOSTING</h5>
                    <li><a href="#">Try hosting</a></li>
                    <li><a href="#">AirCover for Hosts</a></li>
                    <li><a href="#">Explore hosting resources</a></li>
                    <li><a href="#">Visit our community forum</a></li>
                    <li><a href="#">How to host responsibly</a></li>
                </ul>
            </div>
            <div className="Airbnb-section">
                {/* <h5>AIRBNB</h5> */}
                <ul>
                    <h5>AIRBNB</h5>
                    <li><a href="#">Newsroom</a></li>
                    <li><a href="#">Learn about new features</a></li>
                    <li><a href="#">Letter from our founders</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Investors</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default HostFooter;
