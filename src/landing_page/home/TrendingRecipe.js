import React from "react";
function TrendingRecipe() {
  return (
    <div>
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
          Trending Recipes
        </h1>
        <div
          className="col-4"
          style={{
            backgroundImage: `url("media/images/oliviersalad.jpg")`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "500px",
            borderRadius: "50px",
            width: "450px",
            marginLeft: "80px",
          }}
        >
          <h5
            className="h5"
            style={{ color: "white", fontWeight: "700", marginTop: "400px" }}
          >
            Olivier Salad
          </h5>
          <p style={{ color: "white", opacity: "0.8" }}>
            Learn how a pro approaches his work, beginning with all the planning
            and leading to successfull outcomes.
          </p>
        </div>
        <div
          className="col-2 ms-4 text-center"
          style={{
            backgroundImage: `url("media/images/icecream.jpg")`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "500px",
            borderRadius: "50px",
            width: "200px",
          }}
        >
          <h5
            style={{ color: "white", fontWeight: "700", marginTop: "450px" }}
            className="h5"
          >
            Icecream
          </h5>
        </div>
        <div
          className="col-2 ms-4 text-center"
          style={{
            backgroundImage: `url("media/images/chinesenoodles.jpg")`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "500px",
            borderRadius: "50px",
            width: "200px",
          }}
        >
          <h5
            className="h5"
            style={{ color: "white", fontWeight: "700", marginTop: "450px" }}
          >
            Chinese Noodles
          </h5>
        </div>
        <div
          className="col-2 ms-4 text-center"
          style={{
            backgroundImage: `url("media/images/tomatosalad.jpg")`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "500px",
            borderRadius: "50px",
            width: "200px",
          }}
        >
          <h5
            className="h5"
            style={{ color: "white", fontWeight: "700", marginTop: "430px" }}
          >
            Tomato Onion Cucumber Salad
          </h5>
        </div>
        <div
          className="col-2 ms-4 text-center"
          style={{
            backgroundImage: `url("media/images/pizza.jpg")`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "500px",
            borderRadius: "50px",
            width: "200px",
          }}
        >
          <h5
            className="h5"
            style={{ color: "white", fontWeight: "700", marginTop: "450px" }}
          >
            Neopolitan Pizza
          </h5>
        </div>

        <div className="row mt-4 ms-5 text-center" style={{ width: "80%" }}>
          <div className="progress-bar mt-3 ms-5">
            <div className="progress"></div>
          </div>
          <button class="button">
            <span class="icon">&larr;</span>
          </button>
          <button class="button">
            <span class="icon">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrendingRecipe;
