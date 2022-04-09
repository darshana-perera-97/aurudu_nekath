import React from "react";
import Button from "@mui/material/Button";
import "./SingleButton.css";
import { menuItems } from "../../DataSheet";

export default function SingleButton(prop) {
  return (
    <div>
      <div style={{ margin: "10px" }}>
        <Button
          id="btn"
          variant="outlined"
          color="error"
          onClick={(e) => {
            console.log(prop.index);
          }}
        >
          {/* <p id="txt" style={{ fontWeight: "bold",margin:"0px" }}>නව සඳ බැලීම</p> */}
          <p id="txt" style={{ fontWeight: "bold", margin: "0px" }}>
            {menuItems[prop.index]}
          </p>
        </Button>
      </div>
    </div>
  );
}
