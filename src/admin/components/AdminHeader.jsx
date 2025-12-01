import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
      <div className='flex justify-between items-center p-3 md:px-20'>
        {/* logo with title */}
          <div className="flex items-center">
            <img width={'60px'} height={'60px'} src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-open-book-logo-png-image_12467719.png" alt="logo" />
          <h1 className="text-2xl font-bold ms-1 ">BOOKSTORE</h1>
          </div>
        {/* logout */}
        <button className='flex items-center bg-black text-white rounded px-3 py-3 hover:bg-gray-800 hover:text-white '>< FaPowerOff className='me-3'/>LOG OUT</button>
      </div>
      {/* header lower part */}
      <div className='bg-black p-2'>
        <marquee><p className='text-white'>Welocme, Admin! You're all set to manage and monitor the system. Let's get into work!</p></marquee>
      </div>
    </>
    
  )
}

export default AdminHeader