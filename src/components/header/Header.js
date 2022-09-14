import React from "react";
// Header SubComponents
import Menu from './menu/Menu';
// CSS
import './header.css';

export default function Header() {
    return(
        <div className="headerBlock">
            <Menu />
        </div>
    )
}