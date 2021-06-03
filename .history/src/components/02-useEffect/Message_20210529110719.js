import React, { useEffect, useState } from "react";

export const Message = () => {
  useEffect(() => {
    // console.log("Message mounted");

    const [coords, setcoords] = useState({ x: 0, y: 0 });

    const mouseMove = (e) => {
      console.log(";)");
    };

    window.addEventListener(
      "mousemove",
      mouseMove
      /* console.log(e);
      const coords = { x: e.x, y: e.y };
      console.log(coords); */
    );

    return () => {
      // console.log("Message unmounted");
      window.removeEventListener(
        "mousemove",
        mouseMove
        /* console.log(e);
        const coords = { x: e.x, y: e.y };
        console.log(coords); */
      );
    };
  }, []);

  return (
    <div>
      <h3>Genial</h3>
    </div>
  );
};
