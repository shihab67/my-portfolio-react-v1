import React from "react";
import ShihabSvg from "../components/ShihabSvg";
import "../assets/about.css";
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

export default function About() {
  return (
    <div>
      <section className="about">
        <div className="desc">
          <fieldset>
            <legend>
              <h4>Who I Am</h4>
            </legend>
            <p>
              Hello, I'm SAYEDUR RAHMAN SHIHAB. I did my Bachelor in Computer
              Science And Software Engineering at AIUB. Right now i'm working as
              a full time Software Engineer. And i build awesome Web
              experiences.
            </p>
          </fieldset>
        </div>
        <div className="svg">
          <ShihabSvg />
        </div>
      </section>

      <section className="expertise">
        <div className="svg">
          <ExpertSvg />
        </div>
        <div className="desc">
          <fieldset>
            <legend>
              <h4>My Expertise</h4>
            </legend>
            <div className="logos">
              <div className="logo html">
                <Html />
              </div>
              <div className="logo css">
                <Css />
              </div>
              <div className="logo js">
                <Js />
              </div>
              <div className="logo bootstrap">
                <Bootstrap />
              </div>
              <div className="logo php">
                <Php />
              </div>
              <div style={{ width: "100%" }}></div>
              <div className="logo laravel">
                <Laravel />
              </div>
              <div className="logo react">
                <Reactt />
              </div>
              <div className="logo mysql">
                <Mysql />
              </div>
              <div className="logo cpp">
                <Cpp />
              </div>
              <div className="logo java">
                <Java />
              </div>
              <div style={{ width: "100%" }}></div>
              <div className="logo cs">
                <Cs />
              </div>
            </div>
          </fieldset>
        </div>
      </section>

      <section className="program">
        <div className="desc">
          <fieldset>
            <legend>
              <h4>More About Me</h4>
            </legend>
            <p>
              At the very beginnning i was afraid of programming but now it got
              into my nervs :p
            </p>
          </fieldset>
        </div>
        <div className="svg">
          <ProgramSvg />
        </div>
      </section>

      <section className="fun_fact">
        <div className="svg">
          <LaravelSvg />
        </div>
        <div className="desc">
          <fieldset>
            <legend>
              <h4>Fun Fact</h4>
            </legend>
            <p>I made my first client website using Laravel.</p>
          </fieldset>
        </div>
      </section>
    </div>
  );
}
