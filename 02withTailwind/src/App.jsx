import "./App.css";
import Cards from "./components/Cards";

function App() {
  let devices = [
    "Macbook Air M1",
    "Macbook Air M2 13 inch",
    "Macbook Air M2 15 inch",
    "Macbook Air M3",
    "Macbook Pro",
  ];
  return (
    <>
      {devices.map((ele, index) => {
        return <Cards key={index} devName={ele} />;
      })}
    </>
  );
}

export default App;
