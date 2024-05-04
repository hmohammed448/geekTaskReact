import React from "react";
import HeroPage from "./HeroPage";
import Skeleton from "./Skeleton";
import Cards from "./Cards";

function Home() {
  return (
    <>

      {/* <RouterProvider router={router1} /> */}
      <HeroPage />
      <Skeleton />
      <section className="container mx-auto flex flex-row flex-wrap gap-8 justify-around pb-8 pt-8">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </section>

    </>
  );
}

export default Home;
