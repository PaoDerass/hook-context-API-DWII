import { useContext } from "react";
import { AuthContext } from "./context/Authcontext";

const UserProfile = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    return <p>Error: Contexto no encontrado</p>;
  }

  const { usuario, iniciarSesion, cerrarSesion } = auth;

  return (
    <div>
      {usuario ? (
        <>
          <p>Bienvenido, {usuario.nombre}!</p>
          <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </>
      ) : (
        <>
          <p>No has iniciado sesión.</p>
          <button onClick={() => iniciarSesion("Juan Pérez")}>Iniciar Sesión</button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
