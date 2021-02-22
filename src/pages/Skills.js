import React from "react";
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
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

export default function Skills() {
  return (
    <div className="skills">
      <Bounce top cascade>
        <div className="header">
          <h2>My Skills</h2>
          <div className="border"></div>
        </div>
      </Bounce>
      <Bounce bottom cascade>
        <section className="expertise">
          <Zoom bottom cascade>
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
              <div className="logo cs">
                <Cs />
              </div>
            </div>
          </Zoom>
        </section>
      </Bounce>
    </div>
  );
}
