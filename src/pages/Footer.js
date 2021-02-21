import React from "react";
import "../assets/footer.css";
import ThinkingSvg from "../components/ThinkingSvg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="thinking">
        <ThinkingSvg />
      </div>
      <div className="footer-links">
        <ul className="footer-link">
          {/* <li>
            <Link to="/portfolio">Portfolio</Link>
          </li> */}
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <p>
          &copy; {new Date().getFullYear()} SAYEDUR RAHMAN. ALL RIGHTS RESERVED.
        </p>
      </div>
      <div className="icons">
        <i class="fab fa-facebook-square facebook"></i>
        <i class="fab fa-github github"></i>
        <i class="fab fa-linkedin linkedin"></i>
        <i class="fab fa-twitter twitter"></i>
        <i class="fas fa-envelope envelope"></i>
        <i class="fab fa-instagram instagram"></i>
      </div>
    </footer>
  );
}
