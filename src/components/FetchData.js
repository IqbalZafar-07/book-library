import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [processing, setProcessing] = useState(true);
  const [error, setError] = useState("");
  const [array, setArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/69d3c03d-86b3-4000-9228-a34a3fefcc31")
      .then((res) => {
        console.log(res.data);
        setProcessing(false);
        setArray(res.data);
        setError("");
      })
      .catch((error) => {
        setProcessing(false);
        setArray([]);
        setError("Something went wrong");
      });
  }, []);

  // useEffect(() => {
  //   // async function fetchData() {
  //   //   let res = await fetch(
  //   //     "https://mocki.io/v1/69d3c03d-86b3-4000-9228-a34a3fefcc31/allow-cors",
  //   //     { mode: "cors" }
  //   //   );
  //   //   let data = await res.json();
  //   //   console.log(data);
  //   // }
  //   // fetchData();
  //   // fetch(
  //   //   "https://mocki.io/v1/69d3c03d-86b3-4000-9228-a34a3fefcc31/allow-cors",
  //   //   { mode: "cors" }
  //   // )
  //   //   .then((res) => res.json())
  //   //   .then((ans) => {
  //   //     console.log(ans);
  //   //   });
  // }, []);

  return <div></div>;
}

export default FetchData;
