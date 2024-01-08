import React from 'react';
import ButtonAppBar from './components/Navbar';
import AboutUs from './components/about/AboutUs';
import ContactUs from './components/contact/ContactUs';
import Rent from './components/rents/Rent';
import Post from './components/posts/Post';
import Sale from './components/sales/Sale';
import Services from './components/servise/Services';
import Report from './components/reports/Report';
import './App.css';
import Login from './components/loginpage/Login';
import Register from './components/registerpage/Register';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import Body from './components/Body';
import Profile from './components/contact/profiles/Profile';
const App = () => {
  return (
<>
  <Router>
      <div>
        <ButtonAppBar />
        <Routes>
           <Route path='/sale' element={<Sale />}></Route>
           <Route path='/rent' element={<Rent />}></Route>
           <Route path='/post' element={<Post />}></Route>
           <Route path='/aboutus' element={<AboutUs />}></Route>
           <Route path='/contactus' element={<ContactUs />}></Route>
           <Route path='/services' element={<Services />}></Route>
           <Route path='/report' element={<Report />}></Route>
           <Route path='/login' element={<Login />}></Route>
           <Route path='/register' element={<Register />}></Route>
           <Route path='/' element={<Body />}></Route>
           <Route path='/profile' element={<Profile />}></Route>
        </Routes>
    </div>
  </Router>
  </>
  )
}

export default App