import React, { useContext } from "react";

export const LoginScreen = () => {
  const context = useContext(contextValue);
  return (
    <div>
      <h1>Login Screen</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => setUser()}>
        Login
      </button>
    </div>
  );
};
