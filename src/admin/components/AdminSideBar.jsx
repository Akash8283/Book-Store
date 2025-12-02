import React from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaGears } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSideBar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit md:flex flex-col text-center'>
      {/* admin image */}
     <div className='my-10 flex justify-center items-center'><img style={{width:"100px",height:"100px",borderRadius:"50%"}}   src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" /></div>
     {/* name */}
     <h1 className='text-xl font-bold mb-5'>name</h1>
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