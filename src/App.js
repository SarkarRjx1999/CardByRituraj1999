import React from "react";
import Card from "./Card";
import "./App.css";
import { data } from "./data";

const App = () => {
  return (
    <div className="card-container">
      {data.map((val) => {
        return (
          <Card
            key={val.id}
            reason={val.reason}
            title={val.title}
            description={val.description}
          />
        );
      })}
    </div>
  );
};
export default App;
