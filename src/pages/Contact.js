import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1.5),
      width: "55ch",
    },
    "& .MuiFormLabel-root": {
      color: "#fff",
    },
    "& .Mui-focused": {
      color: "#15e1f0",
    },
    "& .MuiOutlinedInput-root": {
      color: "#ffff",
      "& fieldset": {
        borderColor: "#fff",
        color: "#fff",
      },
      "&:hover fieldset": {
        borderColor: "#15e1f0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#15e1f0",
      },
    },
  },
}));
export default function Contact() {
  const classes = useStyles();
  return (
    <div>
      <section className="contact">
        <div className="contact-content">
          <div className="header">
            <h2>Let's Talk</h2>
            <div className="border"></div>
          </div>
        </div>
        <div className="form">
          <div className="left">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Name" variant="outlined" />
              <TextField id="standard-basic" label="Email" variant="outlined" />
              <TextField
                id="standard-basic"
                label="Subject"
                variant="outlined"
              />
              <TextField
                id="standard-basic"
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
              <div className="submit">
                <div class="button" id="button-5">
                  <div id="translate"></div>
                  <a href="#">Send Message</a>
                </div>
              </div>
            </form>
          </div>
          <div className="right">
            <h3>Get in touch another way...</h3>
            <p>
              I don't have a phone number because i'm a bit poor atm, so you can
              reach me on social media.
            </p>
            <div className="social">
                <div className="social-single">
                    <img src={facebook} alt="Facebook"/>
                    <a href="https://www.facebook.com/sayedurrahman.shihab/" target="_blank">/sayedurrahman.shihab</a>
                </div>
                <div className="social-single">
                    <img src={github} alt="Github"/>
                    <a href="https://github.com/shihab67" target="_blank">/shihab67</a>
                </div>
                <div className="social-single">
                    <img src={linkedin} alt="Linkedin"/>
                    <a href="https://www.linkedin.com/in/sayedur-rahman-shihab/" target="_blank">/sayedur-rahman-shihab</a>
                </div>
                <div className="social-single">
                    <img src={twitter} alt="Twitter"/>
                    <a href="https://twitter.com/ShihabPearce" target="_blank">/ShihabPearce</a>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
