import React from "react";
import Hero from "./Hero";
import Nav2 from "./Nav2";
import Recipes from "./Recipes";
import TrendingRecipe from "./TrendingRecipe";
import Review from "./Review";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Download from "./Download";
function HomePage() {
  return (
    <>
      <Hero />
      <Nav2 />
      <Recipes />
      <TrendingRecipe />
      <Review />
      <Blog />
      <Gallery />
      <Download />
    </>
  );
}

export default HomePage;
