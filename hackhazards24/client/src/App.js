import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Home from './components/screens/Home'
import Login from './components/screens/Login'
import Signup from './components/screens/Signup'
import Profile from './components/screens/Profile'
import CreatePost from './components/screens/CreatePost'
import Channel from './components/screens/channel'
function App() {
  return (
    <BrowserRouter>
   <Navbar/>
   <Routes> 
   <Route path='/' element={<Home/>} />
   <Route path='/login' element={<Login/>} />
   <Route path='/signup' element={<Signup/>} />
   <Route path='/Profile' element={<Profile/>} />
   <Route path='/createpost' element={<CreatePost/>} />
   <Route path='/createchannel' element={<Channel/>} />


   </Routes>
    </BrowserRouter>
  )
}

export default App