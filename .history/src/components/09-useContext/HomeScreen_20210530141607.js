import React from "react";
import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const userContext = UserContext(contextValue);
  console.log(contextValue);
  return (
    <div>
      <h1>Home Screen</h1>
      <hr />
    </div>
  );
};
