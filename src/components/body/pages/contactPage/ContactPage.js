import React from 'react';

import ContactForm from './contactForm';

// CSS
import '../../../mainContainer/main.css';


export default function ContactPage() {
    return(
        <div className="container mainContain">
            <h1>Contact Me</h1>
            <ContactForm />
        </div>
    )
}