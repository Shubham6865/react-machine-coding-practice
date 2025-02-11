import React, { useState } from 'react'

const SimpleFormValidation = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [errors, setErrors] = useState({});

  const HandleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target

    setFormData({
      ...formData, [name]: value
    })

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    validate(e);
  }

  const validate = (e) => {
    const validationErrors = {};
    if (!formData.username || !formData.username.trim()) {

      validationErrors.username = "UserName is Required";
    }

    if (!formData.email || !formData.email.trim()) {
      validationErrors.email = "Email is Required";
    }
    else if (!/^[a-zA-Z0-9._]+@gmail.com$/.test(formData.email)) {

      validationErrors.email = "Enter Vaild Email";
    }

    if (!formData.password || !formData.password.trim()) {
      validationErrors.password = "password is Required";
    }
    else if ((formData.password).length < 8) {

      validationErrors.password = "Enter Vaild password";
    }


    if (!formData.confirmpassword || !formData.confirmpassword.trim()) {
      validationErrors.confirmpassword = "password is Required";
    }
    else if ((formData.password) !== formData.confirmpassword) {

      validationErrors.confirmpassword = "password does not match";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {

      alert("Form Submit success");
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
      });
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >userName</label>
        <input type="text" name="username" id="username"
          value={formData.username}
          onChange={HandleChange}
        />
        {errors.username && <p>{errors.username}</p>}

        <div>
          <label >Email</label>
          <input type="text" name="email" id="email"
            value={formData.email}
            onChange={HandleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label >Password</label>
          <input type="password" name="password" id="password"
            value={formData.password}
            onChange={HandleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label >Confirm Password</label>
          <input type="password" name="confirmpassword" id="confirmpassword"
            value={formData.confirmpassword}
            onChange={HandleChange}
          />
          {errors.confirmpassword && <p>{errors.confirmpassword}</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SimpleFormValidation
