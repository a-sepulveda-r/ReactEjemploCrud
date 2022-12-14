import React from "react";
import BotonComponent from "./Boton";

const AutoFormComponent = () => {
  return (
    <div className="container mt-3">
      <h2 className="mb-3">Formulario Auto</h2>
      <form>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">
            Modelo Auto
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            placeholder="Ingrese su nombre"
          ></input>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">
            Año Auto
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            placeholder="Ingrese su nombre"
          ></input>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">
            Color Auto
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName"
            placeholder="Ingrese su nombre"
          ></input>
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
      </form>
      <BotonComponent infoBoton={"agregar auto"}></BotonComponent>
    </div>
  );
};

export default AutoFormComponent;
