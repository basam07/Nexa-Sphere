import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//import pages
import Home from './Web/Home';
import SignUpForm from './Web/SignUp';
import LoginForm from './Web/Login';
import DashboardForm from './Web/Dashboard';
import PrivacyForm from './Web/Privacy';
import GenerateForm from './Web/Generate';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route exect path = "/" element = {<Home />} />

        {/* Home page */}
        <Route path = "/home" element = {<Home />} />

        {/* Sign Up Page */}
        <Route path = "/signup" element = {<SignUpForm />} />

        {/* Login Page */}
        <Route path = "/login" element = {<LoginForm />} />

        {/* Dashboard page  */}
        <Route path = "/dashboard" element = {<DashboardForm />} />

        {/* Privacy page */}
        <Route path = "/privacy" element = {<PrivacyForm />} />

        {/* Generate page */}
        <Route path = "/generate" element = {<GenerateForm />} />

      </Routes>
    </Router>
  );
}

export default App;
