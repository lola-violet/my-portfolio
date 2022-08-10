import React from "react";

import Menu from './menu/Menu';
import Jumbo from './jumbo/Jumbo';

export default function Header() {
    return(
        <>
        <h1>I'm the big header block</h1>
        <Menu />
        <Jumbo />
        </>
    )
}