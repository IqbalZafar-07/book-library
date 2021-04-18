import React, { useContext } from "react";
import GridView from "./GridView";
import ListView from "./ListView";


function RightSide({ gridView, color }) {
    
  return (
    <div className="rightside" style={{ borderLeft: `1px solid ${color}` }}>
      {gridView ? <GridView /> : <ListView />}
      {/* <GridView /> */}
      {/* <ListView /> */}
    </div>
  );
}

export default RightSide;
