import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
function Home() {
  return (
    <>
      <Header/>
       <div>
         {/* landing part - search */}
         <div style={{height:'500px'}} className='flex justify-center items-center flex-col bg-[url(/books2.jpg)] bg-cover bg-center text-white'>
         <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.6)'}} className='flex justify-center items-center flex-col w-full'>
          <h1 className='text-5xl font-bold mb-2'>Wonderful gifts</h1>
          <p>Gift your family and friends a book</p>
          {/* seacrh */}
          <div className='mt-9 flex items-center'>
            <input type="text" className='rounded-3xl bg-white text-2xl text-black w-100 placeholder-gray-500 p-2' placeholder='Search Books Here'/>
            <button className='text-gray-500' style={{marginLeft:"-40px"}}><FaSearch/></button>
          </div>
         </div>
         </div>
         {/* new arrival */}
         <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
           <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
           <h2 className='text-2xl'>Explore Our Latest Collections</h2>
           {/* books row & col */}
         </section>
         {/* author */}
         {/* testimony */}
       </div>
      <Footer/>
    </>
  )
}

export default Home