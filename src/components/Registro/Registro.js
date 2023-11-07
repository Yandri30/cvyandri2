import React, { useState } from 'react';
import './Registro.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

function RegistroAdmin() {
  const [identificacion, setIdentificacion] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [codigoRegistro, setCodigoRegistro] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !identificacion ||
      !nombres ||
      !apellidos ||
      !email ||
      !usuario ||
      !contrasena ||
      !codigoRegistro
    ) {
      alert('Por favor, completa todos los campos.');
    } else {
      alert('Registro de Administrador exitoso');
      // Aquí puedes manejar la lógica de registro de administradores
    }
  };

  // Función para redirigir a la página de inicio de sesión
  const redirectToLogin = () => {
    window.location.href = '/login.js'; // Cambia esto a la ruta correcta de tu página de inicio de sesión
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="title">REGISTRO</div>
        <div className="input-box">
          <label htmlFor="identificacion">Identificación:</label>
          <input
            type="text"
            id="identificacion"
            placeholder="Ingrese la identificación"
            value={identificacion}
            onChange={(e) => setIdentificacion(e.target.value)}
            name="identificacion"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="nombres">Nombres:</label>
          <input
            type="text"
            id="nombres"
            placeholder="Ingrese los nombres"
            value={nombres}
            onChange={(e) => setNombres(e.target.value)}
            name="nombres"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            placeholder="Ingrese los apellidos"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
            name="apellidos"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese el correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="usuario">Nombre de Usuario:</label>
          <input
            type="text"
            id="usuario"
            placeholder="Ingrese el nombre de usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            name="usuario"
            required
          />
        </div>
        <div className="input-box">
          <label htmlFor="codigoRegistro">Código de Registro:</label>
          <input
            type="text"
            id="codigoRegistro"
            placeholder="Ingrese el código de registro"
            value={codigoRegistro}
            onChange={(e) => setCodigoRegistro(e.target.value)}
            name="codigoRegistro"
            required
          />
        </div>
        <div className="input-box" style={{ textAlign: 'center' }}>
          <input type="submit" value="Registrar" />
        </div>
      </form>
      <div className="centered-text">
        ¿Ya tienes cuenta?{' '}
        <span onClick={redirectToLogin} style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>Inicia sesión</span>
      </div>
    </div>
  );
}

export default RegistroAdmin;
