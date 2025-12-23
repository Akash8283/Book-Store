import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import SellBook from '../components/SellBook'
import BookStatus from '../components/BookStatus'
import Purchase from '../components/Purchase'
import serverURL from '../../services/serverURL'


function Profile() {
  const [tab,setTab] = useState(1)
  const [dp,setDp] = useState("")
  const [username,setUsername] = useState("")
  console.log(username,dp);
  
  useEffect(()=>{
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUsername(user?.username)
      setDp(user?.picture)
    }
  },[dp])
  return (
    <>
      <Header/>
      {/* black div */}
      <div style={{height:"200px"}} className='bg-black'></div>
      {/* profile image */}
      <div style={{width:"230px",height:"230px",borderRadius:"50%",marginLeft:"70px",marginTop:"-130px"}} className='bg-white p-3'>
        <img style={{width:"200px",height:"200px",borderRadius:"50%"}} src={dp?dp.startsWith("https://lh3.googleusercontent.com/")?dp:`${serverURL}/uploads/${dp}`:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"} alt="" />
      </div>
      {/* name with edit block */}
      <div className='md:flex justify-between items-center md:px-25 px-5 my-5'>
        <h1 className='text-2xl font-bold flex items-center '>{username?username:"Username"} <FaCircleCheck className='text-blue-500 ms-5'/></h1>
        <Edit/>
      </div>
      <p className='text-justify md:px-25 px-5 my-5'>I’m a regular reader who uses this bookstore mainly to discover affordable second-hand books and track my recent purchases. My interests cover fiction, technology, and personal development.I prefer clean UI, fast search results, and personalized recommendations that actually reflect my reading history—not random suggestions. I usually browse during late evenings, so a dark mode option is useful. I expect quick order updates, reliable delivery timelines, and a simple return/refund flow without unnecessary steps.</p>

      {/* tabs with contents */}
      <div className='md:px-40'>
        <div className='flex justify-center items-center my-8 font-medium text-lg'>
          <p onClick={()=>setTab(1)} className={tab==1?'text-blue-600 border-gray-200 border-t border-r border-l p-4 cursor-pointer':' border-gray-200 border-b p-4 cursor-pointer'}>Sell Books</p>
          <p onClick={()=>setTab(2)} className={tab==2?'text-blue-600 border-gray-200 border-t border-r border-l p-4 cursor-pointer':' border-gray-200 border-b p-4 cursor-pointer'}>Book Status</p>
          <p onClick={()=>setTab(3)} className={tab==3?'text-blue-600 border-gray-200 border-t border-r border-l p-4 cursor-pointer':' border-gray-200 border-b p-4 cursor-pointer'}>Purchase History</p>
        </div>
        {/* contents */}
          {
            tab==1 &&
            <SellBook/>
           }
          {
            tab==2 &&
            <BookStatus/>
          }
          {
          tab==3 && 
          <Purchase/>
          }
      </div>
      <Footer/>
    </>
  )
}

export default Profile