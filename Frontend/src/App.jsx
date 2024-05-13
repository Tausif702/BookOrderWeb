import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Book from './books/Book'
import Signup from './Components/Signup'
import toast, {Toaster} from 'react-hot-toast'
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/book' element={authUser ?<Book/>: <Navigate to="/" />}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        <Toaster
         position="top-center"
         reverseOrder={false}/>
      </div>
    </>
  )
}

export default App
