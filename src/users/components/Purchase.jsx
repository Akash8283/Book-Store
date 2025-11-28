import React from 'react'

function Purchase() {
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
                    <img width={"160px"} height={'160px'} src="https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-3.png" alt="" />
                </div>
                </div>
                <div className='px-4 mt-4 md:mt-0'>
                    <img src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="" />
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Purchase