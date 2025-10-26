
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../components/context/UserContext";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const { login } = useUser();

  const handleLogin = () => {
    if (login(correo, contraseña)) {
      navigate("/register/MisOrdenes");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar sesión</h2>
        <label>Correo</label>
        <input
          type="email"
          placeholder="usuario@gmail.com"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <button onClick={handleLogin}>Iniciar sesión</button>

        <p>
          <span
            className="registro-link"
            onClick={() => navigate("/register")}
          >
            Registrarme
          </span>
        </p>
        <p className="olvide-link">Olvidé mi contraseña</p>
      </div>
    </div>
  );
};

export default Login;
