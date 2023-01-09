import React from 'react'
import {Routes, Route,Navigate} from 'react-router-dom'
import Results from './Results'

const Routess = () => {
  // <Route exact path='/' element={<Navigate replace to='/search'/>}/>

  return (
    <div>
      <Routes>
        <Route path='/' element={<Results/>}/>
        <Route path='/videos' element={<Results/>}/>
        <Route path='/news' element={<Results/>}/>
        <Route path='/images' element={<Results/>}/>
      </Routes>
    </div>
  )
}

export default Routess
