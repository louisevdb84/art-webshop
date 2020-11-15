import React from 'react';
import { Card } from 'react-bootstrap';
import './about.styles.scss';

function About() {
    return (
        <div id="about" className="about">
            <div className="background"></div>
            <div className="content">
                <Card style={{ width: "100%" }}>
                    <Card.Img
                        className="aboutimage"
                        src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    />
                    <Card.Body>
                        <Card.Title><h1>About Me</h1></Card.Title>
                        <Card.Text>
                            <p>
                                Wat is Lorem Ipsum ? Lorem Ipsum is slechts een proeftekst uit
                                het drukkerij - en zetterijwezen.Lorem Ipsum is de standaard
                                proeftekst in deze bedrijfstak sinds de 16 e eeuw, toen een
                                onbekende drukker een zethaak met letters nam en ze door elkaar
                                husselde om een font - catalogus te maken.Het heeft niet alleen
                                vijf eeuwen overleefd maar is ook, vrijwel onveranderd,
                                overgenomen in elektronische letterzetting.Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met
                                Lorem Ipsum passages en meer recentelijk doo
                </p>

                            <p>
                                or de tekstuele inhoud. Het
                                belangrijke punt van het gebruik van Lorem Ipsum is dat het uit

                </p>
                            <p>
                                Wat is Lorem Ipsum ? Lorem Ipsum is slechts een proeftekst uit
                                het drukkerij - en zetterijwezen.Lorem Ipsum is de standaard
                                proeftekst in deze bedrijfstak sinds de 16 e eeuw, toen een
                                onbekende drukker een zethaak met letters nam en ze door elkaar
                                husselde om een font - catalogus te maken.Het heeft niet alleen
                                vijf eeuwen overleefd maar is ook, vrijwel onveranderd,
                                overgenomen in elektronische letterzetting.Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met
                                Lorem Ipsum passages en meer recentelijk doo
                </p>





                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default About;