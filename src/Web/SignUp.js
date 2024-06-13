import React, { useState } from "react";
import "./SignUp.css"; // Import your CSS file for styling
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";
// firebase
import { auth, db} from "../index.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const SignUpForm = () => {
  // states
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setNameError("");
    setCategoryError("");
    setEmailError("");
    setPasswordError("");
    
    if (!name) {
      setNameError("Please enter your full name");
      return;
    }
    if (!category) {
      setCategoryError("Please select a category");
      return;
    }
    if (!email) {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setPasswordError("Please enter a password");
      return;
    }

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredentials.user.uid; // get current user firebase ID
      await saveUserInDb(userId);
      alert("Sign up successful");
      // Redirect to login after successful signup
      console.log("!!! move to login page");
      window.location.href = "/login";
    } catch (error) {
      console.log("!!!!Error signing up:", error.message);
      // Handle specific errors like email already exists, etc.
      // Update state to show appropriate error messages
    }
  };

  // save user in firestore
  const saveUserInDb = async (userId) => {
    await setDoc(doc(db, "AIUser", userId), {
      name: name,
      category: category,
      email: email,
    });
    console.log("!!!!User saved in DB successfully");
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
          <h2>Sign Up</h2>
          <form >
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                
              />
              {nameError && <div className="error">{nameError}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                
              >
                <option value="">Select Category</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="work">Work</option>
              </select>
              {categoryError && <div className="error">{categoryError}</div>}
            </div>
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
            <button type="submit" className="signup-btn" onClick={handleSubmit}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpForm;
