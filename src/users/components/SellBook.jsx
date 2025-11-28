import React from 'react'

function SellBook() {
  return (
    <div className='p-10 my-20 mx-5 bg-gray-200'>
        <h1 className='text-center  font-bold text-3xl'>Book Details</h1>
        <div className='md:grid grid-cols-2 mt-10 w-full'>
            <div className='px-3'>
                <div className="mb-3">
                    <input placeholder='Book Title' className='p-2 bg-white w-full rounded' type="text" />
                </div>
                <div className="mb-3">
                    <input placeholder='Author' className='p-2 bg-white w-full rounded' type="text" />
                </div>
                <div className="mb-3">
                    <input placeholder='No. of Pages' className='p-2 bg-white w-full rounded' type="text" />
                </div>
                <div className="mb-3">
                    <input placeholder='Original Price' className='p-2 bg-white w-full rounded' type="text" />
                </div>
                <div className="mb-3">
                    <input placeholder='Discount Price' className='p-2 bg-white w-full rounded' type="text" />
                </div>
                <div className="mb-3">
                    <input placeholder='Image URL' className='p-2 bg-white w-full rounded' type="text" />
                </div>
                <div className="mb-3">
                    <textarea placeholder='Book Abstract' className='p-2 bg-white w-full rounded ' type="text" />
                </div>
            </div>

            <div className='px-3'>
                <div className="mb-3">
                    <input placeholder='Language' className='p-2 bg-white w-full rounded' type="text" />
                </div>
                <div className="mb-3">
                    <input placeholder='Publisher' className='p-2 bg-white w-full rounded' type="text" />
                </div>
                <div className="mb-3">
                    <input placeholder='ISBN' className='p-2 bg-white w-full rounded' type="text" />
                </div>
                <div className="mb-3">
                    <input placeholder='Category' className='p-2 bg-white w-full rounded ' type="text" />
                </div>
                <div className='mb-3 flex justify-center items-center mt-10'>
                    <label htmlFor="uploading">
                        <input type="file" id='uploading' hidden/>
                        <img width={"200px"} src="https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Image-Background-PNG-Image.png" alt="" />
                    </label>
                </div>
            </div>
        </div>
        <div className="flex justify-end">
            <button className='bg-gray-500 text-white p-2 rounded me-5 hover:bg-white hover:text-gray-800'>RESET</button>
            <button className='bg-green-800 text-white p-2 rounded  hover:bg-white hover:text-gray-800'>SUBMIT</button>
        </div>
    </div>
  )
}

export default SellBook