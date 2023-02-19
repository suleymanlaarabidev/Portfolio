import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';
import axios from "axios"
const Contact = () => {




    return (
        <Container fluid className="contact-section">
            <Particle />

            <form action="https://formsubmit.co/suleyman.laarabi.dev@gmail.com" method="POST">
                <h1>LET’S <span style={{ color: "#8a49a8" }}>TALK</span></h1>
                <p>Fill in the form below, or reach out to us directly — <span style={{ color: "#8a49a8" }}>suleyman.laarabi.dev@gmail.com</span> </p>
                <input required name="name" type="text" placeholder='Name' />
                <input type="email" name="email" placeholder='Email' required />



                <textarea required name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button>Envoyer</button>

            </form>
        </Container>
    );
};

export default Contact;