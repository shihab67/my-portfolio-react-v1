import React from "react";
import Typing from "react-typing-animation";
import Bounce from "react-reveal/Bounce";

export default function About() {
  return (
    <div>
      <section className="about">
        <div className="about-content">
          <Bounce top cascade>
            <div className="header">
              <h2>About Me</h2>
              <div className="border"></div>
            </div>
          </Bounce>
        </div>
        <Typing speed={30}>
          <p id="typing">
            <span className="hidden-text">|</span>
            <Typing.Reset count={1} delay={3000} />I have studied Computer
            Science And Software Engineering at American International
            Internation Univertsity Of Bangladesh. I started programming in high
            school and looking forward to a career based around programming.
            Backend Developer with primary focus on Laravel & Express. Download
            my{" "}
            <a href="" className="resume">
              resume
            </a>
          </p>
        </Typing>
      </section>
    </div>
  );
}
