import React, { useState } from 'react'
import { FaBars, FaInstagram, FaUser, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  const [listStaus,setListStatus] = useState(false)

  const menuVBtnClick =()=>{
    setListStatus(!listStaus)
  }

  return (
    <>
    {/* header upper part - title & login */}
    <div className='grid grid-cols-3 p-2'>
      {/* logo with titile */}
      <div className="flex items-center">
        <img width={'60px'} height={'60px'} src="https://png.pngtree.com/png-vector/20240515/ourmid/pngtree-open-book-logo-png-image_12467719.png" alt="logo" />
        <h1 className="text-2xl font-bold ms-1 md:hidden">BOOKSTORE</h1>
      </div>
      {/* title */}
      <div className='md:flex justify-center items-center hidden'>
        <h1 className='text-3xl font-bold'>BOOKSTORE</h1>
      </div>
      {/* login */}
      <div className='md:flex justify-end items-center hidden'>
        <FaInstagram/>
        <FaYoutube className='mx-2'/>
        <FaXTwitter/>
        <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/> Login</Link>
      </div>
    </div>
    {/* header lower part - links & menu + login btn */}
    <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
      {/* div - menu bar & login btn in mobile screen */}
      <div className='flex justify-between items-center text-2xl md:hidden'>
        {/* menu bar btn */}
        <button onClick={menuVBtnClick}><FaBars/></button>
        {/* login link */}
         <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-white hover:text-black flex items-center'><FaUser className='me-1'/> Login</Link>
      </div>
      {/* ul links */}
      <ul className={listStaus?"flex flex-col":"md:flex justify-center hidden"}>
        <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'} >HOME</Link></li>
        <li className='md:mx-4 my-3 md:my-0'><Link to={'/books'} >BOOKS</Link></li>
        <li className='md:mx-4 mb-3 md:mb-0'><Link to={'/contact'} >CONTACT</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Header