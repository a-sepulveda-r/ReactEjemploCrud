import React from "react";

const TablaAutoComponent = ({ autos, deleteAuto }) => {
  return (
    <div class="card container mb-2">
      <h2>Tabla Autos</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Modelo Auto</th>
            <th>Año auto</th>
            <th>Color auto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* //Iteramos usuarios con .map, a cada 
                      elemento de usuarios lo llamaremos usuario y 
                          realizaremos lo siguiente => */}
          {autos.map((auto) => (
            <tr>
              <td>{auto.modelo}</td>
              <td>{auto.anio}</td>
              <td>{auto.color}</td>
              <td>{auto.precio}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => {
                    deleteAuto(auto.modelo);
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaAutoComponent;
