import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LinearGradient } from "react-text-gradients";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [emailloginError, setEmailloginError] = useState("");
  const [passwordloginError, setPasswordloginError] = useState("");
  const [loginError, setLoginError] = useState(""); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    setEmailloginError("");
    setPasswordloginError("");
    setLoginError("");

    let valid = true;

    if (!validateEmail(formData.email)) {
      setEmailloginError("Please enter a valid email.");
      valid = false;
    }

    if (!validatePassword(formData.password)) {
      setPasswordloginError("Password must be at least 6 characters long.");
      valid = false;
    }

    if (!valid) return;

    try {
      const response = await axios.post('http://127.0.0.1:5000/login', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Form data submitted successfully:', response.data.access_token);



      if (response.data && response.data.access_token) {
        localStorage.setItem("access_token", response.data.access_token);
       
        navigate("/admin"); 
      }

    } catch (error) {
      if (error.response && error.response.data) {
        setLoginError(error.response.data.error || "An error occurred. Please try again.");
      } else {
        setLoginError("An unexpected error occurred. Please try again.");
      }

      console.error("Error:", error.response ? error.response.data : error);
    }
};


  return (
    <div className="login-page">
      <div className="login-form p-4">
        <Form onSubmit={handleLoginSubmit}>
          <div className="h2 mb-3">Log In</div>
          <div className="h6 mb-4">
            Don't Have an account?{" "}
            <Link to="/signup" className="btn-link text-secondary px-0 text-decoration-none">
              <LinearGradient gradient={['to left', 'rgb(23 64 255) ,#e7005c']}>
                Sign up
              </LinearGradient>
            </Link>{" "}
          </div>

          <Form.Group className="mb-4">
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ fontSize: 16, padding: 8 }}
              aria-describedby="email-error"
            />
            {emailloginError && (
              <Alert variant="danger" id="email-error" className="login-alert">
                {emailloginError}
              </Alert>
            )}
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ fontSize: 16, padding: 8 }}
              aria-describedby="password-error"
            />
            {passwordloginError && (
              <Alert variant="danger" id="password-error" className="login-alert">
                {passwordloginError}
              </Alert>
            )}
          </Form.Group>

          <Form.Group className="mb-4" controlId="checkbox">
            <Form.Check
              type="checkbox"
              label="Keep me logged in"
              style={{ fontSize: 16 }}
            />
          </Form.Group>

          <Button variant="dark" className="w-100" type="submit">
            Log in
          </Button>

          {loginError && (
          <div variant="danger" className="mt-3" style={{color:"red"}}>
            {loginError}
          </div>

        )}


          <div className="mt-3 mb-3 d-flex justify-content-end">
            <div className="text-secondary px-0 text-decoration-none">
              <Button variant="link">
                <LinearGradient gradient={["to left", "rgb(23 64 255) ,#e7005c"]}>
                  <Link to='/forgetpassword'>Forget Password</Link>
                </LinearGradient>
              </Button>
            </div>
          </div>

          <div className="h6 mb-4">or continue with</div>

        
          <Button variant="light" className="border border-1 me-3">
            <a href="javascript:void(0)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="black"
                className="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </a>
          </Button>


    
          <Button variant="light" className="border border-1 me-3">
            <a href="#!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="black"
                className="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
          </Button>

     
          <Button variant="light" className="border border-1">
            <a href="#!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="black"
                className="bi bi-apple"
                viewBox="0 0 16 16"
              >
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
              </svg>
            </a>
          </Button>

        </Form>
      </div>
    </div>
  );
};

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }

export default Login;
