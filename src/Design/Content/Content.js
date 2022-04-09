import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SingleButton from "./SingleButton/SingleButton";
import { menuItems } from "../DataSheet";
import Details from "./Details/Details";

export default function Content() {
  const [d, setd] = React.useState(7);
  const [n, setn] = React.useState("");
  return (
    <div style={{ margin: "10vh", textAlign: "center" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          {menuItems.map((val, key) => {
            return (
              <Grid item xs={12} sm={6} md={6} lg={4} key={key}>
                {/* <SingleButton prop={val} index={key}/> */}
                <Button
                  style={{ margin: "20px 0px" }}
                  id="btn"
                  variant="outlined"
                  color="error"
                  onClick={(e) => {
                    setd(key);
                    const j = menuItems[key]
                    setn(j);
                    console.log(j);
                  }}
                >
                  {/* <p id="txt" style={{ fontWeight: "bold",margin:"0px" }}>නව සඳ බැලීම</p> */}
                  <p id="txt" style={{ fontWeight: "bold", margin: "0px" }}>
                    {menuItems[key]}
                  </p>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <br />
      <br />
      <br />
      <hr style={{ border: "5px solid red" }} />
      <Details prop={d} n={n}/>
    </div>
  );
}
