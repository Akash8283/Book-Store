import React, { useState,useEffect } from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import serverURL from '../../services/serverURL'

function AdminSideBar() {

  const [dp,setDp] = useState("")
  const [username,setUsername] = useState("")

  useEffect(()=>{
      if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUsername(user?.username)
        setDp(user?.picture)
      }
    },[])

  return (
    <div className='bg-blue-100 md:min-h-screen h-fit md:flex flex-col text-center'>
      {/* admin image */}
     <div className='my-10 flex justify-center items-center'><img style={{width:"100px",height:"100px",borderRadius:"50%"}}   src={dp?dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${serverURL}/uploads/${dp}`:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"} alt="" /></div>
     {/* name */}
     <h1 className='text-xl font-bold mb-5'>{username}</h1>
     {/* links */}
     <div className='mt-10 flex flex-col justify-center items-center'>
      <div className="mb-3">
        <Link to={'/admin/home'} className='flex items-center'><FaHome className='me-2'/>Dasboard</Link>
      </div>
      <div className="mb-3">
        <Link to={'/admin/resources'} className='flex items-center'><FaBookReader className='me-2'/>Resources</Link>
      </div>
      <div className="mb-3">
        <Link to={'/admin/profile'} className='flex items-center'><FaGears className='me-2'/>Settings</Link>
      </div>
     </div>
    </div>
  )
}

export default AdminSideBar