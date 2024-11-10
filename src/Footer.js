import React from "react";
function Footer() {
  return (
    <footer
      className="mt-5 ms-3"
      style={{
        backgroundImage: `url("media/images/backgrounddiv.png")`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
        borderTopLeftRadius: "100px",
        borderTopRightRadius: "100px",
        width: "1440px",
      }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col fw-lighter"
            style={{ marginTop: "250px", color: "white" }}
          >
            <img src="media/images/blogo.png" alt=""></img>
            <p className="ms-5 mt-2">
              We present a variety of unique soap from many countries...
            </p>
          </div>
          <div
            className="col fw-lighter"
            style={{ marginTop: "280px", marginLeft: "100px", color: "white" }}
          >
            <p>
              <b>Companies</b>
            </p>
            <a className="text-decoration-none" href="/">
              Professions
            </a>
            <br />
            <a className="text-decoration-none " href="/">
              How We Compare
            </a>
            <br />
            <a className="text-decoration-none" href="/">
              Team Members
            </a>
            <br />
          </div>
          <div
            className="col fw-lighter"
            style={{ marginTop: "280px", color: "white" }}
          >
            <p>
              <b>Quick Links</b>
            </p>
            <a className="text-decoration-none" href="/">
              Home
            </a>{" "}
            <br />
            <a className="text-decoration-none" href="/">
              About Us
            </a>{" "}
            <br />
            <a className="text-decoration-none" href="/">
              Blogs
            </a>{" "}
            <br />
          </div>
          <div
            className="col fw-lighter"
            style={{ marginTop: "280px", color: "white" }}
          >
            <p>
              <b>Support</b>
            </p>
            <a className="text-decoration-none" href="/">
              FAQ
            </a>
            <br />
            <a className="text-decoration-none" href="/">
              How it Works
            </a>
            <br />
            <a className="text-decoration-none" href="/">
              Privacy & Policy
            </a>
            <br />
          </div>
          <div
            className="col fw-lighter"
            style={{ marginTop: "280px", color: "white" }}
          >
            <p>
              <b>Get In Touch</b>
            </p>
            <a className="text-decoration-none" href="/">
              (+62)9876543210
            </a>
            <br />
            <a className="text-decoration-none" href="/">
              agecyncr@gmail.com
            </a>
            <br />
          </div>
          <div
            className="row mx-auto mt-5 text-center align-items-center border-top"
            style={{ fontSize: "14px", color: "white" }}
          >
            <p className="mt-3 fw-lighter">
              @2023habanero's, Inc.All Right Reseerved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
