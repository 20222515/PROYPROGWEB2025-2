import { createContext, useState, useContext } from 'react'
import usuarios from "../../data/usuarios";

const UserContext = createContext()

export function UserProvider({ children }) {
    const [ user, setUser ] = useState(null)

    const login = (correo, password) => {
        const resultado = usuarios.find((u) => u.correo.toLowerCase() === correo.toLowerCase() 
                                        && u.contraseña.toLowerCase() === password.toLowerCase())

        if (resultado) {
            setUser(resultado)
            localStorage.setItem("usuario", JSON.stringify(resultado));
            return true;
        } else 
            return false;
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('usuario')
    }

    const value = {
        user,
        login,
        logout
    }

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}

export function useUser () {
    const context = useContext(UserContext)
    return context;
}