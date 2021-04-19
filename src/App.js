import "./App.css";
import Header from "./components/Header";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { useState, useEffect } from "react";
import array from "./components/MockData";
import React from "react";
import FetchData from "./components/FetchData";

export const UserContext = React.createContext();

function App() {
  const [addClass, setClass] = useState("");
  const [lightTheme, setTheme] = useState(true);
  const [gridView, setGridView] = useState(true);
  const [color, setColor] = useState("lightgrey");
  const [filteredArray, setFilteredArray] = useState(array);

  const filter = (value) => {
    setFilteredArray(
      array.filter(
        (ele) =>
          ele.title.toLowerCase().includes(value.toLowerCase()) ||
          ele.author.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // const debouncing = (fn, delay)=>{
  //   let timer;
  //   return function () {
  //     clearTimeout(timer)
  //     timer
  //   }
  // }

  useEffect(() => {
    if (lightTheme) {
      setColor("lightgrey");
    } else {
      setColor("#242222");
    }
  }, [lightTheme]);

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
        <Header setGridView={setGridView} color={color} filter={filter} />
        <UserContext.Provider value={filteredArray}>
          <RightSide gridView={gridView} color={color} />
        </UserContext.Provider>
      </div>
      {/* <FetchData /> */}
    </div>
  );
}

export default App;
