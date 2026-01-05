import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const routeGuardContext = createContext('')

function AuthContext({children}) {

  const [role,setRole] = useState("")
  const [authorised,setAuthorized] = useState("")

  useEffect(()=>{
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setAuthorized(true)
      setRole(user.role)
    }
  },[authorised,role])

  return (
    <routeGuardContext.Provider value={{role,authorised,setAuthorized}}>
      {children}
    </routeGuardContext.Provider>
  )
}

export default AuthContext