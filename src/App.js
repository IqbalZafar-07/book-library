import "./App.css";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { useState, useEffect } from "react";

function App() {
  const [addClass, setClass] = useState("");
  const [lightTheme, setTheme] = useState(true);
  const [gridView, setGridView] = useState(true);
  const [color, setColor] = useState("lightgrey");

  useEffect(() => {
    if (lightTheme) {
      setColor("lightgrey");
    } else {
      setColor("#242222");
    }
  }, [lightTheme]);
  // useEffect(() => {
  //   async function fetchData() {
  //     let res = await fetch(
  //       "https://mocki.io/v1/69d3c03d-86b3-4000-9228-a34a3fefcc31"
  //     );
  //     let data = await res.json();
  //     console.log(data);
  //   }
  //   // fetch("https://mocki.io/v1/69d3c03d-86b3-4000-9228-a34a3fefcc31")
  //   //   .then((res) => res.json())
  //   //   .then((ans) => {
  //   //     console.log(ans);
  //   //   });
  //   fetchData();
  // }, []);

  const toggleClassName = () => {
    if (addClass) {
      setClass("");
    } else {
      setClass("toggle");
    }
  };

  return (
    <div className={`App ${addClass}`}>
      <LeftSide
        toggleClassName={toggleClassName}
        lightTheme={lightTheme}
        setTheme={setTheme}
        color={color}
      />
      <div className="app-div">
        <Header gridView={gridView} setGridView={setGridView} color={color} />
        <RightSide gridView={gridView} color={color} />
      </div>
    </div>
  );
}

export default App;
