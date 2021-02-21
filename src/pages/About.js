import React from "react";
import ShihabSvg from "../components/ShihabSvg";
import ProgramSvg from "../components/ProgramSvg";
import { Link } from "react-router-dom";
import LaravelSvg from "../components/LaravelSvg";
import ExpertSvg from "../components/ExpertSvg";
import Html from "../components/logos/Html";
import Css from "../components/logos/Css";
import Js from "../components/logos/Js";
import Php from "../components/logos/Php";
import Laravel from "../components/logos/Laravel";
import Mysql from "../components/logos/Mysql";
import Reactt from "../components/logos/Reactt";
import Java from "../components/logos/Java";
import Cs from "../components/logos/Cs";
import Cpp from "../components/logos/Cpp";
import Bootstrap from "../components/logos/Bootstrap";
import Expressjs from "../components/logos/Expressjs";
import Latex from "../components/logos/Latex";
import Typing from "react-typing-animation";

export default function About() {
  return (
    <div>
      <section className="about">
        <div className="about-content">
          <div className="header">
            <h2>About Me</h2>
            <div className="border"></div>
          </div>
        </div>
        <Typing speed={30}>
          <p id="typing">
            <span className="hidden-text">|</span>
            <Typing.Reset count={1} delay={3000} />I have studied Computer
            Science And Software Engineering at American International
            Internation Univertsity Of Bangladesh. I started programming in high
            school and looking forward to a career based around programming.
            Backend Developer with primary focus on Laravel & Express. Download my <a href="" className="resume">resume</a>
          </p>
        </Typing>
      </section>
    </div>
  );
}
