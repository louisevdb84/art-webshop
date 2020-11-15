import React from 'react';
import { Card } from 'react-bootstrap';
import './contact.styles.scss';

function Contact() {
    return (
        <Card id="contact">
              <h1>Contact Me</h1>
            <div className="container">
              
                <br></br>
                <form>

                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                    

                    <label htmlFor="subject">Message</label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>

                    <input type="submit" value="Submit" />

                </form>

            </div>
        </Card>
    );
}

export default Contact;