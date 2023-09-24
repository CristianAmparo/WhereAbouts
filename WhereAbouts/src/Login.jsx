import { Link } from "react-router-dom";
const Login = () => {
    return (
        <>
           
    <div className='w-full h-screen flex items-center justify-center'>
       <div className='bg-[#F4F1E8] w-96 h-96 mx-auto p-10 shadow-2xl rounded-lg'>
          
          <form className='flex flex-col justify-evenly h-full  items-center'  action="">
            <h1 className="-mb-5">WhereAbouts</h1> 
            <div className="flex flex-col w-full ">
                <label htmlFor="" >Username</label>
                <input type="email" placeholder="Type your username"/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Type your password"/>
                <button className='p-2 mt-5 bg-[#577F98] text-white'>Login</button>
                <h2 className='w-full text-center'>Don't have an account <span className='text-blue-500'><Link to="/Signup">Signup</Link> </span></h2>
            </div>
          </form>
       </div>
    </div>
        </>
    )
}

export default Login;