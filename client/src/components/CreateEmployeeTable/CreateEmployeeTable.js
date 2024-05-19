import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance';
import './CreateEmployeeTable.css'; // Import CSS file for styling
import logo from './MERN-Logo.png'; // Import your logo image

const CreateEmployeeTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axiosInstance.post('/employees/create', data);
      console.log('Form submitted successfully!', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const validateForm = () => {
    const { name, email, mobile, designation, gender, course, image } = formData;

    if (!name || !email || !mobile || !designation || !gender || !course || !image) {
      console.error('All fields are required');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format');
      return false;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      console.error('Invalid mobile number format');
      return false;
    }

    const validImageTypes = ['image/jpeg', 'image/png'];
    if (!validImageTypes.includes(image.type)) {
      console.error('Only JPG/PNG files are allowed');
      return false;
    }

    return true;
  };

  return (
    <div className="dashboard-container">
      <img src={logo} alt="Logo" className="logo2" />
      <form className="form-row" onSubmit={handleSubmit}>
        <table className="employee-table">
          <tbody>
            <tr>
              <td className="nav-cell"><a href="#">Home</a></td>
              <td className="nav-cell"><a href="#">Employee List</a></td>
            </tr>
            <tr>
              <td colSpan="4" className="title-row">Create Employee</td>
            </tr>
            {['name', 'email', 'mobile', 'designation', 'gender', 'course'].map((field) => (
              <tr key={field}>
                <td><label htmlFor={`f_${field}`}>{field.charAt(0).toUpperCase() + field.slice(1)}:</label></td>
                <td>
                  {field === 'gender' ? (
                    <select id={`f_${field}`} name={field} value={formData[field]} onChange={handleChange} required>
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={`f_${field}`}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                    />
                  )}
                </td>
              </tr>
            ))}
            <tr>
              <td><label htmlFor="f_image">Image:</label></td>
              <td>
                <input
                  type="file"
                  id="f_image"
                  name="image"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <td colSpan="4" className="button-row">
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CreateEmployeeTable;
