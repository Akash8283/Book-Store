import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
  const [offcanvasStatus,setOffCanvasStatus] = useState(false)
  return (
    <div>
        <button onClick={()=>setOffCanvasStatus(true)} className='flex items-center text-blue-600 border p-2 rounded hover:bg-blue-600 hover:text-white'>Edit <FaEdit className='ms-2'/> </button>
        {/* offcanvas */}
        {
          offcanvasStatus &&
          <div>
            <div className="fixed inset-0 bg-gray-500/55 z-50 w-full h-full">
            <div className="bg-white h-full w-90 z-52 fixed top-0 left-0">
                {/* header */}
                <div className="bg-black p-3 flex justify-between text-white">
                  <h3 className='text-xg'>Update Profile</h3>
                  <button onClick={()=>setOffCanvasStatus(false)}><FaX/></button>
                </div>
                {/* body */}
                <div className='flex justify-center items-center flex-col my-5'>
                  {/* image */}
                  <label htmlFor="uploading">
                    <input type="file" id='uploading' hidden/>
                    <img style={{width:"150px",height:"150px",borderRadius:"50%"}} src="https://www.hollywoodreporter.com/wp-content/uploads/2021/09/Christopher-Nolan-attends-the-screening-of-2001-A-Space-Odyssey-Getty-H-2021.jpg" alt="" />
                  </label>
                  {/* name */}
                  <div className="mt-10 mb-3 w-full px-5">
                    <input type="text" placeholder='Username'className='border border-gray-300 p-2 w-full rounded' />
                  </div>
                  {/* password */}
                  <div className=" mb-3 w-full px-5">
                    <input type="password" placeholder='New Password'className='border border-gray-300 p-2 w-full rounded' />
                  </div>
                  <div className=" mb-3 w-full px-5">
                    <input type="password" placeholder='New Confirm Password'className='border border-gray-300 p-2 w-full rounded' />
                  </div>
                  {/* bio */}
                  <div className=" mb-3 w-full px-5">
                    <input type="text" placeholder='Bio' rows={3} className='border border-gray-300 p-2 w-full rounded' />
                  </div>
                  {/* button */}
                  <div className='mb-3 flex justify-end px-5 w-full mt-5'>
                    <button className='px-3 rounded text-white bg-red-600 py-2 hover:bg-red-700 '>RESET</button>
                    <button className='px-3 rounded text-white bg-green-600 py-2 ms-3 hover:bg-green-800'>UPDATE</button>
                  </div>
                </div>
            </div>
            </div>
        </div>}
    </div>
  )
}

export default Edit