import React from "react";
// Header SubComponents
import Menu from './menu/Menu';
import Jumbo from './jumbo/Jumbo';
// CSS
import './header.css';

export default function Header() {
    return(
        <div className="headerBlock">
            <Menu />
            <Jumbo />
        </div>
    )
}