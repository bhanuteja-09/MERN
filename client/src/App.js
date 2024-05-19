import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import CreateEmployeeTable from './components/CreateEmployeeTable/CreateEmployeeTable';
import EditEmployeeTable from './components/EditEmployeeTable/EditEmployeeTable';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-employee" element={<CreateEmployeeTable />} />
        <Route path="/edit-employee/:id" element={<EditEmployeeTable />} />
      </Routes>
    </Router>
  );
};

export default App;
