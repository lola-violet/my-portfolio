import React from "react";
// CSS
import './jumbo.css';

export default function Jumbo() {
    return(
        <div className="jumbotron jumbotron-fluid" id="custom-jumbo" alt="abstract image by Pawel Czerwinski on Unsplash">
            <div className="container-fluid" id="custom-jumbo-text">
                <h1 className="display-4">Lola Applegate</h1>
                <p className="lead">Full Stack Web Developer</p>
            </div>
        </div>
    )
}