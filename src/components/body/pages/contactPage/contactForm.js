import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        // MUST UPDATE WITH SECRET INFO FROM EMAILJS
        emailjs.sendForm(
            'SERVICE_ID', 
            'TEMPLATE_ID', 
            form.current, 
            'PUBLIC_KEY'
            )
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};