import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { loginAPI, registerAPI } from '../services/allAPI';

function Auth({insideRegister}) {
 const navigate = useNavigate()
 const [viewPassword,setViewPassword] = useState(true)
 // store data from form
 const[userDetails,setUserDetails] = useState({
  username: "",
  email:"",
  password:""
 })
  // console.log(userDetails);
  
  const handleRegister = async (e)=>{
    e.preventDefault()
    const {username,email,password} = userDetails
    if (username && email && password) {
      // toast.success("Registration Completed")
      try{
          const result = await registerAPI(userDetails)
          console.log(result);
          if (result.status==200) {
            toast.success("Registration Completed! Now You Can Login")
            setUserDetails({username: "",email:"",password:""})
            navigate('/login')
          }
          else if(result.status==409){
            toast.warning(result.response.data)
            setUserDetails({username: "",email:"",password:""})
            navigate('/login')
          }
          else{
            console.log(result);
            toast.error("Something went wrong")
            setUserDetails({username: "",email:"",password:""})
          }
      }catch(err){
        console.log(err);
        
      }
    }
    else{
      toast.info("Please fill the form Completely")
    }
  }

  const handleLogin = async (e)=>{
    e.preventDefault()
    const {email,password} = userDetails
    if (email && password) {
      try{
        // api call
        const result = await loginAPI(userDetails)
        console.log(result);        
        if (result.status == 200) {
          toast.success("Login Successfull")
          sessionStorage.setItem("token",result.data.token)
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          setTimeout(()=>{
           if (result.data.user.role == "admin") {
            navigate('/admin/home')
           }
           else{
            navigate('/')
           }
          },2500)
        }
        else if(result.status == 401 || result.status == 404){
          toast.warning(result.response.data)
          setUserDetails({username:"",email:"",password:""})
        }
        else{
          toast.error("Something went wrong!!!")
          setUserDetails({username:"",email:"",password:""})
        }
      }
      catch(err){
        console.log(err);
      }
    }
    else{
      toast.info("Please fill the form completely!!!")
    }
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center flex-col bg-[url(/loginbg.jpg)] bg-cover bg-center'>
      <div className="p-10">
        <h1 className='text-3xl font-bold text-white text-center'>BOOK STORE</h1>
        <div style={{width:"400px"}} className="bg-gray-900 text-white p-5 flex flex-col justify-center items-center my-5 rounded-2xl">
          <div style={{width:"100px",height:"100px",borderRadius:"50%"}} className="border mb-5 flex justify-center items-center">
          <FaUser className='text-3xl'/>
          </div>
          <div>
            <h2 className='text-2xl'>{insideRegister?"Register":"Login"}</h2>
            <form className='my-2 w-full'>
              {/* username */}
             {
              insideRegister &&
              <input value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded ' />
             }
              {/* email */}
              <input value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} type="text" placeholder='Email ID' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5' />
              {/* password */}
              <div className='flex items-center'>
                <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} type={viewPassword?"password":"text"}  placeholder='Password' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-2' />
                { viewPassword?
                  <FaEyeSlash onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{marginLeft:"-30px",marginTop:"-7px"}} />
                  :
                <FaEye onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{marginLeft:"-30px",marginTop:"-7px"}}/>
                }
                
              </div>
              {/* forgot password */}
              

                <div className='flex justify-between mb-5 mt-1'>
                  <p className='text-xs text-orange-300'>Never share your password with others</p>
                  {!insideRegister && <button className='text-xs underline ms-2 cursor-pointer'>Fogot Password</button>}
                </div>

              {/* login/register btn */}
                <div className='text-center mt-3'>
                 {
                  insideRegister ?
                  <button onClick={handleRegister} type='button' className='bg-green-700 p-2 w-full rounded'>Register</button>
                  :
                  <button onClick={handleLogin} type='button' className='bg-green-700 p-2 w-full rounded'>Login</button>
                 }
                </div>
                {/* google authentication */}
                <div className='my-5 text-center'>
                  {
                    insideRegister?
                    <p className='text-blue-500'>Already a User ? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
                    :
                    <p className='text-blue-500'>Are you a new user ? <Link to={'/register'} className='underline ms-5'>Register</Link></p>

                  }
                </div>
            </form>
          </div>

        </div>
      </div>
      {/* toast */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
 />
    </div>
  )
}

export default Auth