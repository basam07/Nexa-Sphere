import React, { useState } from "react";
import "./SignUp.css"; // Import your CSS file for styling
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
//firebase
import { auth } from "../index";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");

    // firebase authentication for login
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // console.log("login succesfully", userCredentials);
        // // If validation passes, proceed with login
        // window.location.href = "/dashboard";
        const url = "http://geekgenies.com/gan";
        window.location.href = url;
      })
      .catch((error) => {
        console.log("!!!!!!user not found", error);
        if (error.code === "auth/user-not-found") {
          setEmailError("User not found");
        } else if (error.code === "auth/wrong-password") {
          setPasswordError("Wrong password");
        }
      });

    // Validate email and password
    if (!email) {
      setEmailError("Please enter your Email");
      return;
    }
    if (!password) {
      setPasswordError("Please enter your Password");
      return;
    }
  };

  return (
    <div className="app" id="signup">
      <Navbar />
      <div className="container">
        <div className="blur-background">
          <img
            src="./images/background.jpg"
            alt="Background"
            className="background-image"
          />
        </div>
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className="error">{emailError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div className="error">{passwordError}</div>}
            </div>
            <button type="submit" className="signup-btn">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
