import React from 'react'
import Header from "../components/Header"
import Footer from "../../components/Footer"
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend, IoIosCall } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";

function Contact() {
  return (
    <>
    <Header/>
    <div className='w-full'>
      <div className='text-center m-5 md:px-50 '>
        <h1 className='text-2xl mt-10 font-bold'>Contact US</h1>
        <p className='mt-5 '>We’re here to help with anything from tracking your order and finding the right book to resolving issues or giving personalized recommendations. Feel free to reach out and our team will get back to you quickly. Your reading experience matters to us.</p>
      </div>
      <div className='md:flex items-center md:justify-evenly md:px-50 py-5 '>
        <div className='flex items-center justify-center'>
          <h1 style={{borderRadius:"50%",width:"40px",height:"40px"}} className='bg-gray-400 p-3'><FaLocationDot/></h1>
          <p className='ms-2'>12/45 MG Road,Chennai, <br /> Tamil Nadu</p>
        </div>
        <div className='flex items-center mt-3 md:mt-0 justify-center'>
          <h1 style={{borderRadius:"50%",width:"40px",height:"40px"}} className='bg-gray-400 p-3'><IoCall/></h1>
          <p className='ms-2'>+917764372968</p>
        </div>
        <div className='flex items-center mt-3 md:mt-0 justify-center'>
          <h1 style={{borderRadius:"50%",width:"40px",height:"40px"}} className='bg-gray-400 p-3'><IoIosMailOpen/></h1>
          <p className='ms-2'>akash@gmail.com</p>
        </div>
      </div>
      <div className='md:grid md:grid-cols-2 py-5 md:px-50 w-full  gap-10'>
        <div className='shadow p-5 bg-gray-200 rounded m-8 px-8 py-15 '>
          <h1 className='text-center font-bold'>Send Message</h1>
          <input type="text" className='bg-white rounded  mt-5 ms-1 w-full p-2' placeholder='Name' />
          <input type="text" className='bg-white rounded  mt-5 ms-1 w-full p-2' placeholder='Email ID' />
          <textarea type="text" className='bg-white rounded  mt-5 ms-1 w-full p-2 ' placeholder='Message' />
          <button style={{marginLeft:"3px"}} className='rounded w-full p-2 bg-blue-900 mt-4 flex items-center justify-center text-white'>Send <IoIosSend className='me-2'/></button>
        </div>
        <div >
          <div className="px-8 py-10 mt-5 md:mt-0">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.07885882704!2d80.20867324999999!3d13.04752545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1764228676610!5m2!1sen!2sin" width={"100%"} height={"400px"} style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}

export default Contact