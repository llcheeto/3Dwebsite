import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Person, Mail, Face, LinkedIn, GitHub } from "@mui/icons-material";

import "./body.css";

export default function Body() {
  const emailHandler = (e) => {
    e.preventDefault();
    document
      .getElementById("contact--form")
      .addEventListener("submit", function () {
        emailjs.sendForm("service_w4ua2hh", "template_q5ylkf7", this).then(
          function () {
            alert("SUCCESS! I'll respond as soon as I can");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      });
  };

  return (
    <div>
      <main>
        <header>
          <h1>Brian Cornine</h1>
          <p>Web developer</p>
          <div className="social--links">
            <a
              id="linkedin"
              href="https://www.linkedin.com/in/brian-cornine-40947a6b/"
            >
              <LinkedIn className="icon" fontSize="largest" />
            </a>
            <a id="github" href="https://github.com/llcheeto">
              <GitHub className="icon" fontSize="largest" />
            </a>
          </div>
        </header>

        <blockquote>
          <p>Creating is my passion</p>
        </blockquote>

        <section>
          <h2>
            <Face className="icon" fontSize="medium" /> Bio
          </h2>
          <p></p>

          <p>Hey there!</p>

          <p>
            I'm a self taught developer with over 2 years experience in
            Front-End/Full-Stack using technologies such as Javascript, Java and
            React to create amazing applications, interfaces and so much more.
          </p>
        </section>

        <section className="light">
          <h2>👩🏽‍🚀 Projects</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2>🏆 Accomplishments</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <blockquote>
          <p>
            “There are three responses to a piece of design - yes, no, and WOW!
            Wow is the one to aim for”” <br />― Milton Glaser
          </p>
        </blockquote>

        <section className="contact--card">
          <div>
            <h2 id="contact--header">Lets get connected!</h2>

            <h5> Contact Info</h5>
            <hr />

            <p>
              {" "}
              <Mail className="icon" /> briancornine@gmail.com
            </p>

            <p>
              <Person className="icon" /> (863) 214-7285
            </p>
          </div>
          <input type="hidden" name="contact_number"></input>
          <form id="contact--form" onSubmit={emailHandler}>
            <div className="inputs">
              <TextField
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                InputProps={{ style: { color: "#ffffff" } }}
                id="outlined-basic"
                label="Your Name"
                variant="standard"
                required
                name="user_name"
              />
              <br />
              <TextField
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
                InputProps={{ style: { color: "#ffffff" } }}
                id="outlined-basic"
                label="Email"
                variant="standard"
                required
                name="user_email"
              />
            </div>
            <br />
            <TextField
              InputLabelProps={{
                style: { color: "#ffffff" },
              }}
              InputProps={{ style: { color: "#ffffff" } }}
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              name="message"
            />
            <Button className="form--submit" variant="contained" type="submit">
              Lets work together!
            </Button>
          </form>
        </section>
      </main>
    </div>
  );
}
