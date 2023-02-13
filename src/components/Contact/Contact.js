import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Container fluid className="contact-section">
            <Particle />

            <form onSubmit={handleSubmit}>
                <h1>LET’S <span style={{ color: "#8a49a8" }}>TALK</span></h1>
                <p>Fill in the form below, or reach out to us directly — <span style={{ color: "#8a49a8" }}>suleyman.laarabi.dev@gmail.com</span> </p>
                <div className='name-input'>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>

                <input type="text" placeholder='Mail' />
                <input type="text" placeholder='Object' />
                <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
            </form>
        </Container>
    );
};

export default Contact;