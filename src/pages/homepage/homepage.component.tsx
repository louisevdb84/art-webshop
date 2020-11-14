import React from 'react';
import About from '../about/about.component';
import Contact from '../contact/contact.component';
import './homepage.style.scss';

function HomePage() {
    return (
        <div id="homepage" className="homepage">
            <div className="background"></div>
            <div className="mainheading">
                <h1>The Art Page</h1>
                <br></br>
                <h3>Browse and make an online purchase</h3>
                Testing
                <br>
                </br>

                {/* <ImageCarousel></ImageCarousel> */}
            </div>
            <div>
                <About></About>
            </div>
            <div>
                {/* <Project></Project> */}
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
    );
}

export default HomePage;