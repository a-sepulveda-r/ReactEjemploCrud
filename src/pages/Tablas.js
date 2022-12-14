import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  TablaAutoComponent,
  BotonComponent,
  TablaUsuarioComponent,
} from "../components";

const TablasPage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));
  return (
    <div>
      <TablaAutoComponent />
      <TablaUsuarioComponent />
      <BotonComponent
        infoBoton={"regresar usuario"}
        handleOnClick={handleOnClick}
      />
    </div>
  );
};

export default TablasPage;
