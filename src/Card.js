import React, { useEffect } from "react";
import "./styles.css";
import { data } from "./data";

export default function Card(props) {
  useEffect(() => {
    console.log("logged");
  }, []);
  return (
    <div className="cardBox">
      <div className="card">
        <h2>{props.reason}</h2>
        <div className="content">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
      );
    </div>
  );
}
