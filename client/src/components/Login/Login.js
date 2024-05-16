import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Import CSS file for styling
import logo from './MERN-Logo.png'; // Import your logo image

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/login', { username, password });
      const { token } = response.data;
      setToken(token); // Set token received from server
    } catch (error) {
      console.error('Login failed:', error);
      // Optionally, handle login failure (e.g., display error message)
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
      <img src={logo} alt="Logo" className="logo1" /> {/* Add logo above the table */}
        <div className="header">
          <h2>Login Page</h2>
        </div>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <table className="form-table">
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="username">Username:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="password">Password:</label>
                  </td>
                  <td>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="button-cell">
                    <button className="login-button" type="submit">Login</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
