import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import linkedin from "../assets/icons/linkedin.png";
import github from "../assets/icons/github.png";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAlert } from "react-alert";

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
  const alert = useAlert();
  const [message, setMessage] = useState(null);
  useEffect(() => {
    if (message) {
      console.log(message);
      alert.error(message);
    } else {
      setMessage(null);
    }
  }, [message, alert]);
  function handleSubmit() {}
  return (
    <div>
      <section className="contact">
        <div className="contact-content">
          <Bounce top cascade>
            <div className="header">
              <h2>Let's Talk</h2>
              <div className="border"></div>
            </div>
          </Bounce>
        </div>
        <div className="form">
          <div className="left">
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .required("Name field is required!")
                  .min(2, "Name field is required!"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Email field is required!"),
                subject: Yup.string()
                  .required("Subject field is required!")
                  .min(2, "Subject field is required!"),
                message: Yup.string()
                  .required("Message field is required!")
                  .min(2, "Message field is required!"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {(formik) => (
                <Slide left cascade>
                  <form
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <TextField
                      id="standard-basic"
                      label="Name"
                      variant="outlined"
                      {...formik.getFieldProps("name")}
                    />
                    {formik.touched.name && formik.errors.name
                      ? setMessage(formik.errors.name)
                      : null}
                    <TextField
                      id="standard-basic"
                      label="Email"
                      variant="outlined"
                      {...formik.getFieldProps("email")}
                    />
                    {formik.touched.email && formik.errors.email
                      ? setMessage(formik.errors.email)
                      : null}
                    <TextField
                      id="standard-basic"
                      label="Subject"
                      variant="outlined"
                      {...formik.getFieldProps("subject")}
                    />
                    {formik.touched.subject && formik.errors.subject
                      ? setMessage(formik.errors.subject)
                      : null}
                    <TextField
                      id="standard-basic"
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      {...formik.getFieldProps("message")}
                    />
                    {formik.touched.message && formik.errors.message
                      ? setMessage(formik.errors.message)
                      : null}
                    <div className="submit">
                      <div class="button" id="button-5">
                        <div id="translate"></div>
                        <button type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </Slide>
              )}
            </Formik>
          </div>
          <Slide right cascade>
            <div className="right">
              <h3>Get in touch another way...</h3>
              <p>
                I don't have a phone number because i'm a bit poor atm, so you
                can reach me on social media.
              </p>
              <div className="social">
                <div className="social-single">
                  <img src={facebook} alt="Facebook" />
                  <a
                    href="https://www.facebook.com/sayedurrahman.shihab/"
                    target="_blank"
                  >
                    /sayedurrahman.shihab
                  </a>
                </div>
                <div className="social-single">
                  <img src={github} alt="Github" />
                  <a href="https://github.com/shihab67" target="_blank">
                    /shihab67
                  </a>
                </div>
                <div className="social-single">
                  <img src={linkedin} alt="Linkedin" />
                  <a
                    href="https://www.linkedin.com/in/sayedur-rahman-shihab/"
                    target="_blank"
                  >
                    /sayedur-rahman-shihab
                  </a>
                </div>
                <div className="social-single">
                  <img src={twitter} alt="Twitter" />
                  <a href="https://twitter.com/ShihabPearce" target="_blank">
                    /ShihabPearce
                  </a>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </section>
    </div>
  );
}
