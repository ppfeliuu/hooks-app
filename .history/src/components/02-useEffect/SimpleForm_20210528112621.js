import React from "react";
import "./effects.css";

export const SimpleForm = () => {
  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <span class="material-icons">password</span>

      <p>
        Paso 1: Debe crear una contraseña segura con las siguientes condiciones:
      </p>

      <p>
        Contraseña(Min 8 - Max 24 caracteres)(Al menos 1 número y una mayúscula)
      </p>

      <input type="password" />

      <input type="password" />

      <p>Paso 2: Debe crear una frase para recordar su contraseña.</p>
      <p>Frase (Maximo 255 caracteres)</p>

      <input type="text" />
    </>
  );
};
