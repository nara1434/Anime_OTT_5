import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import {
  FaGoogle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: localStorage.getItem("email") || "",
    password: localStorage.getItem("password") || "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "email" ? value.toLowerCase() : value;
    setFormData((prev) => ({ ...prev, [name]: updatedValue }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[a-z][a-z0-9._%+-]*@gmail\.com$/.test(formData.email)) {
      newErrors.email =
        "Use lowercase Gmail starting with a letter (e.g. name123@gmail.com)";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(formData.password)
    ) {
      newErrors.password =
        "Password must be 8+ chars with 1 uppercase, 1 number & 1 special char";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      navigate("/home");
    }
  };

  return (
    <div className="login-body">
      <div className="login-left">
        <div className="branding">
          <h1>💕 Welcome to LoveThrill</h1>
          <p>Feel the romance. Embrace the thrill.</p>
        </div>
      </div>

      <div className="login-right">
        <button className="login-toggle border-0" onClick={() => navigate("/")}>
          Sign Up
        </button>

        <div className="login-container">
          <h2>Login to Your Account</h2>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {formData.password && (
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="eye-icon"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            )}
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          <button onClick={handleLogin}>Login</button>

          <p
            className="forgot-password text-secondary ms-auto"
            style={{ cursor: "pointer", marginTop: "10px", textAlign: "right" }}
            onClick={() => navigate("/forgotpassword")}
          >
            Forgot Password?
          </p>

          <div className="social-icons">
            <span
              className="google"
              onClick={() =>
                window.open("https://accounts.google.com/signin", "_blank")
              }
            >
              <FaGoogle />
            </span>
            <span
              className="facebook"
              onClick={() =>
                window.open("https://www.facebook.com/login", "_blank")
              }
            >
              <FaFacebookF />
            </span>
            <span
              className="twitter"
              onClick={() =>
                window.open("https://twitter.com/i/flow/login", "_blank")
              }
            >
              <FaTwitter />
            </span>
            <span
              className="instagram"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/accounts/login/",
                  "_blank"
                )
              }
            >
              <FaInstagram />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
