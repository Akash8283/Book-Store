import React from 'react'
import { createContext } from 'react'

export const routeGuardContext = createContext('')

function AuthContext({children}) {
  return (
    <>
      {children}
    </>
  )
}

export default AuthContext