import React from "react";

const BotonComponent = ({ infoBoton, handleOnClick }) => {
  return (
    <div className="container">
      <button
        type="button"
        class="btn btn-primary btn-lg"
        onClick={() => {
          handleOnClick();
        }}
      >
        {infoBoton}
      </button>
    </div>
  );
};

export default BotonComponent;
