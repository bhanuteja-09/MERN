import React from 'react';
import './Dashboard.css'; // Import your CSS file for styling
import logo from './MERN-Logo.png'; // Import your logo image

const Dashboard = ({ username = 'Hukum Gupta' }) => { // Default username
  return (
    <div className="dashboard-container">
      <img src={logo} alt="Logo" className="logo" /> {/* Add logo above the table */}
      <table className="dashboard-table">
        <tbody>
          <tr> {/* First row for navigation */}
            <td className="nav-cell">
              <a href="#">Home</a> {/* Replace with actual links */}
            </td>
            <td className="nav-cell">
              <a href="#">Employee List</a>
            </td>
            <td className="nav-cell">{username}</td>
            <td className="nav-cell">
              <a href="#">Logout</a>
            </td>
          </tr>
          <tr> {/* Second row for "Dashboard" title */}
            <td colSpan="4" className="dashboard-title">
              Dashboard
            </td>
          </tr>
          <tr> {/* Third row for "Welcome Admin Panel" */}
            <td colSpan="4" className="welcome-cell">
             <br></br> Welcome, Admin Panel!
            </td>
          </tr>
          <tr> {/* First empty row */}
            {/* <td colSpan="4" /> */}
          </tr>
          <tr> {/* Second empty row */}
            {/* <td colSpan="4" /> */}
          </tr>
          <tr> {/* Third empty row */}
            {/* <td colSpan="4" /> */}
          </tr>
          <tr> {/* Fourth empty row */}
            {/* <td colSpan="4" /> */}
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
