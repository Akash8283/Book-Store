import React,{useState,useEffect} from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSideBar from '../components/AdminSideBar'
import { FaEdit, FaPen } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import serverURL from '../../services/serverURL'
import { editUserAPI } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';

function AdminProfile() {

  const [userDetails,setUserDetails] = useState({
    id:"",username:"",password:"",role:"",bio:"",picture:""
  })
  const [confirmPassword,setConfirmPassword] = useState("")
  const [existingPicture,setExistingPicture] = useState("")
  const [preview,setPreview] = useState("")
  const [passwordMatch,setPasswordMatch] = useState(true)
  const navigate = useNavigate()

  useEffect(()=>{
      if (sessionStorage.getItem("user")) {
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio})
        setExistingPicture(user.picture)
      }
    },[])

    const handleUploadPicture =(imageFile)=>{
    setUserDetails({...userDetails,picture:imageFile})
    const url = URL.createObjectURL(imageFile)
    setPreview(url)
    }
   
    const checkPasswordMatch =(data)=>{
    setConfirmPassword(data)
    userDetails.password == data? setPasswordMatch(true):setPasswordMatch(false)
    }

    const restForm = ()=>{
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({...userDetails,id:user._id,username:user.username,role:user.role,bio:user.bio,password:""})
    setExistingPicture(user.picture)
    setPreview("")
    setConfirmPassword("")
    setPasswordMatch(true)
    }

    const handleProfileUpdate = async()=>{
         const {username,password,role,id,picture} = userDetails
         if (!username || !password || !confirmPassword) {
          toast.info("Please fill the form completely")
         }
         else{
          const token = sessionStorage.getItem("token")
          if (token) {
            const reqHeader = {
            "Authorization" : `Bearer ${token}`
            }
           const reqBody = new FormData()
           for(let key in userDetails){
            if (key != "picture") {
              reqBody.append(key,userDetails[key])
            }
            else{
              preview? reqBody.append("picture",userDetails.picture):reqBody.append("picture",existingPicture)
            }
           }
           const result = await editUserAPI(id,reqBody,reqHeader)
           if (result.status == 200) {
            toast.success("Profile Updated successfully! Please login with new password!!!")
            setTimeout(()=>{
              navigate('/login')
            },2000)
           }
           else{
            console.log(result);
            toast.error("Something went wrong!!!")
           }
          }
         }
      }

  return (
    <>
      <AdminHeader/>
      <div className='md:grid grid-cols-5'>
        <div className='col-span-1'>
          <AdminSideBar/>
        </div>
      <div className='col-span-4 p-10'>
        <h1 className="text-center my-5 font-bold text-3xl">Settings</h1>
        <div className='md:grid grid-cols-2 items-center mt-10 gap-10'>
          {/* text */}
          <div>
            <h2 className='text-xl font-bold mb-5'>Welcome to the Admin Settings Panel</h2>
            <p className=' mb-5 text-justify'>
              The Site Settings panel lets the store admin control all global configurations of the bookstore platform. It centralizes branding, content, and operational preferences so the manager can update the website without touching the code.
            </p>
            <ul>
              <li><h3 className='font-bold mb-1'>Store Information</h3>
              <p className='mb-2'>Update the bookstore name, tagline, description, contact email, phone number, and business hours.</p></li>
              <li><h3 className='font-bold mb-1'>Branding & Appearance</h3>
              <p className='mb-2'>Upload the store logo, favicon, and choose theme colors to match your brand identity.</p></li>
              <li><h3 className='font-bold mb-1'>Homepage Controls</h3>
              <p className='mb-2'>Manage hero banners, featured categories, and promotional sections displayed on the homepage.</p></li>
              
            </ul>
          </div>
          {/* form */}
          <div className='flex justify-center items-center flex-col  bg-blue-100 p-5 rounded'>
                  {/* image */}
                  <label htmlFor="uploading">
                                      <input onChange={e=>handleUploadPicture(e.target.files[0])} type="file" id='uploading' hidden/>
                                      {
                                        existingPicture ?
                                        <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src={preview?preview:existingPicture.startsWith("https://lh3.googleusercontent.com/")?existingPicture:`${serverURL}/uploads/${existingPicture}`} alt="" />
                                        :
                                        <img style={{width:"100px",height:"100px",borderRadius:"50%"}} src={preview?preview:"https://static.thenounproject.com/png/2532839-200.png"} alt="" />
                                      }
                                    </label>
                  <button style={{marginTop:"-20px"}} className='bg-blue-500 rounded text-white p-2'><FaPen/></button>
                  {/* name */}
                  <div className="mt-10 mb-3 w-full px-5">
                    <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" placeholder='Username'className='border border-gray-300 p-2 w-full rounded' />
                  </div>
                  {/* password */}
                  <div className=" mb-3 w-full px-5">
                    <input value={userDetails.password} onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" placeholder='New Password'className='border border-gray-300 p-2 w-full rounded' />
                  </div>
                  <div className=" mb-3 w-full px-5">
                    <input value={confirmPassword} onChange={e=>checkPasswordMatch(e.target.value)} type="password" placeholder='New Confirm Password'className='border border-gray-300 p-2 w-full rounded' />
                  </div>
                  {!passwordMatch && <div className='mb-3 w-full px-5 font-bold text-red-600 text-xs'>*Confirm password must match with new password</div>}

                  {/* button */}
                  <div className='mb-3 flex justify-end px-5 w-full mt-5'>
                    <button onClick={restForm} className='px-3 rounded text-white bg-red-600 py-2 hover:bg-red-700 '>RESET</button>
                    <button onClick={handleProfileUpdate} className='px-3 rounded text-white bg-green-600 py-2 ms-3 hover:bg-green-800' disabled={!passwordMatch?true:false}>UPDATE</button>
                  </div>
                </div>
        </div>
        
      </div>
      </div>
      <Footer/>
      {/* toast */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
      />
    </>
  )
}

export default AdminProfile