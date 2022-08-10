import React from 'react';
// Footer SubComponents
import IconMenu from './iconMenu/IconMenu';
// CSS
import './footer.css';

export default function Footer() {
    return(
        <div className='footerBlock'>
            <IconMenu />
            <h1>I'm the footer</h1>
        </div>
    )
}