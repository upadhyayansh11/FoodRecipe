import React from "react";
import "./Home.css";
function Review() {
  return (
    <div
      className="container mt-5"
      style={{
        backgroundImage: `url("media/images/pinkbackground.png")`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",

        height: "500px",
        borderRadius: "50px",
      }}
    >
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
          What They Say
        </h1>
        <div className="col ms-5">
          <img
            style={{
              height: "300px",
              width: "550px",
              borderRadius: "50px",
            }}
            src="./media/images/shef.png"
            alt=""
          ></img>
        </div>
        <div className="col " style={{ marginLeft: "4rem" }}>
          <p className="fs-3 mt-5">
            Becoming a cook is my dream since I was <br />
            little, and here I have found a way to make
            <br /> it happen.
          </p>
          <h5 className="h5 mt-5">Brian Veirmont</h5>
          <p className="text-muted">
            <i>Professionam Chef</i>
          </p>
          <div className="row mt-4 ms-2">
            <button class="button">
              <span class="icon">&larr;</span>
            </button>
            <button class="button">
              <span class="icon">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
