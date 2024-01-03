import React from "react";
import {GoogleAuthProvider,getAuth} from 'firebase/auth';
import {app} from '../firebase'
import {signInWithPopup} from 'firebase/auth';
import  {useNavigate} from 'react-router-dom';
   
export default function OAuth(){
  const navigate=useNavigate();
  const handleGoogleClick= async ()=>{
    try{
      const provider=new GoogleAuthProvider();
      const auth=getAuth(app)

      const result=await signInWithPopup(auth,provider)
      // console.log(result)
      const res = await fetch("api/auth/google",{
        method : "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify({
          name:result.user.displayName,
          email:result.user.email,
          photo:result.user.photoURL,
        })
      }) 

      const data=await res.data;
      console.log(data);
      navigate("/");
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <button className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 " type='button' onClick={handleGoogleClick}>Continue With Google</button>
  )
}