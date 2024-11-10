import React from "react";
function Download() {
  return (
    <div
      className="container"
      style={{
        backgroundImage: `url("media/images/pinkbackground.png")`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "1000px",
        height: "250px",
        borderRadius: "100px",
        position: "relative",
        top: "200px",
      }}
    >
      <div className="row">
        <div className="col-6">
          <h3 className="h-2 fs-2 mt-5 ms-5" style={{ fontWeight: "600" }}>
            Download Our App
          </h3>
          <p className="text-muted mt-3 ms-5">
            When you sign up wioth us,you must recieve a discount and a
            promotional offer from us.
          </p>
          <button className="btn mt-3 ms-5 p-2">
            <b>
              <p style={{ fontSize: "10px" }}> GET IT ON</p>
              <img
                className="img"
                style={{
                  width: "30px",
                  display: "inline",
                }}
                alt=""
                src="./media/images/Googleplay.svg"
              ></img>
              Google Play
            </b>
          </button>
          <button className="btn mt-3 ms-5">
            <b>
              <p style={{ fontSize: "10px" }}> Download on the</p>
              <img
                className="img"
                style={{
                  width: "30px",
                  display: "inline",
                }}
                alt=""
                src="./media/images/Apple.svg"
              ></img>
              App Store
            </b>
          </button>
        </div>
        <div className="col-6">
          <img
            className="ms-5"
            alt=""
            style={{
              height: "250px",
            }}
            src="./media/images/Phones.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Download;
