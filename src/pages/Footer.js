import React from "react";
import "../assets/footer.css";

export default function Footer() {
  return (
    <footer>
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
