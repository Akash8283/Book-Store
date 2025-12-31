import React from 'react'
import { FaBackward } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../../components/Footer'

function PaymentError() {
  return (
    <>
    <Header/>
        <div className='min-h-screen flex justify-center items-center'>
          <div className='md:grid grid-cols-2 gap-10 items-center'>
            <div>
                <h1 className='md:text-4xl text-red-800 '>Sorry!!! Payment Failed...</h1>
                <h1 className='my-10'>We Applogize for the inconviene caused and appreciate you visit to Bookstore...</h1>
                <Link to={'/books'} className='flex items-center bg-red-700 p-2 w-60 text-white'><FaBackward className='me-2'/>Explore More Books!!!</Link>
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/9d/16/7e/9d167e72839894c971c90f60ab00d916.gif" alt="" />
            </div>
          </div>
        </div>
    <Footer/></>
  )
}

export default PaymentError