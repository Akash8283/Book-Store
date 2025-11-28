import React from 'react'

function BookStatus() {
  return (
    <div className='shadow p-10 mx-5 my-20 rounded'>
        {/* books div duplicate */}
        <div className="bg-gray-200 p-5 rounded">
            <div className="md:grid grid-cols-[3fr_1fr]">
                <div>
                    <h2 className='text-2xl'>Title</h2>
                    <h3 className='text-xl'>Author</h3>
                    <h4 className='text-lg text-red-500'>$ 50</h4>
                    <p className='text-justify'>Abstract</p>
                    <div className='flex mt-5'>
                    <img width={"160px"} height={'160px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="" />
                    <img width={"120px"} height={'160px'} src="https://www.pngall.com/wp-content/uploads/2/Approved-Stamp.png" alt="" />
                    <img width={"120px"} height={'160px'} src="https://png.pngtree.com/png-vector/20250801/ourmid/pngtree-distressed-red-sold-out-stamp-with-stars-png-image_16958308.webp" alt="" />
                </div>
                </div>
                <div className='px-4 mt-4 md:mt-0'>
                    <img className='w-50' src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="" />
                    <div className='flex justify-end'><button className='bg-red-600 p-2 text-white mt-5'>DELETE</button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookStatus