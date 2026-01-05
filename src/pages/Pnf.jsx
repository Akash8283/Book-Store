import React, { useContext } from 'react'
import { routeGuardContext } from '../contextAPI/AuthContext'
import { useNavigate } from 'react-router-dom'

function Pnf() {

  const {role,authorised} = useContext(routeGuardContext)
  const navigate = useNavigate()
  const backHome = ()=>{
    if (authorised) {
      role=='user'?navigate('/'):navigate('/admin/home')
    }
    else{
      navigate('/')
    }
  }
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img src="https://assets.dochipo.com/editor/animations/404-error/34436078-a766-4673-b05a-1a30bdf86537.gif" alt="" />
      <p>Oh No!</p>
      <h2 className='text-5xl'>Looks Like You're Lost</h2>
      <h3 className='mt-2'>The page you are looking is not available</h3>
      <button onClick={backHome} className='bg-gray-500 rounded p-2 mt-2 text-white px-3'>Back to Home</button>
    </div>
  )
}

export default Pnf