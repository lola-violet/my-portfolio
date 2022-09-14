import React from 'react';

// CSS
import './footer.css';

export default function Footer() {
    return(
        <div className='footerBlock'>
            <div className="container">
                <div className="custom-footer d-flex flex-wrap justify-content-center align-items-center" >
                    <a href="https://github.com/lola-violet" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-3x"></i></a>
                    <a href="mailto:lolaviolet.dev@gmail.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope fa-3x"></i></a>
                    <a href="https://www.linkedin.com/in/lolaapplegate/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin fa-3x"></i></a>
                </div>
            </div>
        </div>
    )
}