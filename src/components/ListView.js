import React from "react";
import array from "./MockData";

function ListView() {
  return (
    <div className="listview">
      <div className="listview-item">
        <div style={{ width: "40%", color: "gray" }}>Book Title & Author</div>
        <div style={{ width: "20%", color: "gray" }}>Genere</div>
        <div style={{ width: "20%", color: "gray" }}>Reading Progress</div>
        <div style={{ width: "20%", color: "gray" }}>Last Opened</div>
      </div>

      {array.map((data) => (
        <div className="listview-item">
          <div style={{ display: "flex", width: "40%" }}>
            <img src={`./images/${data.src}`} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "20px",
              }}
            >
              <h3 style={{ marginBottom: "0" }}>{data.title}</h3>
              <address>{data.author}</address>
            </div>
          </div>
          <p style={{ width: "20%" }}>{data.genre}</p>
          <p style={{ width: "20%" }}>{data.progress}%</p>
          <p style={{ width: "20%" }}>{data.last_opened}</p>
        </div>
      ))}
    </div>
  );
}

export default ListView;
