import commonAPI from "./commonAPI"
import serverURL from "./serverURL"


//register api : called by auth component when register btn clicked
export const registerAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/register`,userDetails)
}

//login api : called by auth component when login btn clicked
export const loginAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/login`,userDetails)
}

//google/sign-in googlelogin api : called by auth component when login btn clicked
export const googleLoginAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}

// /user/book/add - addbook api : called by  sellbook component when add book btn click
export const addBookAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/user/book/add`,reqBody,reqHeader)
}

// homepage book - called by home component when page load
export const getHomePageBookAPI = async()=>{
    return await commonAPI("GET",`${serverURL}/books/home`,{})
}

// /books/all : bookpage api : called by books component when page loads - authorised user
export const getAllBooksPageAPI = async(reqHeader,searchKey)=>{
    return await commonAPI("GET",`${serverURL}/books/all?search=${searchKey}`,{},reqHeader)
}

// /user-books/all : called by bookstatus api when page load
export const getAllUserBooksAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}

// /user-books/all : called by bookstatus api when page load
export const getAllUserBoughtBooksAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-books/bought`,{},reqHeader)
}

// /books/:id/view : get request by view when page loads
export const getUserBookViewAPI = async(reqHeader,id)=>{
    return await commonAPI("GET",`${serverURL}/books/${id}/view`,{},reqHeader)
}

// /user/:id/edit : put request by Edit component whrn update btn click
export const editUserAPI = async(id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
}

// /admin-books/all : admin bookpage api : called by admincollection component when page loads - authorised admin
export const getAllAdminBooksAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/admin-books/all`,{},reqHeader)
}

// /admin-users/all : admin userpage api : called by admincollection component when tab 2 is open - authorised admin
export const getAllAdminUsersAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/admin-users/all`,{},reqHeader)
}

// /books/:id/update : PUT request by adminCollection when approved btn clicked
export const updateBookStatusAPI = async(id,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/books/${id}/update`,{},reqHeader)
}

// /books/:id : Deleter request by bookstatus when delete btn clicked
export const removeBookAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${serverURL}/books/${id}`,{},reqHeader)
}