import React from "react";
import { menuItems, dis } from "../../DataSheet";
import "./Details.css";

export default function Details(p) {
  return (
    <div style={{ margin: "50px 0px" }}>
      <p
        id="t1"
        style={{
          fontWeight: "bold",
          margin: "0px",
          marginBottom: "20px",
          color: "red",
          textShadow:
            "2px 0 0 #fff, -2px 0 0 #fff, 0 1px 0 #fff, 0 -2px 0 #fff, 2px 2px #fff, -1px -1px 0 #fff, 2px -1px 0 #fff, -1px 4px 0 #fff",
        }}
      >
        {p.n}
      </p>
      <p id="t2" style={{ fontWeight: "bold", margin: "0px" }}>
        {dis[p.prop]}
      </p>
    </div>
  );
}
