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

function Signup({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullName: "",
    phone: "",
    address: "",
    dob: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(""); // Clear error on input change
  };

  const validateForm = () => {
    if (!formData.username || formData.username.length < 4) {
      return "Username must be at least 4 characters long.";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return "Please enter a valid email address.";
    }
    if (!formData.password || formData.password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!formData.fullName || formData.fullName.length < 2) {
      return "Full name must be at least 2 characters long.";
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      return "Phone number must be exactly 10 digits.";
    }
    if (!formData.address || formData.address.length < 5) {
      return "Address must be at least 5 characters long.";
    }
    if (!formData.dob || !/^\d{4}-\d{2}-\d{2}$/.test(formData.dob)) {
      return "Please enter a valid date of birth (YYYY-MM-DD).";
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
    // Prepare data with server-side fields
    const submitData = {
      ...formData,
      role: "ADMIN",
      active: true,
      provider: "local",
      provider_id: null,
    };
    // Add signup logic here (e.g., API call)
    console.log("Signup:", submitData);
  };

  const isFormValid = () => {
    return (
      formData.username.length >= 4 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.password.length >= 6 &&
      formData.fullName.length >= 2 &&
      /^\d{10}$/.test(formData.phone) &&
      formData.address.length >= 5 &&
      /^\d{4}-\d{2}-\d{2}$/.test(formData.dob)
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
          <AuthTitle>Sign Up</AuthTitle>
        </HeaderRow>
        <AuthForm onSubmit={handleSubmit}>
          <AuthInput
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            aria-label="Username for signup"
            required
          />
          <AuthInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            aria-label="Email for signup"
            required
          />
          <AuthInput
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            aria-label="Password for signup"
            required
          />
          <AuthInput
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            aria-label="Full name for signup"
            required
          />
          <AuthInput
            type="tel"
            name="phone"
            placeholder="Phone (10 digits)"
            value={formData.phone}
            onChange={handleChange}
            aria-label="Phone number for signup"
            required
          />
          <AuthInput
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            aria-label="Address for signup"
            required
          />
          <AuthInput
            type="date"
            name="dob"
            placeholder="Date of Birth (YYYY-MM-DD)"
            value={formData.dob}
            onChange={handleChange}
            aria-label="Date of birth for signup"
            required
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <AuthButton type="submit" disabled={!isFormValid()}>
            Sign Up
          </AuthButton>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <SwitchLink>Already have an account? Login</SwitchLink>
          </Link>
        </AuthForm>
      </AuthContainer>
    </MainContainer>
  );
}

export default Signup;
