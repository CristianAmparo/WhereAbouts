import React, { useState } from "react";
import {Link ,useNavigate } from "react-router-dom";


function Signup() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    department: "Select Department",
    username: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  const { fname, lname, department, username, password, repeatPassword } = formData;

  if (!fname || !lname || department === "Select Department" || !username || !password || !repeatPassword) {
    setError("Please fill in all fields.");
  } else if (password !== repeatPassword) {
    setError("Passwords do not match!");
  } else {
    setError(""); // Clear any previous errors

    // Collect the form data
    const dataToSend = {
      fname,
      lname,
      department,
      username,
      password,
    };

    // Send the data to the PHP script
    fetch("http://localhost/WhereAbouts/api/signup.php", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend), // Convert the data to JSON
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          setError(response.error);
        } else if (response.result) {
          // Registration was successful, redirect to the login page
          navigate("/Login");
        }
      })
      .catch((err) => {
        setError("An error occurred. Please try again later.");
        console.log(err);
      });
  }
};
  

  // Determine whether a field is empty
  const emptyField = (fieldName) => {
    return !formData[fieldName] || (fieldName === "department" && formData[fieldName] === "Select Department");
  };




  return (
    <>
      <div className='w-full h-screen flex items-center justify-center'>
        <div className='bg-[#F4F1E8] w-max h-max mx-auto p-10 shadow-2xl rounded-lg'>
          <h1>WhereAbouts</h1>
          <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <div className="flex flex-col">
                <label htmlFor="fname">FirstName</label>
                <input className={emptyField("fname") ? "red-border" : ""} name='fname' type="text" value={formData.fname} onChange={handleChange} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lname">LastName</label>
                <input className={emptyField("lname") ? "red-border" : ""} name='lname' type="text" value={formData.lname} onChange={handleChange} />
              </div>
            </div>
            <label htmlFor="">Department</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={emptyField("department") ? "red-border" : ""}
            >
              <option value="Select Department">Select Department</option>
              <option value="Department of Information Technology">Department of Information Technology</option>
              <option value="Department of Engineering">Department of Engineering</option>
              <option value="Department of Architecture">Department of Architecture</option>
            </select>
            <label htmlFor="">Username</label>
            <input
              type="email"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={emptyField("username") ? "red-border" : ""}
            />
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={emptyField("password") ? "red-border" : ""}
            />
            <label htmlFor="">Repeat-Password</label>
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              className={emptyField("repeatPassword") ? "red-border" : ""}
            />
    
              <button className='p-2 mt-5 bg-[#577F98] text-white' type="submit">Submit</button>
   
            {error && <div className="text-red-500 text-center">{error}</div>}
            <h2 className='w-full text-center'>Already have an account <span className='text-blue-500'><Link to="/Login">Login</Link></span></h2>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
