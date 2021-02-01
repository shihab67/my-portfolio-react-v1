import React from "react";
import "../assets/home.css";
import img from "../assets/photos/test.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
export default function Home() {
  return (
    <div>
      <header className="showcase">
        <div className="container showcase-inner">
          <div class="container">
            <div class="box">
              <div class="title">
                <span class="block"></span>
                <h1>
                  Sayedur Rahman<span></span>
                </h1>
              </div>
              <div class="role">
                <div class="block"></div>
                <p>I'm A Software Engineer</p>
              </div>
            </div>
          </div>
          <Link
            //activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            // offset={-70}
            duration={700}
            className="btn"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="fas fa-angle-down bounce"></i>
            My Portfolios
          </Link>
        </div>
      </header>
      <section className="portfolio" id="portfolio">
        <div className="header">
          <h2>Some Of My Best Projects</h2>
        </div>
        <div className="single-port">
          <div className="port_img">
            <img src={img} alt="" />
          </div>
          <div className="port-desc">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              quae exercitationem, ipsum consequatur reiciendis officiis
              cupiditate itaque nisi. Quia ut vero suscipit non veritatis
              dignissimos officia pariatur dicta voluptas repellat?
            </p>
            <a href="" className="btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              View
            </a>
          </div>
        </div>
        <div className="single-port">
          <div className="port-desc">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              quae exercitationem, ipsum consequatur reiciendis officiis
              cupiditate itaque nisi. Quia ut vero suscipit non veritatis
              dignissimos officia pariatur dicta voluptas repellat?
            </p>
            <a href="" className="btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              View
            </a>
          </div>
          <div className="port_img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="single-port">
          <div className="port_img">
            <img src={img} alt="" />
          </div>
          <div className="port-desc">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              quae exercitationem, ipsum consequatur reiciendis officiis
              cupiditate itaque nisi. Quia ut vero suscipit non veritatis
              dignissimos officia pariatur dicta voluptas repellat?
            </p>
            <Link to="/#portfolio" className="btn">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              View
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
