import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../Particle';
import axios from "axios"
const Contact = () => {

    const firstNameRef = useRef()
    const lastNameRef = useRef()

    const mailRef = useRef()
    const objectRef = useRef()
    const messageRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        setSendLoading(true)

        axios.get(`http://82.64.55.123:8080/sendmail/${firstNameRef.current.value}/${lastNameRef.current.value}/${mailRef.current.value}/${objectRef.current.value}/${messageRef.current.value}`).then(res => {
            console.log(res)
            setSendLoading(false)
            setIsSend(<p>send successfuly</p>)
        })


    }

    const [sendLoading, setSendLoading] = useState(false)
    const [isSend, setIsSend] = useState(null)

    return (
        <Container fluid className="contact-section">
            <Particle />

            <form onSubmit={handleSubmit}>
                <h1>LET’S <span style={{ color: "#8a49a8" }}>TALK</span></h1>
                <p>Fill in the form below, or reach out to us directly — <span style={{ color: "#8a49a8" }}>suleyman.laarabi.dev@gmail.com</span> </p>
                <div className='name-input'>
                    <input required ref={firstNameRef} type="text" placeholder='First Name' />
                    <input required ref={lastNameRef} type="text" placeholder='Last Name' />
                </div>

                <input required ref={mailRef} type="email" placeholder='Mail' />
                <input required ref={objectRef} type="text" placeholder='Object' />
                <textarea required ref={messageRef} name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button>{!sendLoading ? "Envoyer" : "..."}</button>
                {isSend}
            </form>
        </Container>
    );
};

export default Contact;