import React from 'react';
import About from '../about/about.component';
import Contact from '../contact/contact.component';
import Project from '../projects/project.component';
import ImageCarousel from '../carousel/carousel.component';
import './homepage.style.scss';
import Navigation from '../../components/navigation.component';

function HomePage() {
    return (
        <div>
            <Navigation></Navigation>
        
        <div id="homepage" className="homepage">
            <div className="background"></div>
            <div className="mainheading">
                <h1>The Art Page</h1>
                <br></br>
                <h3>Browse and make an online purchase</h3>
                <br>
                </br>
                <div style={{pageBreakAfter:"always", width: "30%", margin: "0 auto", paddingBottom:"20%"}}>
                    <ImageCarousel></ImageCarousel>
                </div>

            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Project></Project>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
        </div>
    );
}

export default HomePage;