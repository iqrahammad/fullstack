import React from 'react'
import { BrowserRouter  , Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FetchUser from './pages/FetchUser'
import AddUser from './pages/AddUser'



const App = () => {
  return (
    <>
   <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FetchUser/>}></Route>
          <Route path="/adduser" element={<AddUser/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  
  )
}

export default App
