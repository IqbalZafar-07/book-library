import React from "react";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";
import TonalityIcon from "@material-ui/icons/Tonality";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import { useState } from "react";
import array from "./MockData";

function LeftSide({ toggleClassName, lightTheme, setTheme, color }) {
  return (
    <div className="leftside" style={{ borderRight: `1px solid ${color}` }}>
      <h3>Library</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "18vw",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <LibraryBooksIcon />
          <p style={{ flex: "1", marginLeft: "5px" }}>My Books</p>
          <p
            style={{
              backgroundColor: color,
              borderRadius: "10px",
              padding: "1px 10px 5px 10px",
            }}
          >
            {array.length}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <AddCircleOutlineIcon />
          <p style={{ marginLeft: "5px" }}>Add New Books</p>
        </div>
      </div>
      <br />
      <br />

      <h3>Setting</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "18vw",
          justifyContent: "space-between",
        }}
      >
        <TonalityIcon className="left-toggle-icon" />
        <p>Dark Mode</p>
        {lightTheme ? (
          <ToggleOffIcon
            style={{ fontSize: "40px" }}
            onClick={() => {
              toggleClassName();
              setTheme(false);
            }}
          />
        ) : (
          <ToggleOnIcon
            style={{ fontSize: "40px", color: "blue" }}
            onClick={() => {
              setTheme(true);
              toggleClassName();
            }}
          />
        )}
      </div>
    </div>
  );
}

export default LeftSide;
