import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const { user } = useContext(UserContext);
  console.log();

  return (
    <div>
      <h1>Home Screen</h1>
      <hr />
    </div>
  );
};
