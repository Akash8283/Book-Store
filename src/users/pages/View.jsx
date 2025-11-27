import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaX } from 'react-icons/fa6'

function View() {
  const [modalStatus,setModalStatus] = useState(false)
  return (
    <>
    <Header/>
     <div className='md:m-10 m-5 '>
      <div className="shadow rounded p-5 bg-gray-100">
        <div className='md:grid grid-cols-4 gap-x-10'>
          {/* image */}
          <div className="col-span-1">
            <img className='w-full' src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="" />
          </div>
          {/* book details column */}
          <div className="col-span-3">
            <div className="flex justify-between mt-5 md:mt-0">
              <h1 className='text-2xl font-black'>Book-Title</h1>
              <button onClick={()=>setModalStatus(true)} className='text-gray-400'><FaEye className='cursor-pointer'/></button>
            </div>
            <p className='text-gray-600 my-3'>Author</p>
            <div className='md:grid grid-cols-3 gap-5 my-10'>
              <p className='font-bold'>Publisher :</p>
              <p className='font-bold'>Languages :</p>
              <p className='font-bold'>No. of Pages :</p>
              <p className='font-bold'>Original Price :</p>
              <p className='font-bold'>ISBN :</p>
              <p className='font-bold'>Category :</p>
              <p className='font-bold'>Seller :</p>
            </div>
            <div className='md:my-10 my-4'>
              <p className='font-bold text-lg'>
                Abstart
              </p>
            </div>
            <div className='flex justify-end'>
              <Link to={'/books'} className='bg-gray-600 px-3 py-2 flex items-center rounded text-white'><FaBackward className='me-2'/> Back</Link>
              <Link to={'/books'} className='bg-green-700 px-3 py-2 flex items-center rounded ms-3 text-white'>Buy $ 25</Link>
            </div>
          </div>
        </div>
      </div>
     </div>
     {/* modal */}
     {
      modalStatus &&
     <div onClick={()=>setModalStatus(false)} className="relative z-10">
      <div className="bg-gray-500/45 fixed inset-0">
        <div className="flex justify-center items-center min-h-screen">
          <div className='bg-white rounded-2xl md:w-250 w-100'>
            {/* modal title */}
              <div className='bg-black text-white p-3 flex justify-between items-center'>
                <h3>Books Images</h3>
                <FaX className='cursor-pointer' onClick={()=>setModalStatus(false)}/>
              </div>
            {/* modal body */}
            <div className='relative p-5'>
              <p className='text-gray-500 flex items-center'><FaCamera className='me-2'/>Camera Clicks of the books in the hand of seller</p>
              {/* books images in row*/}
              <div className='md:flex flex-wrap my-4'>
                <img className='md:w-75 rounded w-25 md:me-2 mb-3 md:mb-0' src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
     }
    <Footer/>
    </>
  )
}

export default View