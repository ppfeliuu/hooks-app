import React, { useContext } from "react";

export const HomeScreen = () => {
  const userContext = useContext(contextValue);
  console.log(userContext);

  return (
    <div>
      <h1>Home Screen</h1>
      <hr />
    </div>
  );
};
