import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MainContainer,
  AuthContainer,
  HeaderRow,
  Logo,
  AuthTitle,
  AuthForm,
  AuthInput,
  AuthButton,
  ErrorMessage,
  SwitchLink,
} from "../styled_components/AuthStyled";
import logo1 from "../images/logo1.png";

function Login({ onSwitchToSignup }) {
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // Clear error on input change
  };

  const validateForm = () => {
    if (!formData.usernameOrEmail) {
      return "Please enter a username or email.";
    }
    if (
      formData.usernameOrEmail &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.usernameOrEmail) &&
      formData.usernameOrEmail.length < 4
    ) {
      return "Username must be at least 4 characters long or enter a valid email.";
    }
    if (!formData.password || formData.password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    // Add login logic here (e.g., API call)
    console.log("Login:", formData);
  };

  const isFormValid = () => {
    return (
      formData.usernameOrEmail &&
      (formData.usernameOrEmail.length >= 4 ||
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.usernameOrEmail)) &&
      formData.password.length >= 6
    );
  };

  return (
    <MainContainer>
      <AuthContainer>
        <HeaderRow>
          <Link to="/" style={{ textDecoration: "none" }}>
            <SwitchLink>Back</SwitchLink>
          </Link>
          <Logo src={logo1} alt="Website Logo" />
          <AuthTitle>Login</AuthTitle>
        </HeaderRow>
        <AuthForm onSubmit={handleSubmit}>
          <AuthInput
            type="text"
            name="usernameOrEmail"
            placeholder="Username or Email"
            value={formData.usernameOrEmail}
            onChange={handleChange}
            aria-label="Username or email for login"
            required
          />
          <AuthInput
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            aria-label="Password for login"
            required
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <AuthButton type="submit" disabled={!isFormValid()}>
            Login
          </AuthButton>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <SwitchLink>Already have an account? Login</SwitchLink>
          </Link>
        </AuthForm>
      </AuthContainer>
    </MainContainer>
  );
}

export default Login;
