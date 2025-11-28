import React from 'react'
import { FaEdit } from 'react-icons/fa'

function Edit() {
  return (
    <div>
        <button className='flex items-center text-blue-600 border p-2 rounded hover:bg-blue-600 hover:text-white'>Edit <FaEdit className='ms-2'/> </button>
        {/* offcanvas */}
        <div>
            <div className="fixed inset-0 bg-gray-500/55 w-full h-full">
            <div className="bg-white h-full w-90 fixed top-0 left-0">
                {/* header */}
                <div className="bg-black p-3 "></div>
                {/* body */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Edit