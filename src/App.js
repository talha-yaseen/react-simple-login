import React, { useState } from "react";
// import { Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState("section-one");

  function login() {
    if (username === "admin" && password === "password") {
      setLoggedIn(true);
    } else {
      alert("Invalid username/password!");
    }
  }

  return (
    loggedIn ?

      <div className="dashboard">
        <div className="side-nav">
          <ul className="nav-links">
            <li><div className={"nav-link " + (activeSection === "section-one" ? "active" : "")} onClick={() => setActiveSection("section-one")}>Section One</div></li>
            <li><div className={"nav-link " + (activeSection === "section-two" ? "active" : "")} onClick={() => setActiveSection("section-two")}>Section Two</div></li>
            <li><div className={"nav-link " + (activeSection === "section-three" ? "active" : "")} onClick={() => setActiveSection("section-three")}>Section Three</div></li>
          </ul>
        </div>
        <div className="main-content">
          <section id="section-one" hidden={activeSection !== "section-one"}>
            <h1>Welcome!</h1>
            <h2>This is the content for section one.</h2>
          </section>
          <section id="section-two" hidden={activeSection !== "section-two"}>
            <h1>Welcome!</h1>
            <h2>This is the content for section two.</h2>
          </section>
          <section id="section-three" hidden={activeSection !== "section-three"}>
            <h1>Welcome!</h1>
            <h2>This is the content for section three.</h2>
          </section>
        </div>
      </div>

      :

      <div className="login-page">
        <div className="login-box">
          <h2>Login</h2>
          <table>
            <tr>
              <td className="text-right"><label for="username">Username:</label></td>
              <td><input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} /></td>
            </tr>
            <tr>
              <td className="text-right"><label for="password">Password:</label></td>
              <td><input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} /></td>
            </tr>
            <tr>
              <td colSpan={2} className="text-center"> <button className="btn-login" onClick={login}>Login</button></td>
            </tr>
          </table>
        </div>
      </div>
  );
}

export default App;
