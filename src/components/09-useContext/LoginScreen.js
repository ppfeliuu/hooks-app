import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setuser } = useContext(UserContext);
  return (
    <div>
      <h1>Login Screen</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() =>
          setuser({
            id: 1,
            name: "Pedro",
          })
        }
      >
        Login
      </button>
    </div>
  );
};
