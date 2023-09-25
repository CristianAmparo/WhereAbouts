import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
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
    const { username, password } = formData;

    if (!username || !password) {
      setError("Please enter both username and password.");
    } else {
      setLoading(true); // Show loading indicator while making the API request

      const url = "http://localhost/WhereAbouts/api/login.php";
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
      };
      const data = {
        username: username,
        password: password,
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          setLoading(false); // Hide loading indicator
          if (response[0].result === "Login Successfully") {
            setSuccess("Login successful.");
         
            setError(""); // Clear any previous errors
            
            navigate("/Content"); // Redirect to the content page on success
          } else {
            setError("Invalid username or password.");
            setSuccess("");
          }
        })
        .catch((err) => {
          setLoading(false); // Hide loading indicator
          setError("An error occurred. Please try again later.");
          setSuccess("");
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
       <div className='bg-[#F4F1E8] w-96 h-96 mx-auto p-10 shadow-2xl rounded-lg'>
          
          <form onSubmit={handleSubmit} className='flex flex-col justify-evenly h-full  items-center'  action="">
            <h1 className="-mb-5">WhereAbouts</h1> 
            <div className="flex flex-col w-full ">
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
                {error && <div className="text-red-500 -mb-3 mt-3 text-sm text-center">{error}</div>}
                {success && <div className="text-green-500 -mb-3 mt-3  text-sm text-center">{success}</div>}

                <button type="submit" className='p-2  w-full mt-5 bg-[#577F98] text-white'>Login</button>
                <h2 className='w-full text-center'>Don't have an account <span className='text-blue-500'><Link to="/Signup">Signup</Link> </span></h2>
            </div>
          </form>
       </div>
    </div>
        </>
    )



};
export default Login;