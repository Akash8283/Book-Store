import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoArrowForward } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className='md:grid grid-cols-4 gap-7 bg-black text-white items-cente p-10 px-10 w-full'>
        {/* about */}
        <div>
          <h1 className='font-bold mb-5'>ABOUT</h1>
          <p className='text-justify'>Welcome to our second-hand bookstore a curated space where great stories get a new life. We bring together affordable pre-loved books, from timeless classics and academic titles to modern bestsellers. Our mission is simple: make reading accessible, sustainable, and endlessly enjoyable. </p>
        </div>
        <div className='md:ms-10'>
          <h1 className='font-bold mb-5'>SUBSCRIBE</h1>
          <p>Keep in touch with us ❤️</p>
          <div className='flex items-center'>
            <input className='border-2 border-white bg-white mt-3 placeholder-black text-black p-1' type="text" placeholder='EMAIL ID'/>
            <Link className='bg-gray-500 p-2 mt-3 border-2'><IoArrowForward /></Link>
          </div>
        </div>
        <div>
          <h1 className='font-bold mt-5 md:mt-0 mb-4'>QUICK LINKS</h1>
          <div className='flex flex-col'>
            <a className='' href="">Home</a>
            <a className='mt-2' href="">About US</a>
            <a className='mt-2' href="">Return & Replacement</a>
            <a className='mt-2' href="">Privacy Policy</a>
          </div>
        </div>
       
        <div>
          <h1 className='font-bold mt-5 md:mt-0 mb-3'>SOCIAL</h1> 
          <p >Follow us on our Social Media</p>
          <div className='mt-2 flex gap-3'>
            <FaInstagram/> <FaXTwitter/> <FaYoutube/> <FaFacebook/> <FaWhatsapp/>
            </div>
        </div>
      </div>
      <div className='bg-black text-white text-center py-3'>
        <h3>Copywrit &copy; 2025 All Rights Resrved | This Website is made with 🤍 By Akash </h3>
      </div>
    </div>
  )
}

export default Footer