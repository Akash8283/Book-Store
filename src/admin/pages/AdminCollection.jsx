import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'

function AdminCollection() {

  const [tab,setTab] = useState(1)

  return (
    <>
      <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        <div className='col-span-1'>
          <AdminSideBar/>
        </div>
      <div className='col-span-4 p-5'>
        <h1 className="my-10 text-center text-3xl font-bold">All Collections</h1>
        {/* tab */}
        <div className='flex my-5 justify-center items-center '>
          <p onClick={()=>setTab(1)} className={tab==1?"text-blue-600 border-l border-r border-t border-gray-200 p-3 text-xl":"border-b border-gray-200 text-xl p-3"}>Books</p>
          <p onClick={()=>setTab(2)} className={tab==2?"text-blue-600 border-l border-r border-t border-gray-200 p-3 text-xl":"border-b border-gray-200 text-xl p-3"}>Users</p>
        </div>
        {/* tab contents */}
        {
          tab==1 &&
          <div className='md:grid grid-cols-4 w-full my-5'>
            {/* duplicate book card */}
             <div className=" shadow rounded p-3 mx-4 mb-4 md:mb-0">
              <img width={"300px"} height={"300px"} src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="book" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className='text-gray-700 font-bold text-lg'>Author</h3>
                <h4 className='text-lg'>Title</h4>
                <h4>$ Price</h4>
                <div className='grid mt-3 w-full'><button className='bg-green-700 mt-3 p-3 px-3 rounded text-white cursor-pointer'>APPROVE</button></div>
              </div>
            </div>
            
          </div>
        }
        {
          tab==2 &&
          <div className='md:grid grid-cols-3 w-full my-5'>
            {/* duplicate Users Card */}
            <div className='rounded bg-gray-200 p-1 text-wrap m-2'>
              <p className="text-red-600 font-bold">ID: vefj64tvhh</p>
              <div className='flex items-center text-wrap mt-2'>
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:"50%"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                {/* content */}
                <div className='ms-5'>
                  <h4 className='font-bold text-2xl text-blue-600'>name</h4>
                  <p className=''>akash@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='rounded bg-gray-200 p-1 text-wrap m-2'>
              <p className="text-red-600 font-bold">ID: vefj64tvhh</p>
              <div className='flex items-center text-wrap mt-2'>
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:"50%"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                {/* content */}
                <div className='ms-5'>
                  <h4 className='font-bold text-2xl text-blue-600'>name</h4>
                  <p className=''>akash@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='rounded bg-gray-200 p-1 text-wrap m-2'>
              <p className="text-red-600 font-bold">ID: vefj64tvhh</p>
              <div className='flex items-center text-wrap mt-2'>
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:"50%"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                {/* content */}
                <div className='ms-5'>
                  <h4 className='font-bold text-2xl text-blue-600'>name</h4>
                  <p className=''>akash@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='rounded bg-gray-200 p-1 text-wrap m-2'>
              <p className="text-red-600 font-bold">ID: vefj64tvhh</p>
              <div className='flex items-center text-wrap mt-2'>
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:"50%"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                {/* content */}
                <div className='ms-5'>
                  <h4 className='font-bold text-2xl text-blue-600'>name</h4>
                  <p className=''>akash@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='rounded bg-gray-200 p-1 text-wrap m-2'>
              <p className="text-red-600 font-bold">ID: vefj64tvhh</p>
              <div className='flex items-center text-wrap mt-2'>
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:"50%"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                {/* content */}
                <div className='ms-5'>
                  <h4 className='font-bold text-2xl text-blue-600'>name</h4>
                  <p className=''>akash@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='rounded bg-gray-200 p-1 text-wrap m-2'>
              <p className="text-red-600 font-bold">ID: vefj64tvhh</p>
              <div className='flex items-center text-wrap mt-2'>
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:"50%"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                {/* content */}
                <div className='ms-5'>
                  <h4 className='font-bold text-2xl text-blue-600'>name</h4>
                  <p className=''>akash@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='rounded bg-gray-200 p-1 text-wrap m-2'>
              <p className="text-red-600 font-bold">ID: vefj64tvhh</p>
              <div className='flex items-center text-wrap mt-2'>
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:"50%"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                {/* content */}
                <div className='ms-5'>
                  <h4 className='font-bold text-2xl text-blue-600'>name</h4>
                  <p className=''>akash@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='rounded bg-gray-200 p-1 text-wrap m-2'>
              <p className="text-red-600 font-bold">ID: vefj64tvhh</p>
              <div className='flex items-center text-wrap mt-2'>
                {/* user image */}
                <img width={'80px'} height={'80px'} style={{borderRadius:"50%"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" />
                {/* content */}
                <div className='ms-5'>
                  <h4 className='font-bold text-2xl text-blue-600'>name</h4>
                  <p className=''>akash@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default AdminCollection