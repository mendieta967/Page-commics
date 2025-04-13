import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState, useRef } from "react";
import { Form, Col, Card, Button, Row, FormGroup } from "react-bootstrap";
import { useAuth } from "../../../context/AuthContext";
import { FaArrowLeft } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { handleLogin, isLogin } = useAuth();
  const navigate = useNavigate();

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  if (isLogin) {
    return <Navigate to="/home" replace={true} />;
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setError((prevErrors) => ({
      ...prevErrors,
      email: event.target.value.length === 0,
    }));
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setError((prevErrors) => ({
      ...prevErrors,
      password: event.target.value.length === 0,
    }));
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (emailInputRef.current.value.length === 0) {
      alert("¡Email vacío!");
      emailInputRef.current.focus();
      setError((prevErrors) => ({
        ...prevErrors,
        email: true,
      }));
      return;
    }

    if (password.length === 0) {
      alert("¡Password vacío!");
      passwordInputRef.current.focus();
      setError((prevErrors) => ({
        ...prevErrors,
        password: true,
      }));
      return;
    }

    // Obtener usuarios registrados desde localStorage
    const storedUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    // Buscar usuario que coincida con email y contraseña
    const foundUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      handleLogin(); // marca como logueado en el context
      localStorage.setItem("token", "true");

      // Guardamos el nombre del usuario logueado
      localStorage.setItem("loggedUser", JSON.stringify(foundUser.name));

      navigate("/home");
    } else {
      alert("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="contenedor-button-atras">
        <Button variant="primary" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </Button>
      </div>
      <div className="conteiner-login">
        <Card.Body>
          <Row>
            <h5>Bienvenido a Commics</h5>
          </Row>
          <Form onSubmit={onLogin}>
            <FormGroup className="mb-4">
              <Form.Control
                ref={emailInputRef}
                value={email}
                onChange={handleChangeEmail}
                type="email"
                placeholder="Ingresar email"
              />
              {error.email && (
                <p className="text-danger">El email no debe ser vacío</p>
              )}
            </FormGroup>
            <FormGroup className="mb-4">
              <Form.Control
                ref={passwordInputRef}
                value={password}
                onChange={handleChangePassword}
                type="password"
                required
                placeholder="Ingresar contraseña"
              />
              {error.password && (
                <p className="text-danger">El password no debe ser vacío</p>
              )}
            </FormGroup>

            <Row className="mt-4 d-flex justify-content-center">
              <Col
                xs={12}
                md={10}
                className="d-flex justify-content-between gap-3"
              >
                <button
                  type="submit"
                  className="my-btn-page my-btn-secondary w-50"
                >
                  Iniciar sesión
                </button>
                <button
                  onClick={() => navigate("/RegisterUser")}
                  type="button"
                  className="my-btn-page my-btn-primary w-50"
                >
                  Registrarse
                </button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </div>
    </div>
  );
};

export default Login;
