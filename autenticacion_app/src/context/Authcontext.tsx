import { createContext, useState, ReactNode } from "react";

interface Usuario {
  nombre: string;
}

interface AuthContextType {
  usuario: Usuario | null;
  iniciarSesion: (nombre: string) => void;
  cerrarSesion: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const iniciarSesion = (nombre: string) => setUsuario({ nombre });
  const cerrarSesion = () => setUsuario(null);

  return (
    <AuthContext.Provider value={{ usuario, iniciarSesion, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
};
