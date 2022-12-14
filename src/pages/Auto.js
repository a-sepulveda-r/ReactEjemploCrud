import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import {
  AutoFormComponent,
  BotonComponent,
  TablaAutoComponent,
} from "../components";

const AutoPage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));
  const GreenSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pink[600],
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pink[600],
    },
  }));

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <div className="container mt-3">
      <AutoFormComponent />
      <Switch {...label} defaultChecked color="warning" />
      <Switch {...label} defaultChecked color="secondary" />
      <GreenSwitch {...label} defaultChecked />
      <BotonComponent
        infoBoton={"regresar usuario"}
        handleOnClick={handleOnClick}
      />
      <TablaAutoComponent />
    </div>
  );
};

export default AutoPage;
