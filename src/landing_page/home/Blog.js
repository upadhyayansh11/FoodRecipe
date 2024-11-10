import React from "react";
import "./Home.css";
function Blog() {
  return (
    <div className="container">
      <div className="row">
        <h1
          className="fs-2 mt-5"
          style={{
            textAlign: "center",
            fontFamily: "Vast Shadow, serif",
            fontWeight: "400",
            marginBottom: "50px",
          }}
        >
          Our Blog
        </h1>
        <div className="col ">
          <img
            style={{
              height: "300px",
              width: "600px",
              borderRadius: "50px",
            }}
            src="./media/images/Blog1.png"
            alt=""
          ></img>
          <h3 className="h3 mt-3 ms-3" style={{ fontWeight: "600" }}>
            Inspiration for unique Soup
          </h3>
          <p className="text-muted ms-3 mb-3">
            We present a variety of unique soup from many countries...
          </p>
          <a
            className="ms-3"
            style={{ color: "#374552", textDecoration: "underline" }}
            href="/"
          >
            <b>Read More</b>
          </a>
        </div>
        <div className="col ms-5">
          <img
            style={{
              height: "300px",
              width: "600px",
              borderRadius: "50px",
            }}
            src="./media/images/Blog2.png"
            alt=""
          ></img>
          <h3 className="h3 mt-3 ms-3" style={{ fontWeight: "600" }}>
            This salad is food for family
          </h3>
          <p className="text-muted ms-3 mb-3">
            Eating with your family is a tradition while going to a...
          </p>
          <a
            className="ms-3"
            style={{
              color: "#374552",
              textDecoration: "underline",
            }}
            href="/"
          >
            <b>Read More</b>
          </a>
        </div>
        <div style={{ marginTop: "100px" }}>
          <button className="btn-2 mt-3 p-3" style={{ borderRadius: "100px" }}>
            <b>
              More Blogs
              <img
                className="img ms-4"
                style={{
                  width: "15px",
                  display: "inline",
                  transform: "rotate(-35deg)",
                }}
                alt=""
                src="./media/images/arrow.svg"
              ></img>
            </b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
