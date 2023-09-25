import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  
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
    const {  username, password,} = formData;

    if ( !username || !password) {
      setError("Please put your Username and Password.");
    } else { 
        
      setError("");
      var url = "http://localhost/WhereAbouts/api/login.php"
      var headers = {
        "accept" : "application/json",
        "content-type": "application/json"
      };
      var Data = {
        username: username,
        password: password
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data)
      }).then((response) => response.json())
      .then((response) =>{
        setMsg(response[0].result);
      }).catch((err) => {
        setError(err);
        console.log(err);
      })
      console.log(formData)

      // Perform your form submission logic here
      // If successful, redirect to the login page
     //navigate("/Login");

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
                {error && <div className="text-red-500  text-sm text-center">{error}</div>}
                <button type="submit" className='p-2  w-full mt-5 bg-[#577F98] text-white'>Login</button>
                <h2 className='w-full text-center'>Don't have an account <span className='text-blue-500'><Link to="/Signup">Signup</Link> </span></h2>
            </div>
          </form>
       </div>
    </div>
        </>
    )
}

export default Login;