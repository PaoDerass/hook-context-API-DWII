import { useContext } from "react";
import { AuthContext } from "./context/Authcontext";

const UserProfile = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    return <p>Error: Contexto no encontrado</p>;
  }

  const { usuario, iniciarSesion, cerrarSesion } = auth;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {usuario ? (
        <>
          <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Bienvenido, {usuario.nombre}!</p>
          <button
            onClick={cerrarSesion}
            style={{ padding: "10px", backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }}
          >
            Cerrar Sesión
          </button>
        </>
      ) : (
        <>
          <p style={{ fontSize: "1.2rem" }}>No has iniciado sesión.</p>
          <button
            onClick={() => iniciarSesion("Juan Pérez")}
            style={{ padding: "10px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }}
          >
            Iniciar Sesión
          </button>
        </>
      )}
    </div>
  );
};

export default UserProfile;
