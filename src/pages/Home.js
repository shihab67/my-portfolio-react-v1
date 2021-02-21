import React from "react";
import img from "../assets/photos/test.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import WelcomeSvg from "../components/WelcomeSvg";
export default function Home() {
  return (
    <div>
      <section className="showcase">
        <div className="left">
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
              offset={-70}
              duration={800}
            >
              <div class="button" id="button-5">
                <div id="translate"></div>
                <a href="#">
                  My Portfolios <i class="fas fa-angle-down bounce"></i>
                </a>
              </div>
            </Link>
          </div>
        </div>
        <div className="right">
          <WelcomeSvg />
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        <div className="header">
          <h2>Some Of My Best Projects</h2>
          <div className="border"></div>
        </div>
        <div className="single-port">
          <div className="port-border"></div>
          <div className="port-desc">
            <h3>AMI Limited BD</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              quae exercitationem, ipsum consequatur reiciendis officiis
              cupiditate itaque nisi. Quia ut vero suscipit non veritatis
              dignissimos officia pariatur dicta voluptas repellat?
            </p>
            <div className="tech">
              <div class="button" id="button-5">
                <div id="translate"></div>
                <a href="#">View Project</a>
              </div>
              <div className="tech-icons">
                <i class="fab fa-laravel laravel"></i>
                <i class="fab fa-bootstrap bs"></i>
                <i class="fab fa-js js"></i>
              </div>
            </div>
          </div>
          <div className="port-img">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="single-port">
          <div className="port-border"></div>
          <div className="port-desc">
            <h3>AMI Limited BD</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              quae exercitationem, ipsum consequatur reiciendis officiis
              cupiditate itaque nisi. Quia ut vero suscipit non veritatis
              dignissimos officia pariatur dicta voluptas repellat?
            </p>
            <div className="tech">
              <div class="button" id="button-5">
                <div id="translate"></div>
                <a href="#">View Project</a>
              </div>
              <div className="tech-icons">
                <i class="fab fa-laravel laravel"></i>
                <i class="fab fa-bootstrap bs"></i>
                <i class="fab fa-js js"></i>
              </div>
            </div>
          </div>
          <div className="port-img">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="single-port">
          <div className="port-border"></div>
          <div className="port-desc">
            <h3>AMI Limited BD</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              quae exercitationem, ipsum consequatur reiciendis officiis
              cupiditate itaque nisi. Quia ut vero suscipit non veritatis
              dignissimos officia pariatur dicta voluptas repellat?
            </p>
            <div className="tech">
              <div class="button" id="button-5">
                <div id="translate"></div>
                <a href="#">View Project</a>
              </div>
              <div className="tech-icons">
                <i class="fab fa-laravel laravel"></i>
                <i class="fab fa-bootstrap bs"></i>
                <i class="fab fa-js js"></i>
              </div>
            </div>
          </div>
          <div className="port-img">
            <img src={img} alt="" />
          </div>
        </div>

        {/* <div className="view-all-btn">
          <div class="button" id="button-5">
            <div id="translate"></div>
            <Link to="/portfolio">All Projects</Link>
          </div>
        </div> */}
      </section>
    </div>
  );
}
