import React from "react";
import "./Home.css";
function Hero() {
  return (
    <div
      className="container mt-5"
      style={{
        backgroundImage: `url("media/images/backgrounddiv.png")`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",

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
                  transform: "rotate(-35deg)",
                }}
                alt=""
                src="./media/images/arrow.svg"
              ></img>
            </b>
          </button>
          <div className="fs-4" style={{ marginTop: "200px" }}>
            <img
              style={{ width: "200px" }}
              src="./media/images/Avatarcircles.png"
              alt=""
            ></img>
            <h3 className="mt-3" style={{ color: "white" }}>
              500+ Recipes
            </h3>
          </div>
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
                  transform: "rotate(-35deg)",
                }}
                alt=""
                src="./media/images/arrow.svg"
              ></img>
            </b>
          </button>
          <div
            className="backgroundDiv"
            style={{
              backgroundImage: `url("./media/images/herodish.jpg")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "270px",
              borderRadius: "50px",
              marginTop: "190px",
              opacity: "0.5",
            }}
          >
            <br />
            <br />
            <br />
            <br />

            <img
              className="imgg"
              style={{
                width: "50px",
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "100%",
                marginLeft: "10rem",
                transform: "rotate(-35deg)",
              }}
              alt=""
              src="./media/images/arrow.svg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
