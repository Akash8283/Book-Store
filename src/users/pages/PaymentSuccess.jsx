import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function PaymentSuccess() {
  return (
    <>
        <Header/>
        <div className='min-h-screen flex justify-center items-center'>
          <div className='md:grid grid-cols-2 gap-10 items-center'>
            <div>
                <h1 className='md:text-4xl text-blue-800 '>Congratulations</h1>
                <h1 className='my-10 '>Thank you for purchasing with BOOKSTORE. Hope you have a good time with us.</h1>
                <Link to={'/books'} className='flex items-center bg-blue-700 p-2 w-60 text-white'><FaBackward className='me-2'/>Explore More Books!!!</Link>
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/0d/e4/1a/0de41a3c5953fba1755ebd416ec109dd.gif" alt="" />
            </div>
          </div>
        </div>
        <Footer/>
    </>
  )
}

export default PaymentSuccess