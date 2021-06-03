import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Cargando small");
  return <small>{value}</small>;
});
