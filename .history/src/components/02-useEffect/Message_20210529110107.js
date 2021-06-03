import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Message mounted");

    window.addEventListener("mousemove", (e) => {
      console.log(e);

      const coords = { x: e.x, y: e.y };
    });

    return () => {
      console.log("Message unmounted");
    };
  }, []);

  return (
    <div>
      <h3>Genial</h3>
    </div>
  );
};
