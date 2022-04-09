import React from "react";
import LoadingSc from "./LoadingSc/LoadingSc";

export default function Design() {
  const [st, setSt] = React.useState(true);
  setTimeout(() => {
    setSt(false);
  }, 100);
  return (
    <div>
      {st && <LoadingSc />}
      {!st && <LoadingSc />}
    </div>
  );
}
