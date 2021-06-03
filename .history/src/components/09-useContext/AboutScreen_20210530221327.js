import React from "react";
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user, setuser } = useContext(UserContext);
  return (
    <div>
      <h1>About Screen</h1>
      <hr />
    </div>
  );
};
