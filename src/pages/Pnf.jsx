import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img src="https://assets.dochipo.com/editor/animations/404-error/34436078-a766-4673-b05a-1a30bdf86537.gif" alt="" />
      <p>Oh No!</p>
      <h2 className='text-5xl'>Looks Like You're Lost</h2>
      <h3 className='mt-2'>The page you are looking is not available</h3>
      <Link to={'/'} className='bg-gray-500 rounded p-2 mt-2 text-white px-3'>Back to Home</Link>
    </div>
  )
}

export default Pnf