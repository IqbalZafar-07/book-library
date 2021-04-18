import React from "react";
import array from "./MockData";

function GridView() {
  return (
    <>
      {array.map((data) => (
        <div className="gridview" key={data.id}>
          <img src={`/images/${data.src}`} />
          <h3>{data.title}</h3>
          <address>{data.author}</address>
        </div>
      ))}
    </>
  );
}

export default GridView;
