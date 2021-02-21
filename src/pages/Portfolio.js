import React from "react";
import img from "../assets/photos/test.jpg";

export default function Portfolio() {
  return (
    <div>
      <section className="port">
        <div className="port-content">
          <div className="header">
            <h2>My Portfolios</h2>
            <div className="border"></div>
          </div>
        </div>
        <div className="ports">
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
        </div>
      </section>
    </div>
  );
}
