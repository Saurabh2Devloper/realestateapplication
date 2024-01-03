// import React, { useState } from 'react'
// import {Link ,useNavigate} from 'react-router-dom';

// export default function SignUp() {

//     const [formData,setFormData] = useState({})

//     const navigate=useNavigate();
//     const handleChange = (e) =>{
//       setFormData(
//         {
//           ...formData,
//           [e.target.name]:e.target.value
//         }
//       )
//     };

//     const handleSubmit = async (e) => {
//       e.preventDefault();
    
//       try {
//         const res = await fetch("/api/auth/signup", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });
    
//         if (!res.ok) {
//           throw new Error("Failed to sign up");
//         }
    
//         const data = await res.json();
//         console.log("Response Data:", data); 
//         window.alert(" Registration Successfull !! \n Consider Signing In..")
//         setTimeout( navigate("/sign-in"),3000)
       
//       } catch (error) {
//         console.error("Error:", error.message);
//        window.alert(" Please Enter the Valid Details...\n This Error is because of Empty or \n Username and/or Email already Exist  \n\n Try Again with Correct Credentials !")
//       }
//     };
    

//     // console.log(formData);
//   return (
//     <div className='p-3 max-w-lg mx-auto'>
//     <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
//     <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
//       <input placeholder='username' type="text" name="username" id="username" onChange={handleChange} className='border p-3 rounded-lg ' />
//       <input placeholder='email' type="text" name="email" id="email"  onChange={handleChange} className='border p-3 rounded-lg ' />
//       <input placeholder='password' type="password" name="password" id="password"  onChange={handleChange} className='border p-3 rounded-lg ' />
//       <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80' >Sign Up</button>
//     </form>
//     <div className='flex gap-2 mt-5'>
//       <p>Have an Account ?</p>
//       <Link to={"/sign-in"}>
//         <span className='text-blue-700 '>Sign In</span>
//       </Link>
//     </div>
//     </div>
//   )
// }


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';



export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to sign up");
      }

      const data = await res.json();
      console.log("Response Data:", data); 
      setRegistrationSuccess(true);
      setTimeout(() => {
        setRegistrationSuccess(false);
        navigate("/home");
      }, 10000);
    } catch (error) {
      console.error("Error:", error.message);
      setRegistrationError(true);
      setTimeout(() => {
        setRegistrationError(false);
      }, 5000);
    }
  };

  

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-4' >
    
       <input placeholder='email' type="text" name="email" id="email"  onChange={handleChange} className='border p-3 rounded-lg ' />
       <input placeholder='password' type="password" name="password" id="password"  onChange={handleChange} className='border p-3 rounded-lg ' />
   
       {/* <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80' >Sign Up</button> */}
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80'>
          Sign In
        </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont Have an Account ?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700 '>Sign Up</span>
        </Link>
      </div>
      {registrationSuccess && (
        <div style={{ color: 'green', fontWeight: 'bold' ,fontSize:'20px' }}>
         
          Login Successfull! 
          <div>
            <button  className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-80'>
            <Link to={"/"}>
          <span className='text-white-700 '>Visit Home Page</span>
        </Link>
            </button>
          </div>
        </div>
      )}
      {registrationError && (
        <div style={{ color: 'red', fontWeight: 'bold' }}>
          Please Enter Valid Details!  Email or Password  is Incorrect !. Try again with correct credentials.
        </div>
      )}
    </div>
  );
}

