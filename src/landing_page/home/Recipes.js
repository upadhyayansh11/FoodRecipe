import React from "react";
import "./Home.css";

function Recipes() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <input
            class=" search2 form-control me-2"
            type="search"
            placeholder="Pizza"
            aria-label="Search"
          ></input>
          <br />
          <input
            class=" search2 form-control me-2"
            type="search"
            placeholder="Desert"
            aria-label="Search"
          ></input>
          <br />
          <input
            class=" search2 form-control me-2"
            type="search"
            placeholder="Salad"
            aria-label="Search"
          ></input>
          <br />

          <input
            class=" search2 form-control me-2"
            type="search"
            placeholder="Moctail"
            aria-label="Search"
          ></input>

          <br />
          <input
            class=" search2 form-control me-2"
            type="search"
            placeholder="Noodles"
            aria-label="Search"
          ></input>
        </div>
        <div className="col-6">
          <img
            style={{ height: "300px", width: "500px", borderRadius: "50px" }}
            src="./media/images/Recipe.jpg"
            alt=""
          ></img>
        </div>
        <div className="col">
          <div
            className="bgimage1"
            style={{
              backgroundImage: `url("media/images/backgrounddiv.png")`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "130px",
              width: "400px",
              borderRadius: "50px",
            }}
          >
            <h4 className="h-4 ms-5" style={{ color: "white" }}>
              Avacado Salad
            </h4>
            <div
              className="row mt-4 ms-5 fw-lighter"
              style={{ color: "white" }}
            >
              <div className="col">
                <p>Serving</p>
                <p>2</p>
              </div>
              <div className="col">
                <p>Cook Time</p>
                <p>1 h 45 min</p>
              </div>
            </div>
          </div>
          <br />
          <div
            className="bgimage2"
            style={{
              backgroundImage: `url("media/images/backgrounddiv.png")`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "130px",
              width: "400px",
              borderRadius: "50px",
            }}
          >
            <h4 className="h-4 ms-5" style={{ color: "white" }}>
              Russian Salad
            </h4>
            <div
              className="row mt-4 ms-5 fw-lighter"
              style={{ color: "white" }}
            >
              <div className="col">
                <p>Serving</p>
                <p>2</p>
              </div>

              <div className="col">
                <p>Cook Time</p>
                <p>1 h 45 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
