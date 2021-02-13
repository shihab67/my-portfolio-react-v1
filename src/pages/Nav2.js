import React, { useRef } from "react";
import "../assets/nav2.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function Nav2() {
  const nav = useRef(null);
  const [isNav, setIsNav] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isShowList, setIsShowList] = useState(false);
  const [isFade, setIsFade] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setIsNav(true);
      } else {
        setIsNav(false);
      }
    });
  }, [isNav, isActive, isFade, isShowList]);
  function handleClick() {
    setIsActive(true);
    setIsShowList(true);
    const el = document.querySelector("#mainListDiv");
    el.style.opacity = 1;
    setIsFade(true);
    if (isFade === true) {
      el.style.opacity = 0;
      setIsFade(false);
      setIsActive(false);
    }
  }
  return (
    <div>
      <nav className={`nav ${isNav === true ? "affix" : null}`}>
        <div className="nav-container">
          <div className="logo">
            <a href="#">Sayedur Rahman</a>
          </div>
          <div
            id="mainListDiv"
            className={`main_list ${isShowList === true ? "show_list" : null} ${
              isFade === true ? "div-fade" : null
            }`}
          >
            <ul className="navlinks">
              <li>
                <Link className="link" to="/">Home</Link>
              </li>
              <li>
                <Link className="link" to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link className="link" to="/about">About</Link>
              </li>
              <li>
                <Link className="link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <span
            className={`navTrigger ${isActive === true ? "active" : ""}`}
            onClick={handleClick}
          >
            <i></i>
            <i></i>
            <i></i>
          </span>
        </div>
      </nav>
      {/* <section className="home"></section>
      <div style={{ height: "1000px" }}>
        <h2 className="myH2">What is this ?</h2>
        <p className="myP">
          This is a responsive fixed navbar animated on scroll
        </p>
        <p className="myP">
          I took inspiration from ABDO STEIF (
          <a href="https://codepen.io/abdosteif/pen/bRoyMb?editors=1100">
            https://codepen.io/abdosteif/pen/bRoyMb?editors=1100
          </a>
          ) and Dicson{" "}
          <a href="https://codepen.io/dicson/pen/waKPgQ">
            (https://codepen.io/dicson/pen/waKPgQ)
          </a>
        </p>
        <p className="myP">I HOPE YOU FIND THIS USEFULL</p>
        <p className="myP">Albi</p>
        <p className="myP">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          ratione facere animi impedit rem labore sint repellendus ipsa sapiente
          voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem
          beatae id inventore quod voluptate qui deserunt, quis placeat, tempora
          ex totam, dolore sequi harum eos voluptatibus animi labore officiis
          minus laboriosam Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Ipsum ratione facere animi impedit rem labore sint repellendus
          ipsa sapiente voluptatem aut excepturi quo itaque, ab earum cumque.
          Voluptatem beatae id inventore quod voluptate qui deserunt, quis
          placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi
          labore officiis minus laboriosam Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Ipsum ratione facere animi impedit rem
          labore sint repellendus ipsa sapiente voluptatem aut excepturi quo
          itaque, ab earum cumque. Voluptatem beatae id inventore quod voluptate
          qui deserunt, quis placeat, tempora ex totam, dolore sequi harum eos
          voluptatibus animi labore officiis minus laboriosam Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Ipsum ratione facere animi
          impedit rem labore sint repellendus ipsa sapiente voluptatem aut
          excepturi quo itaque, ab earum cumque. Voluptatem beatae id inventore
          quod voluptate qui deserunt, quis placeat, tempora ex totam, dolore
          sequi harum eos voluptatibus animi labore officiis minus laboriosam
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          ratione facere animi impedit rem labore sint repellendus ipsa sapiente
          voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem
          beatae id inventore quod voluptate qui deserunt, quis placeat, tempora
          ex totam, dolore sequi harum eos voluptatibus animi labore officiis
          minus laboriosam
        </p>
      </div> */}
    </div>
  );
}
