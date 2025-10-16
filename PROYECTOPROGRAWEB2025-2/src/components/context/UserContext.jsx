import { createContext, useState, useContext, useEffect } from "react";
import usuariosBase from "../../data/usuarios.js";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [usuarios, setUsuarios] = useState([]);

  //  Al montar el contexto, cargamos usuarios del localStorage o del JSON
  useEffect(() => {
    const almacenados = JSON.parse(localStorage.getItem("usuarios"));
    if (almacenados && almacenados.length > 0) {
      setUsuarios(almacenados);
    } else {
      localStorage.setItem("usuarios", JSON.stringify(usuariosBase));
      setUsuarios(usuariosBase);
    }

    // Recuperar sesión si había un usuario logueado
    const sesion = JSON.parse(localStorage.getItem("usuario"));
    if (sesion) setUser(sesion);
  }, []);

  // 🔐 LOGIN
  const login = (correo, contraseña) => {
    const lista = JSON.parse(localStorage.getItem("usuarios")) || [];
    const encontrado = lista.find(
      (u) =>
        u.correo.toLowerCase() === correo.toLowerCase() &&
        u.contraseña === contraseña &&
        u.active === true // ✅ solo activos
    );

    if (encontrado) {
      setUser(encontrado);
      localStorage.setItem("usuario", JSON.stringify(encontrado));
      return true;
    } else {
      return false;
    }
  };

  // 📝 REGISTRO
  const register = (nuevoUsuario) => {
    const lista = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = lista.some(
      (u) => u.correo.toLowerCase() === nuevoUsuario.correo.toLowerCase()
    );

    if (existe) return false;

    const actualizada = [...lista, nuevoUsuario];
    localStorage.setItem("usuarios", JSON.stringify(actualizada));
    setUsuarios(actualizada);
    return true;
  };

  // 🚪 LOGOUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("usuario");
  };

  // 🔄 CAMBIAR CONTRASEÑA
  const changePassword = (antigua, nueva) => {
    // Si no hay usuario logueado, no se puede cambiar
    if (!user) return false;

    // Verificamos que la contraseña actual coincida
    if (user.contraseña !== antigua) {
      return false;
    }

    // Actualizamos la contraseña del usuario en la lista
    const lista = JSON.parse(localStorage.getItem("usuarios")) || [];
    const actualizada = lista.map((u) =>
      u.correo.toLowerCase() === user.correo.toLowerCase()
        ? { ...u, contraseña: nueva }
        : u
    );

    // Guardamos los cambios en localStorage
    localStorage.setItem("usuarios", JSON.stringify(actualizada));

    // También actualizamos el usuario actual y el localStorage de sesión
    const nuevoUsuario = { ...user, contraseña: nueva };
    setUser(nuevoUsuario);
    localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));

    return true;
  };


  const value = { user, login, logout, register, usuarios , changePassword };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);
