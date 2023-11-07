import React, { useState } from 'react';
import avatarImage from './images/avatar.png'; // Asegúrate de que la ruta sea correcta
import Registro from './Registro/Registro'; // Asegúrate de que la ruta sea correcta

function Login() {
  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [currentPage, setCurrentPage] = useState('login');

  const login = () => {
    if (userName.trim() === '' || pass.trim() === '') {
      alert('Por favor, ingresa un nombre de usuario y una contraseña.');
      return;
    }

    const usuarioValido = 'Yandri';
    const contrasenaValida = 'Yandri30';

    if (userName === usuarioValido && pass === contrasenaValida) {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Credenciales incorrectas. Acceso denegado.');
    }
  };

  const redirectToRegistro = () => {
    setCurrentPage('registro');
  };

  const renderLoginForm = () => (
    <div className="login-wrap cover">
      <div className="data-box">
        <div className="avatar-container">
          <img src={avatarImage} alt="Avatar" className="avatar" />
        </div>
        <p className="text-center text-condensedLight login-text">Inicia sesión con tu cuenta</p>
        <form onSubmit={login}>
          <div className="input-container">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              id="userName"
              placeholder="Nombre de usuario"
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              id="pass"
              placeholder="Contraseña"
            />
          </div>
          <button
            className="mdl-button mdl-js-button mdl-js-ripple-effect custom-button"
            style={{ color: '#3F51B5', margin: '0 auto', display: 'block' }}
          >
            INICIAR SESIÓN
          </button>
        </form>
        <p className="text-center text-condensedLight">
          Aún no tienes cuenta?{' '}
          <span
            style={{ color: '#3F51B5', textDecoration: 'underline', cursor: 'pointer' }}
            onClick={redirectToRegistro}
          >
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <div>
      {currentPage === 'login' && renderLoginForm()}
      {currentPage === 'registro' && <Registro />}
    </div>
  );
}

export default Login;
