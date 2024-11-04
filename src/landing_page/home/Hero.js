import React from "react";
import "./Hero.css";
// import AvatarCircles, {
//   AvatarCirclesDemo,
// } from "../../components/magicui/avatar-circles";
function Hero() {
  return (
    <div
      className="container mt-5"
      style={{
        backgroundImage: `url("media/images/backgrounddiv.png")`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // margin: "0",
        height: "100vh",
        borderRadius: "50px",
      }}
    >
      <div className="row ms-5">
        <div className="col-4 mt-5">
          <h2 className="h2 fs-1 fw-bold " style={{ color: "white" }}>
            Discover Simple,
          </h2>

          <h2 className="h2 fs-1 fw-bold" style={{ color: "white" }}>
            Delicious,And
          </h2>

          <h2 className="h2 fs-1 fw-bold" style={{ color: "#f95d89" }}>
            Fast Recipe!
          </h2>
          <p className="p fw-lighter">
            A recipe is soulless. The essence of the recipe <br />
            must come from you,the cook.
          </p>
          <button className="btn mt-3">
            <b>
              Read More
              <img
                className="img ms-2"
                style={{
                  width: "15px",
                  display: "inline",
                }}
                alt=""
                src="./media/images/arrow.svg"
              ></img>
            </b>
          </button>
          <h3 className="fs-4" style={{ marginTop: "330px", color: "white" }}>
            500+ Recipes
          </h3>
        </div>
        <div className="col-4"></div>
        <div className="col-4" style={{ marginTop: "100px" }}>
          <h4 className=" h4 fw-bold">Top Recipes</h4>
          <p className="p fw-lighter">
            A recipe is soulless. The essence <br />
            of the recipe must come from <br />
            you,the cook.
          </p>
          <button className="btn mt-3">
            <b>
              Check Our Recipe
              <img
                className="img ms-2"
                style={{
                  width: "15px",
                  display: "inline",
                }}
                alt=""
                src="./media/images/arrow.svg"
              ></img>
            </b>
          </button>
          <img
            style={{
              borderRadius: "50px",
              marginTop: "190px",
              // filter: "blur(3px)",
              opacity: "0.5",
            }}
            alt=""
            src="./media/images/herodish.jpg"
          ></img>{" "}
        </div>
      </div>
    </div>
  );
}

export default Hero;
