import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FaEdit, FaPen } from 'react-icons/fa'

function AdminProfile() {
  return (
    <>
      <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        <div className='col-span-1'>
          <AdminSideBar/>
        </div>
      <div className='col-span-4 p-10'>
        <h1 className="text-center my-5 font-bold text-3xl">Settings</h1>
        <div className='md:grid grid-cols-2 items-center mt-10 gap-10'>
          {/* text */}
          <div>
            <h2 className='text-xl font-bold mb-5'>Welcome to the Admin Settings Panel</h2>
            <p className=' mb-5 text-justify'>
              The Site Settings panel lets the store admin control all global configurations of the bookstore platform. It centralizes branding, content, and operational preferences so the manager can update the website without touching the code.
            </p>
            <ul>
              <li><h3 className='font-bold mb-1'>Store Information</h3>
              <p className='mb-2'>Update the bookstore name, tagline, description, contact email, phone number, and business hours.</p></li>
              <li><h3 className='font-bold mb-1'>Branding & Appearance</h3>
              <p className='mb-2'>Upload the store logo, favicon, and choose theme colors to match your brand identity.</p></li>
              <li><h3 className='font-bold mb-1'>Homepage Controls</h3>
              <p className='mb-2'>Manage hero banners, featured categories, and promotional sections displayed on the homepage.</p></li>
              
            </ul>
          </div>
          {/* form */}
          <div className='flex justify-center items-center flex-col  bg-blue-100 p-5 rounded'>
                  {/* image */}
                  <label htmlFor="uploading">
                    <input type="file" id='uploading' hidden/>
                    <img style={{width:"150px",height:"150px",borderRadius:"50%"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                  </label>
                  <button style={{marginTop:"-20px"}} className='bg-blue-500 rounded text-white p-2'><FaPen/></button>
                  {/* name */}
                  <div className="mt-10 mb-3 w-full px-5">
                    <input type="text" placeholder='Username'className='border border-white p-2 w-full rounded' />
                  </div>
                  {/* password */}
                  <div className=" mb-3 w-full px-5">
                    <input type="password" placeholder='New Password'className='border border-white p-2 w-full rounded' />
                  </div>
                  <div className=" mb-3 w-full px-5">
                    <input type="password" placeholder='New Confirm Password'className='border border-white p-2 w-full rounded' />
                  </div>

                  {/* button */}
                  <div className='mb-3 flex justify-end px-5 w-full mt-5'>
                    <button className='px-3 rounded text-white bg-red-600 py-2 hover:bg-red-700 '>RESET</button>
                    <button className='px-3 rounded text-white bg-green-600 py-2 ms-3 hover:bg-green-800'>UPDATE</button>
                  </div>
                </div>
        </div>
        
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default AdminProfile