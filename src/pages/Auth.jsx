import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({insideRegister}) {
 const [viewPassword,setViewPassword] = useState(false)


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
             {
              insideRegister &&
              <input type="text" placeholder='Username' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded ' />
             }
              {/* email */}
              <input type="text" placeholder='Email ID' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded my-5' />
              {/* password */}
              <div className='flex items-center'>
                <input type={viewPassword?"password":"text"}  placeholder='Password' className='bg-white text-black placeholder-gray-400 w-full p-2 rounded mb-2' />
                { viewPassword?
                  <FaEyeSlash onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{marginLeft:"-30px",marginTop:"-7px"}} />
                  :
                <FaEye onClick={()=>setViewPassword(!viewPassword)} className='text-gray-400 cursor-pointer' style={{marginLeft:"-30px",marginTop:"-7px"}}/>
                }
                
              </div>
              {/* forgot password */}
              {
                !insideRegister &&
                <div className='flex justify-between mb-5 mt-1'>
                  <p className='text-xs text-orange-300'>Never share your password with others</p>
                  <button className='text-xs underline ms-2'>Fogot Password</button>
                </div>
              }
              {/* login/register btn */}
                <div className='text-center mt-3'>
                 {
                  insideRegister ?
                  <button type='button' className='bg-green-700 p-2 w-full rounded'>Register</button>
                  :
                  <button type='button' className='bg-green-700 p-2 w-full rounded'>Login</button>
                 }
                </div>
                {/* google authentication */}
                <div className='my-5 text-center'>
                  {
                    insideRegister?
                    <p className='text-blue-500'>Are you a user ? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
                    :
                    <p className='text-blue-500'>Are you a new user ? <Link to={'/register'} className='underline ms-5'>Register</Link></p>

                  }
                </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Auth