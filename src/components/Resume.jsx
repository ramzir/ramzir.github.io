import React from "react"

export default () => (
    <div id="resume" class="container resume">
        <div class="row rowline">
            <div class="col">
                <h3>
                    Education
                </h3>
            </div>
            <div class="col-8">
                <h2>
                    University of Illinois at Chicago
                </h2>
                <h5 class="role">Computer Science</h5>
                <p class="date">Expected Graduation Spring 2022</p>
                <p class="description">
                    Completed courses: Introduction to Java, Program Design I, Program Design II, Mathematical Foundations of Computing
                    Fall 2019: Programming Practicum, Data Structures
                    Spring 2020: Machine Organization, Software Design
                </p>
            </div>
        </div>
        <div class="row rowline">
            <div class="col">
                <h3>
                    Work
                </h3>
            </div>
            <div class="col-8">
                <h2>
                    Upkey
                </h2>
                <h5 class="role">Business and Technology Development Internship</h5>
                <p class="date">Summer 2020</p>
                <p class="description">
                    Completed courses: Introduction to Java, Program Design I, Program Design II, Mathematical Foundations of Computing
                    Fall 2019: Programming Practicum, Data Structures
                    Spring 2020: Machine Organization, Software Design
                </p>
            </div>
        </div>
        <div class="row rowline">
            <h3>
                Skills
            </h3>
            <div class="row progress-row">
                <div class="col skillcol">
                <p>Java</p>
                <p>Python</p>
                <p>C++</p>
                <p>Web Development</p>
                </div>
                <div class="col-8">
                    <div class="progress">
                        <div class="progress-bar bg-info java" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-info python" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-info c" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="progress">
                        <div class="progress-bar bg-info web" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);