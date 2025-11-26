import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
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
         <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center '>
           <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
           <h2 className='text-2xl'>Explore Our Latest Collections</h2>
           {/* books row & col */}
           <div className="md:grid grid-cols-4 w-full mt-10">
            {/* duplicate book card div */}
            <div className=" shadow rounded p-3 mx-4 mb-4 md:mb-0">
              <img width={"300px"} height={"300px"} src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="book" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className='text-gray-700 font-bold text-lg'>Author</h3>
                <h4 className='text-lg'>Title</h4>
                <h4>$ Price</h4>
              </div>
            </div>
            {/* duplicate book card div */}
            <div className=" shadow rounded p-3 mx-4 ">
              <img width={"300px"} height={"300px"} src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="book" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className='text-gray-700 font-bold text-lg'>Author</h3>
                <h4 className='text-lg'>Title</h4>
                <h4>$ Price</h4>
              </div>
            </div>
            {/* duplicate book card div */}
            <div className=" shadow rounded p-3 mx-4 mt-5 md:mt-0">
              <img width={"300px"} height={"300px"} src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="book" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className='text-gray-700 font-bold text-lg'>Author</h3>
                <h4 className='text-lg'>Title</h4>
                <h4>$ Price</h4>
              </div>
            </div>
            {/* duplicate book card div */}
            <div className=" shadow rounded p-4 mx-4 mt-5 md:mt-0">
              <img width={"300px"} height={"300px"} src="https://images.pexels.com/photos/17641104/pexels-photo-17641104.jpeg?cs=srgb&dl=pexels-book-hut-440747141-17641104.jpg&fm=jpg" alt="book" />
              <div className='flex justify-center items-center flex-col mt-4'>
                <h3 className='text-gray-700 font-bold text-lg'>Author</h3>
                <h4 className='text-lg'>Title</h4>
                <h4>$ Price</h4>
              </div>
            </div>
           </div>
           {/* all books links */}
           <div className="text-center mt-20">
            <Link to={'/books'} className='shadow p-2 bg-gray-700 text-white'>Explore Molre</Link>
           </div>
         </section>
         {/* author */}
         <section className="md:px-40 p-5 my-5 md:grid grid-cols-2 items-center">
          {/* author content */}
          <div className="text-center">
          <h1 className="text-3xl font-bold">FEATURED AUTHORS</h1>
          <h2 className='text-xl '>Captivates With Every Word </h2>
          <p className='text-justify mt-9'>fiction writer known for his sharp observational style and emotionally grounded storytelling. His work often blends everyday realism with subtle psychological layers, focusing on human relationships, personal conflicts, and the quiet struggles people hide behind their routines.</p>

          <p className='text-justify mt-5'>He began writing short stories during college and later transitioned into full-length novels that explore themes like identity, ambition, and resilience. His books are appreciated for tight pacing, relatable characters, and clear, uncluttered prose.</p>
          </div>
          {/* author image */}
          <div className='p-5 flex justify-center items-center'>
            <img width={"400px"} src="https://media.istockphoto.com/id/1289220781/photo/portrait-of-happy-smiling-woman-at-desk.jpg?s=612x612&w=0&k=20&c=FtC05luuxRpiKRj5F84e2CiPf0h_ZuX6o7o5JwlNaJM=" alt="" />
          </div>
         </section>
         {/* testimony */}
         <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
           <h1 className="text-3xl font-bold">TESIMONY</h1>
           <h2 className='text-2xl'>See What Others Are Saying</h2>
           <div className="my-5 flex justify-center items-center flex-col">
            {/* user image */}
             <img width={"200px"} height={"200px"} style={{borderRadius:"50%"}} src="https://www.hollywoodreporter.com/wp-content/uploads/2021/09/Christopher-Nolan-attends-the-screening-of-2001-A-Space-Odyssey-Getty-H-2021.jpg" alt="" />
             <p className='mt-3'>Christopher Nolan</p>
             <p className='text-justify mt-4'><span className='font-bold me-2'>"Amazing Collection and Easy Navigation!"</span>“I love how simple and smooth the shopping experience is. The categories, reviews, and recommendations helped me find exactly what I was looking for. I’ll definitely be back for more books! My order arrived earlier than expected and the packaging was perfect. The books were in excellent condition, and I even got a discount on my purchase. Highly recommended!”</p>
            {/* feedback */}
           </div>
         </section>
       </div>
      <Footer/>
    </>
  )
}

export default Home