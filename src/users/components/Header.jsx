import React, { useState } from 'react'
import { useEffect } from 'react'
import { FaBars, FaInstagram, FaPowerOff, FaUser, FaYoutube } from 'react-icons/fa'
import { FaAddressCard, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
  const [listStaus,setListStatus] = useState(false)
  const [dp,setDp] = useState("")
  const [token,setToken] = useState("")
  const [dropdown,setDropdown] = useState(false)
  
  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      const usertoken = sessionStorage.getItem("user")
      setToken(usertoken)
      const user =JSON.parse(sessionStorage.getItem("user"))
      setDp(user.picture)
    }
  },[token])

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
        {/* login btn */}
        {
          !token?
          <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/> Login</Link>
          :
          <div className='relative inline-block text-left ms-2'>
            <button onClick={()=>setDropdown(!dropdown)} className='w-full bg-white px-3 py-3 shadow hover:bg-gray-50'>
              <img width={"40px"} height={"40px"} style={{borderRadius:"50%"}} src={dp?dp:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"} alt="" />
            </button>
            {
              dropdown &&
              <div className='absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5'>
              <Link to={'/user/profile'} className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>
              <button className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
            </div>}
          </div>
          }
      </div>
    </div>
    {/* header lower part - links & menu + login btn */}
    <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
      {/* div - menu bar & login btn in mobile screen */}
      <div className='flex justify-between items-center text-2xl md:hidden'>
        {/* menu bar btn */}
        <button onClick={menuVBtnClick}><FaBars/></button>
        {/* login link */}
         {
          !token?
          <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/> Login</Link>
          :
          <div className='relative inline-block text-left ms-2'>
            <button onClick={()=>setDropdown(!dropdown)} className='w-full bg-white px-3 py-3 shadow hover:bg-gray-50'>
              <img width={"40px"} height={"40px"} style={{borderRadius:"50%"}} src={dp?dp:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"} alt="" />
            </button>
            {
              dropdown &&
              <div className='absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5'>
              <Link to={'/user/profile'} className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/>Profile</Link>
              <button className=' px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/>Logout</button>
            </div>}
          </div>
          }
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