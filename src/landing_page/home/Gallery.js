import React from "react";
function Gallery() {
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
          Gallery
        </h1>
        <div className="col-6">
          <div
            className="gal1"
            style={{
              backgroundImage: `url("media/images/Gallery1.jpg")`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // margin: "0",
              height: "450px",
              borderRadius: "50px",
            }}
          >
            <h1
              className="h-1"
              style={{
                position: "relative",
                top: "350px",
                right: "230px",
                fontFamily: "Monoton, sans-serif",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              Food
            </h1>
          </div>
          <div
            className="gal2 mt-4"
            style={{
              backgroundImage: `url("media/images/Gallery5.jpg")`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // margin: "0",
              height: "250px",
              borderRadius: "50px",
            }}
          ></div>
        </div>
        <div className="col-6 mt-4">
          <div
            className="gal3 mt-4"
            style={{
              backgroundImage: `url("media/images/Gallery3.jpg")`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // margin: "0",
              height: "250px",
              borderRadius: "50px",
            }}
          >
            <h1
              className="h-1"
              style={{
                left: "230px",
                bottom: "10px",
                fontFamily: "Monoton, sans-serif",
                fontWeight: "400",
                fontStyle: "normal",
              }}
            >
              Good
            </h1>
          </div>
          <div
            className="gal4 mt-4"
            style={{
              backgroundImage: `url("media/images/Gallery4.jpg")`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              // margin: "0",
              height: "450px",
              borderRadius: "50px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
