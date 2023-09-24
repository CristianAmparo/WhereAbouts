import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
import Signup from './Signup'
import Login from './Login'
import Content from './content'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login/>} />
        
        <Route path='/Login'  element={<Login />}/>
        <Route path='/Signup' element={<Signup />}/>
        <Route element={<Content />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
