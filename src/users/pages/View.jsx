import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { FaX } from 'react-icons/fa6'
import { getUserBookViewAPI, purchaseBookAPI } from '../../services/allAPI'
import { useEffect } from 'react'
import serverURL from '../../services/serverURL'
import {loadStripe} from '@stripe/stripe-js';

function View() {
  const [modalStatus,setModalStatus] = useState(false)
  const [viewBook,setViewBook] = useState({})
  const {id} = useParams()
  // console.log(id);
  console.log(viewBook);

  useEffect(()=>{
    getUserViewBook()
  },[])

  const getUserViewBook = async()=>{
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      const result = await getUserBookViewAPI(reqHeader,id)
      // console.log(result)
      if (result.status == 200) {
        setViewBook(result.data)
      }
      else{
        console.log(result);
      }
      }
  }

  const makePayement = async()=>{
    // 
     const stripe = await loadStripe('pk_test_51SkJG37xckAV42zPyXA3pf86gLxKUGD738rlJgE2SwXpwl7CIzk2yT4ir9B6qdqccsMiL6rF7rtqDRjN9Z8h1UDD00fRzsNGsf')
    //  api call for checkout
    const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
        "Authorization" : `Bearer ${token}`
      }
      const result = await purchaseBookAPI(id,reqHeader)
      if (result.status == 200) {
        const {checkoutURL} = result.data
        window.location.href = checkoutURL
      }
      else{
        console.log(result);
      }
  }
}

  return (
    <>
    <Header/>
     <div className='md:m-10 m-5 '>
      <div className="shadow rounded p-5 bg-gray-100">

            <div key={viewBook?._id} className='md:grid grid-cols-4 gap-x-10'>
          {/* image */}
          <div className="col-span-1">
            <img className='w-full' src={viewBook?.imageURL} alt="" />
          </div>
          {/* book details column */}
          <div className="col-span-3">
            <div className="flex justify-between mt-5 md:mt-0">
              <h1 className='text-2xl font-black'>{viewBook?.title}</h1>
              <button onClick={()=>setModalStatus(true)} className='text-gray-400'><FaEye className='cursor-pointer'/></button>
            </div>
            <p className='text-gray-600 my-3'>- {viewBook?.author}</p>
            <div className='md:grid grid-cols-3 gap-5 my-10'>
              <p className='font-bold'>Publisher : {viewBook?.publisher}</p>
              <p className='font-bold'>Languages : {viewBook?.language}</p>
              <p className='font-bold'>No. of Pages : {viewBook?.pages}</p>
              <p className='font-bold'>Original Price : {viewBook?.price}</p>
              <p className='font-bold'>ISBN : {viewBook?.isbn}</p>
              <p className='font-bold'>Category : {viewBook?.category}</p>
              <p className='font-bold'>Seller : {viewBook?.sellerMail}</p>
            </div>
            <div className='md:my-10 my-4'>
              <p className='font-bold text-lg'>
                {viewBook?.abstract}
              </p>
            </div>
            <div className='flex justify-end'>
              <Link to={'/books'} className='bg-gray-600 px-3 py-2 flex items-center rounded text-white'><FaBackward className='me-2'/> Back</Link>
              <button onClick={makePayement} className='bg-green-700 px-3 py-2 flex items-center rounded ms-3 text-white'>Buy $ 25</button>
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
              <p className='text-gray-500 flex items-center'><FaCamera className='me-2'/>Camera Clicks of the books </p>
              {/* books images in row*/}
              <div className='md:flex flex-wrap my-4'>
                {
                  viewBook?.uploadImages?.map(filename=>(
                    <img key={filename} className='md:w-75 rounded w-25 md:me-2 mb-3 md:mb-0' src={`${serverURL}/uploads/${filename}`} alt="" />
                  ))
                }
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