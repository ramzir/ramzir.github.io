import React from "react"
import face from '../assets/images/myface.jpeg'

export default () => (
    <div id="about" class="section container">
        <div class="row">
            <div class="col">
                <img class="section-img" src={face}></img>
            </div>
            <div class="col-8">
                <h2>
                    About Me
                </h2>
                <p>
                    Hi, I'm Ramzi, a junior in Computer Science at UIC.
                    I'm looking for a software internship this summer, contact me for opportunities.
                    I'm interested in infrastructure, web development, automation, and Java development.
                </p>
            </div>
        </div>
    </div>
    );