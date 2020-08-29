import React from "react"
import github from "../assets/icons/github.png"
import linkedin from "../assets/icons/linkedin100.png"

export default () => (
    <div id="contact" class="contact container">
        <h2>
            Want to Get in Touch?
        </h2>
        <div class="row centered">
            <div class="col">
                <button class="contactbuttons">
                    Send Me An Email
                </button>
            </div>
            <div class="col">
                <button class="contactbuttons">
                    View My Resume
                </button>
            </div>
        </div>
        <div class="row contacticons">
            <img src={linkedin}></img>

            <img src={github}></img>
        </div>
        <p class="copyright">
            @ Copyright Ramzi Rimawi
        </p>
    </div>
);