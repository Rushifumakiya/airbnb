import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div>
                <footer style={{"line-height" : "1.4"}}>
                    <div>
                        <h5>SUPPORT</h5>
                        <ul>
                            <li><Link to= '/card-det'>Help Centre</Link></li>
                            <li><Link to= '/card-det'>AirCover</Link></li>
                            <li><Link to= '/card-det'>Safety information</Link></li>
                            <li><Link to= '/card-det'>Supporting people with disabilities</Link></li>
                            <li><Link to= '/card-det'>Cancellation options</Link></li>
                            <li><Link to= '/card-det'>Our COVID-19 Response</Link></li>
                            <li><Link to= '/card-det'>Report a neighbourhood concern</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5>COMMUNITY</h5>
                        <ul>
                            <li><Link to= '/card-det'>Airbnb.org: disaster relief housing</Link></li>
                            <li><Link to= '/card-det'>Support Afghan refugees</Link></li>
                            <li><Link to= '/card-det'>Combating discrimination</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5>HOSTING</h5>
                        <ul>
                            <li><Link to= '/card-det'>Try hosting</Link></li>
                            <li><Link to= '/card-det'>AirCover for Hosts</Link></li>
                            <li><Link to= '/card-det'>Explore hosting resources</Link></li>
                            <li><Link to= '/card-det'>Visit our community forum</Link></li>
                            <li><Link to= '/card-det'>How to host responsibly</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5>AIRBNB</h5>
                        <ul>
                            <li><Link to= '/card-det'>Newsroom</Link></li>
                            <li><Link to= '/card-det'>Learn about new features</Link></li>
                            <li><Link to= '/card-det'>Letter from our founders</Link></li>
                            <li><Link to= '/card-det'>Careers</Link></li>
                            <li><Link to= '/card-det'>Investors</Link></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>
    )
}
