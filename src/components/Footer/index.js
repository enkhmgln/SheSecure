import React from "react";
import { Link } from "react-router-dom";
import "./Footerstyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top ">
        <div>
          <h1>She Secure</h1>
          <p>Choose Your Favorite Destination.</p>
        </div>
        <div>
          <Link href="/" className="aLink">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link href="/" className="aLink">
            <i className="fa-brands fa-twitter "></i>
          </Link>
          <Link href="/" className="aLink">
            <i className="fa-brands fa-youtube "></i>
          </Link>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomDiv">
          <h4>Project</h4>
          <Link href="/" className="aLink">
            Changelog
          </Link>
          <Link href="/" className="aLink">
            Status
          </Link>
          <Link href="/" className="aLink">
            License
          </Link>
          <Link href="/" className="aLink">
            All Versions
          </Link>
        </div>
        <div className="bottomDiv">
          <h4>Community</h4>
          <Link href="/" className="aLink">
            Github
          </Link>
          <Link href="/" className="aLink">
            Issues
          </Link>
          <Link href="/" className="aLink">
            Project
          </Link>
          <Link href="/" className="aLink">
            Twitter
          </Link>
        </div>
        <div className="bottomDiv">
          <h4>Help</h4>
          <Link href="/" className="aLink">
            Support
          </Link>
          <Link href="/" className="aLink">
            Troubleshooting
          </Link>
          <Link href="/" className="aLink">
            Contact us
          </Link>
        </div>
        <div className="bottomDiv">
          <h4>Others</h4>
          <Link href="/" className="aLink">
            Terms of Service
          </Link>
          <Link href="/" className="aLink">
            Privacy Policy
          </Link>
          <Link href="/" className="aLink">
            License
          </Link>
        </div>
       
      </div>
      <div>
          <hr/>
          <p>Copyright &copy; 2023 She Secure</p>
          </div>
    </footer>
  );
};

export default Footer;
