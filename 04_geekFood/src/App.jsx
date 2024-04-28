import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroPage from "./components/HeroPage";
import Footer from "./components/Footer";
import Skeleton from "./components/Skeleton";
import Cards from "./components/Cards";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroPage />
      <Skeleton />
      <section className="container mx-auto flex flex-row flex-wrap gap-8 justify-around pb-8 pt-8">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </section>
      <Footer />
    </>
  );
}

export default App;
