import React, { useRef, useState } from "react";
import ViewListIcon from "@material-ui/icons/ViewList";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";

function Header({ setGridView, color, filter }) {
  const gridRef = useRef(null);
  const listRef = useRef(null);
  const [input, setInput] = useState("");

  const showGrid = () => {
    setGridView(true);
    gridRef.current.style.backgroundColor = color;
    listRef.current.style.backgroundColor = "";
  };

  const showList = () => {
    setGridView(false);
    gridRef.current.style.backgroundColor = "";
    listRef.current.style.backgroundColor = color;
  };

  //   useEffect(() => {

  //   }, [])
  return (
    <div className="header" style={{ borderBottom: `1px solid ${color}` }}>
      <h1
        style={{
          flex: "1",
        }}
      >
        &#579;ook &#573;ibrary &#8227; &#8227;
      </h1>
      <div className="header-toggleView">
        <AppsIcon
          className="header-toggleView-icon"
          ref={gridRef}
          style={{
            padding: "5px",
            backgroundColor: color,
            borderRadius: "10px",
          }}
          onClick={showGrid}
        />
        <ViewListIcon
          className="header-toggleView-icon"
          ref={listRef}
          style={{
            padding: "5px",
            borderRadius: "10px",
          }}
          onClick={showList}
        />
      </div>
      <div className="header-search">
        <SearchIcon style={{ color: "black" }} />
        <input
          type="text"
          placeholder="Search for Keywords..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            filter(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Header;
