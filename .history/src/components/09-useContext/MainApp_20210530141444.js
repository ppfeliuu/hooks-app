import React from "react";
import { AppRouter } from "./AppRouter";
import { UserContext } from "./UserContext";

export const MainApp = () => {

  const user = {
    
  }

  return (
    <UserContext.Provider value={}>
      <AppRouter />
    </UserContext.Provider>
  );
};
