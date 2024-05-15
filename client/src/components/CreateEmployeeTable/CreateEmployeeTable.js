import React, {useState } from 'react';
import './CreateEmployeeTable.css'; // Import CSS file for styling
import logo from './MERN-Logo.png'; // Import your logo image

const CreateEmployeeTable = () => {
  const [id, setId] = useState('');
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  const [createDate, setCreateDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform form submission logic, such as sending data to a server
    console.log('Form submitted!');
  };

  return (
    <div className="dashboard-container">
      <img src={logo} alt="Logo" className="logo2" />
      {/* Add logo above the table */}
      <form className="form-row" onSubmit={handleSubmit}>
        <table className="employee-table">
          <tbody>
            {/* First row for navigation */}
            <tr>
              <td className="nav-cell">
                <a href="#">Home</a> {/* Replace with actual links */}
              </td>
              <td className="nav-cell">
                <a href="#">Employee List</a>
              </td>
              {/* <td className="nav-cell">
                <a href="#">Hukum Gupta-</a> 
               
              </td>
              <td className="nav-cell">
                <a href="#">Logout</a>
              </td> */}
            </tr>
            {/* Second row for "Dashboard" title */}
            <tr>
              <td colSpan="4" className="title-row">
                Create Employee
              </td>
            </tr>
            <br></br>
            {/* Form fields row by row */}
            {/* <tr>
              <td>
                <label htmlFor="f_Id">ID:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="f_Id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                />
              </td>
            </tr> */}

            {/* Other form fields */}
            
          <tr>
            <td>
              <label htmlFor="f_Name">Name:</label>
            </td>
            <td>
              <input
                type="text"
                id="f_Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="f_Email">Email:</label>
            </td>
            <td>
              <input
                type="email"
                id="f_Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="f_Mobile">Mobile No:</label>
            </td>
            <td>
              <input
                type="tel"
                id="f_Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                pattern="[0-9]{10}"
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="f_Designation">Designation:</label>
            </td>
            <td>
              <input
                type="text"
                id="f_Designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="f_gender">Gender:</label>
            </td>
            <td>
              <select
                id="f_gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="f_Course">Course:</label>
            </td>
            <td>
              <input
                type="text"
                id="f_Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="f_Image">Image:</label>
            </td>
            <td>
              <input
                type="file"
                id="f_Image"
                accept="image/jpeg, image/png"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2" className="button-cell">
              <button className="submit-button" type="submit">Submit</button>
            </td>
          </tr>
          </tbody>
        </table>
        {/* <button className="submit-button" type="submit">Submit</button> */}
      </form>
    </div>
  );
};

export default CreateEmployeeTable;
