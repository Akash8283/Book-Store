import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {
  const [showCategoryList,SetShowCategoryList] = useState(false)
  const [token,setToken] = useState("")  
  
  useEffect(()=>{
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
    }
  },[token])

  return (
    <>
     <Header/>
     {/* login - book page */}
     {
      token?
      <>
        {/* books page with view */}
        <div className='flex flex-col justify-center items-center my-5'>
          {/* collection */}
          <h1 className='text-3xl font-bold my-5'>All Books</h1>
          <div className='flex my-5'>
            <input type="text" placeholder='Search Bt Title' className='border border-gray-400 w-100 p-2'/>
            <button className='bg-black p-2 text-white'>Search</button>
          </div>
          {/* book row */}
        </div>

         {/* books & filter row */}
          <div className='md:grid grid-cols-4 md:px-20 p-5 mb-10'>
            {/* filter - title */}
            <div className='col-span-1'>
              <div className='flex justify-between'>
                <h1 className='text-2xl font-semibold'>Filter</h1>
                <button onClick={()=>SetShowCategoryList(!showCategoryList)} className='text-2xl md:hidden'><FaBars/></button>
              </div>
              {/* filter option */}
              <div className={showCategoryList?"block":'md:block hidden '}>
                {/* category-1 */}
                 <div className='mt-3'>
                   <input type="radio" name='filter' id='all' />
                   <label className='ms-3' htmlFor="all">All</label>
                 </div>
                 {/* book category last */}
                 <div className='mt-3'>
                   <input type="radio" name='filter' id='demo' />
                   <label className='ms-3' htmlFor="demo ">Category Name</label>
                 </div>
              </div>
            </div>
            {/* book row */}
            <div className="col-span-3">
              <div className="md:grid grid-cols-4 mt-5 md:mt-0">
                {/* book card div1 */}
                <div className=" shadow rounded p-3 mx-4 mb-4 md:mb-0">
                  <img width={"300px"} height={"300px"} src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="book" />
                  <div className='flex justify-center items-center flex-col mt-4'>
                    <h3 className='text-gray-700 font-bold text-lg'>Author</h3>
                    <h4 className='text-lg'>Title</h4>
                    <Link to={'/books/id/view'} className='px-5 py-2 bg-black mt-2 text-white'>View</Link>
                  </div>
                </div>
                {/* book card div1 */}
                <div className=" shadow rounded p-3 mx-4 mb-4 md:mb-0">
                  <img width={"300px"} height={"300px"} src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="book" />
                  <div className='flex justify-center items-center flex-col mt-4'>
                    <h3 className='text-gray-700 font-bold text-lg'>Author</h3>
                    <h4 className='text-lg'>Title</h4>
                    <Link to={'/books/id/view'} className='px-5 py-2 bg-black mt-2 text-white'>View</Link>
                  </div>
                </div>
                {/* book card div1 */}
                <div className=" shadow rounded p-3 mx-4 mb-4 md:mb-0">
                  <img width={"300px"} height={"300px"} src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="book" />
                  <div className='flex justify-center items-center flex-col mt-4'>
                    <h3 className='text-gray-700 font-bold text-lg'>Author</h3>
                    <h4 className='text-lg'>Title</h4>
                    <Link to={'/books/id/view'} className='px-5 py-2 bg-black mt-2 text-white'>View</Link>
                  </div>
                </div>
                {/* book card div1 */}
                <div className=" shadow rounded p-3 mx-4 mb-4 md:mb-0">
                  <img width={"300px"} height={"300px"} src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="book" />
                  <div className='flex justify-center items-center flex-col mt-4'>
                    <h3 className='text-gray-700 font-bold text-lg'>Author</h3>
                    <h4 className='text-lg'>Title</h4>
                    <Link to={'/books/id/view'} className='px-5 py-2 bg-black mt-2 text-white'>View</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </>
      :
     <div className='w-full h-screen flex items-center flex-col justify-center'>
     {/* not login book page */}
     <img width={"30%"} src="https://cdn-icons-gif.flaticon.com/7920/7920895.gif" alt="lock screen" />
     <p className=" text-xl font-bold my-5">Please <Link className='text-blue-700 underline' to={'/login'}>Login</Link> To Explore</p>
     </div>
      }

     <Footer/>
    </>
  )
}

export default Books