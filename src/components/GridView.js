import React, { useContext } from "react";
import { UserContext } from "../App";

function GridView() {
  const filteredArray = useContext(UserContext);
  return (
    <>
      {filteredArray.map((data) => (
        <div className="gridview" key={data.id}>
          <img src={`/images/${data.src}`} />
          <p className="progress">{data.progress}%</p>
          <p className="genre">{data.genre}</p>
          <h3>{data.title}</h3>
          <address>{data.author}</address>
        </div>
      ))}
    </>
  );
}

export default GridView;
