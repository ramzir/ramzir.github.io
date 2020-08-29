import React from "react";
import logo from '../assets/icons/rr.png'

export default () => (
    <div>
        <nav class="navbar navbar-top">
            <a class="navbar-brand fade-in" href="/">
                <img src={logo} height="50px" class="d-inline-block align-top" loading="lazy"/>
            </a>
            <div class="navbartext fade-in">
                <a class="navbar-text" id="homeNav">
                    HOME
                </a>
                <a class="navbar-text" id="aboutNav">
                    ABOUT
                </a>
                <a class="navbar-text" id="resumeNav">
                    RESUME
                </a>
                <a class="navbar-text" id="contactNav">
                    CONTACT
                </a>
            </div>
        </nav>
    </div>
    );