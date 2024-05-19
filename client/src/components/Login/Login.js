import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import logo from './MERN-Logo.png';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      console.log('Login successful:', response.data);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={logo} alt="Logo" className="logo1" />
        <div className="header">
          <h2>Login Page</h2>
        </div>
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <table className="form-table">
              <tbody>
                <tr>
                  <td><label htmlFor="username">Username:</label></td>
                  <td>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td><label htmlFor="password">Password:</label></td>
                  <td>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </td>
                </tr>
                {error && (
                  <tr>
                    <td colSpan="2" className="error-message">{error}</td>
                  </tr>
                )}
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
