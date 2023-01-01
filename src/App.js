import React, { useState } from 'react'
import '../src/index.css'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Routess from './Components/Routess'

const App = () => {
  const [darkMode,setDarkMode]=useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-amber-200 w-full h-screen'>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Routess/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
