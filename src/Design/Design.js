import React from "react";
import LoadingSc from "./LoadingSc/LoadingSc";
import Menu from "./Menu/Menu";

export default function Design() {
  const [st, setSt] = React.useState(true);
  setTimeout(() => {
    setSt(false);
  }, 4000);
  return (
    <div>
      {st && <LoadingSc />}
      {!st && <Menu />}
      
    </div>
  );
}
