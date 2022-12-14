import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserFormComponent,
  BotonComponent,
  TablaUsuarioComponent,
  TablaAutoComponent,
  NavbarComponent,
} from "../components";
// NO ME FUNCIONAN LAS FUNCIONES handleOnClick PARA IR A OTRA PAGIN ff
const usuario1 = [
  {
    nombre: "Joseph",
    apellido: "Joestar",
    correo: "jo.jo@gmail.com",
    rut: "9864579-0",
  },
  {
    nombre: "Josuke",
    apellido: "Jhigashi",
    correo: "jojo@gmail.com",
    rut: "19864579-0",
  },
];
const auto1 = [
  {
    modelo: "Nissan",
    anio: "2010",
    color: "verde",
    precio: "2000",
  },
  {
    modelo: "Hyundai",
    anio: "2017",
    color: "rojo",
    precio: "2500",
  },
];
const HomePage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/Auto", {}, [navigate]));
  const handleOnClick2 = useCallback(() => navigate("/Tablas", {}, [navigate]));

  const [user, setUser] = useState(usuario1);
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  const userDelete = (rutUsuario) => {
    const changeUser = user.filter((usuario) => usuario.rut !== rutUsuario);
    setUser(changeUser);
  };
  const userAdd = (usuario) => {
    const addUsuario = [...user, usuario];
    setUser(addUsuario);
  };
  const userEdit = (usuarioEditado) => {
    const editUser = user.map((usuario) =>
      usuario.rut === usuarioEditado.rut ? usuarioEditado : usuario
    );

    setUser(editUser);
  };

  const [auto, setAuto] = useState(auto1);

  const autoDelete = (modelAuto) => {
    const changeAuto = auto.filter((auto) => auto.modelo !== modelAuto);
    setAuto(changeAuto);
  };
  return (
    <div class="container my-3">
      <NavbarComponent />
      <UserFormComponent
        userAdd={userAdd}
        usuarioEditado={usuarioEditado}
        setUsuarioEditado={setUsuarioEditado}
        userEdit={userEdit}
      />
      <BotonComponent
        infoBoton={"agregar auto"}
        handleOnClick={handleOnClick}
      />
      <BotonComponent
        infoBoton={"mirar tablas"}
        handleOnClick={handleOnClick2}
      />
      <TablaUsuarioComponent
        usuarios={user}
        deleteUser={userDelete}
        setUsuarioEditado={setUsuarioEditado}
      />
      <TablaAutoComponent autos={auto} deleteAuto={autoDelete} />
    </div>
  );
};

export default HomePage;
