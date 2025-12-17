import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getAllUserBoughtBooksAPI } from '../../services/allAPI';

function Purchase() {

    const [userBoughtBooks,setUserBoughtBooks] = useState([])
    console.log(userBoughtBooks);

    useEffect(()=>{
        getUserBoughtBooks()
    },[])

    const getUserBoughtBooks = async()=>{
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization" :`Bearer ${token}`
            }
            const result = await getAllUserBoughtBooksAPI(reqHeader)
            if (result.status == 200) {
                setUserBoughtBooks(result.data)
            }
            else{
                console.log(result);
            }
        }
    }
    
  return (
     <div className='shadow p-10 mx-5 my-20 rounded'>
        {/* books div duplicate */}
        {
            userBoughtBooks?.length>0?
             userBoughtBooks?.map(book=>(
                <div key={book?._id} className="bg-gray-200 p-5 rounded">
                    <div className="md:grid grid-cols-[3fr_1fr]">
                        <div>
                            <h2 className='text-2xl'>{book?.title}</h2>
                            <h3 className='text-xl'>{book?.author}</h3>
                            <h4 className='text-lg text-red-500'>$ {book?.price}</h4>
                            <p className='text-justify'>{book?.abstract}</p>
                            <div className='flex mt-5'>
                            {
                                book?.status == "sold"?
                                <img width={"160px"} height={'160px'} src="https://www.onlygfx.com/wp-content/uploads/2017/12/sold-stamp-3.png" alt="" />
                                :
                                <p></p>
                            }
                        </div>
                        </div>
                        <div className='px-4 mt-4 md:mt-0'>
                            <img src={book?.imageURL} alt="" />
                            
                        </div>
                    </div>
                </div>
             ))
            :
            <p className='font-bold text-center'>No Purchase History</p>
        }
    </div>
  )
}

export default Purchase