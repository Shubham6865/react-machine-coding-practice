import React, { useState } from 'react';
import './formvaildation.css';

const FormValidation = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    userid: '',
    contact: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.userid) newErrors.userid = 'UserId is required.';
    if (!formData.contact || !/^\d{10}$/.test(formData.contact))
      newErrors.contact = 'Contact must be a 10-digit number.';
    if (
      !formData.email ||
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    )
      newErrors.email = 'Enter a valid email address.';
    if (!formData.password || formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.';
    if (formData.password !== formData.confirmpassword)
      newErrors.confirmpassword = 'Passwords do not match.';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert('Form submitted successfully!');
      // Reset form
      setFormData({
        userid: '',
        contact: '',
        email: '',
        password: '',
        confirmpassword: '',
      });
    }
  };

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="userid">UserId</label>
          <input
            type="text"
            name="userid"
            value={formData.userid}
            onChange={handleChange}
          />
          {errors.userid && <p className="error">{errors.userid}</p>}
        </div>
        <div>
          <label id="contact">Contact</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <p className="error">{errors.contact}</p>}
        </div>
        <div>
          <label id="email">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label id="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label id="confirmpassword">ConfirmPassword</label>
          <input
            type="password"
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
          />
          {errors.confirmpassword && (
            <p className="error">{errors.confirmpassword}</p>
          )}
        </div>
        <input type="submit" value="Submit Your Data" className="btn" />
      </form>
    </div>
  );
};

export default FormValidation;
