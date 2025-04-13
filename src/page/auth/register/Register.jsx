import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que las contraseñas coincidan
    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Traer lista de usuarios registrados o array vacío
    const storedUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Verificar si el email ya está registrado
    const emailExists = storedUsers.some(
      (user) => user.email === formData.email
    );

    if (emailExists) {
      alert("Este email ya está registrado. Iniciá sesión o usá otro.");
      return;
    }

    // Crear el nuevo usuario
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    // Agregar el nuevo usuario a la lista y guardar en localStorage
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));

    alert("Registro exitoso, ahora podés iniciar sesión");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="contenedor-button-atras">
        <Button variant="primary" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </Button>
      </div>
      <div className="container-register">
        <div className="register-box">
          <h2 className="register-title">Registrarse</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name" className="mb-4">
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-4">
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-4">
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword" className="mb-4">
              <Form.Control
                type="password"
                placeholder="Confirma tu contraseña"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className="mt-4 d-flex justify-content-center">
              <button
                className="w-50 my-btn-page my-btn-secondary"
                type="submit"
              >
                Registrarse
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
